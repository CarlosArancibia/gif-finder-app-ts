import { ChangeEvent, useState } from 'react'

interface Props {
  onAddSearch: (search: string) => void
}

export const SearchInput = ({ onAddSearch }: Props) => {
  const [search, setSearch] = useState('')

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value)
  }

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddSearch(search)
    setSearch('')
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='search'>Search a category</label>
      <div>
        <input
          type='text'
          id='serch'
          placeholder='Search a gif'
          aria-label='Search for a GIF'
          value={search}
          onChange={onInputChange}
        />
        <button>Search</button>
      </div>
    </form>
  )
}
