import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header.jsx"

import AlertSection from "./Components/AlertSection.jsx"
import FirstSection from "./Components/FirstSection.jsx"
import SecondSection from "./Components/SecondSection.jsx"
import ThirdSection from "./Components/ThirdSection.jsx"
import FourthSection from "./Components/FourthSection.jsx"
import FifthSection from "./Components/FifthSection.jsx"
import SixthSection from "./Components/SixthSection.jsx"
import Footer from "./Components/Footer.jsx"
import YouTubeVideos from "./Components/YouTubeVideos.jsx"
import Iphone from "./Components/Iphone.jsx"

function App() {
  return (
    <>
      <Header/>

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <AlertSection/>
              <FirstSection/>
              <SecondSection/>
              <ThirdSection/>
              <FourthSection/>
              <FifthSection/>
              <SixthSection/>
              <YouTubeVideos/>
            </>
          }
        />

        {/* iPhone PAGE */}
        <Route path="/iphone" element={<Iphone />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
