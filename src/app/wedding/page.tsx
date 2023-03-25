"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import { ThemeProvider, createTheme } from "@mui/material/styles";

import ResponsiveAppBar from '@/components/appBar'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0c4812',
    },
    secondary: {
      main: '#f56608',
    },
  },
  typography: {
    fontFamily: 'Lora',
    fontSize: 16,
  },
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className="title">
            June 6, 2024
          </h1>
          <br />
          <h2 className="subtitle">
            Miks & Luce
          </h2>
        </div>
      </main>
    </ThemeProvider>
  )
}
