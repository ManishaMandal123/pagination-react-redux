import React from 'react'
import { useGlobalContext } from './context'


const Search = () => {
  const {query, searchPost} = useGlobalContext();
  return (
    <>
      <div>
        <h1>Tech Website</h1>
        <form>
          <div>
            <input className='search' type="text " placeholder='search here' value={query} onChange={(e) => searchPost(e.target.value)} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Search