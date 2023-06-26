import { useEffect, useState } from "react";
import { CardDay } from "./Components/CardDay"
import { NavDay } from "./Components/NavDay"
import useAppContext from "./Context/AppContext"


function App(){
  const [show, setShow] = useState(false)
  const [hoursForecast, setHoursForecast] = useState([]);

  const {store,actions} = useAppContext();
  const {getGeolocation, setGeolocation} = actions;
  const {geolocation, data, forecast} = store

  
  useEffect (() =>{
    if(forecast?.length){
      const [today, ...more] = forecast;
      
      setHoursForecast(today);
    }
    
  },[forecast])
  

  const switchShow = () => {
    setShow((prev)=> !prev)
  }

  useEffect(() => {
    getGeolocation()
    .then((coords) => {
      setGeolocation(coords)
    })
    .catch((error) => {
      console.log(error);
    });
  },[getGeolocation,setGeolocation])
  console.log(geolocation)
  
  console.log(hoursForecast.hour)
  
  if(!data?.hasOwnProperty('main')){
    return (
      <section className='overflow-hidden bg-[url("./assets/images/soleado.jpg")] bg-cover bg-top bg-no-repeat w-sreen h-screen flex items-center justify-center flex-col gap-3 relative'>
        <h1 className="p-4 text-4xl text-white bg-gray-300 rounded-xl">Loading...</h1>
      </section>
    )
  }
  

  return (
      <section className={`overflow-hidden bg-[url("./assets/images/soleado.jpg")] bg-cover bg-top bg-no-repeat w-sreen h-screen flex items-center justify-end flex-col gap-3 relative`}>
        <article className=" w-[18rem] h-[8rem] rounded-xl bg-gradient-to-l from-[#183247] to-[#3c647a] flex items-center justify-around shadow-xl">
          <div className="flex">
            <h2 className="text-[5rem] text-gray-200 m-0 p-0">{parseInt(data?.main.temp)}</h2>
            <span className="mt-4 text-white">o</span>
          </div>
          
          <div>
            <p className="text-gray-200">Jueves, 15 de Julio</p>
            <p className="text-gray-200">{data?.name}</p>
          </div>
        </article>

        <button onClick={switchShow}><i className={`text-white fa-solid fa-angle-up text-[2rem] p-3 rounded-full hover:bg-slate-400/80 ${show?'hidden':''}`}></i></button>

        <section className={` bg-[#2c2b2d] w-full max-w-lg h-[23rem] rounded-t-xl ${show?'':'hidden'}`} >
          <div className="flex justify-center p-2">
            <button onClick={switchShow}>
            <i className="text-white text-center fa-solid fa-angle-down text-[2rem] w-[4rem] h-[1.7rem] rounded-full hover:bg-slate-400/80"></i>
            </button>
            
          </div>

          <NavDay/>

          <div className="flex p-3 h-[9rem] w-full overflow-x-auto flex-nowrap gap-3 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-800">
            {
              
            Array.isArray(hoursForecast.hour)?hoursForecast?.hour.map((h,index) =>{
              return <CardDay temp={String(h?.temp_c)} time={String(`${index}:00`)} key={index}/>
            }):null
            } 
            
          </div>

          <section className="flex flex-col gap-3 p-4">
            <div className="flex justify-around px-4 text-xl text-gray-300">
              <p>Max: {parseInt(data?.main.temp_max)}</p>
              <p>Min: {parseInt(data?.main.temp_min)}</p>
            </div>
            <div className="flex justify-around px-4 text-xl text-gray-300">
              <p>Viento: {data?.wind.speed} km-h</p>
              <p>Humedad: {data?.main.humidity}%</p>
            </div>
            
          </section>
        </section>

      </section>
  )
}

export default App
