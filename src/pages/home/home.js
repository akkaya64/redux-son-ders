import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Theme from "../../components/Theme";
 import Counter from "../../components/Counter";
import Localization from "../../components/Localization";
import Content from "../../components/Content";

const HomePage = () => {
    const theme = useSelector((state) => state.theme);
    const oppositeTheme = theme.value === "light" ? "dark" : "light";

    return (
        <Container
            fluid
            className={`bg-${theme.value} text-${oppositeTheme} h-100 p-3`}>
            <Theme />
            <Counter />
            <Localization />
            <Content />
        </Container>
    );
};

export default HomePage;