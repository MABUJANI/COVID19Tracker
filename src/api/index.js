import axios from 'axios';

const url = "https://covid19.mathdro.id/api";
const indiaurl = "https://covid19-india-adhikansh.herokuapp.com";

export const fetchData = async (country)=>
{
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
         console.log(confirmed,recovered,deaths,lastUpdate);

        return {confirmed,recovered,deaths,lastUpdate};
    } catch (error) {
        
    }

}

export const fetchStateData = async (state)=>
{
    let changeableUrl;
    if(state){
        changeableUrl = `${indiaurl}/state/${state}`;
    }
    try {
        const {data:{data}} = await axios.get(changeableUrl);
         console.log(data);

        return data;
    } catch (error) {
        
    }

}


export const fetchDailyData = async()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {
        
    }
}



export const fetchCountries = async()=>{
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        console.log(countries);
        return countries.map((country)=>country.name);
    } catch (error) {
        
    }
}

export const fetchStates = async()=>{
    try {
        const {data:{state}} = await axios.get(`${indiaurl}/states`);
       
        
        console.log(state);
        return state.map((state)=>state.name);
    } catch (error) {
        
    }
}