import React from "react";
import styled from "@emotion/styled";
import "./app.css";

import List from "./components/List";

export default function App() {
  return (
    <Centered>
      <Panel>
        <List />
      </Panel>
    </Centered>
  );
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
`;

const Panel = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 19px hsla(0, 0%, 0%, 0.06);
  max-height: 600px;
  overflow: auto;
`;
