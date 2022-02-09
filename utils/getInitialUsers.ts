import axios from "axios"

export const getInitilaUsers = async() => {
    const Response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users?since=0&per_page=32`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })


    return {
        nextLink: Response?.headers?.link?.split(';')[0].substring(1, Response?.headers?.link?.split(';')[0].length - 1),
        data: Response?.data 
    }
}