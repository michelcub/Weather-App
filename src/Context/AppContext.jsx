/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { createContext, useContext, useEffect, useState } from "react";
import { getGeolocation } from "../Services/getGeolocation";
import { getApi } from "../Services/getApi";
import { getApiForecast } from "../Services/getApiForecast";
import {getRealTime} from "../Services/getRealTime.js";

const AppContext = createContext();



export const AppProvider = ({children}) => {
    const [show, setShow] = useState(false)
    const [geolocation, setGeolocation] = useState({});
    const [data, setData] = useState({});
    const [forecast, setForecast] = useState();
    const [switchDayOrNight, setSwitchDayOrNight] = useState('')
    const [hour, setHour] = useState(0)
    const handleSwitchShow = () => {
    setShow((prev)=> !prev)
  }


    useEffect(()=>{
        const data = getRealTime()
        setSwitchDayOrNight(data.time>=7&&data.time<=19?'day':'night')
        setHour(data.time)
    },[])

    useEffect(()=>{
        getApi(geolocation.lat, geolocation.lon)
        .then(res=>{
            setData(res)
        });
    },[geolocation])

    useEffect(()=>{
        getApiForecast(geolocation.lat, geolocation.lon, 3)
        .then((res)=>{
            setForecast(res.forecast.forecastday)
        })
    },[geolocation])

    const store = {
        geolocation,
        data,
        forecast,
        show,
        switchDayOrNight,
        hour
    }
    console.log( getApi(geolocation.lat, geolocation.lon))
    const actions = {
        getGeolocation,
        setGeolocation,
        handleSwitchShow
    }
    console.log(switchDayOrNight)

    return (
        <AppContext.Provider value={{store,actions}}>
            {children}
        </AppContext.Provider>
        
    )
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const useAppContext = () => useContext(AppContext);
export default useAppContext;