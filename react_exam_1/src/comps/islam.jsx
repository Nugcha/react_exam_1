import React from "react";
import styles from "./nike.module.css";
import heart from "./pics/heart.png";
import shoes from "./pics/shoes.png";

export default function Islam() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <img src={heart} alt="heart" className={styles.heart} />
          <img src={shoes} alt="Shoe" className={styles.shoe} />
        </div>

        <div className={styles.cardBody}>
          <div className={styles.title}>Nike Running Shoe</div>

          <div className={styles.tags}>
            <div className={styles.tag}>EU38</div>
            <div className={styles.tag}>BLACK/WHITE</div>
          </div>

          <div className={styles.description}>
            Crossing hardwood comfort with off-court flair. '80s-inspired construction,
            bold details and nothin'-but-net style.
          </div>

          <div className={styles.footer}>
            <div>
              <div className={styles.priceLabel}>PRICE</div>
              <div className={styles.price}>$69.99</div>
            </div>
            <button type="button" className={styles.button} aria-label="Add to cart">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}