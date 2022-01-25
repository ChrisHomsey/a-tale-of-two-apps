import Head from "next/head";

export default function SecondHome() {
  return (
    <div className="lmcu-container">
      <div className="lmcu-hero">
        <img className="lmcu-hero-image" src="/images/city2.jpg" />
        <div className="lmcu-hero-overlay" />
        <header className="lmcu-hero-content">
          <h1>It Was the Worst of Times</h1>

          <span>
            It was the age of foolishness. It was the epoch of incredulity.
          </span>
        </header>
      </div>

      <aside className="lmcu-sidebar-nav">
        <h4 className="lmcu-sidebar-nav-title">Contents</h4>
        <ul className="lmcu-sidebar-nav-list">
          <li className="lmcu-sidebar-nav-item">
            <a href="#intro">Introduction</a>
          </li>
          <li className="lmcu-sidebar-nav-item">
            <a href="#features">Product Features</a>
          </li>
          <li className="lmcu-sidebar-nav-item">
            <a href="#summary">Summary</a>
          </li>
        </ul>
      </aside>

      <div className="lmcu-content-container">
        <section>
          <h2 id="intro">Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            nulla a explicabo tempore, rerum accusamus omnis laboriosam qui,
            optio minus inventore recusandae libero? Libero eius architecto
            quasi natus officia provident!
          </p>
          <p>
            Ullam rem quasi aliquam ut quae, beatae optio nisi earum laboriosam,
            sit vel omnis! Sed, cupiditate corrupti cum unde doloribus et, quae
            delectus assumenda iste placeat error accusamus officia modi.
          </p>
        </section>

        <section>
          <h2 id="features">Product Features</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            maxime? Repellat minima vero, aperiam ut expedita error modi
            asperiores eaque laborum provident similique fugit a reprehenderit
            tempora nihil eos deserunt. Amet aliquid error deserunt natus?
          </p>
          <div className="lmcu-grid-container col-2">
            <div className="lmcu-feature-card">
              <h3 className="lmcu-feature-card-title">Feature #1</h3>
              <p className="lmcu-feature-card-description">
                Ullam rem quasi aliquam ut quae, beatae optio nisi earum
                laboriosam, sit vel omnis!
              </p>
              <a href="#">Learn More</a>
            </div>

            <div className="lmcu-feature-card">
              <h3 className="lmcu-feature-card-title">Feature #2</h3>
              <p className="lmcu-feature-card-description">
                Ullam rem quasi aliquam ut quae, beatae optio nisi earum
                laboriosam, sit vel omnis!
              </p>
              <a href="#">Learn More</a>
            </div>

            <div className="lmcu-feature-card">
              <h3 className="lmcu-feature-card-title">Feature #3</h3>
              <p className="lmcu-feature-card-description">
                Ullam rem quasi aliquam ut quae, beatae optio nisi earum
                laboriosam, sit vel omnis!
              </p>
              <a href="#">Learn More</a>
            </div>

            <div className="lmcu-feature-card">
              <h3 className="lmcu-feature-card-title">Feature #4</h3>
              <p className="lmcu-feature-card-description">
                Ullam rem quasi aliquam ut quae, beatae optio nisi earum
                laboriosam, sit vel omnis!
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </section>

        <section>
          <h2 id="summary">Summary</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            nulla a explicabo tempore, rerum accusamus omnis laboriosam qui,
            optio minus inventore recusandae libero? Libero eius architecto
            quasi natus officia provident!
          </p>
          <a className="lmcu-button-link" href="tel:+15555555555">
            Call Now
          </a>
        </section>
      </div>
    </div>
  );
}
