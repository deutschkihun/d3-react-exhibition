import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import 'antd/dist/antd.min.css'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif !important;
    line-height: 1.75 !important;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  @keyframes stack-ani {
    from { transform: translateY()}
    to { transform: translateY(1em) scale(1.05)}
  }

  .svg-category {
    animation: stack-ani 1s alternate infinite 0s;
  }

  .stack {
    width: 100px;
    padding: 0 10px;


    :nth-child(2) {
      animation: stack-ani 1s alternate infinite 0s;
    }

    :nth-child(3) {
      animation: stack-ani 1s alternate infinite 0.5s;
    }

    :nth-child(4) {
      animation: stack-ani 1s alternate infinite 1s;
    }

    :nth-child(5) {
      animation: stack-ani 1s alternate infinite 1.5s;
    }

    :nth-child(6) {
      animation: stack-ani 1s alternate infinite 2s;
    }
  
    :hover {
      animation-play-state: paused;
    }
  }

  @keyframes eye-ani {
    from { transform: scaleY(1); }
    to { transform: scaleY(0.2); }
  }

  .right-eye {
    transform-origin: 19px 42px;
    animation: eye-ani 0.5s alternate infinite;
  }

  .left-eye {
    transform-origin: 19px 42px;
    animation: eye-ani 0.5s alternate infinite 0.5s;
  }

  @keyframes dash-ani {
    0% { stroke-dashoffset: 700; stroke:black }
    50% { stroke-dashoffset: 350; stroke:blue }
    100% { stroke-dashoffset: 0; stroke: red }
  }
  .stroke-circle {
    stroke: black;
    stroke-width: 5;
    stroke-dasharray: 700;
    stroke-dashoffset: 0;
    fill: transparent;
    animation: dash-ani 2s infinite alternate;
  }
  .stroke-path {
    stroke: black;
    stroke-width: 5;
    stroke-dasharray: 727;
    fill: transparent;
    animation: dash-ani 2s linear infinite alternate;
  }

  @keyframes logo-ani {
    0% { stroke-dashoffset: 5171; stroke:deepskyblue }
    20% { stroke-dashoffset: 4171; stroke:dodgerblue }
    40% { stroke-dashoffset: 3171; stroke:darkgreen }
    60% { stroke-dashoffset: 2171; stroke:darkslategrey }
    80% { stroke-dashoffset: 1171; stroke:darkgoldenrod }
    100% { stroke-dashoffset: 0; stroke:darkolivegreen }
  }
  .cls-1 {
    fill: #fff;
  }

  .cls-2 {
    fill: none;
    stroke: #f91d00;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 25px;
    stroke-dasharray: 5171;
    animation: logo-ani 10s linear infinite alternate;
  }
`

export const Wrapper = styled.div`
  padding-top: 50px;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 3rem;
  padding-left: 10vw;
  padding-right: 10vw;
`

export const Title = styled.h1`
  text-align: center;
`

export const SubTitle = styled.h2`
  text-align: center;
`

export const Message = styled.p`
  text-align: justify;
  font-size: 17px;
`

export const Ref = styled.div``

export const FooterWrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`

export const Seperator = styled.div`
  padding-top: 69px;
  min-height: calc(100vh - 80px);
`

export const VizContainer = styled.form`
  width: 70vw;
  min-width: 400px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 6rem;
  padding: 2rem 2.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`

export const Container = styled.div`
  width: 75%;
  margin: 3rem auto;
`

export const Images = styled.img`
  width: 100%;
  max-height: 150px;
  padding: 1em;
`

export const Menu = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
  background-color: white;
  position: fixed;
  z-index: 5;
  width: 100%;
`

export const VizWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0px;
  padding-left: 5vw;
  padding-right: 5vw;
`

export const Content = styled.div`
  margin: 0 auto;
  box-shadow: none;
  margin-top: 3rem;
  width: 60vw;
  min-width: 400px;
  max-width: 1200px;
  justify-content: flex-end;
`

export const Pre = styled.pre`
  background-color: #eee;
  padding: 0.5em 1em 0.5em 1em;
`

export const Explanation = styled.form`
  margin: 0 auto;
  box-shadow: none;
  margin-top: 3rem;
  width: 60vw;
  min-width: 400px;
  max-width: 1200px;
`

export const Grid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 25px); // ??????
  grid-template-columns: repeat(12, 1fr); // ???
  grid-auto-rows: 200px;
  grid-gap: 20px;
  justify-items: center;

  @media screen and (max-width: 1000px) {
    .fa-bars {
      padding-top: 5px;
      display: grid;
      grid-column: 1 / 2;
    }
  }

  @media screen and (max-width: 768px) {
    .fa-bars {
      padding-left: 1rem;
      display: grid;
      grid-column: 1 / 2;
    }
  }
`

export const Home = styled(Link)`
  font-size: 15px;
  grid-column: 1 / 4;
  color: black;
  :hover {
    text-decoration: none;
    color: black;
  }

  .fa {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 5 / 9;
  }

  @media screen and (max-width: 768px) {
    grid-column: 4 / 11;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background-color: white;
  padding: 16px 0;
  transition: 0.3s;
  border-bottom: rgba(0, 0, 0, 0);
`

export const Dropdown = styled.ul`
  font-size: 15px;
  grid-column: 9 / 10;
  color: #151516;

  .dropdown_menu {
    position: absolute;
    display: none;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown_menu {
    font-size: 15px;
    display: block;
    min-width: 100px;
    text-align: center;

    a {
      background-color: #fff;
      color: #151516;
      padding: 6px 16px;
      text-decoration: none;
      display: block;
      z-index: 9999;
    }

    a:hover {
      background-color: #151516;
      color: #fff;
    }
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const About = styled(Link)`
  font-size: 15px;
  grid-column: 10 / 11;
  color: #151516;
  :hover {
    text-decoration: none;
    color: #151516;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const Profile = styled(Link)`
  font-size: 15px;
  grid-column: 11 / 12;
  color: #151516;
  :hover {
    text-decoration: none;
    color: #151516;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const Tables = styled(Table)`
  width: 100%;

  th {
    border: 1px solid #151516;
  }
  td {
    text-align: center;
    line-height: 2.5rem;
    border: 1px solid #151516;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`

export const RenderButton = styled(Button)`
  margin: 0.5em auto;
  font-size: 15px;
  display: block;
  width: 30%;
`

export const PagninationBtn = styled.button`
  border: none;
  padding: 8px;
  background: blue;
  color: white;

  &:hover {
    background: rgb(91, 97, 254);
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: white;
    border: black;
    color: black;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`
