import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Home);
