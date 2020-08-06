import React from "react";
import styled from "styled-components";

const Summary = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  h1 {
    font-size: 33px;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 0 15px 5px 15px;
    border-bottom: 2px solid black;
  }
  p {
  }
  a {
    width: 80%;
    button {
      font-size: 23px;
      width: 100%;
      border: none;
      border-radius: 5px;
      background: #202d42;
      color: white;
      cursor: pointer;
      &:hover {
        background: #35415e;
      }
    }
  }
`;
const IMG = styled.div`
  height: 50%;
  img,
  div {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  div {
    transition: all 0.5s ease;
    background-color: rgba(0, 0, 0, 0.3);
    height: 50%;
  }
`;

const ItemBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 5px;
  max-width: 450px;
  min-width: 350px;
  height: 350px;
  background: #fff;
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 4px 10px black;
    ${IMG} {
      div {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
`;

export default function Items({ thumnail, name, desc, url }) {
  return (
    <>
      <ItemBox>
        <IMG>
          <img src={`${thumnail}`} alt={`${name}`} />
          <div></div>
        </IMG>
        <Summary>
          <h1>{name}</h1>
          <p>{desc}</p>
          <a href={`${url}`}>
            <button>Link</button>
          </a>
        </Summary>
      </ItemBox>
    </>
  );
}
