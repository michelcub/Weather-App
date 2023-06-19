
export const getGeolocation = () => {

    const getPosition = async (position) => {
        const lat = await position.coords.latitude;
        const lon = await position.coords.longitude;

        const coords = {
            lat,
            lon
        }
        return coords
    }


    if ("geolocation" in navigator) {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const coords = getPosition(position);
              console.log(coords);
              resolve(coords);
            },
            (error) => {
              reject(error);
            }
          );
        });
      } else {
        return Promise.reject(new Error('Sorry, geolocation is not available'));
      }
    };