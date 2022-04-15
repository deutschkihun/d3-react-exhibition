import React, { Suspense } from 'react' 
import { Switch, Route as Router, BrowserRouter } from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import { ErrorPage } from './pages/ErrorPage';
import { AboutPage } from './pages/AboutPage'
import { ProfilePage } from './pages/ProfilePage'
import { Headers } from './components/Headers';
import { Footer } from './components/Footer';
import { SVG } from './pages/SVG/SVG'
import { ChartBasic } from './pages/ChartBasic/ChartBasic';
import { LineChart } from './pages/LineChart/LineChart';
import { HeatMap } from './pages/HeatMap/HeatMap'
import { BarChart } from './pages/BarChart/BarChart'
import { InteractiveChart } from './pages/InteractiveChart/InteractiveChart';
import { DataUnderstanding } from './pages/DataUnderstanding/DataUnderstanding';
import { Seperator } from './ui-lib/lib'

function App() {
  return (
    <>
    <Suspense fallback={(<div>Loading...</div>)}>
    <BrowserRouter>
      <Headers />
        <Seperator>
          <Switch>
            <Router exact path="/" component={LandingPage} />
            <Router exact path="/SVG" component={SVG} />
            <Router exact path="/DataUnderstanding" component={DataUnderstanding} />
            <Router exact path="/ChartBasic" component={ChartBasic} />
            <Router exact path="/LineChart" component={LineChart} />
            <Router exact path="/BarChart" component={BarChart} />
            <Router exact path="/HeatMap" component={HeatMap} />
            <Router exact path="/InteractiveChart" component={InteractiveChart} />
            <Router exact path="/about" component={AboutPage} />
            <Router exact path="/profile" component={ProfilePage} />
            <Router path="*" component={ErrorPage} />
          </Switch>
        </Seperator>
      <Footer />
    </BrowserRouter>
    </Suspense>
    </>
  );
}

export default App;
