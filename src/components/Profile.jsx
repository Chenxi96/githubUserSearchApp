import location from '../assets/icon-location.svg'
import website from '../assets/icon-website.svg'
import twitter from '../assets/icon-twitter.svg'
import company from '../assets/icon-company.svg'
import './profile.scss'

export default function Profile({profile}) {
    return (
        <>
            <div className='profile-container'>
                <div className='header-container'>
                    <img className='profile-image' src={profile.avatar_url} alt="" width={70} height={70} />
                    <div className='header-wrapper'>
                        <p className='header-name'>{!profile.name ? profile.login : profile.name}</p>
                        <p className='header-username'>{`@${profile.login}`}</p>
                        <p className='header-joined'>{`Joined ${new Date(profile.created_at).toDateString()}`}</p>
                    </div>
                </div>
                <p className='bio-container'>{profile.bio === null ? 'This profile has no bio' : profile.bio}</p>
                <div className='following-wrapper'>
                        <div>
                            <p>Repos</p>
                            <p>{profile.public_repos}</p>
                        </div>
                        <div>
                            <p>Followers</p>
                            <p>{profile.followers}</p>
                        </div>
                        <div>
                            <p>Following</p>
                            <p>{profile.following}</p>
                        </div>
                    </div>
                <div className='links-container'>
                    <div>
                        <img src={location} alt="" />
                        <p>{profile.location}</p>
                    </div>
                    <div>
                        <img src={website} alt="" />
                        <p>{profile.blog}</p>
                    </div>
                    <div>
                        <img src={twitter} alt="" />
                        <p>{profile.twitter_username === null ? 'Not Available': profile.twitter_username}</p>
                    </div>
                    <div>
                        <img src={company} alt="" />
                        <p>{profile.company}</p>
                    </div>
                </div>
            </div>
        </>
    )
}