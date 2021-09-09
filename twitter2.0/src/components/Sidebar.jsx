import React from "react";
import "../style/Sidebar.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
   return (
      <div>
         {/* Logo */}
         <TwitterIcon />
         {/* Navbar items */}
         <SidebarIcon />
         <SidebarIcon />
         <SidebarIcon />
         {/* Tweet option */}
      </div>
   );
};

export default Sidebar;
