import React from 'react'
import Image from 'next/image'
import './EmblaCSS.css'

export const Thumb = (props) => {
  const { selected, index, onClick,slide } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <Image src={slide} alt="Picture" width={80} height={80} />
      </button>
    </div>
  )
}
