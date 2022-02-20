import React, {useState, useEffect} from 'react'
import {getInitialRepos} from '../../utils/getInitialRepos'
import LoadingComponent from '../LoadingComponent'
import RepositoryCard from '../RepositoryCard'
import useInView from 'react-cool-inview'
import {getMoreRepos} from '../../utils/getMoreRepos'

interface ProfileBodyProps{
    login: string;
    totalRepos: number
}

const ProfileBody = (props: ProfileBodyProps) => {

  const {login, totalRepos} = props

  const [nextLink, setNextLink] = useState<string | undefined>('')
  const [repositoryData, setRepositoryData] = useState<Array<any>>([])
  const [initialLoaded, setInitialLoaded] = useState<boolean>(false)
  const [fetchingMore, setFetchingMore] = useState(false)
  const [reposLength, setReposLength] = useState<number>(repositoryData.length - 1)

  useEffect(() => {
    setReposLength(repositoryData.length - 1)
  }, [repositoryData])

  const { observe } = useInView({
    
    rootMargin: "50px 0px",
    
    onEnter: ({ unobserve }) => {
      
      unobserve();

      if(totalRepos - 1 < reposLength) return

      getMoreRepos(
        nextLink ?? '',
        repositoryData,
        fetchingMore,
        setNextLink,
        setRepositoryData,
        setFetchingMore
      )
    },
  });

  const FetchFirstRepos = async () => {
    const tempData = await getInitialRepos(login)
    setNextLink(tempData?.nextLink)
    setRepositoryData(tempData?.data)
    setInitialLoaded(true)
  }

  useEffect(() => {
    if(login) FetchFirstRepos()
  }, [login])

  return (
    <>
      {
        (!initialLoaded) ? (
          <div className='w-full flex-grow flex justify-center items-center'>
            <LoadingComponent />
          </div>
        ) : (
          <div className='w-full flex flex-wrap'>
            {
              repositoryData.map((data, index) => (
                <div className='md:w-1/2 lg:w-1/2 w-full flex justify-center items-center lg:h-40 h-44 md:px-4 sm:px-3 xl:px-6 my-2' key={index} ref={index === reposLength ? observe : null}>
                  <RepositoryCard
                    name={data?.name}
                    description={data?.description}
                    language={data?.language}
                    forks={data?.forks_count}
                    html_url={data?.html_url}
                    watchers={data?.watchers_count}
                    topics={data?.topics}
                    clone_url={data?.clone_url} 
                    star_gazers={data?.stargazers_count}
                  />
                </div>
              ))
            }
          </div>
        )
      }
      
    </>
  )
}

export default ProfileBody