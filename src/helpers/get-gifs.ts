import { Gif } from '../models/gif.model'
import { GifData } from '../models/gif.types'

export const getGifs = async (query: string) => {
  const { VITE_API_URL, VITE_API_KEY } = import.meta.env

  const url = `${VITE_API_URL}?api_key=${VITE_API_KEY}&q=${query}&limit=10`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Ops! Something went wrong. Error HTTP: ' + response.status)

    const { data } = await response.json()
    const gifs = data.map(({ id, title = 'Unknown', images }: GifData) => {
      return new Gif(id, title, images.original.url)
    })

    return gifs
  } catch (error) {
    console.log(error)
  }
}
