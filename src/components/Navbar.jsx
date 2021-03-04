import React from "react";
import CastOutlinedIcon from "@material-ui/icons/CastOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const ICON_STYLES = {
   width: "2rem",
   height: "2rem",
   opacity: "0.9",
};

const Navbar = () => {
   return (
      <nav id="top-nav">
         <div className="yt-logo-wrapper" />
         <ul>
            <li>
               <CastOutlinedIcon style={ICON_STYLES} />
            </li>
            <li>
               <NotificationsNoneOutlinedIcon style={ICON_STYLES} />
            </li>
            <li>
               <SearchOutlinedIcon style={ICON_STYLES} />
            </li>
            <li>
               <AccountCircleOutlinedIcon style={ICON_STYLES} />
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
