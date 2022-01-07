import React, { Suspense } from 'react' 
import styled from "styled-components";
import { Switch, Route as Router, BrowserRouter } from "react-router-dom";
import { Landing } from './components/Landing/Landing';
import { Error } from './components/Error/Error';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { SVG } from './components/Visualization/SVG/SVG'
import { About } from './components/About/about';
import { Profile } from './components/Profile/profile';
import { ChartBasic } from './components/Visualization/ChartBasic/ChartBasic';
import { LineChart } from './components/Visualization/LineChart/LineChart';
import { HeatMap } from './components/Visualization/HeatMap/HeatMap'
import { BarChart } from './components/Visualization/BarChart/BarChart'

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
            <Router exact path="/SVG" component={SVG} />
            <Router exact path="/ChartBasic" component={ChartBasic} />
            <Router exact path="/LineChart" component={LineChart} />
            <Router exact path="/BarChart" component={BarChart} />
            <Router exact path="/HeatMap" component={HeatMap} />
            <Router exact path="/about" component={About} />
            <Router exact path="/profile" component={Profile} />
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
