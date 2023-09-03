import { useState, useEffect } from 'react';
import Readmore from '../assets/readMore.png';
import PagArrow from '../assets/ArrowPag.png';
import { useNavigate } from 'react-router-dom';
import { formatRelativeTime } from '../util/ConvertDateTime';

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
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageStart, setPageStart] = useState(1);
    const [pageEnd, setPageEnd] = useState(3);
    const pageSize = 6;
    const maxPages = 100;
    // const [offset, setOffset] = useState<string | undefined>(undefined);
    const navigate = useNavigate();
    const [allArticles, setAllArticles] = useState<Article[]>([]);

    // async function fetchArticles(pageSize = 6, offset?: string): Promise<ArticlesResponse> {
    //     const url = `${import.meta.env.VITE_API_URL}/articles`;
    //     const params = new URLSearchParams({ page_size: pageSize.toString() });
    //     if (offset) {
    //         params.append('offset', offset);
    //     }

    //     const response = await fetch(`${url}?${params.toString()}`);
    //     const data = await response.json();
    //     return data as ArticlesResponse;
    // }

    async function fetchAllArticles(): Promise<ArticlesResponse> {
        const url = `${import.meta.env.VITE_API_URL}/articles`;
        const response = await fetch(url);
        const data = await response.json();
        return data as ArticlesResponse;
    }

    // useEffect(() => {
    //     setLoading(true);
    //     fetchArticles(pageSize).then(data => {
    //         setArticles(data.records);
    //         setLoading(false);
    //     });
    // }, []);

    useEffect(() => {
        setLoading(true);
        fetchAllArticles().then(data => {
            setAllArticles(data.records);
            // Slice the allArticles array to get the first set of 6 records
            const firstRecords = data.records.slice(0, pageSize);
            setArticles(firstRecords);
            setLoading(false);
        });
    }, []);


    // const handleClick = (pageNumber: number) => {
    //     setCurrentPage(pageNumber);
    //     fetchArticles(pageSize, offset).then(data => {
    //         setArticles(data.records);
    //         setOffset(data.offset);
    //     });
    // }

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Calculate the start and end index based on the page number and page size
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        // Slice the allArticles array to get the records for the current page
        const currentRecords = allArticles.slice(startIndex, endIndex);
        setArticles(currentRecords);
    }

    const handleNextClick = () => {
        if (pageEnd < maxPages) {
            setPageStart(pageStart + 3);
            setPageEnd(pageEnd + 3);
        }
    }

    const handlePrevClick = () => {
        if (pageStart > 1) {
            setPageStart(pageStart - 3);
            setPageEnd(pageEnd - 3);
        }
    }

    if (loading) return (<div className="loadingio-spinner-pulse-ogt0qnihb3"><div className="ldio-m3bt2oi6y4n">
<div></div><div></div><div></div>
</div></div>)

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
                                        <h5 className="card-title" id="blog-head">
                                            {article.fields['Name (from Categories)'] ? article.fields['Name (from Categories)'][0] : 'No Category in airtable'}
                                        </h5>
                                        <h3 className="card-title" id="blog-head2">{article.fields.Title}</h3>
                                        <p className="card-text blog-info">{article.fields.Headline}</p>
                                        <div className="d-flex flex-column flex-lg-row justify-content-between">
                                            <div className="more-info" onClick={() => navigate(`article/${article.id}`)}><a className="text-decoration-none">
                                                <p>Read More<span><img src={Readmore} alt="" /></span></p>
                                            </a></div>
                                            <div className="post-time">
                                                <p>Posted {formatRelativeTime(article.fields['Created At'])}</p>
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
                        <li onClick={handlePrevClick}><img src={PagArrow} className='prev-arrow' alt="" /></li>
                        {Array.from({ length: pageEnd - pageStart + 1 }, (_, i) => i + pageStart).map(pageNumber => (
                            <li key={pageNumber} className={pageNumber === currentPage ? 'numb active' : 'numb'} onClick={() => handleClick(pageNumber)}>{pageNumber}</li>
                        ))}
                        <li>......</li>
                        <li onClick={() => handleClick(maxPages)}>{maxPages}</li>
                        <li onClick={handleNextClick}><img src={PagArrow} className='next-arrow' alt="" /></li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Posts; 