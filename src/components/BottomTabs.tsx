import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenHome from './ScreenHome'
import ScreenSettings from './ScreenSettings'

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ScreenHome} />
      <Tab.Screen name="Settings" component={ScreenSettings} />
    </Tab.Navigator>
  )
}

export default MyTabs
