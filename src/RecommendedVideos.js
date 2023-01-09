import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
        <h2>Recommended</h2>
        <div className='recommendedVideos__videos'>
          <VideoCard
            title="Finally Vlog is Here"
            views="18,768 views"
            timestamp="2 hours ago"
            channelImage="https://yt3.ggpht.com/HmvPrWuARlr7WtIPks0IplfGW5xad3FBP5Bb1e25f8lcZ1mf3wKl9GQkuycTUXwyKJv65Rzv-A=s88-c-k-c0x00ffffff-no-rj"
            channel="Arjuna Harjai"
            image="https://i.ytimg.com/vi/xBEEaO3lKZk/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFUoVDAP&rs=AOn4CLAywnTMq4Kseg67Jbf5hDmKbjY1aw"
           />
          <VideoCard
            title="Taarak Mehta Ka Ooltah Chashmah - तारक मेहता "
            views="7,450,297 views"
            timestamp="1 year ago"
            channelImage="https://yt3.ggpht.com/ZpOiFmWUm4adqClpTlOpr-ZJQvvgf9wAgN6KVo10xTeKd5Rxwg7pqgNvDZitgyhLRSG4C_EFUQ=s68-c-k-c0x00ffffff-no-rj"
            channel="Sony Sab"
            image="https://i.ytimg.com/vi/FFNzXPPlV3U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPL9NCB8kqtZ16zZ2-h76UlBImww"
           />
          <VideoCard
            title="High Pay Job Chahiye? Pehle Yeh Dekho - Education Explained, Pratham Mittal, TheRanveerShow"
            views="51,186 views"
            timestamp="3 hours ago"
            channelImage="https://yt3.ggpht.com/ytc/AMLnZu96SvbvYIYWv_KcGyuvoxUSoYRS_dttvtslZlem2g=s68-c-k-c0x00ffffff-no-rj"
            channel="Ranveer Allahbadia"
            image="https://i.ytimg.com/vi/HmaDSdxp7bE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6WGhJQgQsHc-Y-S-YB9K9gxHHhw"
           />
          <VideoCard
            title="Day in the Life of a Software Engineer - First Person View - Coding in another office "
            views="84,593 views"
            timestamp="1 month ago"
            channelImage="https://yt3.ggpht.com/_fe2nLYnN9qxcs4jFTauuNrFMZkA276ptbCq938njZgB1hFHkNoerfan2LkQOk3QDPUVY2M7EA=s68-c-k-c0x00ffffff-no-rj"
            channel="Tuomo Kankaanpää"
            image="https://i.ytimg.com/vi/wv4qJQkIp_w/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCsBH47_EAR0sKmgpLoJO6w01R6eA"
           />
          <VideoCard
            title="Learn TypeScript – Full Tutorial by freeCodeCamp.org"
            views="179,074 views"
            timestamp="1 month ago"
            channelImage="https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s68-c-k-c0x00ffffff-no-rj"
            channel="freeCodeCamp.org"
            image="https://i.ytimg.com/vi/30LWjhZzg50/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD4q5KOtD4aMmPTZAmYMQwyJifgkQ"
           />
          <VideoCard
            title="Challenging Google's Top Feeder College Students? Ft. UC Berkeley!"
            views="1,731,451 views"
            timestamp="2 months ago "
            channelImage="https://yt3.ggpht.com/ytc/AMLnZu-cVRbzAxvU8uW3v_r9WJUwAw4ejGGm1bukFkNSEA=s68-c-k-c0x00ffffff-no-rj"
            channel="Singh in USA"
            image="https://i.ytimg.com/vi/9kfScGV6W1Y/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAfPSj3DgXITG8zP6DdXRwCrlnA4g"
           />
        </div>
    </div>
  )
}

export default RecommendedVideos