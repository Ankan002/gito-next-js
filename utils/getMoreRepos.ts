import axios from "axios";

export const getMoreRepos = async (
    nextLink: string,
    repositoryData: Array<any>,
    fetchingMore: boolean,
    setNextLink: any,
    setRepositoryData: any,
    setFetchingMore: any
) => {
    if(fetchingMore) return

    setFetchingMore(true)

    if(nextLink === undefined || nextLink === null || nextLink === '' || repositoryData.length === 0){
        setFetchingMore(false)
        return
    }

    try{
        const Response = await axios.get(nextLink, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })

        setNextLink(Response?.headers?.link?.split(';')[0].substring(1, Response?.headers?.link?.split(';')[0].length - 1))

        setRepositoryData([...repositoryData].concat(Response?.data))

        setFetchingMore(false)
    }
    catch(error){
        console.log(error)
        setFetchingMore(false)
    }
}