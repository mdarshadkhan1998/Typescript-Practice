import {useState, useEffect} from 'react'

const useTimeout = (time:number) => {
    const [delay, setDelay] = useState(false)

    setTimeout(()=>{
        setDelay(true)
    }, time*1000)

  return delay
}

export default useTimeout