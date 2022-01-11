import feature from "../../assets/feature.png";
import styles from "./styles.module.scss";

export function FeatureApps() {
    return (
        <section className={styles.featureApps}>
            <div className={styles.image}>
                <img src={feature} alt="Feature Apps" />
            </div>
            <div className={styles.texts}>
                <p className={styles.smallTitle}>
                    Request Early Access to Get Started
                </p>
                <h3 className={`${styles.bigTitle} gradient-text`}>
                    The possibilities are beyond your imagination
                </h3>
                <p className={styles.smallText}>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing.
                    Indulgence way everything joy alteration boisterous the attachment.
                    Party we years to order allow asked of.
                </p>
                <p className="gradient-text">
                    Request Early Access to Get Started
                </p>
            </div>
        </section>
    );
}