import React, { useState } from "react";
import "./styles/main.scss";
import Menu, { Links } from "./components/main-page/menu";
import Body from "./components/main-page/body";
import Header from "./components/main-page/header";
import Footer from "./components/main-page/footer";

function Main() {
  const [link, setLink] = useState(Links.Flask);

  return (
    <div className="main">
      <Menu
        onMenuClick={(link) => {
          setLink(link);
        }}
      />
      <div className="content">
        <Header />
        <Body
          setToInitial={() => {
            setLink(Links.Initial);
          }}
          link={link}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
