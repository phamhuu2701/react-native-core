import HomeScreen from './HomeScreen';
import HelpScreen from './HelpScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MessagesScreen from './MessagesScreen';
import PostsScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';
import RnCoreHome from './../components/RnCore/RnCoreHome';
import RnAccessibility from './../components/RnCore/RnAccessibility';
import RnActivityIndicator from './../components/RnCore/RnActivityIndicator';
import RnButton from './../components/RnCore/RnButton';
import RnFlatList from './../components/RnCore/RnFlatList';
import RnImage from './../components/RnCore/RnImage';
import RnImageBackground from './../components/RnCore/RnImageBackground';
import RnKeyboardAvoidingView from './../components/RnCore/RnKeyboardAvoidingView';
import RnModal from './../components/RnCore/RnModal';
import RnSafeAreaView from './../components/RnCore/RnSafeAreaView';
import RnStatusBar from './../components/RnCore/RnStatusBar';
import RnSwitch from './../components/RnCore/RnSwitch';
import RnTextInput from './../components/RnCore/RnTextInput';
import RnTouchableHighlight from './../components/RnCore/RnTouchableHighlight';
import RnTouchableOpacity from './../components/RnCore/RnTouchableOpacity';
import RnApisHome from '../components/RnApis/RnApisHome';
import RnCustomizesHome from '../components/RnCustomizes/RnCustomizesHome';
import RnCoreStack from '../navigation/RnCoreStack';
import RnApisStack from '../navigation/RnApisStack';
import RnCustomizesStack from '../navigation/RnCustomizesStack';
import UserStack from '../navigation/UserStack';

export const homeScreens = {
  Home: HomeScreen,
};

export const commonScreens = {
  Help: HelpScreen,
};

export const authScreens = {
  Login: LoginScreen,
  Register: RegisterScreen,
};

export const userScreens = {
  Profile: ProfileScreen,
  Messages: MessagesScreen,
  Posts: PostsScreen,
};

export const coreScreens = {
  Core: RnCoreHome,
  Accessibility: RnAccessibility,
  ActivityIndicator: RnActivityIndicator,
  Button: RnButton,
  FlatList: RnFlatList,
  Image: RnImage,
  ImageBackground: RnImageBackground,
  KeyboardAvoidingView: RnKeyboardAvoidingView,
  Modal: RnModal,
  SafeAreaView: RnSafeAreaView,
  StatusBar: RnStatusBar,
  Switch: RnSwitch,
  TextInput: RnTextInput,
  TouchableHighlight: RnTouchableHighlight,
  TouchableOpacity: RnTouchableOpacity,
};

export const apisScreens = {
  APIs: RnApisHome,
};

export const customizesScreens = {
  Customizes: RnCustomizesHome,
};

export const getTabScreens = () => {
  return Object.entries({
    Core: RnCoreStack,
    APIs: RnApisStack,
    Customizes: RnCustomizesStack,
    User: UserStack,
  });
};

export const getDrawerScreens = (isLoggedIn) => {
  return Object.entries(
    isLoggedIn
      ? {
          Home: HomeScreen,
          Core: RnCoreStack,
          APIs: RnApisStack,
          Customizes: RnCustomizesStack,
          User: UserStack,
          Help: HelpScreen,
        }
      : {
          Home: HomeScreen,
          Login: LoginScreen,
          Register: RegisterScreen,
          Help: HelpScreen,
        },
  );
};

export const getScreens = (isLoggedIn) => {
  return Object.entries({
    ...homeScreens,
    ...(isLoggedIn ? userScreens : authScreens),
    ...(isLoggedIn && coreScreens),
    ...(isLoggedIn && apisScreens),
    ...(isLoggedIn && customizesScreens),
    ...commonScreens,
  });
};
