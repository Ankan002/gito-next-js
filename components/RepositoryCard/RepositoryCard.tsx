import React from 'react'
import { Toaster, toast } from 'react-hot-toast'
import {AiOutlineStar, AiOutlineEye} from 'react-icons/ai'
import {VscRepoForked} from 'react-icons/vsc'

interface RepositoryCardProps{
    name: string | String;
    description: string | String | undefined | null;
    language: string | String | undefined | null;
    forks: number;
    html_url: string;
    watchers: number;
    topics: Array<string | undefined | null>;
    clone_url: string;
    star_gazers: number;
}

const RepositoryCard = (props: RepositoryCardProps) => {

  const {name, description, language, forks, html_url, watchers, topics, clone_url, star_gazers} = props

  const onCopyClick = () => {
    navigator.clipboard.writeText(clone_url)
    toast.success('Copied...', {
      style: {
        padding: '16px',
        color: '#fce7f3',
        background: 'linear-gradient(#6366f1, #a855f7)',
        fontFamily: '"Fira Code", monospace'
      },
      iconTheme: {
        primary: '#ec4899',
        secondary: '#fce7f3',
      }
    });
  }

  return (
    <div className='w-full h-full px-3 py-2 rounded-xl border-2 border-pink-500 shadow-[0_15px_30px_10px_rgba(244,114,182,0.3)] flex flex-col justify-between'>
      

      <div className='w-full'>

        <a href={html_url}>
        <h1 className='font-fira-code hover:cursor-pointer hover:underline xl:text-2xl lg:text-xl text-lg   font-semibold text-violet-500' >
          {name}
        </h1>
        </a>

        <h3 className='font-fira-code text-sm text-pink-500'>
          {language}
        </h3>

        <p className='truncate font-fira-code mt-2 text-base text-indigo-600'>
          {description}
        </p>

      </div>

      <div className='w-full flex justify-between items-center'>
        <div>
          <button className='border-2 py-[0.5] px-2 border-pink-400 text-indigo-500 rounded-full font-fira-code hover:bg-pink-300 transition-all ease-in-out hover:text-pink-100 ' onClick={onCopyClick}>
            Clone
          </button>
        </div>

        <div className='flex items-center'>

          <div className='w-full h-full mx-2 flex items-center'>
            <AiOutlineStar size={20} color='#ec4899' />
            <p className='ml-1 font-fira-code text-indigo-600 hover:underline hover:cursor-pointer'>
              {star_gazers}
            </p>
          </div>

          <div className='w-full h-full mx-2 flex items-center'>
            <VscRepoForked size={20} color='#ec4899' />
            <p className='ml-1 font-fira-code text-indigo-600 hover:underline hover:cursor-pointer'>
              {forks}
            </p>
          </div>

          <div className='w-full h-full mx-2 flex items-center'>
            <AiOutlineEye size={20} color='#ec4899' />
            <p className='ml-1 font-fira-code text-indigo-600'>
              {watchers}
            </p>
          </div>
          
        </div>
      </div>
      

    </div>
  )
}

export default RepositoryCard