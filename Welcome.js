import React from 'react'

function Welcome(props) {
  const {name,salary} = props
  return (
    <div>Welcome to Tjohn {name} {salary} {props.children}
    
    </div>
  
  )
}

export default Welcome