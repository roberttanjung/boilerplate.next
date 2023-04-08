import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const useTheme = () => {
  const { reload } = useRouter()

  // group: state
  const [stateTheme, setStateTheme] = useState<string|'bumblebee'|'dark'>('bumblebee')

  // group: action
  const onChangeTheme = (theme: string): void => {
    localStorage.setItem('theme', theme)
    setStateTheme(theme)
    reload()
  }

  // group: setup
  const setup = (): void => {
    const getLocalStorage: string = localStorage.getItem('theme') || 'bumblebee'

    if (getLocalStorage) setStateTheme(getLocalStorage)
  }

  // group: mounted
  useEffect(() => { setup() }, [])

  return {
    stateTheme,
    onChangeTheme
  }
}

export default useTheme
