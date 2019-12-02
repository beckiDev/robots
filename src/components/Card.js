import React from 'react';

const Card = (props)=> {
    const { id, name, email, username} = props;
    const imgPath = `https://robohash.org/${id}?200x200 `;
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="robots" src={imgPath} />
        <p>id: {id}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>User name: {username}</p>
      </div>
    );

}

export default Card
