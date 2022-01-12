import logo from "../../assets/GPT-3.svg";
import styles from "./styles.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.title}>Do you want to step in to the future before others</h2>
            <button className={styles.btn}>Request Early Access</button>
            <section className={styles.section}>
                <div className={styles.gpt3}>
                    <img src={logo} alt="Logo" />
                    <p className={styles.rights}>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </p>
                </div>
                <div className={styles.link1}>
                    <p className={styles.titleLink}>Links</p>
                    <p className={styles.subLink}>Overons</p>
                    <p className={styles.subLink}>Social Media</p>
                    <p className={styles.subLink}>Counters</p>
                    <p className={styles.subLink}>Contact</p>
                </div>
                <div className={styles.link2}>
                    <p className={styles.titleLink}>Company</p>
                    <p className={styles.subLink}>Terms & Conditions</p>
                    <p className={styles.subLink}>Privacy Policy</p>
                    <p className={styles.subLink}>Contact</p>
                </div>
                <div className={styles.link3}>
                    <p className={styles.titleLink}>Get in touch</p>
                    <p className={styles.subLink}>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p className={styles.subLink}>085-132567</p>
                    <p className={styles.subLink}>info@payme.net</p>
                </div>
            </section>
        </footer>
    );
}