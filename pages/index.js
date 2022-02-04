import Container from "../components/Container/Container";
import Content from "../components/Content/Content";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import Grid from "../components/Grid/Grid";
import Hero from "../components/Hero/Hero";
import SideNav from "../components/SideNav/SideNav";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <Container>
      <Hero
        heading="It Was the Best of Times,"
        subHeading="it was the age of wisdom. It was the epoch of belief."
        backgroundImage="/images/city.jpg"
      />

      <SideNav />

      <Content>
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

          <Grid columns="2">
            <FeatureCard
              title="Feature #1"
              description="Ullam rem quasi aliquam ut quae, beatae optio nisi earum
                laboriosam, sit vel omnis!"
              url="#"
            />
            <FeatureCard
              title="Feature #2"
              description="Ullam rem quasi aliquam ut quae, beatae optio nisi earum
                laboriosam, sit vel omnis!"
              url="#"
            />
            <FeatureCard
              title="Feature #3"
              description="Ullam rem quasi aliquam ut quae, beatae optio nisi earum
                laboriosam, sit vel omnis!"
              url="#"
            />
            <FeatureCard
              title="Feature #4"
              description="Ullam rem quasi aliquam ut quae, beatae optio nisi earum
                laoriosam, sit vel omnis!"
              url="#"
            />
          </Grid>
        </section>

        <section>
          <h2 id="summary">Summary</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            nulla a explicabo tempore, rerum accusamus omnis laboriosam qui,
            optio minus inventore recusandae libero? Libero eius architecto
            quasi natus officia provident!
          </p>

          <Button url="tel:+15555555555">Call Now</Button>
        </section>
      </Content>
    </Container>
  );
}
