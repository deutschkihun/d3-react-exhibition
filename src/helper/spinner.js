import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const LoadingViewTitle = styled.h1`
  font-family: ${(p) => p.theme.fontFamily};
  color: ${(p) => p.theme.primaryTextColor};
  font-size: 24px;
  font-weight: 200;
  margin: 16px 0px 4px;
`;

export const LoadingViewBody = styled.p`
  font-family: ${(p) => p.theme.fontFamily};
  color: ${(p) => p.theme.primaryTextColor};
  font-size: 16px;
  font-weight: 400;
  margin: 8px 0px 8px 0px;
  white-space: pre-wrap;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background-color: #151516;
  padding: 16px 0;
  transition: 0.3s;
  border-bottom: rgba(0, 0, 0, 0);
`;

export const Sidebar = styled.nav`
  @media screen and (min-width: 1000px) {
    display: none;
  }

  /* tablet pc */
  @media screen and (max-width: 1000px) {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 200px;
    width: 100%;
    height: 100%;
    background: #313336;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
    }

    .links a {
      display: flex;
      align-items: center;
      font-size: 15px;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: #fff;
      transition: all 0.3s linear;
      letter-spacing: 0.1rem;
      text-decoration: none;
      justify-content: space-between;
    }
  }
`;

export const Seperator = styled.main`
  margin-top: 150px;
  min-height: calc(100vh - 150px);
`;

export const Grid = styled.nav`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 25px); // 높이
  grid-template-columns: repeat(12, 1fr); // 단
  grid-auto-rows: 200px;
  grid-gap: 20px;
  justify-items: center;

  .fa-bars,
  .inactive {
    display: none;
  }

  .fa-search,
  .fa-times {
    padding-top: 5px;
    display: grid;
    grid-column: 12 / 13;
    width: 1rem;
  }

  /* pc display min  */
  @media screen and (max-width: 1119px) {
    .fa-bars {
      padding-top: 5px;
      width: 1rem;
      display: grid;
      grid-column: 1 / 2;
    }
  }

  /* tablet pc and mobile device */
  @media screen and (max-width: 600px) {
    .fa-bars {
      margin-left: 1rem;
    }

    .fa-search,
    .fa-times {
      margin-right: 1rem;
    }
  }
`;

export const Home = styled(Link)`
  font-size: 15px;
  font-weight: 900;
  grid-column: 1 / 4;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }

  /* pc display min  */
  @media screen and (max-width: 1119px) {
    grid-column: 5 / 9;
  }

  /* mobile device */
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const About = styled(Link)`
  font-size: 15px;
  grid-column: 9 / 10;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }

  /* pc display min  */
  @media screen and (max-width: 1119px) {
    display: none;
  }
`;

export const Project = styled(Link)`
  font-size: 15px;
  grid-column: 10 / 11;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }

  /* pc display min  */
  @media screen and (max-width: 1119px) {
    display: none;
  }
`;

export const Contact = styled(Link)`
  font-size: 15px;
  grid-column: 11 / 12;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }

  /* pc display min  */
  @media screen and (max-width: 1119px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const SearchContainerWrap = styled.div`
  overflow: visible;
  position: absolute;
  width: 100%;
  margin: 0 auto;
  height: 400px;
  margin-top: 57px;
  z-index: 10;
  outline: 0;
  background-color: #fff;
  background: #111;

  .container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    padding: 0 40px;
    margin: 150px auto;
  }
`;

export const SearchForm = styled.form`
  padding: 0;
  border: 0;
  vertical-align: baseline;
  box-sizing: border-box;

  .input-search-icon {
    position: absolute;
    top: 1.5rem;
    left: 50px;
    transform: translateY(-50%);
    width: 30px;
  }
`;

export const Input = styled.input`
  font-size: 24px;
  height: 48px;
  border-radius: 12px;
  padding-left: 24px;
  margin-bottom: 1rem;
  border: 1px solid #fff;
  background-color: #313336;
  width: 100%;
  color: #c5cad5;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: 12px;
  padding-left: 24px;
  background-color: #313336;
  border: 1px solid #fff;
  height: 30vh;
  color: #fff;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.85);
  z-index: 0;
`;

export const KeywordForm = styled.div`
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  margin: 20px 0;
  color: #fff;

  span {
    display: inline-block;
    font-size: 14px;
    margin-right: 6px;
    margin-bottom: 0.5rem;

    a {
      white-space: nowrap !important;
      padding: 10px;
      display: block;
      color: #32353a;
      border-radius: 8px;
      font-size: 14px !important;
      line-height: 1;
      color: #fff;
      background-color: #313336;
      text-decoration: none;
    }
  }
`;

export const Grid1 = styled.div`
  max-width: 70vw;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 100px); // 높이
  grid-template-columns: repeat(2, 1fr); // 단
  grid-gap: 24px;
  padding: 1rem 0;

  img {
    width: 300px;
  }
`;

export const Grid2 = styled.div`
  max-width: 70vw;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 200px); // 높이
  grid-template-columns: repeat(1, 1fr); // 단
  justify-items: center;
  padding: 1rem 0;

  h1 {
    margin: 0;
    font-size: 110px;
    font-weight: 700;
  }

  h4 {
    margin: 0;
    font-size: 30px;
    text-align: justify;
  }

  a {
    color: #fff;
  }
`;

export const Grid3 = styled.div`
  max-width: 70vw;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 50px); // 높이
  grid-template-columns: repeat(2, 1fr); // 단
  justify-items: center;
  padding: 1rem 0;

  a,
  a:hover {
    color: #fff;
    text-decoration: none;
  }

  button {
    width: 100%;
    max-width: 200px;
  }
`;

export const Grid4 = styled.div`
  max-width: 70vw;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(3, 1fr); // 높이
  grid-template-columns: repeat(3, 1fr); // 단
  grid-gap: 20px;
  justify-items: center;
  padding: 0.5rem 0;

  /* pc display min  */
  @media screen and (max-width: 1000px) {
    grid-template-rows: repeat(4, 1fr); // 높이
    grid-template-columns: repeat(2, 1fr); // 단
  }

  /* tablet pc and mobile device */
  @media screen and (max-width: 500px) {
    grid-template-rows: repeat(7, 1fr); // 높이
    grid-template-columns: repeat(1, 1fr); // 단
  }
`;

export const Profile = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 450px); // 높이
  grid-template-columns: repeat(1, 12); // 단
  justify-items: center;
  padding: 1rem 0;

  img {
    margin: auto;
  }
