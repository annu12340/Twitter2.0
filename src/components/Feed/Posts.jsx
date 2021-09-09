import React from "react";
import "../../style/Posts.css";
function Posts({ displayName, username, verified, text, image, avatar }) {
   return (
      <div className='post'>
         {/* Header */}
         <div className='post__avatar'>
            <Avatar src={avatar} />
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
            <img src={image} alt='' />

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
