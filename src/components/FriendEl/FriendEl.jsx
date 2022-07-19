import PropTypes from 'prop-types';
import css from './FriendEl.module.css';

export const FriendEl = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? 'red' : 'green' }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendEl.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// {isOnline} === true ? {background-color: 'red'} : {background-color: 'green'}
