'use client'
 
import { useEffect } from 'react'
import ChatComponent from "./Component/ChatComponent";
 
export default function Example() {
  useEffect(() => {
    console.log('in useEffect')
  })
  return (<div>
    <ChatComponent />
  </div>
  )
}