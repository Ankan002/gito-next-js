import React, {useRef} from 'react'
import { useRouter } from 'next/router'
import { motion, LazyMotion, domAnimation } from 'framer-motion'

interface HomeCardProps {
  id: String | string | Number | number
  name: string
  image: string | undefined
  github_url: String | string
}

const HomeCard = (props: HomeCardProps) => {
  const { id, name, image, github_url } = props
  const router = useRouter()

  const onKnowMoreClick = () => {
    router.push({
      pathname: `/${id}`,
      query: {
        name,
      },
    })
  }

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  }

  const scrollRef = useRef(null)

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="flex h-full w-full flex-col items-center rounded-lg"
        initial="hidden"
        whileInView="visible"
        animate="visible"
        variants={variants}
        transition={{ 
          duration: 1,
          ease: 'easeIn'
        }}
        viewport={{ once: false }}
      >
        <img src={image} className="mt-1 h-2/3 w-full rounded object-contain" />
        <h3 className="mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text font-m-plus text-lg font-bold text-transparent md:text-xl lg:text-2xl">
          {name}
        </h3>
        <div className="flex items-center justify-center">
          <button
            className="fro mt-2 h-10 w-40 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#EDEDED] shadow-[0_15px_30px_10px_rgba(244,114,182,0.3)]"
            onClick={onKnowMoreClick}
          >
            <h3 className="font-m-plus text-lg font-bold text-[#FEE3EC] md:text-xl lg:text-2xl">
              Know More
            </h3>
          </button>
        </div>
      </motion.div>
    </LazyMotion>
  )
}

export default HomeCard
