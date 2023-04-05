"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Registry() {
  return (
    <div className={styles.registry}>
      <a href="https://www.amazon.com/wedding/share/mikoandlucy">Amazon Registry</a>
      <iframe src="https://giphy.com/embed/QX6tXumZ2Q4rpvWIJ2" width="480" height="480" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbc-schitts-creek-QX6tXumZ2Q4rpvWIJ2"></a></p>
    </div>
  )
}
