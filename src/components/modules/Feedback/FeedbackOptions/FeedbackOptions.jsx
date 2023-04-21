import PropTypes from 'prop-types';
import css from '../feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button
        onClick={() => onLeaveFeedback('good')}
        className={css.btn}
        type="button"
      >
        {options.good}
      </button>
      <button
        onClick={() => onLeaveFeedback('neutral')}
        className={css.btn}
        type="button"
      >
        {options.neutral}
      </button>
      <button
        onClick={() => onLeaveFeedback('bad')}
        className={css.btn}
        type="button"
      >
        {options.bad}
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
