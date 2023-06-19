export const getRealTime = () => {
    const day = new Date();
    const today = day.getDate()
    const time = day.getHours()
    const year = day.getFullYear()
    const month = day.getMonth()

    console.log(today, year, time)

    return
}

getRealTime()