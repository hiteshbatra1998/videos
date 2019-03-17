import React from 'react';
import VideoList from './VideoList';
import './VideoItem.css';
const VideoItem = ({ video, onVideoSelect }) =>{
    return (
        <div onClick={ () =>onVideoSelect(video) } className="item video-item">
             <img className="ui image" src={video.snippet.thumnails.medium.url} />
             <div className="content">
                <div className="header">{video.snippet.title}</div>
             </div>
               
        </div>
    );
};
export default VideoItem;