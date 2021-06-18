import React, {useContext} from 'react';
import '../assets/layout.scss'
import {Context} from "../context";

const VideoInner = (props) => {
    const {state} = useContext(Context);
    const {selectedData} = state
    return (
        <div
            className='video__inner'
        >
            <p>{selectedData}</p>
        </div>
    );
};

export default VideoInner;
