import { navigation } from '@/lib/navigation'
import NavigationClient from './NavigationClient'

export default function Navbar() {
  return <NavigationClient groups={navigation} />
}
