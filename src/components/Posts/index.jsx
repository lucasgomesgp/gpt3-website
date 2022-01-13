import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import post3 from "../../assets/post3.png";
import post4 from "../../assets/post4.png";
import post5 from "../../assets/post5.png";

import styles from "./styles.module.scss";

const Post = (props) => (
    <>
        <div className={`${styles.postCurrent} ${props.class}`}>
            <img src={props.src} alt="Post" />
            <div className={styles.infoPost}>
                <p className={styles.date}>
                    {props.date}
                </p>
                <h4 className={styles.postTitle}>
                    {props.title}
                </h4>
                <span className={styles.bottomText}>
                    {props.littleText}
                </span>
            </div>
        </div>
    </>
);
export function Posts() {
    return (
        <>
            <h2 className={`gradient-text ${styles.bigTitle}`} id="library">
                A lot is happening,
                We are blogging about it.
            </h2>
            <section className={styles.posts}>
                <Post
                    src={post1}
                    date="Sep 26, 2021"
                    title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    littleText="Read Full Article"
                    class={styles.post1}
                />
                <Post
                    src={post2}
                    date="Sep 26, 2021"
                    title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    littleText="Read Full Article"
                    class={styles.post2}
                />
                <Post
                    src={post3}
                    date="Sep 26, 2021"
                    title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    littleText="Read Full Article"
                    class={styles.post3}
                />
                <Post
                    src={post4}
                    date="Sep 26, 2021"
                    title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    littleText="Read Full Article"
                    class={styles.post4}
                />
                <Post
                    src={post5}
                    date="Sep 26, 2021"
                    title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    littleText="Read Full Article"
                    class={styles.post5}
                />

            </section>
        </>
    );
}