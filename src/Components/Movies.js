import React from 'react'
import MoviesDetails from './MoviesDetails'

function Movies(props) {
  const {showImgSrc, showName, summary, rating}  = props
  return (

    <div className='outerDiv'>
        {showImgSrc ? <img src={showImgSrc} alt='no img found'/> : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png' alt='no img found'/>}
        <MoviesDetails className='hideDetails' showName={showName} summary={summary} rating={rating}/>
    </div>    
  )
}

export default Movies