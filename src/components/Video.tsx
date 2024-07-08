import React from 'react'
import LazyLoad from 'react-lazyload'
import summaryVideo from '../../static/videos/summary.mp4'

export default function Video() {
  return (
    <LazyLoad>
      <video controls={false} autoPlay muted loop>
        <source src={summaryVideo} type="video/mp4" />
      </video>
    </LazyLoad>
  )
}
