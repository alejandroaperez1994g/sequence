import dotenv from 'dotenv'

dotenv.config()

interface TConfig {
  development: EnvironmentConfig
}

interface EnvironmentConfig {
  app: AppConfig
  auth: AUTH
}

interface AppConfig {
  PORT: string | number
}

interface AUTH {
  tokenSecret: string
  refreshTokenSecret: string
}

const CONFIG: TConfig = {
  development: {
    app: {
      PORT: process.env.PORT ?? 3000
    },
    auth: {
      tokenSecret: process.env.TOKEN_SECRET ?? 'secret',
      refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET ?? 'refresh_secret'
    }

  }
}

export default CONFIG
