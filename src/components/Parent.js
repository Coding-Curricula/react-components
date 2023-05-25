import React from 'react'

import Child from './Child'

export default function Parent() {
  return (
    <div>
        <h1>Parent Component</h1>
        <Child childOne="Benny" childTwo="Austin" />
    </div>
  )
}
