import React from 'react'

import Grandchild from './Grandchild'

export default function Child(props) {
  return (
    <div>
        <h2>Kids Names:</h2>
        <Grandchild grandchildOne={props.childOne} grandchildTwo={props.childTwo} />
    </div>
  )
}
