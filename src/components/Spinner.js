import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt="loading" style={{ maxWidth: '50px', maxHeight: '35px' }}/>
      </div>
    )
  
}

export default Spinner


