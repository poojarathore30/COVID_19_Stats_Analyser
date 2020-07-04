import axios from 'axios'
const url='https://covid19.mathdro.id/api';
export const fetchData=async (country)=>{
    try {
        let changebleURL=url;
        if(country){
            changebleURL=`${url}/countries/${country}`;
            
        }
        const res= await axios.get(changebleURL);
        const data=res.data;
        const Modifieddata={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdates:data.lastUpdates
        }
        return Modifieddata;
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData= async ()=>{
try {
    const {data}=await axios.get(`${url}/daily`);
     
     const Modifieddata=data.map((dailyData)=>({
         confirmed:dailyData.confirmed.total,
         deaths:dailyData.deaths.total,
         date:dailyData.reportDate
     }));
     return Modifieddata;
     
} catch (error) {
    console.log(error);
}
}
export const countries=async()=>{
    try {
        const {data:{ countries }}=await axios.get(`${url}/countries`)
        console.log(countries);
        return countries.map((country)=>country.name);
    } catch (error) {
        console.log(error);
    }
}