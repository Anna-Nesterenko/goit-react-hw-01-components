import PropTypes from 'prop-types';
import css from './StatEl.module.css';
import { getRandomHexColor } from 'components/Util/FunctColorRandom';

export const StatEl = ({ label, percentage }) => {

  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
