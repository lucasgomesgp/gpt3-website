import styles from "./styles.module.scss";

export function Register() {
    return (
        <section className={styles.register}>
            <div className={styles.texts}>
                <p className={styles.small}>
                    Request Early Access to Get Started
                </p>
                <h3 className={styles.big}>
                    Register today & start exploring the endless possiblities.
                </h3>
            </div>
            <button className={styles.btn}>Get Started</button>
        </section>
    );
}