import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import BusinessScreen from './src/screens/BusinessScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Business: BusinessScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);