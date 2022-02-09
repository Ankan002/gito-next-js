import React, {useEffect, useState} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allUsersState } from '../../atom/allUserAtom'
import { nextHomeApiCallState } from '../../atom/nextHomeApiCallAtom'
import { globalLoadingState } from '../../atom/globalLoadingAtom'
import { isNextAvailableState } from '../../atom/nextAvailableAtom'
import HomeCard from '../HomeCard'
import useInView from 'react-cool-inview'
import { getMoreUsers } from '../../utils/getMoreUsers'

const HomeBody = () => {

  const [allUsers, setAllUsers] = useRecoilState<any>(allUsersState)
  const [nextHomeApi, setNextHomeApi] = useRecoilState<any>(nextHomeApiCallState)
  const [globalLoading, setGlobalLoading] = useRecoilState<any>(globalLoadingState)
  const isNextCallAvailable = useRecoilValue<any>(isNextAvailableState)
  const [usersLength, setUsersLength] = useState(allUsers.length - 1)

  useEffect(() => {
      setUsersLength(allUsers.length - 1)
  }, [allUsers])

  const { observe } = useInView({
    
    rootMargin: "50px 0px",
    
    onEnter: ({ unobserve }) => {
      
      unobserve();

      getMoreUsers(
          isNextCallAvailable,
          globalLoading,
          allUsers,
          nextHomeApi,
          setAllUsers,
          setNextHomeApi,
          setGlobalLoading
      )
    },
  });

  return (
    <div className='w-full pb-5'>
        <div className='w-full px-5 flex flex-wrap' >
        {
            allUsers.map((user: any, index: number) => (
                <div className='md:w-1/3 lg:w-1/4 sm:w-1/2 w-full flex justify-center items-center lg:h-96 h-80 md:p-4 sm:p-3 p-5 rounded-lg' key={user?.id}  ref={index === usersLength ? observe : null} >
                    <HomeCard
                     id={user?.id} 
                     name={user?.login} 
                     image={user?.avatar_url} 
                     github_url={user?.html_url}
                    />
                </div>
            ))
        }
        </div>
        {/* <div className='flex justify-center items-center'>
            <button className='w-40 h-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500   to-pink-500 flex justify-center items-center text-xl font-mono text-[#EDEDED]'>
                Know More
            </button>
        </div> */}
        
    </div>
  )
}

export default HomeBody