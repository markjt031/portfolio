import React from 'react'

const Anchor= ({anchor}, {text}) => {
  return (
    <div className="h-16 w-full bg-stone-200" id={anchor}>{text}</div>
  )
}

export default Anchor