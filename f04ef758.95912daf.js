/*! For license information please see f04ef758.95912daf.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{441:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),i=(n(0),n(467)),o=n(469),l=n(470),c={id:"drawer-navigator",title:"createDrawerNavigator",sidebar_label:"createDrawerNavigator"},b={id:"version-4.x/drawer-navigator",title:"createDrawerNavigator",description:"To use this navigator, ensure that you have [react-navigation and its dependencies installed](getting-started.md), then install [`react-navigation-drawer`](https://github.com/react-navigation/drawer).",source:"@site/versioned_docs/version-4.x/drawer-navigator.md",permalink:"/docs/4.x/drawer-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-4.x/drawer-navigator.md",version:"4.x",sidebar_label:"createDrawerNavigator",sidebar:"version-4.x-docs",previous:{title:"createAnimatedSwitchNavigator",permalink:"/docs/4.x/animated-switch-navigator"},next:{title:"createBottomTabNavigator",permalink:"/docs/4.x/bottom-tab-navigator"}},p=[{value:"API",id:"api",children:[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"DrawerNavigatorConfig",id:"drawernavigatorconfig",children:[]},{value:"Providing a custom <code>contentComponent</code>",id:"providing-a-custom-contentcomponent",children:[]},{value:"<code>contentOptions</code> for <code>DrawerItems</code>",id:"contentoptions-for-draweritems",children:[]},{value:"Screen Navigation Options",id:"screen-navigation-options",children:[]},{value:"Nesting drawer navigators inside others",id:"nesting-drawer-navigators-inside-others",children:[]}]}],s={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To use this navigator, ensure that you have ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/getting-started"}),"react-navigation and its dependencies installed"),", then install ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/drawer"}),Object(i.b)("inlineCode",{parentName:"a"},"react-navigation-drawer")),"."),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-navigation-drawer\n"))),Object(i.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-navigation-drawer\n")))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createDrawerNavigator } from 'react-navigation-drawer';\n\ncreateDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);\n")),Object(i.b)("h3",{id:"routeconfigs"},"RouteConfigs"),Object(i.b)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"stack-navigator.html#routeconfigs"}),"example")," from ",Object(i.b)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),Object(i.b)("h3",{id:"drawernavigatorconfig"},"DrawerNavigatorConfig"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"drawerBackgroundColor")," - Use the Drawer background for some color. The Default is ",Object(i.b)("inlineCode",{parentName:"p"},"white"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"drawerPosition")," - Options are ",Object(i.b)("inlineCode",{parentName:"p"},"left")," or ",Object(i.b)("inlineCode",{parentName:"p"},"right"),". Default is ",Object(i.b)("inlineCode",{parentName:"p"},"left")," position.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"drawerType")," - Type of the drawer. It determines how the drawer looks and animates."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"front"),": Traditional drawer which covers the screen with a overlay behind it."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"back"),": The drawer is revealed behind the screen on swipe."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"slide"),": Both the screen and the drawer slide on swipe to reveal the drawer."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"drawerWidth")," - Number or a function which returns the width of the drawer. If a function is provided, it'll be called again when the screen's dimensions change.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"edgeWidth")," - Allows for defining how far from the edge of the content view the swipe gesture should activate")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"hideStatusBar"),' - when set to true Drawer component will hide the OS status bar whenever the drawer is pulled or when it\'s in an "open" state.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"statusBarAnimation")," - Animation of the statusbar when hiding it. use in combination with ",Object(i.b)("inlineCode",{parentName:"p"},"hideStatusBar"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"keyboardDismissMode")," - Whether the keyboard should be dismissed when the swipe gesture begins. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"'on-drag'"),". Set to ",Object(i.b)("inlineCode",{parentName:"p"},"'none'")," to disable keyboard handling.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"minSwipeDistance")," - Minimum swipe distance threshold that should activate opening the drawer.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"overlayColor")," - Color overlay to be displayed on top of the content view when drawer gets open. The opacity is animated from ",Object(i.b)("inlineCode",{parentName:"p"},"0")," to ",Object(i.b)("inlineCode",{parentName:"p"},"1")," when the drawer opens.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"gestureHandlerProps")," - Props to pass to the underlying pan gesture handler.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"lazy")," - Whether the screens should render the first time they are accessed. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),". Set it to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," if you want to render all screens on initial render.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"unmountInactiveRoutes")," - Whether a screen should be unmounted when navigating away from it. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"contentComponent")," - Component used to render the content of the drawer, for example, navigation items. Receives the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop and ",Object(i.b)("inlineCode",{parentName:"p"},"drawerOpenProgress")," for the drawer. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"DrawerItems"),". For more information, see below.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"contentOptions")," - Configure the drawer content, see below.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," - Navigation options for the navigator itself, to configure a parent navigator")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"defaultNavigationOptions")," - Default navigation options to use for screens"))),Object(i.b)("p",null,"Several options get passed to the underlying router to modify navigation logic:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial route."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the drawer items."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"backBehavior")," - Should the back button cause switch to the initial route? If yes, set to ",Object(i.b)("inlineCode",{parentName:"li"},"initialRoute"),", otherwise ",Object(i.b)("inlineCode",{parentName:"li"},"none"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"initialRoute")," behavior.")),Object(i.b)("h3",{id:"providing-a-custom-contentcomponent"},"Providing a custom ",Object(i.b)("inlineCode",{parentName:"h3"},"contentComponent")),Object(i.b)("p",null,"The default component for the drawer is scrollable and only contains links for the routes in the RouteConfig. You can easily override the default component to add a header, footer, or other content to the drawer. By default the drawer is scrollable and supports iPhone X safe area. If you customize the content, be sure to wrap the content in a SafeAreaView:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import SafeAreaView from 'react-native-safe-area-view';\nimport { DrawerItems } from 'react-navigation-drawer';\n\nconst CustomDrawerContentComponent = props => (\n  <ScrollView>\n    <SafeAreaView\n      style={styles.container}\n      forceInset={{ top: 'always', horizontal: 'never' }}\n    >\n      <DrawerItems {...props} />\n    </SafeAreaView>\n  </ScrollView>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n});\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"contentComponent")," also received a prop called ",Object(i.b)("inlineCode",{parentName:"p"},"drawerOpenProgress")," which is an Reanimated Node that represents the animated position of the drawer (0 is closed; 1 is open). This allows you to do interesting animations in your ",Object(i.b)("inlineCode",{parentName:"p"},"contentComponent"),", such as parallax motion of the drawer contents:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const CustomDrawerContentComponent = props => {\n  const translateX = Animated.interpolate(drawerOpenProgress, {\n    inputRange: [0, 1],\n    outputRange: [-100, 0],\n  });\n\n  return (\n    <Animated.View style={{ transform: [{ translateX }] }}>\n      {/* ... drawer contents */}\n    </Animated.View>\n  );\n};\n")),Object(i.b)("h3",{id:"contentoptions-for-draweritems"},Object(i.b)("inlineCode",{parentName:"h3"},"contentOptions")," for ",Object(i.b)("inlineCode",{parentName:"h3"},"DrawerItems")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"items")," - the array of routes, can be modified or overridden"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeItemKey")," - key identifying the active route"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeTintColor")," - label and icon color of the active label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeBackgroundColor")," - background color of the active label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inactiveTintColor")," - label and icon color of the inactive label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inactiveBackgroundColor")," - background color of the inactive label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onItemPress({ route, focused })")," - function to be invoked when an item is pressed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"itemsContainerStyle")," - style object for the content section"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"itemStyle")," - style object for the single item, which can contain an Icon and/or a Label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"labelStyle")," - style object to overwrite ",Object(i.b)("inlineCode",{parentName:"li"},"Text")," style inside content section, when your label is a string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeLabelStyle")," - style object to overwrite ",Object(i.b)("inlineCode",{parentName:"li"},"Text")," style of the active label, when your label is a string (merged with ",Object(i.b)("inlineCode",{parentName:"li"},"labelStyle"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inactiveLabelStyle")," - style object to overwrite ",Object(i.b)("inlineCode",{parentName:"li"},"Text")," style of the inactive label, when your label is a string (merged with ",Object(i.b)("inlineCode",{parentName:"li"},"labelStyle"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"iconContainerStyle")," - style object to overwrite ",Object(i.b)("inlineCode",{parentName:"li"},"View")," icon container styles.")),Object(i.b)("h4",{id:"example"},"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"contentOptions: {\n  activeTintColor: '#e91e63',\n  itemsContainerStyle: {\n    marginVertical: 0,\n  },\n  iconContainerStyle: {\n    opacity: 1\n  }\n}\n")),Object(i.b)("h3",{id:"screen-navigation-options"},"Screen Navigation Options"),Object(i.b)("h4",{id:"title"},Object(i.b)("inlineCode",{parentName:"h4"},"title")),Object(i.b)("p",null,"Generic title that can be used as a fallback for ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(i.b)("inlineCode",{parentName:"p"},"drawerLabel")),Object(i.b)("h4",{id:"drawerlabel"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerLabel")),Object(i.b)("p",null,"String, React Element or a function that given ",Object(i.b)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in drawer sidebar. When undefined, scene ",Object(i.b)("inlineCode",{parentName:"p"},"title")," is used"),Object(i.b)("h4",{id:"drawericon"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerIcon")),Object(i.b)("p",null,"React Element or a function, that given ",Object(i.b)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in drawer sidebar"),Object(i.b)("h4",{id:"drawerlockmode"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerLockMode")),Object(i.b)("p",null,"Specifies the lock mode of the drawer. The drawer can be locked in 3 states:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"unlocked")," (default) - that the drawer will respond (open/close) to touch gestures."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"locked-closed")," - that the drawer will stay closed and not respond to gestures."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"locked-open")," - that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically with ",Object(i.b)("inlineCode",{parentName:"li"},"navigation.openDrawer")," and ",Object(i.b)("inlineCode",{parentName:"li"},"navigation.closeDrawer"),".")),Object(i.b)("h3",{id:"nesting-drawer-navigators-inside-others"},"Nesting drawer navigators inside others"),Object(i.b)("p",null,"If a drawer navigator is nested inside of another navigator that provides some UI, for example a tab navigator or stack navigator, then the drawer will be rendered below the UI from those navigators. The drawer will appear below the tab bar and below the header of the stack. You will need to make the drawer navigator the parent of any navigator where the drawer should be rendered on top of its UI."))}d.isMDXComponent=!0},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(m,l({ref:t},b,{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},468:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},469:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),r=n.n(a),i=n(468),o=n.n(i),l=n(119),c=n.n(l),b=37,p=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,l=e.values,s=Object(a.useState)(i),d=s[0],u=s[1],m=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===t,className:o()("tab-item",c.a.tabItem,{"tab-item--active":d===t}),key:t,ref:function(e){return m.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(m,e.target,e)},onFocus:function(){return u(t)},onClick:function(){return u(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===d}))[0]))}},470:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);