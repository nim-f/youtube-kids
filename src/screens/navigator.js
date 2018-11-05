import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'

import SearchScreen from './search_screen'
import SettingsScreen from './settings_screen'
import ChannelsScreen from './channels_screen'

export const MainNavigator = createBottomTabNavigator({
  search: SearchScreen,
  settings: createStackNavigator(
    {
      settings: SettingsScreen,
      channels: ChannelsScreen
    },
    {
      initialRouteName: 'settings',
      headerForceInset: { top: 'never', bottom: 'never' }
    }
  )
})
