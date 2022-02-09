import axios from "axios"

export const getMoreUsers = async(
    isNextCallAvailable: boolean,
    globalLoading: boolean,
    allUsers: Array<any>,
    nextHomeApi: string,
    setAllUsers: any,
    setNextHomeApi: any,
    setGlobalLoading: any
) => {
    if(!isNextCallAvailable || globalLoading) return

    setGlobalLoading(false)

    if(nextHomeApi === '' || !nextHomeApi){
        setGlobalLoading(false)
        return
    }

    const Response = await axios.get(nextHomeApi, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })

    console.log(Response)

    setNextHomeApi(Response?.headers?.link?.split(';')[0].substring(1, Response?.headers?.link?.split(';')[0].length - 1))

    setAllUsers([...allUsers].concat(Response?.data))

    setGlobalLoading(false)
}