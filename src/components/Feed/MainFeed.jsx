import React, { useState, useEffect } from "react";
import db from "../Feed/firebase";

import Posts from "../Feed/Posts";
import MakeTweet from "./MakeTweet";
import "../../style/MainFeed.css";

const MainFeed = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => doc.data())));
   }, []);
   return (
      <div className='feed mainfeed'>
         {/* Header */}
         <div className='feed__header'>
            <h2>Recent Tweets</h2>
         </div>

         {/* Create a new tweet */}
         <MakeTweet />

         {/* Show all tweets */}
         {posts.map((post) => (
            // <Posts  />
            <Posts key={post.text} displayName={post.displayName} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image} />
         ))}
      </div>
   );
};

export default MainFeed;
