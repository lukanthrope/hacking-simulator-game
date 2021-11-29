import React, { useState } from "react";
import { DuckDuck, Facebook, Twitter } from "./pages";
import { DnDWrapper } from "../../components";

export const BrowserApp = (props) => {
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");

  const handleRenderPage = () => {
    const pagesMap = {
      0: <DuckDuck search={search} setSearch={setSearch} setIndex={setIndex} />,
      1: <Twitter setIndex={setIndex} />,
      2: <Facebook setIndex={setIndex} />,
    };

    return pagesMap[index] || pagesMap[0];
  };

  return (
    <DnDWrapper
      {...props}
      title="Firefox"
      style={{
        width: 600,
        height: 500,
        paddingTop: -200,
        paddingBottom: 50,
        background: "white",
        borderRadius: 5,
        border: "1px solid black",
      }}
    >
      {handleRenderPage()}
    </DnDWrapper>
  );
};
