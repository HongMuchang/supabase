import useSWRImmutable from 'swr/immutable'

const API_URL = 'https://jsonplaceholder.typicode.com'

// returnされたURLが入ってくる
const useFetch = (url: string) => {
  const { data, error } = useSWRImmutable(url)
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  }
}

// posts
export const usePosts = () => {
  return useFetch(`${API_URL}/posts`)
}

// users
export const useUsers = () => {
  return useFetch(`${API_URL}/users`)
}

// comments
export const useComments = () => {
  return useFetch(`${API_URL}/comments`)
}
