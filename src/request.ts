import { useState, useEffect } from 'react'

const FetchStories = (url: string) => {
  const [ids, setIds] = useState<number[]>([])

  useEffect(() => {
    const getIds = async () => {
      const response: Response = await fetch(url)
      setIds((await response.json()) || [])
    }

    getIds()
  }, [])

  return ids
}

export default FetchStories
