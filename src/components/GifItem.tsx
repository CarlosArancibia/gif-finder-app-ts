import { Gif } from '../models/gif.model'

interface GifItemProps {
  gif: Gif
}

export const GifItem = ({ gif }: GifItemProps) => {
  const { title, imageURL } = gif

  return (
    <article className='gif-item'>
      <img src={imageURL} alt={title} />
      <footer>
        <p>{title}</p>
      </footer>
    </article>
  )
}
