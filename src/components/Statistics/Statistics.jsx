import PropTypes from 'prop-types';
import { ListItem } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul>
      <ListItem>
        <p>good:</p>
        <span>{good}</span>
      </ListItem>
      <ListItem>
        <p>neutral:</p>
        <span>{neutral}</span>
      </ListItem>
      <ListItem>
        <p>bad:</p>
        <span>{bad}</span>
      </ListItem>
      <ListItem>
        <p>total:</p>
        <span>{total}</span>
      </ListItem>
      <ListItem>
        <p>positiveFeedback:</p>
        <span>{positiveFeedback}%</span>
      </ListItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
