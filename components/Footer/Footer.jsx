import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.left}>
          <Logo monochrome />

          <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Help</a>
          </div>

          <small className={styles.finePrint}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reiciendis, modi veniam maiores totam, corrupti minus aperiam hic commodi, aliquam earum veritatis ad quas. Voluptates quam suscipit accusantium quis consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam praesentium eligendi quibusdam eum tempora.</small>
          <p className={styles.copyright}>© 2020 Company Name</p>
        </div>

        <div className={styles.right}>
          <h4>Contact Us</h4>

          <form action="#" method="post">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <Button>Send</Button>
          </form>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
