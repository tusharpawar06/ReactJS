import { useState } from "react"
import React, {useState} from 'react'

const CityChange = () => {
    let [city,SetCity]=useState('Bhopal')
    function fun1(){
        SetCity('Delhi')
    }
  return (
    <div>
        <p>{city}</p>
        <button onClick={fun1}>change</button>
    </div>
  )
}

export default CityChange