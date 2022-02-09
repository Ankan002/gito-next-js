import {useEffect} from 'react'
import CommonHead from '../components/CommonHead'
import { GetStaticProps } from 'next'
import { getInitilaUsers } from '../utils/getInitialUsers'
import { useRecoilState } from 'recoil'
import { allUsersState } from '../atom/allUserAtom'
import { nextHomeApiCallState } from '../atom/nextHomeApiCallAtom'
import { isNextAvailableState } from '../atom/nextAvailableAtom'
import Navbar from '../components/NavBar'
import HomeBody from '../components/HomeBody'

const Home = ({info}: any) => {

  const [allUsers, setAllUsers] = useRecoilState<any>(allUsersState)
  const [nextHomeApiCall, setNextHomeApiCall] = useRecoilState<any>(nextHomeApiCallState)
  const [isNextAvailable, setIsNextAvailable] = useRecoilState<any>(isNextAvailableState)

  useEffect(() => {
    if(info?.nextLink) {
      setNextHomeApiCall(info?.nextLink)
      setIsNextAvailable(true)
    }
    if(info?.data) setAllUsers(info?.data)
  }, [info])

  console.log(info?.data)

  return (
    <div className="flex min-h-screen flex-col bg-[#FEE3EC]">
      <CommonHead title='Gito' />
      <Navbar />

      <div className='w-full'>
        <HomeBody />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async(context) => {

  const info = await getInitilaUsers()

  return {
    props: {
      info
    }
  }
}

export default Home
