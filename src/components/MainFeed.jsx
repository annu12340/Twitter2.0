import React from "react";
import "../style/MainFeed.css";
import Feed from "./Feed";

const MainFeed = () => {
   return (
      <div className='feed'>
         {/* Header */}
         <div className='feed__header'>
            <h2>Recent Tweets</h2>
         </div>

         <Feed />
      </div>
   );
};

export default MainFeed;
