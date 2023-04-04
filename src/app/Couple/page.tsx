"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'

import LucyCard from '@/components/lucyCard';
import MikoCard from '@/components/mikoCard';

const inter = Inter({ subsets: ['latin'] })

export default function Couple() {
  return (
    
      <div className={styles.couple} >
        <h1 className="coupleTitle">The Couple</h1>
        <div className="Lucy">
          <h1 className="Lucy">
            Lucy
          </h1>
          <LucyCard />
        </div>
        <div className="Miko">
          <h1 className="Miko">
            Miko
          </h1>
          <MikoCard />
        </div>
      </div>
  )
}
