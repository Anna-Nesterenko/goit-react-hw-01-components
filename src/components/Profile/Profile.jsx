import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { getRandomHexColor } from 'components/Util/FunctColorRandom';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
  imgAlt = 'User avatar',
}) => {
  return (
    <div
      className={css.profile}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt={imgAlt} width="180" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ProfileStats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
