(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{427:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(9),r=(n(0),n(465)),o={id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},s={id:"version-1.x/redux-integration",title:"Redux integration",description:'Some folks like to have their navigation state stored in the same place as the rest of their application state. Using Redux to store your state enables you to write custom actions that manipulate the navigation state directly, to be able to dispatch navigation actions from anywhere (sometimes in a "thunk" or "saga") and to persist the navigation state in the same way you would other Redux state (your mileage may vary on this). You can read more about other use cases in the replies to [this tweet](https://twitter.com/satya164/status/952291726521024512).',source:"@site/versioned_docs/version-1.x/redux-integration.md",permalink:"/docs/1.x/redux-integration",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-1.x/redux-integration.md",version:"1.x",sidebar_label:"Redux integration",sidebar:"version-1.x/docs",previous:{title:"Screen tracking",permalink:"/docs/1.x/screen-tracking"},next:{title:"Overview",permalink:"/docs/1.x/custom-navigator-overview"}},c=[{value:"Warning!",id:"warning",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Step-by-step guide",id:"step-by-step-guide",children:[]},{value:"Full example",id:"full-example",children:[]},{value:"Mocking tests",id:"mocking-tests",children:[]},{value:"Handling the Hardware Back Button in Android",id:"handling-the-hardware-back-button-in-android",children:[]}],p={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Some folks like to have their navigation state stored in the same place as the rest of their application state. Using Redux to store your state enables you to write custom actions that manipulate the navigation state directly, to be able to dispatch navigation actions from anywhere (sometimes in a "thunk" or "saga") and to persist the navigation state in the same way you would other Redux state (your mileage may vary on this). You can read more about other use cases in the replies to ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/satya164/status/952291726521024512"}),"this tweet"),"."),Object(r.b)("h2",{id:"warning"},"Warning!"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"You probably do not need to do this!")," Storing your React Navigation state in your own Redux store is likely to give you a very difficult time if you don't know what you're doing. You lose out on some performance optimizations that React Navigation can do for you, for example. Please do not integrate your state into Redux without first ensuring that you can do what you need to do without it!"),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To handle your app's navigation state in Redux, you can pass your own ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop to a navigator.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once you pass your own navigation prop to the navigator, the default ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/navigation-prop"}),Object(r.b)("inlineCode",{parentName:"a"},"navigation"))," prop gets destroyed. You must construct your own ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/navigation-prop#state-the-screen-s-current-state-route"}),Object(r.b)("inlineCode",{parentName:"a"},"state")),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/navigation-prop#dispatch-send-an-action-to-the-router"}),Object(r.b)("inlineCode",{parentName:"a"},"dispatch")),", and ",Object(r.b)("inlineCode",{parentName:"p"},"addListener")," properties.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"state")," will be fed from the reducer assigned to handle navigation state and the ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," will be Redux's default ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch"),". Thus you will be able to dispatch normal redux actions using ",Object(r.b)("inlineCode",{parentName:"p"},"this.props.navigation.dispatch(ACTION)"),", reducer will update the navigation state on the basis of dispatched action, the new navigation state will then be passed to the navigator.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"A middleware is needed so that any events that mutate the navigation state properly trigger the event listeners."))),Object(r.b)("h2",{id:"step-by-step-guide"},"Step-by-step guide"),Object(r.b)("p",null,"First, you need to add the ",Object(r.b)("inlineCode",{parentName:"p"},"react-navigation-redux-helpers")," package to your project."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-navigation-redux-helpers\n")),Object(r.b)("p",null,"  or"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save react-navigation-redux-helpers\n")),Object(r.b)("p",null,"With Redux, your app's state is defined by a reducer. Each navigation router effectively has a reducer, called ",Object(r.b)("inlineCode",{parentName:"p"},"getStateForAction"),". The following is a minimal example of how you might use navigators within a Redux application:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-es6"}),"import {\n  StackNavigator,\n  addNavigationHelpers,\n} from 'react-navigation';\nimport {\n  createStore,\n  applyMiddleware,\n  combineReducers,\n} from 'redux';\nimport {\n  createReduxBoundAddListener,\n  createReactNavigationReduxMiddleware,\n} from 'react-navigation-redux-helpers';\nimport { Provider, connect } from 'react-redux';\nimport React from 'react';\n\nconst AppNavigator = StackNavigator(AppRouteConfigs);\n\nconst initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));\n\nconst navReducer = (state = initialState, action) => {\n  const nextState = AppNavigator.router.getStateForAction(action, state);\n\n  // Simply return the original `state` if `nextState` is null or undefined.\n  return nextState || state;\n};\n\nconst appReducer = combineReducers({\n  nav: navReducer,\n  ...\n});\n\n// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener\nconst middleware = createReactNavigationReduxMiddleware(\n  \"root\",\n  state => state.nav,\n);\nconst addListener = createReduxBoundAddListener(\"root\");\n\nclass App extends React.Component {\n  render() {\n    return (\n      <AppNavigator navigation={addNavigationHelpers({\n        dispatch: this.props.dispatch,\n        state: this.props.nav,\n        addListener,\n      })} />\n    );\n  }\n}\n\nconst mapStateToProps = (state) => ({\n  nav: state.nav\n});\n\nconst AppWithNavigationState = connect(mapStateToProps)(App);\n\nconst store = createStore(\n  appReducer,\n  applyMiddleware(middleware),\n);\n\nclass Root extends React.Component {\n  render() {\n    return (\n      <Provider store={store}>\n        <AppWithNavigationState />\n      </Provider>\n    );\n  }\n}\n")),Object(r.b)("p",null,"Once you do this, your navigation state is stored within your Redux store, at which point you can fire navigation actions using your Redux dispatch function."),Object(r.b)("p",null,"Keep in mind that when a navigator is given a ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop, it relinquishes control of its internal state. That means you are now responsible for persisting its state, handling any deep linking, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#handling-the-hardware-back-button-in-android"}),"Handling the Hardware Back Button in Android"),", etc."),Object(r.b)("p",null,"Navigation state is automatically passed down from one navigator to another when you nest them. Note that in order for a child navigator to receive the state from a parent navigator, it should be defined as a ",Object(r.b)("inlineCode",{parentName:"p"},"screen"),"."),Object(r.b)("p",null,"Applying this to the example above, you could instead define ",Object(r.b)("inlineCode",{parentName:"p"},"AppNavigator")," to contain a nested ",Object(r.b)("inlineCode",{parentName:"p"},"TabNavigator")," as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-es6"}),"const AppNavigator = StackNavigator({\n  Home: { screen: MyTabNavigator },\n});\n")),Object(r.b)("p",null,"In this case, once you ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," ",Object(r.b)("inlineCode",{parentName:"p"},"AppNavigator")," to Redux as is done in ",Object(r.b)("inlineCode",{parentName:"p"},"AppWithNavigationState"),", ",Object(r.b)("inlineCode",{parentName:"p"},"MyTabNavigator")," will automatically have access to navigation state as a ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop."),Object(r.b)("h2",{id:"full-example"},"Full example"),Object(r.b)("p",null,"There's a working example app with Redux ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/1.x/examples/ReduxExample"}),"here")," if you want to try it out yourself."),Object(r.b)("h2",{id:"mocking-tests"},"Mocking tests"),Object(r.b)("p",null,"To make jest tests work with your react-navigation app, you need to change the jest preset in the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/jest/docs/tutorial-react-native.html#transformignorepatterns-customization"}),"here"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"jest": {\n  "preset": "react-native",\n  "transformIgnorePatterns": [\n    "node_modules/(?!(jest-)?react-native|react-navigation)"\n  ]\n}\n')),Object(r.b)("h2",{id:"handling-the-hardware-back-button-in-android"},"Handling the Hardware Back Button in Android"),Object(r.b)("p",null,"By using the following snippet, your nav component will be aware of the back button press actions and will correctly interact with your stack. This is really useful on Android."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-es6"}),'import React from "react";\nimport { BackHandler } from "react-native";\nimport { addNavigationHelpers, NavigationActions } from "react-navigation";\n\nconst AppNavigation = TabNavigator(\n  {\n    Home: { screen: HomeScreen },\n    Settings: { screen: SettingScreen }\n  }\n);\n\nclass ReduxNavigation extends React.Component {\n  componentDidMount() {\n    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);\n  }\n  componentWillUnmount() {\n    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);\n  }\n  onBackPress = () => {\n    const { dispatch, nav } = this.props;\n    if (nav.index === 0) {\n      return false;\n    }\n    dispatch(NavigationActions.back());\n    return true;\n  };\n\n  render() {\n    const { dispatch, nav } = this.props;\n    const navigation = addNavigationHelpers({\n      dispatch,\n      state: nav,\n      addListener,\n    });\n\n    return <AppNavigation navigation={navigation} />;\n  }\n}\n')))}d.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),d=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},l=function(e){var t=d(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),b=a,g=l["".concat(o,".").concat(b)]||l[b]||u[b]||r;return n?i.a.createElement(g,s({ref:t},p,{components:n})):i.a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);