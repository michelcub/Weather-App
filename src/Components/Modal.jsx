import {NavDay} from "./NavDay.jsx";
import {CardDay} from "./CardDay.jsx";
import useAppContext from "../Context/AppContext.jsx";
export const Modal = ({data, hoursForecast}) => {

    const {store, actions} = useAppContext()

    return (
         <section className={` bg-[#2c2b2d] w-full max-w-lg h-[23rem] rounded-t-xl ${store.show?'':'hidden'}`} >
          <div className="flex justify-center p-2">
            <button onClick={actions.handleSwitchShow}>
            <i className="text-white text-center fa-solid fa-angle-down text-[2rem] w-[4rem] h-[1.7rem] rounded-full hover:bg-slate-400/80"></i>
            </button>

          </div>

          <NavDay/>

          <div className="flex p-3 h-[9rem] w-full overflow-x-auto flex-nowrap gap-3 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-800">
            {

            Array.isArray(hoursForecast?.hour)?hoursForecast?.hour.slice(store.hour,hoursForecast?.hour.length).map((h,index) =>{
              return <CardDay temp={String(h?.temp_c)} time={String(`${store.hour++}:00`)} key={index} code={data?.current.condition.code}/>
            }):null
            }

          </div>

          <section className="flex flex-col gap-3 p-4">
            <div className="flex justify-around px-4 text-xl text-gray-300">
              <p>Max: {parseInt(data?.current?.temp_c)}</p>
              <p>Min: {parseInt(data?.current?.temp_c)}</p>
            </div>
            <div className="flex justify-around px-4 text-xl text-gray-300">
              <p>Viento: {data.current?.wind_kph} km-h</p>
              <p>Humedad: {data?.current?.humidity}%</p>
            </div>

          </section>
        </section>
    )
}