import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
// import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Gallery from "./pages/gallery";
import Navbar from "./components/navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <a className="call-btn-fixed" href="tel:+15309667141">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle cx="25" cy="25" r="25" fill="#FF7B00" />
            <path
              d="M29.5 17.8333C30.2735 17.8333 31.0154 18.1406 31.5624 18.6876C32.1094 19.2346 32.4167 19.9765 32.4167 20.75M29.5 12C31.8206 12 34.0462 12.9219 35.6872 14.5628C37.3281 16.2038 38.25 18.4294 38.25 20.75M14.9167 13.4583H20.75L23.6667 20.75L20.0208 22.9375C21.5826 26.1043 24.1457 28.6674 27.3125 30.2292L29.5 26.5833L36.7917 29.5V35.3333C36.7917 36.1069 36.4844 36.8487 35.9374 37.3957C35.3904 37.9427 34.6485 38.25 33.875 38.25C28.1864 37.9043 22.8211 35.4886 18.7912 31.4588C14.7614 27.4289 12.3457 22.0636 12 16.375C12 15.6015 12.3073 14.8596 12.8543 14.3126C13.4013 13.7656 14.1431 13.4583 14.9167 13.4583Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </AnimatePresence>
    </div>
  );
}

export default App;
