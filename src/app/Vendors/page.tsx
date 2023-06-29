"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Vendors() {
  return (
    <div className={styles.vendors}>
      <ul className={styles.vendorList}>
        <li>
          <a href="https://pilialohaproductions.com/">
            <img src="/PP_LOGO.png" alt="Pilialoha Logo" width="200px" />
            {/* Planner: Pilialoha Productions */}
          </a>
          
        </li>
        <li>
          <a href="https://www.kualoa.com/">
            <img src="/KUALOA_LOGO.png" alt="Kualoa Logo" width="200px" />
            {/* Venue: Paliku Gardens at Kualoa Ranch */}
          </a>
        </li>
        <li>
          <a href="https://seekingfilms.com/">
            <img src="/SF_LOGO.png" alt="Seeking Films Logo" width="200px" />
            {/* Photography/Videography: Seeking Films */}
          </a>
        </li>
      </ul>
    </div>
  )
}
