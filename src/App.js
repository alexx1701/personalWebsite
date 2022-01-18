import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Nav from "./components/nav";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
