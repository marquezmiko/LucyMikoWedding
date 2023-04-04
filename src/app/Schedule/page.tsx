"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Schedule() {
  return (
    <div className={styles.schedule}>
      <h1>Schedule</h1>
      <iframe src="https://giphy.com/embed/13B40FkhzSC2c" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/popkey-katya-wig-13B40FkhzSC2c">via GIPHY</a></p>
    </div>
  )
}
