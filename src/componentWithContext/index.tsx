"use client";
import React from "react";
import "./style.css";
import { useExampleContext } from "./useExampleContext";

let appRenderedTimes = 0;
export const ComponentWithContext = () => {
  appRenderedTimes++;
  return (
    <div className="App Common">
      <span>App React Context rendered: {appRenderedTimes}</span>
      <Container />
    </div>
  );
};

let containerRenderedTimes = 0;
const Container = () => {
  containerRenderedTimes++;
  const { containerData, setContainerData } = useExampleContext();
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setContainerData((prevState) => !prevState);
  };
  return (
    <div className="Container Common" onClick={handleOnClick}>
      <span>
        Container rendered: {containerRenderedTimes}
        {`: ${containerData}`}
      </span>
      <InnerOne />
      <InnerTwo />
    </div>
  );
};

let innerOneRenderedTimes = 0;
const InnerOne = () => {
  innerOneRenderedTimes++;
  const { innerOneData, setInnerOneData } = useExampleContext();
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setInnerOneData((prevState) => !prevState);
  };
  return (
    <div className="InnerOne Common" onClick={handleOnClick}>
      <span>
        Inner one rendered: {innerOneRenderedTimes}
        {`: ${innerOneData}`}
      </span>
    </div>
  );
};

let innerTwoRenderedTimes = 0;
const InnerTwo = () => {
  innerTwoRenderedTimes++;
  const { innerTwoData, setInnerTwoData } = useExampleContext();
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setInnerTwoData((prevState) => !prevState);
  };
  return (
    <div className="InnerTwo Common" onClick={handleOnClick}>
      <span>
        Inner two rendered: {innerTwoRenderedTimes}
        {`: ${innerTwoData}`}
      </span>
    </div>
  );
};
