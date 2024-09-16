import Transition from "../components/transition";
import Footer from "../components/footer";



export default function Services() {
  const services = [
    {
      service: "Free Estimates",
      description:
        "No hidden fees, no commitments—just honest, free quotes. Call us today to get a free estimate and a complimentary tile cleaning demo to see the difference we can make!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 14 14"
        >
          <g
            fill="none"
            stroke="#E36414"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7.5 9l-3 .54L5 6.5L10.73.79a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42Z" />
            <path d="M12 9.5v3a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3" />
          </g>
        </svg>
      ),
    },
    {
      service: "Carpet Cleaning",
      description:
        "Don’t settle for less! Our advanced steam cleaning technology and certified technicians remove even the toughest stains and allergens, leaving your carpets looking and feeling brand new.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
        >
          <path
            fill="#E36414"
            d="M20.66 20L13.87 3.81q-.555-1.26-1.71-2.04C11.4 1.26 10.55 1 9.61 1q-1.26 0-2.31.63c-1.05.63-1.26.99-1.67 1.69S5 4.8 5 5.64L5.03 9h-3v5.45c.62-.28 1.28-.42 1.97-.42v-3h5c.57 0 1.04.2 1.43.59c.39.38.57.85.57 1.38v7.03H8.91A4.7 4.7 0 0 1 7.97 22H13v-9c0-.72-.2-1.38-.55-2S11.61 9.91 11 9.56C10.42 9.2 9.75 9 9 9H7V5.64c0-.72.25-1.33.76-1.85S8.89 3 9.61 3c.53 0 1.02.16 1.45.46s.75.68.94 1.15L18.46 20l-2.46.03V22h7v-1.97zM4 18c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"
          />
        </svg>
      ),
    },
    {
      service: "Upholstery Cleaning",
      description:
        "Don’t replace your furniture—refresh it! Our upholstery cleaning service removes stains, odors, and allergens, reviving your sofas, chairs, and more.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 256 256"
        >
          <path
            fill="#E36414"
            d="M238 107.37V72a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v35.37A14 14 0 0 0 10 120v48a14 14 0 0 0 14 14h10v18a6 6 0 0 0 12 0v-18h164v18a6 6 0 0 0 12 0v-18h10a14 14 0 0 0 14-14v-48a14 14 0 0 0-8-12.63M226 72v34h-10a14 14 0 0 0-14 14v18h-68V70h90a2 2 0 0 1 2 2M32 70h90v68H54v-18a14 14 0 0 0-14-14H30V72a2 2 0 0 1 2-2m202 98a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v24a6 6 0 0 0 6 6h160a6 6 0 0 0 6-6v-24a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z"
          />
        </svg>
      ),
    },
    {
      service: "Area Rug Cleaning",
      description:
        "Keep your area rugs looking fresh and vibrant with our deep cleaning services. Whether it’s a cherished heirloom or a modern centerpiece, we’ll restore its beauty and extend its life.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 256 256"
        >
          <path
            fill="#E36414"
            d="M200 18a6 6 0 0 0-6 6v18h-36V24a6 6 0 0 0-12 0v18h-36V24a6 6 0 0 0-12 0v18H62V24a6 6 0 0 0-12 0v208a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0V24a6 6 0 0 0-6-6M62 54h132v148H62Zm66 120a6 6 0 0 0 5.14-2.91l24-40a6 6 0 0 0 0-6.18l-24-40a6 6 0 0 0-10.28 0l-24 40a6 6 0 0 0 0 6.18l24 40A6 6 0 0 0 128 174m0-74.34L145 128l-17 28.34L111 128Z"
          />
        </svg>
      ),
    },
    {
      service: "Pet Stain and Odor Elimination",
      description:
        "Love your pets but not the mess? Our specialized cleaning solutions tackle pet stains and odors at the source, leaving your home fresh and clean without harsh chemicals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
        >
          <path
            fill="#E36414"
            d="M4.5 12.125q-1.05 0-1.775-.725T2 9.625t.725-1.775T4.5 7.125t1.775.725T7 9.625T6.275 11.4t-1.775.725m4.5-4q-1.05 0-1.775-.725T6.5 5.625t.725-1.775T9 3.125t1.775.725t.725 1.775t-.725 1.775T9 8.125m6 0q-1.05 0-1.775-.725T12.5 5.625t.725-1.775T15 3.125t1.775.725t.725 1.775t-.725 1.775T15 8.125m4.5 4q-1.05 0-1.775-.725T17 9.625t.725-1.775t1.775-.725t1.775.725T22 9.625t-.725 1.775t-1.775.725m-12.85 10q-1.125 0-1.888-.862T4 19.225q0-1.3.888-2.275t1.762-1.925q.725-.775 1.25-1.687t1.25-1.713q.55-.65 1.275-1.075T12 10.125t1.575.4t1.275 1.05q.7.8 1.238 1.725t1.262 1.725q.875.95 1.762 1.925T20 19.225q0 1.175-.763 2.038t-1.887.862q-1.35 0-2.675-.225T12 21.675t-2.675.225t-2.675.225"
          />
        </svg>
      ),
    },
    {
      service: "Carpet Repairs",
      description:
        "Damaged carpet? We’re here to help! From patching to seam repairs, we bring life back to your carpet, saving you the cost of replacement.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
        >
          <path
            fill="#E36414"
            d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.8 3.8 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.8 3.8 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"
          />
        </svg>
      ),
    },
    {
      service: "Carpet Stretching",
      description:
        "Say goodbye to unsightly ripples and waves in your carpet. Our stretching services smooth out imperfections, reduce tripping hazards, and improve the look of your floors instantly.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 36 36"
        >
          <path
            fill="#E36414"
            d="M20 14h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-.4 6.6h-3.2v-5.2h3.2Z"
            className="clr-i-outline clr-i-outline-path-1"
          />
          <path
            fill="#E36414"
            d="m33.71 12.38l-4.09-4.09a1 1 0 0 0-.7-.29h-5V6.05A2 2 0 0 0 22 4h-8.16A1.92 1.92 0 0 0 12 6.05V8H7.08a1 1 0 0 0-.71.29l-4.08 4.09a1 1 0 0 0-.29.71V28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V13.08a1 1 0 0 0-.29-.7M14 6h8v2h-8Zm18 11H22v1.93h10V28H4v-9.07h10V17H4v-3.5L7.5 10h21l3.5 3.5Z"
            className="clr-i-outline clr-i-outline-path-2"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
      ),
    },
    {
      service: "Tile & Grout Deep Cleaning",
      description:
        "Restore the shine to your tiles and the original color to your grout. Our powerful cleaning methods penetrate deep to remove dirt, mildew, and grime that regular cleaning can’t touch.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            stroke="#E36414"
            strokeLinejoin="round"
            strokeWidth="4"
          >
            <rect width="36" height="36" x="6" y="6" rx="3" />
            <path
              strokeLinecap="round"
              d="M28 6L6 28m36-8L20 42M40 8L8 40m4-18l7 7m10-10l7 7"
            />
          </g>
        </svg>
      ),
    },
    {
      service: "Pressure Washing",
      description:
        "Bring back the curb appeal of your home with our professional pressure washing service. From driveways to siding, we remove dirt, mold, and mildew for a fresh, clean look.",
      icon: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.08333 6.25V0H0V37.5H2.08333V16.6667H5.20833V18.75H19.7917V15.2781H22.9167C23.4692 15.2781 23.9991 15.4976 24.3898 15.8883C24.7805 16.279 25 16.8089 25 17.3615V17.7083H22.9167V26.0417H37.5V17.7083H35.4167V16.6667C35.4167 10.9135 30.7531 6.25 25 6.25H19.7917V4.16667H13.5417V2.08333H20.8333C21.1096 2.08333 21.3746 1.97359 21.5699 1.77824C21.7653 1.58289 21.875 1.31793 21.875 1.04167C21.875 0.765399 21.7653 0.500448 21.5699 0.305097C21.3746 0.109747 21.1096 0 20.8333 0H4.16667C3.8904 0 3.62545 0.109747 3.4301 0.305097C3.23475 0.500448 3.125 0.765399 3.125 1.04167C3.125 1.31793 3.23475 1.58289 3.4301 1.77824C3.62545 1.97359 3.8904 2.08333 4.16667 2.08333H11.4583V4.16667H5.20833V6.25H2.08333ZM33.3333 16.6667C33.3333 14.4565 32.4554 12.3369 30.8926 10.7741C29.3298 9.21131 27.2101 8.33333 25 8.33333H19.7917V13.1948H22.9167C24.0217 13.1948 25.0815 13.6338 25.8629 14.4152C26.6443 15.1966 27.0833 16.2564 27.0833 17.3615V17.7083H33.3333V16.6667ZM35.4167 19.7917H25V23.9583H35.4167V19.7917ZM17.7083 6.25H7.29167V16.6667H17.7083V6.25ZM5.20833 14.5833H2.08333V8.33333H5.20833V14.5833Z"
            fill="#E36414"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.7291 37.4999C32.7426 37.4999 34.3749 35.8041 34.3749 33.7124C34.3749 30.3978 30.7291 27.0833 30.7291 27.0833C30.7291 27.0833 27.0833 30.3978 27.0833 33.7124C27.0833 35.8041 28.7155 37.4999 30.7291 37.4999ZM30.7291 35.4166C31.5176 35.4166 32.2916 34.7291 32.2916 33.7124C32.2916 32.7416 31.7166 31.5385 30.8718 30.3864C30.8248 30.3224 30.7773 30.2588 30.7291 30.1958C30.6812 30.2583 30.6333 30.3218 30.5864 30.3864C29.7426 31.5374 29.1666 32.7405 29.1666 33.7124C29.1666 34.7291 29.9405 35.4166 30.7291 35.4166Z"
            fill="#E36414"
          />
        </svg>
      ),
    },
    {
      service: "Streak-Free Window Cleaning",
      description:
        "Enjoy crystal-clear views with our professional window cleaning service. We eliminate streaks, spots, and grime, leaving your windows spotless and gleaming.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
        >
          <path
            fill="#E36414"
            d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm8-8v6h6v-6zm0-2h6V5h-6zm-2 0V5H5v6zm0 2H5v6h6z"
          />
        </svg>
      ),
    },
    {
      service: "Emergency Water Extraction",
      description:
        "Water damage can’t wait. Our rapid response team is available 24/7 to extract water and prevent further damage to your home. Call us immediately in an emergency!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
        >
          <path
            fill="#E36414"
            d="M12 22.025q-.4 0-.763-.15t-.662-.425L2.55 13.425q-.275-.3-.425-.663T1.975 12t.15-.775t.425-.65l8.025-8.025q.3-.3.663-.438T12 1.975t.775.138t.65.437l8.025 8.025q.3.275.438.65t.137.775t-.137.763t-.438.662l-8.025 8.025q-.275.275-.65.425t-.775.15m0-2L20.025 12L12 3.975L3.975 12zM11 13h2V7h-2zm1 3q.425 0 .713-.288T13 15t-.288-.712T12 14t-.712.288T11 15t.288.713T12 16m0-4"
          />
        </svg>
      ),
    },
    {
      service: "Mini-Blinds Cleaning",
      description:
        "Mini-blinds can collect dust and grime, but they don’t have to be a hassle. We provide fast and thorough cleaning, making your blinds look like new.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
        >
          <path
            fill="#E36414"
            d="M2 21v-2h2V3h16v16h2v2zM6 7h8V5H6zm0 4h8V9H6zm0 8h12v-6h-2v1.825q.35.25.55.625t.2.8q0 .725-.513 1.238T15 18t-1.237-.513t-.513-1.237q0-.425.2-.8t.55-.625V13H6zM16 7h2V5h-2zm0 4h2V9h-2z"
          />
        </svg>
      ),
    },
    {
      service: "Mattresses",
      description:
        "Sleep better on a clean mattress. Our deep cleaning service removes dust mites, allergens, and stains, promoting a healthier sleeping environment for you and your family.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
        >
          <path
            fill="#E36414"
            d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2zm11-9h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"
          />
        </svg>
      ),
    },
    {
      service: "Solar Panel Cleaning",
      description:
        "Keep your solar panels operating at peak efficiency with our specialized cleaning service. We remove dirt and debris, ensuring your investment delivers maximum energy.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
        >
          <path
            fill="#E36414"
            d="m2 22l2-10h16l2 10zM3 4V2h3v2zm1.45 16H11v-2H4.85zM6.125 9.325L4.7 7.925L6.825 5.8L8.25 7.2zM5.25 16H11v-2H5.65zM12 7Q9.925 7 8.463 5.537T7 2h2q0 1.25.875 2.125T12 5t2.125-.875T15 2h2q0 2.075-1.463 3.538T12 7m-1 4V8h2v3zm2 9h6.55l-.4-2H13zm0-4h5.75l-.4-2H13zm4.875-6.675l-2.1-2.125l1.4-1.4L19.3 7.9zM18 4V2h3v2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Transition>
      <div className="container bg-accent">
        <h2 className="fw-semi-bold fs-300 text-neutral">
          HOME <span className="fw-regular"> &gt; SERVICES</span>
        </h2>
        <h1 className="fw-bold fs-800 text-neutral">SERVICES</h1>
      </div>
      <section className="container">
        <p className="fw-medium fs-400 text-primary">
          Get premium and reliable services for facilities with a 100%
          satisfaction guaranteed! Here we offer a multitude of services ranging
          from carpet or upholstery to window cleaning! For questions regarding
          our provided services, please do not hesitate to give us a call!
        </p>
        <p className="fw-regular fs-400 text-primary">
          There's much we have to offer. So, Take your time, look around, and
          learn all there is to know about us.
        </p>
      </section>
      <ul>
        {services.map((service,key) => {
          return (
            <li key={key}>
              {service.icon}
              <h2 className="fw-semi-bold fs-600 text-accent-500">
                {service.service}
              </h2>
              <p className="fw-regular fs-400 text-secondary">
                {service.description}
              </p>
            </li>
          );
        })}
      </ul>
      <Footer/>
    </Transition>
  );
}
