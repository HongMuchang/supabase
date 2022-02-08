import { useRouter } from 'next/router'
import useSWR from 'swr'

export const usePostId = () => {
  const router = useRouter()

  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts?userId=${router.query.id}`
      : ''
  )

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  }
}
