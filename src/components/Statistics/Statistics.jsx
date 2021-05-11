import React from 'react';
import PropTypes from 'prop-types'
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <div>
            <p className={styles.feedback}>Good: {good}</p>
            <p className={styles.feedback}>Neutral: {neutral}</p>
            <p className={styles.feedback}>Bad: {bad}</p>
            <p className={styles.feedback}>Total:{total}</p>
            <p className={styles.feedback}>Positive feedback:{positiveFeedback}%</p>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number,
};

export default Statistics;