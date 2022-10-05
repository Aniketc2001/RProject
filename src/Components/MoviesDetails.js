import React from 'react'


function MoviesDetails(props) {
    const {showName,summary,rating} = props
    
  return (
    <div className='showDetails'>
        <div id='divInfo' className='infoDiv'>
        <span className='infoPara'>{showName} </span>
            <details className='details'><summary >The more information is...</summary> <p>{summary}</p></details>
            {(rating) ? <span> {rating}</span> : 0}⭐
        </div>
    </div>
  )
}

export default MoviesDetails