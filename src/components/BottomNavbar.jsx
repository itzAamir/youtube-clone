import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";

const ICON_STYLES = {
   width: "2.5rem",
   height: "2.5rem",
   opacity: "0.9",
};

const BottomNavbar = () => {
   return (
      <nav id="bottom-nav">
         <ul>
            <li>
               <HomeIcon style={ICON_STYLES} />
               Home
            </li>
            <li>
               <ExploreOutlinedIcon style={ICON_STYLES} />
               Explore
            </li>
            <li>
               <AddCircleOutlineOutlinedIcon
                  style={{ height: "2.8rem", width: "2.8rem", opacity: 0.9 }}
               />
            </li>
            <li>
               <SubscriptionsOutlinedIcon style={ICON_STYLES} />
               Subcriptions
            </li>
            <li>
               <VideoLibraryOutlinedIcon style={ICON_STYLES} />
               Library
            </li>
         </ul>
      </nav>
   );
};

export default BottomNavbar;
