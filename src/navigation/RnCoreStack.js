import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {coreScreens} from '../screens';

const Stack = createStackNavigator();

class RnCoreStack extends Component {
  render() {
    const screens = Object.entries(coreScreens);

    console.log('RnCoreStack this.props :>> ', this.props);

    return (
      <Stack.Navigator initialRouteName={screens[0][0]}>
        {screens.map(([name, component], index) => (
          <Stack.Screen key={index} name={name} component={component} />
        ))}
      </Stack.Navigator>
    );
  }
}

export default RnCoreStack;
