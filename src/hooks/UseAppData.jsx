import React, {useState} from 'react';

const UseAppData = () => {
    const [selectedData, setSelectedData] = useState(null)
    return {
        selectedData,
        setSelectedData
    };
};

export default UseAppData;
