import { registerRootComponent } from 'expo';

import Index from "./src/app/index";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Index);

// Tabs 
// Expo Router - Tabs (bottom tab)
// React Native Navigation(RNN) - BottomTabNavigator


// Вариант 1 - <View><Header /><Form /></View>
// Вариант 2 - В Screen проп options, свойство header - передаем компонент Header
// Вариант 3 - В Screen пропы headerLeft, headerRight - передаем компоненты за куски вашего Header
