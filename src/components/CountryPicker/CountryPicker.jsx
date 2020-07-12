import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'; 


import styles from './CountryPicker.module.css';

import {fetchCountries} from '../../api';
import {fetchStates} from '../../api';


const CountryPicker = ({handleCountryChange,handleStateChange}) => {

    const [fetchedCountries,setFetchedCountries] = useState([]);
    const [fetchedStates,setFetchedStates] = useState([]);

    useEffect(() => {

        const fetchAPI = async ()=>{
            setFetchedCountries( await fetchCountries());
            

        }
        const fetchStatesData = async ()=>{
            setFetchedStates( await fetchStates());
        }
        
        fetchAPI();
        fetchStatesData();
        
    },[setFetchedCountries],[setFetchedStates])
    console.log(fetchedCountries);
    console.log(fetchedStates);
   
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
            <NativeSelect defaultValue="" onChange={(e)=>{handleStateChange(e.target.value)}}>
                {fetchedStates.map((state,i)=><option key={i} value={state}>{state}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;