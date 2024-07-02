import React from 'react'

interface Props {
  type: 'success' | 'error'
}

 const Button: React.FC<Props> = () => {
  return (
    <div>Button</div>
  )
}

export default Button
