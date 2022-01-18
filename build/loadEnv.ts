import dotenv from 'dotenv'
import { useRuntimeConfig } from 'nuxt3'

export interface ViteEnv {
  VITE_PORT: number
  VITE_USE_MOCK: boolean
  VITE_PUBLIC_PATH: string
  VITE_PROXY: [string, string][]
}

export function loadEnv(NODE_ENV, USE_MOCK): ViteEnv {
  debugger
  // const config = useRuntimeConfig()
  const env = NODE_ENV
  const ret: any = {}
  const envList = [`.env.${env}.local`, `.env.${env}`, '.env.local', '.env']
  envList.forEach((env) => {
    debugger
    dotenv.config({
      path: env,
    })
  })
  //ret['VITE_USE_MOCK'] = true
  ret['VITE_USE_MOCK'] = USE_MOCK || false
  //const prodEnabled = process.env.USE_CHUNK_MOCK || false

  for (const envName of Object.keys(process.env)) {
    let realName = (process.env as any)[envName].replace(/\\n/g, '\n')
    realName =
      realName === 'true' ? true : realName === 'false' ? false : realName
    if (envName === 'VITE_PORT') {
      debugger
      realName = Number(realName)
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName)
      } catch (error) {}
    }
    ret[envName] = realName
    process.env[envName] = realName
  }

  return ret
}
