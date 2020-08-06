import React from "react";
import styled from "styled-components";
import Items from "../items";
import { useSelector } from "react-redux";

const ListSection = styled.section`
  width: 100%;
  padding: 20px 100px;
  box-sizing: border-box;
  background: #202d42;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export default function List() {
  const items = useSelector((state) => state.pageItem);
  console.log(items);
  return (
    <>
      <ListSection>
        {items.map((item) => (
          <Items
            key={item.id}
            name={item.name}
            desc={item.desc}
            url={item.url}
            thumnail={item.thumnail}
          />
        ))}
        <Items
          name="Add more"
          desc=""
          url=""
          thumnail="https://e7.pngegg.com/pngimages/986/1024/png-clipart-computer-icons-plus-sign-plus-sign-logo-cross.png"
        />
      </ListSection>
    </>
  );
}
