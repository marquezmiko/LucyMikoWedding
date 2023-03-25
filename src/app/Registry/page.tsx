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

export default function Registry() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
        <div>
          You can find our registry here: <a href="https://www.zola.com/registry/lucyandmiko">https://www.zola.com/registry/lucyandmiko</a>
        </div>
    </ThemeProvider>
  )
}
