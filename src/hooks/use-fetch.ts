import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/get-gifs'
import { Gif } from '../models/gif.model'

export const useFetch = (query: string) => {
  const [gifs, setGifs] = useState<Gif[]>([])

  useEffect(() => {
    const getImagesGifs = async () => {
      const newGifs = await getGifs(query)
      setGifs(newGifs)
    }

    getImagesGifs()
  }, [query])

  return {
    gifs,
  }
}
