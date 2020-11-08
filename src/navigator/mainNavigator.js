import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera1169728Navigator from '../features/Camera1169728/navigator';
import BlankScreen14169727Navigator from '../features/BlankScreen14169727/navigator';
import Settings169726Navigator from '../features/Settings169726/navigator';
import UserProfile169719Navigator from '../features/UserProfile169719/navigator';
import Settings169718Navigator from '../features/Settings169718/navigator';
import Settings169716Navigator from '../features/Settings169716/navigator';
import SignIn2169714Navigator from '../features/SignIn2169714/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Camera1169728: { screen: Camera1169728Navigator },
BlankScreen14169727: { screen: BlankScreen14169727Navigator },
Settings169726: { screen: Settings169726Navigator },
UserProfile169719: { screen: UserProfile169719Navigator },
Settings169718: { screen: Settings169718Navigator },
Settings169716: { screen: Settings169716Navigator },
SignIn2169714: { screen: SignIn2169714Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
