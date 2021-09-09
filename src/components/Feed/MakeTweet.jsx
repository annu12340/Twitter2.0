import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "../../style/MakeTweet.css";

function MakeTweet() {
   function sendTweet() {}
   return (
      <div className='MakeTweet'>
         <form action=''>
            <div className='MakeTweet__input'>
               <Avatar src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df' />
               {/* onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} */}
               <input placeholder="What's happening?" type='text' />
            </div>
         </form>
         <Button onClick={sendTweet} type='submit' className='MakeTweet__tweetButton'>
            Tweet
         </Button>
      </div>
   );
}

export default MakeTweet;
