import React from 'react';

import {Cards,Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData,fetchStateData} from './api';

import coronaImage from './images/image.png';

class App extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             data:{},
             statedata:{},
             country:'',
             state:''
        }
    }
    


   async componentDidMount(){
        const fetchedData = await fetchData();
        const fetchedStateData = await fetchStateData();
        this.setState({data:fetchedData,statedata:fetchedStateData});
    }

    handleCountryChange = async (country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData,country:country})
    }
    handleStateChange = async(state)=>{
        console.log(state);
        const fetchedStateData = await fetchStateData(state);
        this.setState({statedata: fetchedStateData,state:state})

    }
    render(){
        // console.log("state",this.state.statedata);
        // console.log(this.state.data);
        

        const {data,statedata,country,state} = this.state;

        return(
            <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19" />
            <Cards data={data} statedata={ statedata}/>
            <CountryPicker handleCountryChange= {this.handleCountryChange} handleStateChange={this.handleStateChange}/>
            <Chart data={data} statedata={statedata} state={state} country={country}/>
           
            </div>
        )
    }
}


export default App;