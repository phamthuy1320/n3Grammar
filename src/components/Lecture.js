import React from 'react';

function Lecture(props) {
    const {data}=props;
    return (
        <div>
            <p>{data?.title||"title"}</p>
            <p>{data?.overview||"overview"}</p>
            <p>{data?.structure||"structure"}</p>
            <div>{data?.examples[0]||"examples"}</div>
        </div>
    );
}

export default Lecture;