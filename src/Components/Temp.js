import React, { useEffect, useState } from 'react';
import '../index.css';
const TempApp = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState();

    useEffect(() => {
        const fetchApi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3854df3b9c27b6b618e951c01f273223`
            const response = await fetch(url);
            const resjson = await response.json();
            
            setcity(resjson.main)
            
        }

        fetchApi();
    },[search])

    return (<>
        <div className='box'>
            <div className ='inputData'>
                <input type='search' className='inputField '
                    onChange={(e) => { setsearch(e.target.value) }} />
                {!city ? (<p>No data found</p>) : (<div>
                    <div className='info'>
               <h2 className='location'><i class="fas fa-street-view"></i>{search}</h2>
                    <h1 className='temp'>{city.temp} ° Cel</h1>
               <h3 className='temp-status'>Min:{city.temp_min} ° Cel Max: {city.temp_max} ° Cel</h3>
            </div>
                </div>)}
                
        
                
           
            </div>
    
        </div>

    </>)
}
export default TempApp;
//