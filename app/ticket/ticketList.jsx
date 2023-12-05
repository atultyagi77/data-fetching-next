// import React from 'react'

import Link from "next/link"

const ticketList = () => {
  return (
    // <Link href="/tickets/ticketList">Ticket</Link>
    <div>
        <Link href="/tickets/ticketList">My First Bolg</Link>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  )
}

export default ticketList
