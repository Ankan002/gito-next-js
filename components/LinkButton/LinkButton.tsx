import React from 'react'

interface LinkButtonProps{
    filled: boolean;
    link: string | undefined | null;
    text: string | String | undefined | null;
}

const LinkButton = (props: LinkButtonProps) => {

  const {filled, link, text} = props

  return (
    <>
        {
            (link) && (
                <a 
                 href={link}
                 className={
                     (filled) ? 
                     'flex flex-1 font-m-plus bg-gradient-to-r from-indigo-500 via-purple-500   to-pink-500 text-[#FEE3EC] text-lg rounded-md text-center font-bold mt-2 justify-center' :
                     'font-m-plus text-pink-400 border-pink-400 border-2 flex flex-1 justify-center mt-2 rounded-md font-bold'
                 }
                >
                    {text}
                </a>
            )
        }
    </>
  )
}

export default LinkButton