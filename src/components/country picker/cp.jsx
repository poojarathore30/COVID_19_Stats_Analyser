import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl } from '@material-ui/core'
import './cp.css'
import {countries} from "../../api/index"
const CountryPicker=({ handleCountryChange })=>{
    const [fetched,SetFetched]=useState([]);
    useEffect(()=>{
        const fetchCountries=async ()=>{
            SetFetched(await countries());
        }
        fetchCountries();
        console.log(fetched);
        
    },[SetFetched])
    return (
        <div className='country-picker'>
        <FormControl className='formcontrol' >
        <NativeSelect defaultValue="" onClick={(e)=>{  
            if(e.target.value.length >4){ handleCountryChange(e.target.value)  }
              }} >
        <option value='global' >World-Wide-cases</option>
        {fetched.map((country,i)=>
            <option key={i} value={country} >{country}</option>
            )}
        </NativeSelect>
        </FormControl>
        </div>)
}

export default  CountryPicker;

