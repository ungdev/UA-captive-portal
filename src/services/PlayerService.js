import axios from 'axios'

class PlayerService {

  /**
   * Set the player's mac address
   * @param  {string} macAddress player's mac address
   * @return {Promise}
   */
  sendMacAddress(macAddress) {
    console.log(`send mac: ${macAddress}`)
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

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
