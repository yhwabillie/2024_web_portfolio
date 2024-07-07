import React from 'react'
import summaryVideo from '@images/videos/summary.mp4'

export default function Video() {
  return (
    <video controls={false} autoPlay muted loop>
      <source src={summaryVideo} type="video/mp4" />
    </video>
  )
}
