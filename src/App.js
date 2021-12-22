import React, { Suspense } from 'react' 
import { Switch, Route as Router, BrowserRouter } from "react-router-dom";
import { Landing } from './components/Landing/Landing';
import { Error } from './components/Error/Error';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { SVG } from './components/Visualization/SVG/SVG'
import styled from "styled-components";

const Seperator = styled.div`
  padding-top:69px;
  min-height:calc(100vh - 80px);
`

function App() {
  return (
    <>
    <Suspense fallback={(<div>Loading...</div>)}>
    <BrowserRouter>
      <Navbar/>
        <Seperator>
          <Switch>
            <Router exact path="/" component={Landing} />
            <Router exact path="/svg" component={SVG} />
            <Router path="*" component={Error} />
          </Switch>
        </Seperator>
      <Footer />
    </BrowserRouter>
    </Suspense>
    </>
  );
}

export default App;
