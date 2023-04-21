import { registerRootComponent } from 'expo'
import { App } from './src/App'

export function Index() {
  return <App />
}

registerRootComponent(Index)
