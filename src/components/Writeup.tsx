import ShareIcon from '../assets/share-icon.png';
import { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

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

interface Comment {
    id: string;
    fields: {
        Name: string;
        Notes: string;
        Articles: string[];
    };
}

async function share(id: string) {
    const shareData = {
        title: document.title,
        url: window.location.href
    }

    try {
        if (id) await navigator.share(shareData)
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

function Writeup() {
    const [article, setArticle] = useState<Article | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [commentText, setCommentText] = useState('');
    const [commentName, setCommentName] = useState('');
    const [loading, setLoading] = useState(false);
    const { articleId } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/articles/${articleId}`)
            .then(response => response.json())
            .then(data => setArticle(data));

        fetch(`${import.meta.env.VITE_API_URL}/comments/${articleId}`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [articleId]);

    function handleCommentTextChange(event: FormEvent<HTMLTextAreaElement>) {
        setCommentText(event.currentTarget.value);
    }

    function handleCommentNameChange(event: FormEvent<HTMLInputElement>) {
        setCommentName(event.currentTarget.value);
    }

    function handleCommentSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);

        fetch(`${import.meta.env.VITE_API_URL}/comments/${articleId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: commentName,
                notes: commentText
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`An error occurred: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                setCommentText('');
                setCommentName('');
                fetch(`${import.meta.env.VITE_API_URL}/comments/${articleId}`)
                    .then(response => response.json())
                    .then(data => setComments(data));
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section id="news-details">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <img src={article.fields.Image && article.fields.Image.length > 0 ? article.fields.Image[0].url : ''} alt="" className="img-fluid news-pic" />
                    </div>


                    <div className="row container">
                        <h5 className="card-title px-0" id="blog-head">{article.fields['Name (from Categories)'][0]}</h5>
                        <h3 className="card-title  px-0 news-text" id="blog-head2">{article.fields.Title}</h3>
                        <p className="card-text blog-info px-0">{article.fields.Body}</p>
                        <div className="d-flex flex-column flex-lg-row">
                            <div className=" d-flex flex-row align-items-center"><div className="d-flex flex-row share" onClick={() => share( article.id )}><img src={ShareIcon} alt="" className="img-fluid" /><div className="d-flex align-items-center share-txt"><p>Share</p></div></div>
                                <div className="post-time2"><p>Posted 30 mins ago</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="comments-section">
                <div className="container comment-container">
                    <h2 className="comment-req">Leave a Comment</h2>
                    <hr className="blog-line" style={{ color: "#000", marginBottom: "25px", maxWidth: "1480px" }} />
                    <form onSubmit={handleCommentSubmit}>
                        <div className="mb-3">
                            <label htmlFor="comment" className="col-auto col-form-label comment-label">
                                <strong>Comment</strong>
                            </label>
                            <textarea
                                name="comment"
                                id="comment"
                                cols={30}
                                rows={4}
                                className="form-control"
                                required
                                value={commentText}
                                onChange={handleCommentTextChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name-comment" className="col-auto col-form-label name-comment-label">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                name="name-comment"
                                id="name-comment"
                                className="form-control"
                                required
                                value={commentName}
                                onChange={handleCommentNameChange}
                            />
                        </div>

                        <div className="text-center d-flex justify-content-center justify-content-md-start">
                            <button className="btn text-center cmm-btn" id="comment_form_submit" type="submit">
                                {loading ? 'LOADING...' : 'SUBMIT'}
                            </button>
                        </div>
                    </form>

                    <h2 className="comment-head row ">Comments</h2>

                    {comments.map(comment => (
                        <div className="comment-sec flex-column flex-md-row d-flex align-items-center justify-content-between" key={comment.id}>
                            <div>
                                <h1 className="text-nowrap comment-user">{comment.fields.Name}</h1>
                            </div>
                            <div>
                                <p className="comment-text text-wrap text-md-no-wrap">{comment.fields.Notes}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </>
    )
}

export default Writeup