import React, {useContext} from 'react';
import './assets/layout.scss'
import VideoCreator from "./components/VideoCreator";
import UseAppData from "./hooks/UseAppData";
import {Context} from "./context";
import {setSelectedDataFunc} from "./context/chooseDataAction";

const App = () => {
    const {setSelectedData, selectedData} = UseAppData()
    const {dispatch} = useContext(Context)
    const handleChange = (value) => {
        dispatch(setSelectedDataFunc(dispatch,value))
    }
    return (
        <div className='video__shop'>
            <div className="video__block">
                <VideoCreator/>
            </div>
            <div className="video__details">
                <h3>Youtube Banner Page</h3>
                <div className="video__price">
                    <div className="video__price-main">
                        $ 9.99
                    </div>
                    <div className="video__price-save">
                        22%
                    </div>
                </div>
                <div className="video__choose-name">
                    <input type="text"/>
                    <div className="dropdown__content">
                        <div className="dropdown__item" onClick={() => handleChange('Hugry Mind')}>
                            <span>Hungry Mind</span>
                        </div>
                        <div className="dropdown__item" onClick={() => handleChange('Dev Ed')}>
                            <span>Dev Ed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
