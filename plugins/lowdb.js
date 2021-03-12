
//import low from 'lowdb'
//import FileSync from 'lowdb/adapters/LocalStorage'
import db from '../static/db.json'
export default ({ app }, inject) => {
    //const adapter = new FileSync('../static/db.json')
    //const db = low(adapter)

    inject('db', db)
  }