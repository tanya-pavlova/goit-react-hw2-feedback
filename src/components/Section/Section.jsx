import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
    return (
        <section>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </section>
    );
};

Section.defaultProps = {
    title: "Statistics",
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object.isRequired,
};

export default Section;