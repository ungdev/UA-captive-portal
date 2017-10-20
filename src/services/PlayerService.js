import axios from 'axios'

class PlayerService {

  /**
   * Set the player's spot
   * @param  {string} spot
   * @return {Promise}
   */
  sendSpot(spot) {
    console.log(`send spot: ${spot}`)
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

}

export default new PlayerService()
