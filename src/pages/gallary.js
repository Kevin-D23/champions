export default function Gallary() {
  return (
    <div>
      <section className="container bg-accent">
        <h2 className="fw-semi-bold fs-300 text-neutral">
          HOME <span className="fw-regular"> &gt; GALLARY</span>
        </h2>
        <h1 className="fw-bold fs-800 text-neutral">GALLARY</h1>
      </section>
      <section>
        <hr />
        <h1 className="fw-semi-bold fs-500 text-accent-300">Check Us Out</h1>
        <p className="fw-regular fs-400 text-primary">
          Here is some of the work we have done for our satisfied customers.
          Feel free to ask us about our process!
        </p>
      </section>
      <section>
        <ul className="fw-bold fs-500 text-accent-300">
          <li>All</li>
          <li>Carpet</li>
          <li>Upholstery</li>
          <li>Windows</li>
          <li>Solar</li>
          <li>Tile</li>
        </ul>
      </section>
    </div>
  );
}
