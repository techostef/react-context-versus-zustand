"use client";
import React from "react";
import "./style.css";
import { useZustandStore } from "./useZustandStore";
import { shallow } from "zustand/shallow";

let appRenderedTimes = 0;
export const ComponentWithZustand = () => {
  appRenderedTimes++;
  return (
    <div className="App Common">
      <span>App Zustand rendered: {appRenderedTimes}</span>
      <Container />
    </div>
  );
};

let containerRenderedTimes = 0;
const Container = () => {
  containerRenderedTimes++;
  const { set, data } = useZustandStore(
    (state) => ({
      set: state.setContainerData,
      data: state.containerData,
    }),
    shallow
  );
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    set(!data);
  };
  return (
    <div className="Container Common" onClick={handleOnClick}>
      <span>
        Container rendered: {containerRenderedTimes}
        {`: ${data}`}
      </span>
      <InnerOne />
      <InnerTwo />
    </div>
  );
};

let innerOneRenderedTimes = 0;
const InnerOne = () => {
  innerOneRenderedTimes++;
  const { set, data } = useZustandStore(
    (state) => ({
      set: state.setInnerOneData,
      data: state.innerOneData,
    }),
    shallow
  );
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    set(!data);
  };
  return (
    <div className="InnerOne Common" onClick={handleOnClick}>
      <span>
        Inner one rendered: {innerOneRenderedTimes}
        {`: ${data}`}
      </span>
    </div>
  );
};

let innerTwoRenderedTimes = 0;
const InnerTwo = () => {
  innerTwoRenderedTimes++;
  const { set, data } = useZustandStore(
    (state) => ({
      set: state.setInnerTwoData,
      data: state.innerTwoData,
    }),
    shallow
  );
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    set(!data);
  };
  return (
    <div className="InnerTwo Common" onClick={handleOnClick}>
      <span>
        Inner two rendered: {innerTwoRenderedTimes}
        {`: ${data}`}
      </span>
    </div>
  );
};
