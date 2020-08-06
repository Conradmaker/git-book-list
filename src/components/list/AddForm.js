import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { useDispatch } from "react-redux";
import { addList } from "../../modules/pageItem";
const fadeIn = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;
const slide = keyframes`
from{
transform:translateY(400px)
}
to{
  transform:translateY(0px)
}
`;

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  background: #fff;
  border-radius: 5px;
  animation: ${slide} 1s ease;
  input {
    font-size: 20px;
    margin: 20px 0;
    padding: 2px 4px;
    border-radius: 3px;
    outline: none;
    border: 2px solid navy;
  }
  button {
    outline: none;
    border: none;
    background: cyan;
    cursor: pointer;
    color: navy;
    font-size: 20px;
    border-radius: 4px;
    padding: 2px 5px;
    &:hover {
      background: white;
    }
  }
`;
const FormContainer = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${fadeIn} 1s ease;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  ${(props) =>
    props.open &&
    css`
      display: flex;
    `}
`;

export default function AddForm() {
  const dispatch = useDispatch();
  const initialInputs = {
    name: "",
    desc: "",
    url: "",
    thumnail: "",
  };
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState(initialInputs);
  const { name, desc, url, thumnail } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addList(inputs));
    console.log(inputs);
  };

  return (
    <div>
      <FormContainer open={open}>
        <Form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={onChange}
            value={name}
          />
          <input
            type="text"
            name="desc"
            placeholder="desc"
            onChange={onChange}
            value={desc}
          />
          <input
            type="text"
            name="url"
            placeholder="url"
            onChange={onChange}
            value={url}
          />
          <input
            type="text"
            name="thumnail"
            placeholder="thumnail"
            onChange={onChange}
            value={thumnail}
          />
          <button onClick={() => setOpen(false)}>GO</button>
        </Form>
      </FormContainer>
      <button
        style={{
          width: "40px",
          height: "40px",
          backgound: "cyan",
          position: "fixed",
          bottom: "30px",
          right: "30px",
        }}
        onClick={() => setOpen(true)}
      >
        New
      </button>
    </div>
  );
}
