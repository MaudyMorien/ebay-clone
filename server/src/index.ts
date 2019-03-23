import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import AddController from "./adds/controller"
import setupDb from './db'

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
   controllers: [
       AddController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))

//heroku addons:create heroku-postgresql:hobby-dev --app stormy-refuge-70658

