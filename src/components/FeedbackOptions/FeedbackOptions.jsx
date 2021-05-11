import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOption = ({ onLeaveFeedback }) => {
    return (
        <>
            <div className={styles.buttonContainer}>
                <button
                    type="button"
                    name="good"
                    onClick={onLeaveFeedback}
                    className={styles.button}
                >
                    Good
      </button>
                <button
                    type="button"
                    name="neutral"
                    onClick={onLeaveFeedback}
                    className={styles.button}
                >
                    Neutral
      </button>
                <button
                    type="button"
                    name="bad"
                    onClick={onLeaveFeedback}
                    className={styles.button}
                >
                    Bad
      </button>
            </div>
        </>
    );
};

FeedbackOption.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;