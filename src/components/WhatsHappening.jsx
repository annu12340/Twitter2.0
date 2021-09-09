import React from "react";
import "../style/WhatsHappening.css";
import { Tweet } from "react-twitter-widgets";
import SearchIcon from "@material-ui/icons/Search";

const WhatsHappening = () => {
   return (
      <div className='whatshappening-widget'>
         <div className='whatshappening-widget__input'>
            <SearchIcon className='whatshappening-widget__searchIcon' />
            <input placeholder='Search Twitter' type='text' />
         </div>

         <div className='whatshappening-widgets__widgetContainer'>
            <h2>What's happening</h2>
            <Tweet tweetId='1435909923167215617' />
            <Tweet tweetId='1435901953918263296' />
         </div>
      </div>
   );
};

export default WhatsHappening;
