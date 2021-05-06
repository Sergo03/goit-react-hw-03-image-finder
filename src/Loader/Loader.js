import React from 'react';
import Loading from "react-loader-spinner";


const Loader = () => {
    
    return (
        <>
            <Loading
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </>
    )
}

export default Loader;