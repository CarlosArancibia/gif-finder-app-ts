import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/get-gifs'
import { Gif } from '../models/gif.model'

export const useFetch = (query: string) => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getImagesGifs = async () => {
      const newGifs = await getGifs(query)
      setGifs(newGifs)
      setIsLoading(false)
    }

    getImagesGifs()
  }, [query])

  return {
    gifs,
    isLoading,
  }
}
