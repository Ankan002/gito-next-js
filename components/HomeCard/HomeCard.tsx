import React from 'react'
import { useRouter } from 'next/router'

interface HomeCardProps {
  id: String | string | Number | number;
  name: string;
  image: string | undefined;
  github_url: String | string;
}

const HomeCard = (props: HomeCardProps) => {

  const { id, name, image, github_url } = props
  const router = useRouter()

  const onKnowMoreClick = () => {
    router.push({
      pathname: `/${id}`,
      query: {
        name
      }
    })
  }

  return (
    <div className='w-full h-full rounded-lg flex flex-col items-center'>
      <img src={image} className='w-full h-2/3 object-contain mt-1 rounded' />
      <h3 className='lg:text-2xl md:text-xl text-lg font-balsamiq font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        {name}
      </h3>
      <div className='flex justify-center items-center'>
        <button 
          className='w-40 h-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fro text-[#EDEDED] mt-2'
          onClick={onKnowMoreClick}
        >
          <h3 className='lg:text-2xl md:text-xl text-lg font-mono font-bold text-[#FEE3EC]'>Know More</h3>
        </button>
      </div>
    </div>
  )
}

export default HomeCard