`;

export const Announcement = styled.div`
  position: relative;
  z-index: 1;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 20px 0;
  background-color: #151516;

  .container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    padding: 0 40px;
    margin: auto;

    p {
      text-align: center;
      font-size: 20px;
      margin-bottom: 0;
      color: #c5cad5;
    }
  }
`;

export const Form = styled.form`
  background: #313336;
  border-radius: 0.25rem;
  box-shadow: 0 20px 25px -5px rgba(255, 255, 255, 0.15),
    0 10px 10px -5px rgba(255, 255, 255, 0.1);
  padding: 2rem 2.5rem;
  max-width: 70vw;
  width: 100%;
  margin: 50px auto;

  img {
    width: 100%;
    height: 50%;
  }

  h3 {
    text-align: center;
    font-size: 20px;
  }
  p {
    text-align: justify;
  }

  button {
    width: 100%;
  }
`;

export const Btn = styled(Button)`
  width: 100%;
`;

export const Footer = styled.footer`
  position: relative;
  padding: 40px 0;
  overflow: hidden;
  z-index: 0;
  background: #151516;

  .container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    padding: 0 40px;
    margin: auto;

    .row {
      margin-right: -12px;
      margin-left: -12px;
      font-size: 0;

      .footer-category {
        position: relative;
        min-height: 1px;
        display: inline-block;
        padding-left: 12px;
        padding-right: 12px;
        vertical-align: top;
        width: 25%;

        h2 {
          height: 20px;
          font-size: 14px;
          margin-bottom: 20px;
          opacity: 0.7;
          color: #fff;
        }

        a {
          display: block;
          color: #fff;
          font-size: 16px;
          margin-bottom: 10px;
          transition: 0.3s;
        }
      }
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
`;

export const SildeContaier = styled.div`
  padding: 1rem;
  border: 0.2rem solid #ececec;
  width: 70vw;
  margin: auto;
  border-radius: 8px;
  color: #212529;
  margin-bottom: 3rem;
  height: 500px;
`;

export const SubSilder = styled.div`
  padding: 1rem;
  border: 0.2rem solid #ececec;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 단
  grid-template-rows: repeat(1, 420px); // 높이
  justify-items: center;

  img {
    width: 300px;
    margin: auto;
  }

  h2 {
    margin: auto;
    color: #fff;
    text-align: center;
  }

  p {
    font-size: 25px;
    color: #fff;
    text-align: justify;
    padding-top: 2rem;
  }
`;

export const Dropdown = styled.ul`
  font-size: 15px;
  grid-column: 8 / 9;
  color: white;

  img {
    width: 15px;
    margin: 2px;
  }

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
      background-color: #151516;
      color: white;
      padding: 6px 16px;
      text-decoration: none;
      display: block;
    }

    a:hover {
      background-color: #fff;
      color: #151516;
    }
  }
  /* pc display min  */
  @media screen and (max-width: 1119px) {
    display: none;
  }
`;
