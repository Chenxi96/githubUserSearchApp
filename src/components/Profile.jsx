import location from '../assets/icon-location.svg'
import website from '../assets/icon-website.svg'
import twitter from '../assets/icon-twitter.svg'
import company from '../assets/icon-company.svg'
import './profile.scss'

export default function Profile({profile, mode}) {
    let date = new Date(profile.created_at).getDate()
    let year = new Date(profile.created_at).getFullYear()
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[new Date(profile.created_at).getMonth()]

    return (
        <>
            <div className={`profile-container ${mode}-section`}>
                <div className='header-container'>
                    <img className='profile-image' src={profile.avatar_url} alt="" width={70} height={70} />
                    <div className='header-wrapper'>
                        <p className='header-name'>{!profile.name ? profile.login : profile.name}</p>
                        <p className='header-username'>{`@${profile.login}`}</p>
                        <p className='header-joined'>{`Joined ${date} ${month} ${year}`}</p>
                    </div>
                </div>
                <p className='bio-container'>{!profile.bio ? 'This profile has no bio' : profile.bio}</p>
                <div className={`following-wrapper ${mode}-following`}>
                        <div>
                            <p className='following-title'>Repos</p>
                            <p className={`following-amount ${mode}`}>{profile.public_repos}</p>
                        </div>
                        <div>
                            <p className='following-title'>Followers</p>
                            <p className={`following-amount ${mode}`}>{profile.followers}</p>
                        </div>
                        <div>
                            <p className='following-title'>Following</p>
                            <p className={`following-amount ${mode}`}>{profile.following}</p>
                        </div>
                    </div>
                <div className='links-container'>
                    <div className='links'>
                        {
                            !profile.location ? 
                            <div className='links-wrapper not-available'>
                            <img src={location} alt="" />
                            <p>Not Available</p>
                            </div>
                            :
                            <div className='links-wrapper'>
                            <img src={location} alt="" />
                            <p>{profile.location}</p>
                            </div>
                        }
                        {
                            !profile.blog ?
                            <div className='links-wrapper not-available'>
                            <img src={website} alt="" />
                            <p>Not Available</p>
                            </div> 
                            :
                            <div className='links-wrapper'>
                            <img src={website} alt="" />
                            <p>{profile.blog}</p>
                        </div>
                        }
                    </div>
                    <div className='links'>
                        {!profile.twitter_username ? 
                        <div className='links-wrapper not-available'>
                            <img src={twitter} alt="" />
                            <p>Not Available</p>
                        </div>:
                        <div className='links-wrapper'>
                            <img src={twitter} alt="" />
                            <p>{profile.twitter_username === null ? 'Not Available': profile.twitter_username}</p>
                        </div>
                        }

                        {!profile.company ? 
                        <div className='links-wrapper not-available'>
                            <img src={company} alt="" />
                            <p>Not Available</p>
                        </div> :
                        <div className='links-wrapper'>
                        <img src={company} alt="" />
                        <p>{profile.company}</p>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}