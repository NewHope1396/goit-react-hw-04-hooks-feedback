import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div>  
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>

        <p>Total: {total}</p>

        <p>Positive feedback: {total ? positivePercentage : 0}%</p>
    </div>
)

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}