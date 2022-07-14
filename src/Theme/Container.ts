import { CommonParams } from './theme'
import { Home } from './containers'

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    home: Home({ Colors, ...args }),
  }
}
