import React, {useEffect, useRef} from 'react';
import {Player} from "@remotion/player";
import VideoInner from "./VideoInner";

const VideoCreator = () => {
    const playerRef = useRef(null);
    useEffect(() => {
        if (!playerRef.current) {
            console.log('no player ref')
            return null;
        }
    }, []);
    return (
        <Player ref={playerRef}
                component={VideoInner}
                durationInFrames={100}
                fps={30}
                compositionWidth={400}
                compositionHeight={500}
                autoPlay
                loop
                controls={true}
                clickToPlay
                allowFullscreen={false}
                style={{
                    background: `url(./assets/images/v-background.png)`,
                    animation: 'video__player 2s linear infinite',
                    boxShadow: '-1px 0px 22px -6px rgba(36,36,36,1)',
                    borderRadius: '5px'
                }}
        />
    );
};

export default VideoCreator;
