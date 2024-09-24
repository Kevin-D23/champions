import Transition from "../components/transition";
import Footer from "../components/footer";
import "../styles/gallery.css";
import { useState } from "react";

export default function Gallery() {
  const [active, setActive] = useState(".gallery-all");
  const [openedImage, setOpenedImage] = useState(<></>);

  function handleClick(className) {
    let newActive = document.querySelector(className);
    let oldActive = document.querySelector(active);

    oldActive.classList.remove("gallery-active");
    newActive.classList.add("gallery-active");
    setActive(className);
  }

  const importAll = (r) => {
    return r.keys().map(r);
  };

  const carpetImages = importAll(
    require.context(
      "../images/gallery-imgs/carpet",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const solarImages = importAll(
    require.context("../images/gallery-imgs/solar", false, /\.(png|jpe?g|svg)$/)
  );

  const tileImages = importAll(
    require.context("../images/gallery-imgs/tile", false, /\.(png|jpe?g|svg)$/)
  );

  const windowImages = importAll(
    require.context(
      "../images/gallery-imgs/windows",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const upholsteryImages = importAll(
    require.context(
      "../images/gallery-imgs/upholstery",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const otherImages = importAll(
    require.context("../images/gallery-imgs/other", false, /\.(png|jpe?g|svg)$/)
  );

  const allImages = [].concat(
    carpetImages,
    upholsteryImages,
    windowImages,
    tileImages,
    solarImages,
    otherImages
  );

  function openImage(image) {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    setOpenedImage(
      <div className="open-image-container" onClick={() => closeImage()}>
          <button onClick={() => closeImage()}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5rem"
            width="1.5rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>

          <img src={image} alt="" onClick={(e) => e.stopPropagation()}/>

      </div>
    );
  }

  function closeImage() {
    document.body.style.overflow = "";
    document.body.style.height = "";
    setOpenedImage(<></>)
  }

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      closeImage()
    }
  };

  return (
    <Transition>
      <section className="container bg-accent header">
        <h2 className="fw-semi-bold fs-300 text-neutral">
          HOME <span className="fw-regular"> &gt; GALLERY</span>
        </h2>
        <h1 className="fw-bold fs-800 text-neutral">GALLERY</h1>
      </section>
      <section className="gallery-container">
        <div className="contact-header">
          <div></div>
          <h2 className="fw-semi-bold fs-500 text-accent-300">Check Us Out</h2>
        </div>
        <p className="fw-regular fs-400 text-primary">
          Here is some of the work we have done for our satisfied customers.
          Feel free to ask us about our process!
        </p>
        <ul className="fw-bold fs-500 text-accent-300">
          <li
            className="gallery-all gallery-active"
            onClick={() => handleClick(".gallery-all")}
          >
            All
          </li>
          <li
            className="gallery-carpet"
            onClick={() => handleClick(".gallery-carpet")}
          >
            Carpet
          </li>
          <li
            className="gallery-upholstery"
            onClick={() => handleClick(".gallery-upholstery")}
          >
            Upholstery
          </li>
          <li
            className="gallery-windows"
            onClick={() => handleClick(".gallery-windows")}
          >
            Windows
          </li>
          <li
            className="gallery-solar"
            onClick={() => handleClick(".gallery-solar")}
          >
            Solar
          </li>
          <li
            className="gallery-tile"
            onClick={() => handleClick(".gallery-tile")}
          >
            Tile
          </li>
        </ul>
        <div className="gallery-imgs-container">
          {active === ".gallery-all"
            ? allImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`img-${index}`}
                  onClick={() => openImage(image)}
                />
              ))
            : active === ".gallery-carpet"
            ? carpetImages.map((image, index) => (
                <img key={index} src={image} alt={`img-${index}`} />
              ))
            : active === ".gallery-windows"
            ? windowImages.map((image, index) => (
                <img key={index} src={image} alt={`img-${index}`} />
              ))
            : active === ".gallery-tile"
            ? tileImages.map((image, index) => (
                <img key={index} src={image} alt={`img-${index}`} />
              ))
            : active === ".gallery-upholstery"
            ? upholsteryImages.map((image, index) => (
                <img key={index} src={image} alt={`img-${index}`} />
              ))
            : active === ".gallery-solar"
            ? solarImages.map((image, index) => (
                <img key={index} src={image} alt={`img-${index}`} />
              ))
            : otherImages.map((image, index) => (
                <img key={index} src={image} alt={`img-${index}`} />
              ))}
        </div>
        {openedImage}
      </section>
      <Footer />
    </Transition>
  );
}
