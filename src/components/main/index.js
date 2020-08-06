import React from "react";
import Header from "../header";
import styled from "styled-components";
import List from "../list";

const Darker = styled.div`
  background-color: rgba(30, 40, 80, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const IntroPositioner = styled.article`
  width: 80%;
  margin: 0 auto;
  h1 {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.8;
    &::after {
      content: "";
      background-color: #ffffff;
      display: block;
      height: 2px;
      margin: 0.325em 0 0.5em 0;
      width: 100%;
    }
  }
`;
const Intro = styled.section`
  width: 100%;
  height: 550px;
  margin-top: 50px;
  color: white;
  background-size: cover;
  background-attachment: fixed;
  background-image: url("https://pixelarity.com/items/demos/forty/cyan/images/banner.jpg");
`;
export default function Main() {
  return (
    <div>
      <Header />
      <Intro>
        <Darker>
          <IntroPositioner>
            <h1>Git Book pages</h1>
            <span>공부하면서 정리한 내용들</span>
          </IntroPositioner>
        </Darker>
      </Intro>
      <List />
    </div>
  );
}
