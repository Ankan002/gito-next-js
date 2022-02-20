import React, {useEffect, useState} from 'react'
import CommonHead from '../components/CommonHead'
import { useRouter } from 'next/router'
import { getProfileInfo } from '../utils/getProfileInfo'
import ProfileHeader from '../components/ProfileHeader'
import LoadingComponent from '../components/LoadingComponent'
import ProfileInfo from '../components/ProfileInfo'
import ProfileBody from '../components/ProfileBody'
import { Toaster } from 'react-hot-toast'

// {
// avatar_url: "https://avatars.githubusercontent.com/u/29?v=4"
// bio: "Founder of Weights and Biases (wandb.ai)"
// blog: "lukasbiewald.com"
// company: "Weights and Biases"
// created_at: "2008-01-15T12:50:02Z"
// email: null
// events_url: "https://api.github.com/users/lukas/events{/privacy}"
// followers: 501
// followers_url: "https://api.github.com/users/lukas/followers"
// following: 19
// following_url: "https://api.github.com/users/lukas/following{/other_user}"
// gists_url: "https://api.github.com/users/lukas/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/lukas"
// id: 29
// location: "San Francisco"
// login: "lukas"
// name: "Lukas Biewald"
// node_id: "MDQ6VXNlcjI5"
// organizations_url: "https://api.github.com/users/lukas/orgs"
// public_gists: 12
// public_repos: 30
// received_events_url: "https://api.github.com/users/lukas/received_events"
// repos_url: "https://api.github.com/users/lukas/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/lukas/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/lukas/subscriptions"
// twitter_username: "l2k"
// type: "User"
// updated_at: "2022-02-02T02:02:08Z"
// url: "https://api.github.com/users/lukas"
// }

const GitHubProfile = () => {

  const router = useRouter()
  const {name} = router.query
  const [profileInfo, setProfileInfo] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(false)

  const profileInfoLoader = async() => {
      const tempInfo = await getProfileInfo(`${name}`, loading, setLoading)
      setProfileInfo(tempInfo)
  }

  useEffect(() => {
      if(name) profileInfoLoader()
  }, [name])

  return (
    <div className='min-h-screen w-full bg-[#FEE3EC] flex flex-col'>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        <CommonHead title={(name) ? `${name}` : 'GitHubProfile'} />
        <ProfileHeader username={name} />
        {
            (loading) ? (
                <div className='w-full flex flex-grow items-center justify-center'>
                    <LoadingComponent />
                </div>
            ) : (
                <div className='w-full flex flex-col flex-grow'>
                    <div className='px-5 w-full'>
                        <ProfileInfo
                         image={profileInfo?.info?.avatar_url}
                         bio={profileInfo?.info?.bio}
                         followers={profileInfo?.info?.followers} 
                         following={profileInfo?.info?.following}
                         publicRepos={profileInfo?.info?.public_repos}
                         githubUrl={profileInfo?.info?.html_url}
                         name={profileInfo?.info?.name}
                         email={profileInfo?.info?.email}
                        />
                    </div>
                    <div className='w-full px-5 flex flex-col flex-grow mt-3'>
                        <ProfileBody
                         login={profileInfo?.info?.login} 
                         totalRepos={profileInfo?.info?.public_repos} 
                        />
                    </div>
                </div>
                
            )
        }
        
    </div>
  )
}

export default GitHubProfile