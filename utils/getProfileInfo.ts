import axios from 'axios'

export const getProfileInfo = async (
  name: string,
  loading: boolean,
  setLoading: any
) => {
    if(loading) return

    setLoading(true)
    const Response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${name}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    )

    setLoading(false)
    return{
        info: Response?.data
    }
}
