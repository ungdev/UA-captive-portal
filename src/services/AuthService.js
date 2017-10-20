import axios from 'axios'

class AuthService {

  /**
   * Try to auth the user
   * @param  {String} login
   * @param  {String} password
   * @return {Promise}
   */
  auth(login, password) {
    console.log(`auth : ${login} & ${password}`)
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

}

export default new AuthService()
