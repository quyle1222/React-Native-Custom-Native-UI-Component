import { CommonParams } from './theme'
import { Auth, Home } from './containers'

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    home: Home({ Colors, ...args }),
    auth: Auth({ Colors, ...args }),
  }
}
