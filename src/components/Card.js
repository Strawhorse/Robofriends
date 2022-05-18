import React from 'react';

const Card = (props) => {
    const {name, email, id} = props;
    return(
        // Can only return one element 
        // className variables are from tachyons
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src = {`https://robohash.org/${id}?200x200`} 
            alt = 'something'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;