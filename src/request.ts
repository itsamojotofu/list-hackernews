import { useState, useEffect } from 'react'

const useStories = (url: string) => {
  const [ids, setIds] = useState<number[]>([])

  useEffect(() => {
    const getIds = async () => {
      const response: Response = await fetch(url)
      setIds((await response.json()) || [])
    }

    getIds()
  }, [url])

  return ids
}

export default useStories
