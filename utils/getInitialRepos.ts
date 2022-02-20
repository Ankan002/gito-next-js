import axios from "axios";

export const getInitialRepos = async(
    login: string | String | undefined
) => {
    const Response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${login}/repos?per_page=20`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })

    console.log(Response)

    return {
        nextLink: Response?.headers?.link?.split(';')[0].substring(1, Response?.headers?.link?.split(';')[0].length - 1),
        data: Response?.data 
    }
}