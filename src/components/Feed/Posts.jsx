import React from "react";
import "../../style/Posts.css";

import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Posts({ displayName, username, verified, text, image, avatar }) {
   return (
      <div className='post'>
         {/* Header */}

         <div className='post__avatar'>
            <Avatar style={{ height: "70px", width: "70px" }} src={avatar} />
         </div>

         {/* Body */}
         <div className='post__body'>
            <div className='post__header'>
               <div className='post__headerText'>
                  <h3>
                     {displayName}{" "}
                     <span className='post__headerSpecial'>
                        {verified && <VerifiedUserIcon className='post__badge' />} @{username}
                     </span>
                  </h3>
               </div>
               <div className='post__headerDescription'>
                  <p>{text}</p>
               </div>
            </div>
            {image && <img src={image} width='500' height='250' alt='' />}

            {/* Footer */}
            <div className='post__footer'>
               <ChatBubbleOutlineIcon fontSize='small' />
               <RepeatIcon fontSize='small' />
               <FavoriteBorderIcon fontSize='small' />
               <PublishIcon fontSize='small' />
            </div>
         </div>
      </div>
   );
}

export default Posts;
