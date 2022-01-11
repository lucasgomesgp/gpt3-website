import styles from "./styles.module.scss";

const SubSection = (props) => (
    <>
        <h3 className={`${styles.titleSection} top-bar`}>{props.title}</h3>
        <p className={styles.subText}>{props.subText}</p>
    </>
);

export function WhatIsGPT3() {
    return (
        <section className={styles.whatIsGpt3} id="whatisgpt3">
            <div className={styles.initial}>
                <h3 className={`top-bar ${styles.title} `}>What is GPT-3</h3>
                <p className={styles.subSection}>
                    We so opinion friends me message as delight.
                    Whole front do of plate heard oh ought.
                    His defective nor convinced residence own.
                    Connection has put impossible own apartments boisterous.
                    At jointure ladyship an insisted so humanity he.
                    Friendly bachelor entrance to on by.
                </p>
            </div>
            <div className={styles.central}>
                <h2 className={`gradient-text ${styles.centralTitle}`}>
                    The possibilities are beyond your imagination
                </h2>
                <p className={`gradient-text ${styles.library}`}>Explore The Library</p>
            </div>
            <div className={styles.bottomSections}>
                <div className={styles.firstSection}>
                    <SubSection title="Chatbots" subText="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                </div>
                <div className={styles.secondSection}>
                    <SubSection title="Knowledgebase" subText="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                </div>
                <div className={styles.lastSection}>
                    <SubSection title="Education" subText="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                </div>
            </div>
        </section>
    );
}