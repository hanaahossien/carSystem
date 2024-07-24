import express from 'express'
import { conectdb } from './db/connection_db.js'
import { userrouter } from './src/moduls/car/car.router.js'
import { customerrouter } from './src/moduls/customer/customer.router.js'
import { rentalrouter } from './src/moduls/rental/rental.router.js'
import { globalresponse } from './src/middleware/catcherror.js'
const app = express()
const port = 3000


conectdb()
app.use(express.json())
app.use("/rental",rentalrouter)

app.use("/car",userrouter)
app.use("/cust",customerrouter)


//4 error global error response
//app.use(globalresponse)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))