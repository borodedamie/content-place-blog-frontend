import { useState, useEffect } from 'react';
import Readmore from '../assets/readMore.png';
import PagArrow from '../assets/ArrowPag.png';
import { useNavigate } from 'react-router-dom';

interface Image {
    filename: string;
    height: number;
    id: string;
    size: number;
    thumbnails: {
        small: {
            url: string;
            width: number;
            height: number;
        };
        large: {
            url: string;
            width: number;
            height: number;
        };
        full: {
            url: string;
            width: number;
            height: number;
        };
    };
    type: string;
    url: string;
    width: number;
}

interface Article {
    id: string;
    createdTime: string;
    fields: {
        'Created At': string;
        Title: string;
        Headline: string;
        Body: string;
        'Name (from Categories)': string[];
        Categories: string[];
        Comments?: string[];
        Image?: Image[];
    };
}

interface ArticlesResponse {
    records: Article[];
    offset?: string;
}

function Posts() {
    const [articles, setArticles] = useState<Article[]>([]);
    const navigate = useNavigate()

    function formatDate(date: string) {
        const now = new Date();
        const createdDate = new Date(Date.parse(date));
        const difference = createdDate.getTime() - now.getTime();

        const minutes = Math.floor(difference / (1000 * 60));
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (minutes < 60) {
            return `Posted ${minutes} mins ago`;
        } else if (hours < 24) {
            return `Posted ${hours} hours ago`;
        } else {
            return `Posted ${days} days ago`;
        }
    };

    console.log(formatDate("2023-07-24T13:14:36.000Z"))

    async function fetchArticles(pageSize = 6, offset?: string): Promise<ArticlesResponse> {
        const url = `${import.meta.env.VITE_API_URL}/articles`;
        const params = new URLSearchParams({ page_size: pageSize.toString() });
        if (offset) {
            params.append('offset', offset);
        }

        const response = await fetch(`${url}?${params.toString()}`);
        const data = await response.json();
        return data as ArticlesResponse;
    }


    useEffect(() => {
        fetchArticles().then(data => {
            console.log(data.records)
            setArticles(data.records);
        });
    }, []);

    return (
        <section className="blog-news">
            <div className="container">
                <div className="row gx-5 row-cols-1 row-cols-md-2 se">

                    {articles.map(article => (
                        <div className="col mb-4 h-100" key={article.id}>
                            <div className="card border-0">
                                <img
                                    src={article.fields.Image && article.fields.Image.length > 0 ? article.fields.Image[0].url : ''}
                                    alt="Icon"
                                    className="blog-img-d"
                                />

                                <div className="card-body blog-preview">
                                    <div className="row">
                                        <h5 className="card-title" id="blog-head">{article.fields['Name (from Categories)'][0]}</h5>
                                        <h3 className="card-title" id="blog-head2">{article.fields.Title}</h3>
                                        <p className="card-text blog-info">{article.fields.Headline}</p>
                                        <div className="d-flex flex-column flex-lg-row justify-content-between">
                                            <div className="more-info" onClick={ () => navigate(`article/${article.id}`)}><a className="text-decoration-none">
                                                <p>Read More<span><img src={Readmore} alt="" /></span></p>
                                            </a></div>
                                            <div className="post-time">
                                                <p>Posted 30 mins ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="pagination">
                    <ul className='pag-number'>
                        <li><img src={PagArrow} className='prev-arrow' alt="" /></li>
                        <li className='numb active'>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>......</li>
                        <li>20</li>
                        <li><img src={PagArrow} alt="" /></li>

                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Posts;