import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Styles} from '../../../static/Theme';
import {logoutAction} from './../../../store/actions/auth';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  render() {
    const {user} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Well come "{user.username}" !</Text>

        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={this.props.logoutAction}>
          <Text style={Styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, {
  logoutAction,
})(Profile);
