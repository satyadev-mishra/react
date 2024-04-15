import React from "react";

const Button = ({ imgSrc, btnTitle,from,to,onBtnClick}) => {
  return (
    <div style={{textAlign:"center"}}>
      <button onClick={onBtnClick}>
        <img src={imgSrc} alt="Button" title={btnTitle} />
      </button>
      <h3>from {from} Basket to {to} Basket</h3>
    </div>
  );
};

export default Button;
