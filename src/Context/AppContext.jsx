/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { createContext, useContext, useEffect, useState } from "react";
import { getGeolocation } from "../Services/getGeolocation";
import { getApi } from "../Services/getApi";
import { getApiForecast } from "../Services/getApiForecast";
const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [geolocation, setGeolocation] = useState({});
    const [data, setData] = useState({});
    const [forecast, setForecast] = useState();
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
        forecast
    }

    const actions = {
        getGeolocation,
        setGeolocation,
    }
    console.log(forecast)
    return (
        <AppContext.Provider value={{store,actions}}>
            {children}
        </AppContext.Provider>
        
    )
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const useAppContext = () => useContext(AppContext);
export default useAppContext;