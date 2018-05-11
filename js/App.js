
import React, { Component } from 'react';

import { Button } from 'react-native';

import { 
  StackNavigator, 
  SwitchNavigator, 
  TabNavigator, 
  TabBarBottom, 
  DrawerNavigator,
  TabBarTop,
} from 'react-navigation';

import Rate from './components/main/rate/Rate';
import Match from './components/main/match/Match';
import Dating from './components/main/date/Date';

import Login from './components/auth/Login';
import AuthLoading from './components/authLoading/AuthLoading';
import Logout from './components/drawer/Logout';

import Leaderboard from './components/drawer/leaderboard/Leaderboard';
import Results from './components/drawer/results/Results';
import Photos from './components/drawer/photos/Photos';
import Tags from './components/drawer/tags/Tags';
import Info from './components/drawer/info/Info';
import Content from './components/drawer/Content';

import Settings from './components/drawer/info/settings/Settings';
import Username from './components/drawer/info/settings/Username';
import Password from './components/drawer/info/settings/Password';
import Email from './components/drawer/info/settings/Email';
import Firstname from './components/drawer/info/settings/Firstname';
import Lastname from './components/drawer/info/settings/Lastname';

import HeaderLogo from './components/globals/headerLogo/HeaderLogo';
import Null from './components/globals/null/null';

const HeaderColor = '#afd7b4'

const TabStack = TabNavigator(
  {
    Match: {
      screen: Match,
    },
    Rate: {
      screen: Rate,
    },
    Dating: {
      screen: Dating,
    },
  },
  {
    animationEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: false,
    tabBarOptions: {
      initialRouteName: 'Match',
      backBehavior: 'none',
      activeTintColor: 'white',
      labelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 12,
      },
      style: {
        backgroundColor: HeaderColor,
      },
    },
  }
)

const TopBarOptions = {
  animationEnabled: true,
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  lazy: false,
  tabBarOptions: {
    initialRouteName: 'Results',
    backBehavior: 'none',
    activeTintColor: HeaderColor,
    inactiveTintColor: 'lightgrey',
    labelStyle: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    style: {
      backgroundColor: 'white',
    },
    indicatorStyle: {
      borderBottomColor: HeaderColor,
      borderBottomWidth: 6,
    }
  },
}

const resultsTabStack = TabNavigator(
  {
    All: {
      screen: Results,
    },
    Starred: {
      screen: Results,
    },
  },
  TopBarOptions
)

const tagsTabStack = TabNavigator(
  {
    You: {
      screen: Tags,
    },
    'Your Mate': {
      screen: Tags,
    },
  },
  TopBarOptions
)

const stdHeaderNavOptions = (title) => { 
  return {
    title: title,
    headerStyle: {
      backgroundColor: HeaderColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
  }
}

const drawerStackNav = (screen, header) => {
  return {
    screen: StackNavigator({ 
      Leaderboard: {
        screen: screen, 
        navigationOptions: stdHeaderNavOptions(header),
      }
    }),
  }
}

const NestedSettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: stdHeaderNavOptions('Settings'),
  },
  Username: {
    screen: Username,
    navigationOptions: stdHeaderNavOptions('Edit Username')
  },
  Password: {
    screen: Password,
    navigationOptions: stdHeaderNavOptions('Edit Password')
  },
  Email: {
    screen: Email,
    navigationOptions: stdHeaderNavOptions('Edit Email')
  },
  Firstname: {
    screen: Firstname,
    navigationOptions: stdHeaderNavOptions('Edit Firstname')
  },
  Lastname: {
    screen: Lastname,
    navigationOptions: stdHeaderNavOptions('Edit Lastname')
  },
}, {
  mode: 'modal',
  initialRouteName: 'Settings',
})

const transitionStack = StackNavigator({
  NestedSettingsStack: {
    screen: NestedSettingsStack,
    navigationOptions: {
      header: null
    }
  }
}, {
  headerMode: 'none',
})

const InfoStack = StackNavigator({
  Info: {
    screen: Info,
    navigationOptions: stdHeaderNavOptions('Profile')
  },
  Transition: transitionStack,
})



const MainStack = StackNavigator({
  TabStack: {
    screen: TabStack,
    navigationOptions: stdHeaderNavOptions('MatchaMe')
 }
})

const AuthStack = StackNavigator(
  {
    Login: {
    screen: Login,
    navigationOptions: stdHeaderNavOptions('Login')
  },
})

const DrawerStack = DrawerNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: {
        drawerLabel: <Null/>,
      }
    },
    Info: InfoStack,
    Photos: drawerStackNav(Photos, 'Photos'),
    Tags: drawerStackNav(tagsTabStack, 'AlgoTags'),
    Leaderboard: drawerStackNav(Leaderboard, 'Leaderboard'),
    Results: drawerStackNav(resultsTabStack, 'Results'),
  },
  {
    drawerBackgroundColor: '#9dc1a2',
    contentComponent: Content,
    contentOptions: {
      labelStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
      }
    },
  }
)

const RootStack = SwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Main: DrawerStack,
    Auth: AuthStack,
  },
)

export default class App extends Component {
  render() {
    return (
      <RootStack />
    )
  }
}

