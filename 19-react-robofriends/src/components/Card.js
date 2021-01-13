import React from 'react';

//These are coming from the properties we created in the index.js script. under the card components
const Card = ({name, email, id}) => {


    return (

        <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2> {name} </h2>
                <p> {email}</p>
            </div>
        </div>
    );
}


export default Card;