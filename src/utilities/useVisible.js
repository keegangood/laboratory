import {useState, useEffect, useRef, useCallback} from 'react';


const useIsVisible = (initialIsVisible, ref) => {
  const [isVisible, setIsVisible] = useState(initialIsVisible)

  useEffect(()=> {
    const handleClickOutside = (event) => {
      if(ref.current && !ref.current.contains(event.target)){
        setIsVisible(false);
      }
    }
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  },[ref])

  return {isVisible, setIsVisible};
}

export default useIsVisible;