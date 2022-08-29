import React, {useState, useEffect}  from 'react'
import Loading from './Loading'
import Verfication from './Verfication';

const Demo = () => {
    const [isLoading, setIsLoading] = useState(true);
  useEffect (()=> {
    setTimeout (()=>{
      setIsLoading(false)
    }, 2500);
  })
  return (
    <div>
           {
        isLoading === true?
        <Loading/>:
        <Verfication/>
       }
    </div>
  )
}

export default Demo