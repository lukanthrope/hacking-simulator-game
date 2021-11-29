import React from "react";
import { DuckDuck } from "./pages";
import { DnDWrapper } from "../../components";

export const BrowserApp = (props) => {
  return (
    <DnDWrapper
      {...props}
      title="Firefox"
      style={{
        width: 600,
        height: 500,
        paddingTop: -200,
        background: "white",
        borderRadius: 5,
        border: "1px solid black",
      }}
    >
      <DuckDuck />
    </DnDWrapper>
  );
};
