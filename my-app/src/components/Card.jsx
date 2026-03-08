import React from 'react';

const Card = ({ title, text }) => {
  return (
    <div className="card text-dark" style={{ width: '18rem' }}>
      <div className="card-body">
        {title && <h4 className="card-title">{title}</h4>}
        {text && <p className={'card-text'}>{text}</p>}
      </div>
    </div>
  );
};

export default Card;
