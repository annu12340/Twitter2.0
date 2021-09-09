import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "../Feed/firebase";
import "../../style/MakeTweet.css";

function MakeTweet() {
   const [tweetMessage, setTweetMessage] = useState("");
   const [tweetImage, setTweetImage] = useState("");
   const sendTweet = (e) => {
      e.preventDefault();

      db.collection("posts").add({
         displayName: "IamAUser",
         username: "User123 ",
         verified: true,
         text: tweetMessage,
         image: tweetImage,
         avatar: "https://images.unsplash.com/photo-1540206395-68808572332f",
      });

      setTweetMessage("");
      setTweetImage("");
   };
   return (
      <div className='MakeTweet'>
         <form action=''>
            <div className='MakeTweet__input'>
               <Avatar style={{ height: "70px", width: "70px" }} src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df' />

               <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type='text' />
            </div>
            <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className='MakeTweet__imageInput' placeholder='Optional: Enter image URL' type='text' />
         </form>
         <Button onClick={sendTweet} type='submit' className='MakeTweet__tweetButton'>
            Tweet
         </Button>
      </div>
   );
}

export default MakeTweet;
