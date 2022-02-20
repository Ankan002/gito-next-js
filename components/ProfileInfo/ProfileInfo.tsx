import React from 'react'
import CounterTab from '../CounterTab'
import LinkButton from '../LinkButton'

interface ProfileInfoProps {
    image: string;
    bio: string | undefined | null;
    followers: number | null | undefined;
    following: number | null | undefined;
    publicRepos: number | null | undefined;
    githubUrl: string | undefined | null;
    name: string | undefined | null;
    email: string | undefined | null;
}

const ProfileInfo = (props: ProfileInfoProps) => {

  const {image, bio, followers, following, publicRepos, githubUrl, name, email} = props

  return (
    <div className='w-full flex lg:flex-row md:flex-row flex-col mt-4 lg:justify-center md:justify-center items-center'>
        <div className='lg:w-1/4 md:w-1/4 w-full h-full flex justify-center items-center'>
            <img
             src={image}
             className='lg:w-3/4 md:w-full w-2/4 object-contain rounded-full shadow-[0_10px_30px_10px_rgba(244,114,182,0.3)]' 
            />
        </div>
        <div className='lg:w-3/4 md:w-3/4 w-full h-full flex flex-col justify-center px-5'>
            <div className='w-full flex items-center'>
                <CounterTab count={followers} text='Followers' />
                <CounterTab count={following} text='Following' />
                <CounterTab count={publicRepos} text='Public Repositories' />
            </div>
            <div>
                <h1 className='lg:text-xl md:text-lg text-lg font-bold lg:mt-12 md:mt-12 mt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500   to-pink-500 font-m-plus'>
                    {name}
                </h1>

                <h1 className='lg:text-xl md:text-lg text-lg font-m-plus font-bold mt-1  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500    to-pink-500'>
                    {email}
                </h1>

                <h1 className='lg:text-xl md:text-lg text-lg font-m-plus font-bold mt-1  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500    to-pink-500'>
                    {bio}
                </h1>
            </div>
            <div className='w-full flex lg:flex-row md:flex-row flex-col mt-2'>
                <LinkButton filled={(!bio) ? true : false} link={githubUrl} text='Github' />
            </div>
        </div>
    </div>
  )
}

export default ProfileInfo