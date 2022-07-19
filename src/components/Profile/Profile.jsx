import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { getRandomHexColor } from 'components/Util/FunctColorRandom';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div
      className={css.profile}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <div className={css.description}>
        <img className="avatar" src={avatar} alt={username} width="200" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
