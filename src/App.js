import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import VideoWrapper from "./components/VideoWrapper";

const data = [{
    thumbnail: "https://i.ytimg.com/vi/fI_jNcCUk3I/maxresdefault.jpg",
    channelPic: "https://yt3.ggpht.com/ytc/AAUvwngHwhYgvm9O-76ZUvxP9JLhLrC8Q-XEzg31HPCQ3A=s48-c-k-c0x00ffffff-no-rj",
    channelName: "Tanmay Bhat",
    title: "WHEN MY MOM GOT HIGH | Vlog 30",
    views: "20.1 lakh views",
    uploadDate: "29-Jun-2020"
},
{
    thumbnail: "https://i.ytimg.com/vi/nSUtpAj6wUY/maxresdefault.jpg",
    channelPic: "https://yt3.ggpht.com/ytc/AAUvwnhohOnYMD5U8rwmKU_yWv9-hJsyrLO7082UlO-K=s88-c-k-c0x00ffffff-no-rj",
    channelName: "Not Funny Rohan",
    title: "NORMIES REACT to Desi Rappers ft. @Emiway Bantai, @Kalamkaar, @Brodha V, @EPR IYER and more...",
    views: "1.69 lakh views",
    uploadDate: "14-Oct-2020"
},
{
    thumbnail: "https://i.ytimg.com/vi/dfuPZCr8hsE/maxresdefault.jpg",
    channelPic: "https://yt3.ggpht.com/ytc/AAUvwniII5OrUX_Q6QgUcamKdEm6cTd-r0d3ixV_B_tlEzg=s48-c-k-c0x00ffffff-no-rj",
    channelName: "Dank Rishu",
    title: "Shanti - Dank Rishu, Sammad, Karun, Kuns, Tarun",
    views: "5.5 lakh views",
    uploadDate: "22-Oct-2020"
},
{
    thumbnail: "https://i.ytimg.com/vi/niuZ4UY4T68/maxresdefault.jpg",
    channelPic: "https://yt3.ggpht.com/ytc/AAUvwng_aC-bnVeiRZhr9qrkMeCglQX3X_HZ-5RRJ0sM0g=s88-c-k-c0x00ffffff-no-rj",
    channelName: "Yashraj Mukhate",
    title: "Kokila Ben | First World Problems | Dialogue with Beats | Yashraj Mukhate | Gopi Bahu | Raashi",
    views: "7.8 crore views",
    uploadDate: "20-Aug-2020"
},
{
    thumbnail: "https://i.ytimg.com/vi/OtevG64k_h0/maxresdefault.jpg",
    channelPic: "https://yt3.ggpht.com/ytc/AAUvwng3sj-uxz2uIQb1ZNVMMT5TKfT-xuDA6GBsD5UYrQ=s48-c-k-c0x00ffffff-no-rj",
    channelName: "Mythpat",
    title: "Mythpat FACE REVEAL ft. Saiman Says",
    views: "1.02 crore views",
    uploadDate: "16-Nov-2019"
}];

const App = () => {
    const [videos, setVideos] = useState("");
    useEffect(() => {
        setVideos(data.map((e, i) => <VideoWrapper key={i} data={e} />))
    }, [])
    return (
        <>
            <Navbar />
            <hr />
            <section id="main-container">
                {videos}
            </section>
            <hr />
            <BottomNavbar />
        </>
    )
}

export default App
