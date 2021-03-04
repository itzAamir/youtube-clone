import React from "react";

const VideoWrapper = ({ data }) => {
   return (
      <div className="video">
         <div className="thumbnail">
            <img src={data.thumbnail} alt={data.channelName} />
         </div>
         <div className="video-info-wrapper">
            <img src={data.channelPic} alt={data.channelPic} />
            <div className="video-info">
               <p>{data.title}</p>
               <span>
                  {data.channelName} {data.views} · {data.uploadDate}
               </span>
            </div>
         </div>
      </div>
   );
};

export default VideoWrapper;
