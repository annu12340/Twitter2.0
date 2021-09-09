import React from "react";
import SidebarIcon from "../Sidebar/SidebarIcon";
import "../../style/Sidebar.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Sidebar = () => {
   return (
      <div className='sidebar'>
         {/* Logo */}
         <TwitterIcon className='sidebar__twitterIcon' />

         {/* Navbar items */}
         <SidebarIcon active Icon={HomeIcon} text='Home' />
         <SidebarIcon Icon={SearchIcon} text='Explore' />
         <SidebarIcon Icon={NotificationsNoneIcon} text='Notifications' />
         <SidebarIcon Icon={MailOutlineIcon} text='Messages' />
         <SidebarIcon Icon={BookmarkBorderIcon} text='Bookmarks' />
         <SidebarIcon Icon={ListAltIcon} text='Lists' />
         <SidebarIcon Icon={PermIdentityIcon} text='Profile' />
         <SidebarIcon Icon={MoreHorizIcon} text='More' />

         {/* Tweet option */}
         <Button variant='outlined' className='sidebar__tweet' fullWidth>
            Tweet
         </Button>
      </div>
   );
};

export default Sidebar;
