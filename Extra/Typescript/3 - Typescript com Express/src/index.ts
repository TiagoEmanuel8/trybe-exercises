import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const { PORT = 3000 } = process.env

app.listen(PORT, () => {
  console.log(`🚀  mission to mars running in port ${PORT}`)
})