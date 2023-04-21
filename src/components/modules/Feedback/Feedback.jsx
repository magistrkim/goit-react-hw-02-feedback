// 1 step
import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import FeedbackSection from './FeedbackSection/FeedbackSection';
import Notification from './Notification/Notification';

// 2 step
import css from './feedback.module.css';

// 3 step
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //   count total feedbacks
  countTotalFeedbacks() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  //   count percentage of good feedbacks
  countPositiveFeedbacksPercentage(propName) {
    const total = this.countTotalFeedbacks();
    if (!total) {
      return 0;
    }
    const feedbackValue = this.state[propName];
    // toFixed returns string, thats why Number(result) is neccessary
    const result = ((feedbackValue / total) * 100).toFixed(2);
    return Number(result);
  }

  // function gets propName (a variable of key name in state: good, neutral or bad) and increase its value + 1
  onLeaveFeedback = propName => {
    this.setState(prevState => {
      // return new object with value + 1
      return { [propName]: prevState[propName] + 1 };
    });
  };

  render() {
    const total = this.countTotalFeedbacks();
    const goodFeedbackPercentage =
      this.countPositiveFeedbacksPercentage('good');
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.wrapper}>
        <FeedbackSection title="Please leave your feedback">
          <FeedbackOptions
            options={{
              good: 'good',
              neutral: 'neutral',
              bad: 'bad',
            }}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </FeedbackSection>
        <FeedbackSection title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedbackPercentage={goodFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </FeedbackSection>
      </div>
    );
  }
}
// 4 step
export default Feedback;
