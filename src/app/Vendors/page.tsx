"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Vendors() {
  return (
    <div className={styles.vendors}>
      <h1>Huge thank you to our vendors!</h1>
      <ul>
        <li>
          <a href="https://pilialohaproductions.com/">Planner: Pilialoha Productions</a>
        </li>
        <li>
          <a href="https://www.kualoa.com/">Venue: Paliku Gardens at Kualoa Ranch</a>
        </li>
        <li>
          <a href="https://seekingfilms.com/">Photography/Videography: Seeking Films</a>
        </li>
      </ul>
    </div>
  )
}
