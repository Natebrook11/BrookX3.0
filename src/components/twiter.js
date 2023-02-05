import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopLikes from "./toplikes";

function TwitterClone() {
    const [tweets, setTweets] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setTweets([
            ...tweets,
            { text: inputValue, username: username, date: new Date().toLocaleString(), likes: 0 },
        ]);
        setInputValue("");
    };

    const handleLike = (index) => {
        const newTweets = [...tweets];
        newTweets[index].likes += 1;
        setTweets(newTweets);
    };

    const handleDelete = (index) => {
        const newTweets = [...tweets];
        newTweets.splice(index, 1);
        setTweets(newTweets);
    };

    return (

        <div className="container">
            <div className="container">
                {/* rest of the code... */}
                <TopLikes tweets={tweets} />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        className="form-control"
                        placeholder="What's happening?"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="form-control"
                        placeholder="Your username"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Tweet
                </button>
            </form>
            <ul className="list-group mt-3">
                {tweets.map((tweet, index) => (
                    <li className="list-group-item" key={index}>
                        <h5>{tweet.username}</h5>
                        <p>{tweet.text}</p>
                        <p className="text-muted">{tweet.date}</p>
                        <div className="d-flex justify-content-between">
                            <button className="btn mr-3" onClick={() => handleLike(index)}>
                                ❤️ ({tweet.likes})
                            </button>
                            <div>
                                <button className="btn btn-secondary mr-1" onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TwitterClone;
