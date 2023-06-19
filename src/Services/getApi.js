export const getApi = async (lat, lon) => {
    const API_KEY = 'e19cf427f578b20c401c124ba209e809';
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${Number(lat)}&lon=${Number(lon)}&units=metric&appid=${API_KEY}`, {method: 'GET'});
        const data = await response.json();
        return data; 
    } catch (error) {
       console.log('error en getApi -> ' + error) 
    }
    
}