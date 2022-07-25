import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect}    video = {video}/>;  
    });
    
    //props of videos

    return <div className="ui relaxed divided list overflow">
        {renderedList}
    </div>
};

export default VideoList;
