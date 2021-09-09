import React from "react";
import "../../style/MainFeed.css";
import Posts from "../Feed/Posts";
import MakeTweet from "./MakeTweet";

const MainFeed = () => {
   return (
      <div className='feed'>
         {/* Header */}
         <div className='feed__header'>
            <h2>Recent Tweets</h2>
         </div>
         <MakeTweet />
         <Posts />
      </div>
   );
};

export default MainFeed;
