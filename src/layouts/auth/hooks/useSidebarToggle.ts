import { useState } from 'react'

const useSidebarToggle = () => {
  // group: state
  const [stateIsToggle, setStateIsToggle] = useState<boolean>(false)

  // group: action
  const onSidebarToggle = (): void => {
    setStateIsToggle(!stateIsToggle)
  }

  return {
    stateIsToggle,
    onSidebarToggle
  }
}

export default useSidebarToggle
