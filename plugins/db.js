
//import low from 'lowdb'
//import FileSync from 'lowdb/adapters/LocalStorage'
import db from '../static/db.json'
export default (_, inject) => {
    inject('db', db)
  }