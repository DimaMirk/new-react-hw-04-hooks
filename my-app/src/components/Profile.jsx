import s from './Profile.module.css' 
const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <div  className={s.container}>
        <div  className={s.description}>
            <img
            src={avatar}
            alt="User avatar"
            className={s.picture} 
            />
            <p className={s.p}>{username}</p>
            <p className={s.p}>{tag}</p>
            <p className={s.p}>{location}</p>
        </div>

        <ul className={s.stats}>
            <li className={s.li}>
                <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
            </li>
            <li className={s.li}>
                <span class="label">Views</span>
                <span class="quantity">{stats.views}</span>
            </li>
            <li className={s.li}>
                <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
}

export default Profile