import React from "react";
import { createRoot } from "react-dom/client";
import "./AppleCounter.css";
import Button from "./Button";
import AppleBasket from "./AppleBasket";
import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
const root = createRoot(document.getElementById("root"));
const totalAppleCount = 10;
let appleInRightBasket = 0;
let appleInLeftBasket = totalAppleCount - appleInRightBasket;

const AppleCounter = () => {
  const leftBtnClick = () => {
    if (appleInRightBasket > 0) {
      appleInRightBasket--;
      appleInLeftBasket++;
      root.render(<AppleCounter />);
    }
  };
  const rightBtnClick = () => {
    if (appleInLeftBasket > 0) {
      appleInLeftBasket--;
      appleInRightBasket++;
      root.render(<AppleCounter />);
    }
  };
  return (
    <section className="container">
      <AppleBasket count={appleInLeftBasket} basketName="Basket 1" />
      <Button
        imgSrc={leftArrow}
        btnTitle="Left Button"
        from="right"
        to="left"
        onBtnClick={leftBtnClick}
      />
      <Button
        imgSrc={rightArrow}
        btnTitle="Right Button"
        from="left"
        to="right"
        onBtnClick={rightBtnClick}
      />
      <AppleBasket count={appleInRightBasket} basketName="Basket 2" />
    </section>
  );
};
function helloLeftBtn() {
  alert("hello Left BTN");
}
function helloRighBtn() {
  alert("hello Right BTN");
}
export default AppleCounter;
