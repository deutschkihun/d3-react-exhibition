
import styled from "styled-components"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

export const Wrapper = styled.div`
    padding-top:50px;
    flex-direction:column;
    text-align:center;
    justify-content: center;
    font-size: 3rem;
    padding-left:10vw;
    padding-right:10vw;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Message = styled.p`
  font-size: 17px;
`;

export const Btn = styled(Button)`
    margin: 0.5em auto;
    font-size: 15px;
    display: block;
`;

export const ContainerRef = styled.div``;

export const FooterWrapper = styled.div`
    height:80px;
    display: flex;
    fiex-direction:column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
`;

export const Seperator = styled.div`
    padding-top:69px;
    min-height:calc(100vh - 80px);
`

export const VizContainer = styled.form`
  width: 60vw;
  min-width: 400px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 6rem;
`;

export const Container = styled.div`
    width: 75%;
    margin: 3rem auto;
`;

export const Images = styled(Image)`
    width: 100%;
    max-height: 150px;
    padding: 1em;
` 
export const CheckList = styled.span``;

export const Menu = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
  background-color: white;
  position: fixed;
  z-index:5;
  width:100%;
`;


export const VizWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0px;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export const Content = styled.div`
    margin: 0 auto;
    box-shadow: none;
    margin-top: 3rem;
    width: 60vw;
    min-width: 400px;
    max-width: 1200px;
    justify-content:flex-end;
`;

export const Code = styled.code``;

export const Pre = styled.pre`
    background-color:#eee;
    padding: 0.5em 1em 0.5em 1em;
`

export const Explanation = styled.form`
  margin: 0 auto;
  box-shadow: none;
  margin-top: 3rem;
  width: 60vw;
  min-width: 400px;
  max-width: 1200px;
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 25px); // 높이
  grid-template-columns: repeat(12, 1fr); // 단
  grid-auto-rows: 200px;
  grid-gap: 20px;
  justify-items: center;

  .fa-bars {
    display: none;
  }

  .fa-times {
    display: none;
  }

  .fa-search,
  .fa-times {
    padding-top: 5px;
    font-size: 15px;
    padding-right: 1rem;
    display: grid;
    grid-column: 12 / 13;
  }

  .inactive {
    display: none;
  }

  /* pc display min  */
  @media screen and (max-width: 1000px) {
    .fa-bars {
      padding-top: 5px;
      font-size: 20px;
      display: grid;
      grid-column: 1 / 2;
    }

    .fa-search {
      padding-top: 5px;
      font-size: 20px;
      padding-right: 1rem;
      display: grid;
      grid-column: 12 / 13;
    }
  }

  /* tablet pc and mobile device */
  @media screen and (max-width: 768px) {
    .fa-bars {
      font-size: 20px;
      padding-left: 1rem;
      display: grid;
      grid-column: 1 / 2;
    }

    .fa-search {
      font-size: 20px;
      padding-left: 1rem;
      display: grid;
      grid-column: 12 / 13;
    }
  }
`;

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

  /* pc display min  */
  @media screen and (max-width: 1000px) {
    grid-column: 5 / 9;
  }

  /* tablet pc */
  @media screen and (max-width: 768px) {
    font-size: 18px;
    grid-column: 4 / 11;
  }

  /* mobile device */
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

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
`;

export const Dropdown = styled.ul`
  font-size: 15px;
  grid-column: 9 / 10;
  color: black;

  .dropdown_menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    display: none;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border: 1px solid #fff;
    z-index: 1;
  }

  .dropdown:hover .dropdown_menu {
    font-size: 12px;
    display: block;
    width: 100px;
    text-align: center;

    a {
      background-color: white;
      color: white;
      padding: 6px 16px;
      text-decoration: none;
      display: block;
      z-index: 9999;
    }

    a:hover {
      background-color: white;
      color: #151516;
    }
  }
  /* pc display min  */
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const About = styled(Link)`
  font-size: 15px;
  grid-column: 10 / 11;
  color: #151516;
  :hover {
    text-decoration: none;
    color: #151516;
  }

  /* pc display min  */
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Profile = styled(Link)`
  font-size: 15px;
  grid-column: 11 / 12;
  color: #151516;
  :hover {
    text-decoration: none;
    color: #151516;
  }

  /* pc display min  */
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;