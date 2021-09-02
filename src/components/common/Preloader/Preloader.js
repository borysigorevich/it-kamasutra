import React from 'react';
import preloader from "../../../images/Spinner-1s-200px.svg";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="svg"/>
        </div>
    );
};

export default Preloader;