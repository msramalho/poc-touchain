
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
export default ({ app }, inject) => {
    const adapter = new FileSync('./assets/db.json')
    app.db = low(adapter)
  }