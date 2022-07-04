import React, { Suspense } from 'react'
import { Routes, Route as Router, BrowserRouter } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ErrorPage } from './pages/ErrorPage'
import { AboutPage } from './pages/AboutPage'
import { ProfilePage } from './pages/ProfilePage'
import { Headers } from './components/Headers'
import { Footer } from './components/Footer'
import { SVG } from './pages/SVG/SVG'
import { ChartBasic } from './pages/ChartBasic/ChartBasic'
import { LineChart } from './pages/LineChart/LineChart'
import { HeatMap } from './pages/HeatMap/HeatMap'
import { BarChart } from './pages/BarChart/BarChart'
import { InteractiveChart } from './pages/InteractiveChart/InteractiveChart'
import { DataUnderstanding } from './pages/DataUnderstanding/DataUnderstanding'
import { Seperator, GlobalStyle } from './ui-lib/lib'
import { Parsingcsv } from './pages/ParsingCSV/ParsingCSV'
import { Scatterplot } from './pages/Scatterplot/Scatterplot'
import { LoadingView } from './helper/LoadingView'
import { Prerequisite } from './pages/Prerequisite/Prerequisite'

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<LoadingView title="Loading ..." body="please wait a moment" />}>
        <BrowserRouter>
          <Headers />
          <Seperator>
            <Routes>
              <Router exact path="/" element={<LandingPage />} />
              <Router exact path="/SVG" element={<SVG />} />
              <Router exact path="/DataUnderstanding" element={<DataUnderstanding />} />
              <Router exact path="/ChartBasic" element={<ChartBasic />} />
              <Router exact path="/LineChart" element={<LineChart />} />
              <Router exact path="/BarChart" element={<BarChart />} />
              <Router exact path="/HeatMap" element={<HeatMap />} />
              <Router exact path="/InteractiveChart" element={<InteractiveChart />} />
              <Router exact path="/about" element={<AboutPage />} />
              <Router exact path="/profile" element={<ProfilePage />} />
              <Router exact path="/parsingcsv" element={<Parsingcsv />} />
              <Router exact path="/scatterplot" element={<Scatterplot />} />
              <Router exact path="/Prerequisite" element={<Prerequisite />} />
              <Router path="*" element={<ErrorPage />} />
            </Routes>
          </Seperator>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
