
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
import Tags from './components/drawer/Tags';
import Account from './components/drawer/Account';
import Content from './components/drawer/Content';
import Settings from './components/drawer/Settings';

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
    animationEnabled: true,
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

const resultsTabStack = TabNavigator(
  {
    All: {
      screen: Results,
    },
    Starred: {
      screen: Results,
    },
  },
  {
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
      fontSize: 30,
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


const MainStack = StackNavigator({
  TabStack: {
    screen: TabStack,
    navigationOptions: stdHeaderNavOptions('MatchaMe')
 }
})

const AuthStack = StackNavigator(
  {
    Login: Login,
  }
)

const DrawerStack = DrawerNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: {
        drawerLabel: <Null/>,
      }
    },
    Leaderboard: drawerStackNav(Leaderboard, 'Leaderboard'),
    Results: drawerStackNav(resultsTabStack, 'Results'),
    Photos: drawerStackNav(Photos, 'Edit Photos'),
    Tags: drawerStackNav(Tags, 'AlgoTags'),
    Account: drawerStackNav(Account, 'Edit Info'),
    Settings: drawerStackNav(Settings, 'Edit Settings'),
  },
  {
    drawerBackgroundColor: HeaderColor,
    contentComponent: Content,
    contentOptions: {
      labelStyle: {
        color: 'white',
        fontSize: 19,
        fontWeight: '500',
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

