import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import styles from "./styles.module.scss";

export function Contact() {
    return (
        <header className={styles.contact} id="home">
            <div className={styles.info}>
                <h1 className={`gradient-text ${styles.title}`}>
                    Let’s Build Something
                    amazing with GPT-3
                    OpenAI
                </h1>
                <p className={styles.subTitle}>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing.
                    Indulgence way everything joy alteration boisterous the attachment.
                    Party we years to order allow asked of.
                </p>
                <div className={styles.buttons}>
                    <input type="email" name="email" placeholder="Your Email Address" className={styles.contactInpt} />
                    <button className={styles.btnSend}>Get Started</button>
                </div>
                <div className={styles.people}>
                    <img src={people} alt="People" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className={styles.ai}>
                <img src={ai} alt="Illustration AI" />
            </div>
        </header>
    );
}