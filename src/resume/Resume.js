import React from 'react'
import king from "../assets/king.png"

function Resume() {
  return (
    <main className="bg-black flex justify-center items-center w-screen h-screen">
    <img
      src={king}
      className="w-auto h-[500px]"
      alt="logo"
    />
  </main>
  )
}

export default Resume