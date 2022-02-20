import React, {useEffect, useState} from 'react'
import CommonHead from '../components/CommonHead'
import { useRouter } from 'next/router'
import { getProfileInfo } from '../utils/getProfileInfo'
import ProfileHeader from '../components/ProfileHeader'
import LoadingComponent from '../components/LoadingComponent'
import ProfileInfo from '../components/ProfileInfo'
import ProfileBody from '../components/ProfileBody'
import { Toaster } from 'react-hot-toast'


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