import React from "react"; // Required for JSX

import Navbar from "./Navbar";
import NavbarItem from "./NavbarItem"
import MainContainer from "./MainContainer";
import Footer from "./Footer";

const App = () =>
    <div>
        <Navbar label="Tasks" href="/">
            <NavbarItem label="Generator" href="/" active={true} />
        </Navbar>
        <MainContainer />
        <Footer company="Acme Ltd." />
    </div>;

export default App;