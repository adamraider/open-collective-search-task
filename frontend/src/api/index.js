import axios from 'axios'

export default {
  accounts () {
    const p = axios.get('http://lvh.me:3000/api/v1/accounts')
    p.catch(res => {
      console.log(res)
    })
    return p
  }
}
