import React from "react";
import "../../style/SidebarIcon.css";

function SidebarIcon({ active, text, Icon }) {
   return (
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
         <Icon />
         <h2>{text}</h2>
      </div>
   );
}

export default SidebarIcon;
