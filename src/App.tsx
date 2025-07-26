import React from "react";
import type { CSSProperties } from "react";
import { ColumnWrapper } from "./ColumnWrapper";
import "./App.css";

const $mainStyle: CSSProperties = {
  width: "calc(100vw - 50px)",
  margin: "0 auto",
  maxHeight: "100%",
  background: "#fcfcfc",
  border: "1px solid #000000",
  boxSizing: "border-box",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: 40,
};

const $titleWrapperStyle: CSSProperties = {
  marginLeft: 25,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <header className="App-header">
        <div style={$titleWrapperStyle}>
          <h1>YATA</h1>
        </div>
      </header>
      <main style={$mainStyle}>
        <ColumnWrapper />
      </main>
    </div>
  );
}

export default App;
