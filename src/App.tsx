import {
    Blog,
    Features,
    Footer,
    Header,
    Possibility,
    WhatGPT3,
} from "./containers";

import { Brand, CTA, NavBar } from "./components";
import styled from "styled-components";

const StyledApp = styled.div`
    /* ff 3.6+ */
    background: -moz-radial-gradient(
        circle at 3% 25%,
        rgba(0, 40, 83, 1) 0%,
        rgba(4, 12, 24, 1) 100%
    );

    /* safari 5.1+,chrome 10+ */
    background: -webkit-radial-gradient(
        circle at 3% 25%,
        rgba(0, 40, 83, 1) 0%,
        rgba(4, 12, 24, 1) 100%
    );

    /* opera 11.10+ */
    background: -o-radial-gradient(
        circle at 3% 25%,
        rgba(0, 40, 83, 1) 0%,
        rgba(4, 12, 24, 1) 100%
    );

    /* ie 10+ */
    background: -ms-radial-gradient(
        circle at 3% 25%,
        rgba(0, 40, 83, 1) 0%,
        rgba(4, 12, 24, 1) 100%
    );

    /* global 92%+ browsers support */
    background: radial-gradient(
        circle at 3% 25%,
        rgba(0, 40, 83, 1) 0%,
        rgba(4, 12, 24, 1) 100%
    );

    .gradient__text {
        background-color: ${(props) => props.theme.gradient_text};
        background-clip: text; // 이건 뭘까
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .section__padding {
        padding: 4rem 6rem;
    }
    .section__margin {
        margin: 4rem 6rem;
    }

    // scale up animation
    .scale-up-center {
        -webkit-animation: scale-up-center 0.4s
            cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }

    @-webkit-keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    @keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @media screen and (max-width: 700px) {
        .section__padding {
            padding: 4rem;
        }
        .section__margin {
            margin: 4rem;
        }
    }
    @media screen and (max-width: 550px) {
        .section__padding {
            padding: 4rem 2rem;
        }
        .section__margin {
            margin: 4rem 2rem;
        }
    }
`;

const App = () => {
    return (
        <StyledApp>
            <div className="gradient__bg">
                <NavBar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </StyledApp>
    );
};

export default App;
