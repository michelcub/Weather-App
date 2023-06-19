

export const CardDay = ({temp, time}) => {
    return (
        <article className="flex flex-col items-center p-4 border-[2px] hover:border-orange-400 rounded-[5rem] h-[7rem]">
              <p className="text-gray-300">{time}</p>
              <img className="w-[2.5rem]" src=".././assets/icons/Property_1=Sun.svg" alt="sun" />
              <div className="flex text-gray-200">
                <p className="text-xl">{temp}</p>
                <p className="text-sm">o</p>
              </div>
            </article>
    )
}