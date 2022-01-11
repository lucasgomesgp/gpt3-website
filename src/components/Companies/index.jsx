import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

import styles from "./styles.module.scss";

export function Companies(){
    return(
        <section className={styles.companies}>
            <img src={google} alt="Google" />
            <img src={slack} alt="Slack" />
            <img src={atlassian} alt="Atlassian" />
            <img src={dropbox} alt="Dropbox" />
            <img src={shopify} alt="Shopify" />
        </section>
    );
}