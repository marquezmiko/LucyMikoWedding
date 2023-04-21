"use client"; // this is a client component

import styles from '../page.module.css'
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Input, InputLabel, Radio, RadioGroup } from '@mui/material';
import {useState, useEffect} from 'react'

export default function RSVP() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  
  return mounted && (
    <div className={styles.rsvp}>
      <FormControl>
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <Input id="name-input" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="email-input">Email address</InputLabel>
        <Input id="email-input" aria-describedby="email-helper-text" />
        {/* <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText> */}
      </FormControl>
      <FormControl>
        <FormLabel id="radio-buttons-group-label"># Guest(s)</FormLabel>
        <RadioGroup
          row
          aria-labelledby="radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="solo" control={<Radio />} label="Just me" />
          <FormControlLabel value="plusOne" control={<Radio />} label="+1" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="food-input">Allergies/Diet Restrictions</InputLabel>
        <Input id="food-input" aria-describedby="food-helper-text" />
        <FormHelperText id="food-helper-text">Vegan, allergic to Strawberries, etc...</FormHelperText>
      </FormControl>
    </div>
  )
 }