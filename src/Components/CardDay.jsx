import icons from "../Utils/icons.js";
import useAppContext from "../Context/AppContext.jsx";
export const CardDay = ({temp, time, code}) => {
    const{store,actions} = useAppContext()

    const icon = icons.find(icon => Number(icon.code) === Number(code))
    console.log(icon)
    return (
        <article className="flex flex-col items-center p-4 border-[2px] hover:border-orange-400 rounded-[5rem]">
              <p className="text-gray-300">{time}</p>
              <img className="w-[2.5rem]" src={`./src/assets/icons/${store.switchDayOrNight}/${icon.icon}`} alt="sun" />
              <div className="flex text-gray-200">
                <p className="text-xl">{temp}</p>
                <p className="text-sm">o</p>
              </div>
            </article>
    )
}