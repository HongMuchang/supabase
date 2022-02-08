import { useRouter } from 'next/router'
import useSWR from 'swr'

export const useUser = () => {
  const router = useRouter()
  console.log(router.query.id)

  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : ''
  )

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  }
}
