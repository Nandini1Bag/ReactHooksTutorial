import {useState,useEffect,useLayoutEffect}from 'react'

function Output() {
    console.log('App');
  const [state, setState] = useState(0)

  //The state changes from 0 to 1
  useEffect(() => {
    setState(state => state + 1)
  }, [])

  useEffect(() => {
    console.log('useEffect 1')
    return () => {
      console.log('useEffect 1 cleanup')
    }
  }, [state])

  useEffect(() => {
    console.log('useEffect 2')
    return () => {
      console.log('useEffect 2 cleanup')
    }
  }, [state])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    return () => {
      console.log('useLayoutEffect cleanup')
    }
  }, [state])

  return null
}

export default Output