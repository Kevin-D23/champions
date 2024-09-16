export default function Callbtn() {
  return (
    <a className="call-btn" href="tel:+15309667141">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35px"
        height="35px"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#ff9500"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2m10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6"
        />
      </svg>
      <div>
        <h2 className="fw-semi-bold fs-400 text-secondary">Call us now</h2>
        <h2 className="fw-semi-bold fs-400 text-accent-400">530-966-7141</h2>
      </div>
    </a>
  );
}
