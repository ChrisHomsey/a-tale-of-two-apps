import React from "react";
import Link from "next/link";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.flex}>
          <div className={styles.title}>
            <Logo />
          </div>
          <div className={styles.item}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.item}>
            <Link href="/about-us">About Us</Link>
          </div>
          <div className={styles.item}>
            <Link href="contact">Contact</Link>
          </div>
          <div className={styles.item}>
            <Link href="/help">Help</Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Nav;
