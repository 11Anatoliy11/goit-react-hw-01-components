import PropTypes from "prop-types";
import s from './FriendListItem.module.css';

export const FriendListItem = ({name, avatar, isOnline}) => {
    return (
        <li className = {s.item}>
        <span className = {isOnline ? s.active : s.status}></span>
        <img className = {s.avatar} src = {avatar} alt= "User avatar" width = "48" />
        <p className = {s.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    friend: PropTypes.shape ({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
};