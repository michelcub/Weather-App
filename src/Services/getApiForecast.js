export const  getApiForecast = async (lat, lon, days) => {
    const requestOptions = {
        method: 'GET',
        headers: {
                'X-RapidAPI-Key': 'adb5162726mshc23e4a811a03cc0p1668eejsn799b89cb98e1',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'     
        },
        redirect: 'follow'
      };

      try {

        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat},${lon}&days=${days}`, requestOptions)
        const data = response.json()
        return data;

      } catch (error) {
        console.log('error in getApiForecast' + error)
      }
}