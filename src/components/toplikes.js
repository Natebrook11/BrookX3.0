import React from "react";

const TopLikes = ({ tweets }) => {
  const sortedTweets = [...tweets].sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <h3>Top Liked Tweets</h3>
      <ol>
        {sortedTweets.map((tweet, index) => (
          <li key={index}>
            <b>{tweet.username}</b>: {tweet.text} ({tweet.likes} ❤️)
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopLikes;
