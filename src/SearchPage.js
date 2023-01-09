import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
function SearchPage() {
  return (
    <div className='searchPage'>
    <div className='searchPage__filter'>
    <TuneOutlinedIcon />
    <h2>Filter</h2>
    </div>
    <hr />
    <ChannelRow
    image="https://yt3.googleusercontent.com/ytc/AMLnZu_i6ggavZuZVZepe61CU9neYa5gk2lQ6JNvQhJngQ=s176-c-k-c0x00ffffff-no-rj-mo"
    channel="Mumbiker Nikhil"
    verified
    subs="3.93 M"
    noOfVideos={1000}
    description="ABOUT ME: I LOVE TO VLOG MY LIFE Camera : Sony a7Riii Follow me on instagram : nikkkhil Thank you."
     />
     <hr />
     <VideoRow 
      views="115K"
      subs="3.93 M"
      description="Shop latest design at : https://shanzandnikz.com SUBSCIRBE TO @shaniceshresthavlog subscribe to our new channel ..."
      timestamp="9 hours ago"
      channel="Mumbiker Nikhil"
      title="THIS IS THE DREAM TEAM OF THE FUTURE | One day it will be possible"
      image="https://i.ytimg.com/vi/1mxlybmbNBk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA60-CKhoiqW8swBIDa2UGkXMWLnQ"
     />
     <VideoRow 
      views="223 K"
      subs="3.93 M"
      description="Shop latest design at : https://shanzandnikz.com SUBSCIRBE TO @shaniceshresthavlog subscribe to our new channel ..."
      timestamp="1 day ago"
      channel="Mumbiker Nikhil"
      title="YEH DIN KABHI NAHI BHULENGEY | WE TRIED CUTTING OUR DAUGHTERS HAIR"
      image="https://i.ytimg.com/vi/K9mzdFbJiiM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvqg3aYBchsTHqGFsruyPgl6Dg1Q"
     />
     <VideoRow 
      views="275K"
      subs="3.93 M"
      description="Shop latest design at : https://shanzandnikz.com SUBSCIRBE TO @shaniceshresthavlog subscribe to our new channel ..."
      timestamp="2 days ago"
      channel="Mumbiker Nikhil"
      title="THE MOST GANSTA CAR  | G-WAGAN IS A DREAM CAR FOR ATTENTION"
      image="https://i.ytimg.com/vi/yiWaTad4Qmg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAh7tkr9ye5MNj5D86DGDdq9hCPyQ"
     />
     <VideoRow 
      views="251K"
      subs="3.93 M"
      description="Shop latest design at : https://shanzandnikz.com SUBSCIRBE TO @shaniceshresthavlog subscribe to our new channel ..."
      timestamp="3 days ago"
      channel="Mumbiker Nikhil"
      title="SAAL KA PEHELA DIN AUR YEH SAB AGAYA ."
      image="https://i.ytimg.com/vi/nWXnZjzgalU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBH8tHSgIgeKaFC95MbZkHJ-RU77w"
     />
     <VideoRow 
      views="203K"
      subs="3.93 M"
      description="Shop latest design at : https://shanzandnikz.com SUBSCIRBE TO @shaniceshresthavlog subscribe to our new channel ..."
      timestamp="3 days ago"
      channel="Mumbiker Nikhil"
      title="BLOOD TEST KI REPORTS AGAI AND ..."
      image="https://i.ytimg.com/vi/UihXJFhO4RI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6t6r2yU5Ar1KFiAkl2CjYRz9g5w"
     />
     <VideoRow 
      views="233K"
      subs="3.93 M"
      description="Shop latest design at : https://shanzandnikz.com SUBSCIRBE TO @shaniceshresthavlog subscribe to our new channel ..."
      timestamp="7 days ago"
      channel="Mumbiker Nikhil"
      title="HAPPY NEW YEAR 2023 | SIMPLE BUT BEAUTIFUL"
      image="https://i.ytimg.com/vi/XPp5z7qsLu4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBv19zzofZmL8NSLf1qsDuRWm4Ucw"
     />
     <VideoRow 
      views="277K"
      subs="3.93 M"
      description="Shop latest design at : https://shanzandnikz.com SUBSCIRBE TO @shaniceshresthavlog subscribe to our new channel ..."
      timestamp="9 days ago"
      channel="Mumbiker Nikhil"
      title="DHEKTE HI DHEKTE SAAL KHATAM !! BYE BYE 2022"
      image="https://i.ytimg.com/vi/asppipeuvpg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBH37rJeGKq_mE-AattmjKS3MntwA"
     />
    </div>
  )
}

export default SearchPage