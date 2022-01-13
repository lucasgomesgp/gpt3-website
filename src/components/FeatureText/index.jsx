import styles from "./styles.module.scss";

const Item = (props) => (
    <>
        <div className={styles.text}>
            <h3 className={`top-bar ${styles.titleCentral}`}>
                {props.title}
            </h3>
            <p className={styles.subTextCentral}>
                {props.subText}
            </p>
        </div>
    </>
);
export function FeatureText() {
    return (
        <section className={styles.featureText} id="open">
            <div className={styles.title}>
                <h1 className={`gradient-text ${styles.firstTitle}`}>
                    The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                </h1>
                <p className={`gradient-text ${styles.firstSubText}`}>
                    Request Early Access to Get Started
                </p>
            </div>
            <div className={styles.centralTexts}>
                <Item title="Improving end distrusts instantly " subText="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." />
                <Item title="Become the tended active" subText="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to." />
                <Item title="Message or am nothing" subText="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address." />
                <Item title="Really boy law county" subText="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush." />
            </div>
        </section>
    );
}