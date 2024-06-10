import moment from 'moment'
import * as React from 'react'

export default function RelativeDateTextComponent({ time }: { time: string }) {
  return <div>상대적 시간: {moment(time).local().format(`YYYY-MM-DD a hh:mm:ss`)}</div>
}
