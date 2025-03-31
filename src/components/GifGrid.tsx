import { GifItem } from './GifItem'
import { useFetch } from '../hooks/use-fetch'
import { Loader } from './Loader'

interface Props {
  query: string
}

export const GifGrid = ({ query }: Props) => {
  const { gifs, isLoading } = useFetch(query)

  return (
    <section className='grid container'>
      <h2>{query}</h2>
      <div className='grid-content'>
        {isLoading ? <Loader /> : gifs.map((gif) => <GifItem key={gif.id} gif={gif} />)}
      </div>
    </section>
  )
}
