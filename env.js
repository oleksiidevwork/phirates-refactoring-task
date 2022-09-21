const NODE_ENV = String(process.env.NODE_ENV)
const PORT = Number(process.env.PORT)
const SERVER_ADDRESS = String(process.env.SERVER_ADDRESS)
const isDevEnv = () => {
  return NODE_ENV === 'development'
}

const isProdEnv = () => {
  return NODE_ENV === 'production'
}

export {
  NODE_ENV,
  PORT,
  SERVER_ADDRESS,
  isDevEnv,
  isProdEnv,
}