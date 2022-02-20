import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {useRouter} from 'next/router'

interface ProfileHeaderProps{
    username: string | string[] | undefined;
}

const ProfileHeader = (props: ProfileHeaderProps) => {

  const {username} = props
  const router = useRouter()

  const onBackClick = () => {
      router.back()
  }

  return (
    <div className='w-full lg:h-14 md:h-12 sm:h-11 h-10 lg:px-5 md:px-4 px-3 flex items-center '>
        <button className='h-full items-center pt-2' onClick={onBackClick}>
            <BiArrowBack  color='#6366f1' size={30} fontWeight="700"/>
        </button>
        <h1 className='lg:text-2xl md:text-xl text-lg font-m-plus font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ml-3'>
            {username}
        </h1>
    </div>
  )
}

export default ProfileHeader