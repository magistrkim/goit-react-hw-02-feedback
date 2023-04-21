import PropTypes from 'prop-types';
import css from './feedback-section.module.css';

const FeedbackSection = ({ children, title }) => {
  return (
    <div className={css.block}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

export default FeedbackSection;

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
