import { SearchInput } from './components/SearchInput'
import logo from './assets/search-logo.svg'
import { useState } from 'react'

export const GifFinderApp = () => {
  const [searches, setSearches] = useState(['naruto'])

  const onAddSearch = (search: string) => {
    setSearches([search, ...searches])
  }

  return (
    <>
      <header className='header'>
        <section className='header-content container'>
          <div>
            <h1>GifFinderApp</h1>
            <SearchInput onAddSearch={onAddSearch} />
          </div>
          <img src={logo} alt='logo app' />
        </section>
      </header>
    </>
  )
}
