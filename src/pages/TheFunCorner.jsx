import React,{useEffect} from 'react'

const TheFunCorner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>TheFunCorner</div>
  )
}

export default TheFunCorner