import axios from 'axios'
import { SERVER_ADDRESS } from '../env'
const MAX_BODY_LENGTH_SIZE = 20 * 1024 * 1024;

/**
 * @brief Client interface to talk to the data-api server
 */
class DataAPIClient {
  constructor(serverAddress = SERVER_ADDRESS) {
    this.serverAddress = serverAddress
  }

  setAddress(serverAddress) {
    this.serverAddress = serverAddress
  }

  async getExpenses() {
    // TODO: add redaxios api call
    const query = {
      method: 'get',
      url: `${this.serverAddress}/expenses`,
    }
    const result = await this.apiCall(query)
    return result.data
  }

  async apiCall(obj) {
    // we increase the max size for posting data
    if (obj.method !== 'get') {
      obj.maxBodyLength = MAX_BODY_LENGTH_SIZE
      obj.maxContentLength = MAX_BODY_LENGTH_SIZE
    }
    return await axios(obj)
  }

}

export default new DataAPIClient()

