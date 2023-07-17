import { useEffect, useState } from "react";
import useAppContext from "./Context/AppContext"
import {LoadingComponent} from "./Components/LoadingComponent.jsx";
import {Modal} from "./Components/Modal.jsx";


function App(){

  const [hoursForecast, setHoursForecast] = useState([]);

  const {store,actions} = useAppContext();
  const {getGeolocation, setGeolocation, handleSwitchShow} = actions;
  const {geolocation, data, forecast, show} = store

  const current = data.current
  
  useEffect (() =>{
    if(forecast?.length){
      const [today, ...more] = forecast;
      
      setHoursForecast(today);
    }
    
  },[forecast])
  



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
  



  if(!data?.hasOwnProperty('location')){
    return (
      <LoadingComponent/>
    )
  }

  

  console.log(data)

  return (
      <section className={`overflow-hidden bg-[url("./assets/images/soleado.jpg")] bg-cover bg-top bg-no-repeat w-sreen h-screen flex items-center justify-end flex-col gap-3 relative`}>
        <article className=" w-[18rem] h-[8rem] rounded-xl bg-gradient-to-l from-[#183247] to-[#3c647a] flex items-center justify-around shadow-xl">
          <div className="flex">
            <h2 className="text-[5rem] text-gray-200 m-0 p-0">{parseInt(data?.current.temp_c)}</h2>
            <span className="mt-4 text-white">o</span>
          </div>
          
          <div>
            <p className="text-gray-200">Jueves, 15 de Julio</p>
            <p className="text-gray-200">{data?.location.name}</p>
          </div>
        </article>

        <button onClick={handleSwitchShow}><i className={`text-white fa-solid fa-angle-up text-[2rem] p-3 rounded-full hover:bg-slate-400/80 ${show?'hidden':''}`}></i></button>

        <Modal data={data} hoursForecast={hoursForecast} />

      </section>
  )
}

export default App
