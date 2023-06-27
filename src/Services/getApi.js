export const getApi = async (lat, lon) => {
    const API_KEY = 'e19cf427f578b20c401c124ba209e809';
    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${lon}`, {method: 'GET',headers: {
		'X-RapidAPI-Key': 'adb5162726mshc23e4a811a03cc0p1668eejsn799b89cb98e1',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}});

          const data = await response.json();
          return data;


    } catch (error) {
       console.log('error en getApi -> ' + error) 
    }
    
}