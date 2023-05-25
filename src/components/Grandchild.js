import React from 'react'

export default function Grandchild(props) {
  return (
    <div>
        <h3>Grandkids Names:</h3>
        <p>{props.grandchildOne}</p>
        <p>{props.grandchildTwo}</p>
    </div>
  )
}
