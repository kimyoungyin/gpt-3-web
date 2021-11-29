import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import logo from "../../assets/imgs/logo.svg";

const StyledNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6rem;
    & > .gpt3__navbar-links {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* background-color: red; */
        & > .gpt3__navbar-links_logo {
            margin-right: 2rem;
            & > img {
                width: 62.56px;
                height: 16.02px;
            }
        }
        & > .gpt3__navbar-links_container {
            display: flex;
        }
        & > .gpt3__navbar-sign {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        & > .gpt3__navbar-links_container > p,
        & > .gpt3__navbar-sign > p,
        & > .gpt3__navbar-menu_container > p {
            color: #fff;
            font-family: ${(props) => props.theme.font_family};
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 25px;
            text-transform: capitalize;
            margin: 0 1rem;
            cursor: pointer;
        }
        & > .gpt3__navbar-sign > button,
        & > .gpt3__navbar-menu_container > button {
            padding: 0.5rem 1rem;
            color: white;
            font-family: ${(props) => props.theme.font_family};
            font-weight: 500;
            font-size: 18px;
            line-height: 25px;
            background-color: #ff4820;
            border-radius: 5px;
            border: 0;
            outline: none;
            cursor: pointer;
        }
        & > .gpt3__navber-menu {
            margin-left: 1rem;
            display: none;
            position: relative;
            & > svg {
                cursor: pointer;
            }
            & > .gpt3__navber-menu_container {
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                flex-direction: column;

                text-align: end;
                background-color: ${(props) => props.theme.color_footer};
                padding: 2rem;
                position: absolute;
                top: 40px;
                right: 0;
                margin-top: 1rem;
                min-width: 210px;
                border-radius: 5px;
                box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);
                & > p {
                    margin: 1rem 0;
                }
                &
                    > .gpt3__navber-menu_container-links
                    > .gpt3__navbar-menu_container-links_sign {
                    display: none;
                }
            }
        }
    }
`;

const Menu = () => {
    return (
        <>
            <p>
                <a href="#home">Home</a>
            </p>
            <p>
                <a href="#wgpt3">What is GPT3?</a>
            </p>
            <p>
                <a href="#possibility">Open AI</a>
            </p>
            <p>
                <a href="#features">Case Studies</a>
            </p>
            <p>
                <a href="#blog">Library</a>
            </p>
        </>
    );
};

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <StyledNavBar>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
                <div className="gpt3__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
                <div className="gpt3__navber-menu">
                    {toggleMenu ? (
                        <RiCloseLine
                            color="#fff"
                            size={27}
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <RiMenu3Line
                            color="#fff"
                            size={27}
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                    {toggleMenu && (
                        <div className="gpt3__navber-menu_container scale-up-center">
                            <div className="gpt3__navber-menu_container-links">
                                <Menu />
                                <div className="gpt3__navbar-menu_container-links_sign">
                                    <p>Sign in</p>
                                    <button type="button">Sign up</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </StyledNavBar>
    );
};

export default NavBar;
