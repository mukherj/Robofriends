import React from 'react';

const Card=({name,email,id})=> {
    
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2">
        <header className="Card-header">
        <img alt="robot" src={`https://robohash.org/ddfslk${id}?bgset=bg1&size=200x200`}/>
          <h3>{name}</h3>
          <p className="orange">{email}</p>
        </header>
      </div>
    );
  
}

export default Card;
