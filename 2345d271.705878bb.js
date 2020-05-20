(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(482)),o={id:"state-persistence",title:"State persistence",sidebar_label:"State persistence"},s={id:"version-2.x/state-persistence",title:"State persistence",description:"You may want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted.",source:"@site/versioned_docs/version-2.x/state-persistence.md",permalink:"/docs/2.x/state-persistence",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/state-persistence.md",version:"2.x",sidebar_label:"State persistence",sidebar:"version-2.x-docs",previous:{title:"Screen tracking",permalink:"/docs/2.x/screen-tracking"},next:{title:"App containers",permalink:"/docs/2.x/app-containers"}},c=[{value:"Usage",id:"usage",children:[{value:"Development Mode",id:"development-mode",children:[]},{value:"Loading View",id:"loading-view",children:[]}]},{value:"Warning: Serializable State",id:"warning-serializable-state",children:[]},{value:"Warning: Route/Router definition changes",id:"warning-routerouter-definition-changes",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You may want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted."),Object(i.b)("p",null,"This is especially valuable during development because it allows the developer to stay on the same screen when they refresh the app."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: This feature is currently considered experimental, because of the warnings listed at the end of this page. Use with caution!")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"You can enable persistence for your top-level navigator by rendering it with a ",Object(i.b)("inlineCode",{parentName:"p"},"persistenceKey"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const AppNavigator = createStackNavigator({...});\n\nconst App = () => <AppNavigator persistenceKey={"NavigationState"} />;\n')),Object(i.b)("p",null,"This provided key will be used as the react native ",Object(i.b)("inlineCode",{parentName:"p"},"AsyncStorage")," key to save the JSON navigation state."),Object(i.b)("h3",{id:"development-mode"},"Development Mode"),Object(i.b)("p",null,"This feature is particularly useful in development mode. You can enable it selectively using the following approach:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const AppNavigator = createStackNavigator({...});\nconst navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;\nconst App = () => <AppNavigator persistenceKey={navigationPersistenceKey} />;\n')),Object(i.b)("h3",{id:"loading-view"},"Loading View"),Object(i.b)("p",null,"Because the state is persisted asynchronously, the app must render an empty/loading view for a moment while the ",Object(i.b)("inlineCode",{parentName:"p"},"AsyncStorage")," request completes. To customize the loading view that is rendered during this time, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"renderLoadingExperimental")," prop:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<AppNavigator\n  persistenceKey={...}\n  renderLoadingExperimental={() => <ActivityIndicator />}\n/>\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: This API may change in the future, which is why it is labeled experimental")),Object(i.b)("h2",{id:"warning-serializable-state"},"Warning: Serializable State"),Object(i.b)("p",null,"Each param, route, and navigation state must be fully JSON-serializable for this feature to work. This means that your routes and params must contain no functions, class instances, or recursive data structures."),Object(i.b)("h2",{id:"warning-routerouter-definition-changes"},"Warning: Route/Router definition changes"),Object(i.b)("p",null,"When your application code changes to support new routes or different routers for a given route in your navigation state, the app may break when presented with the old navigation state."),Object(i.b)("p",null,"This may happen regularly during development as you re-configure your routes and navigator hierarchy. But it also may happen in production when you release a new version of your app!"),Object(i.b)("p",null,"The conservative behavior is to wipe the navigation state when the app has been updated. The easiest way to do this is to refer to a different persistence key for each version that you release to users."),Object(i.b)("p",null,"React Navigation uses React's ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidCatch")," functionality to attempt to mitigate crashes caused by route definition changes, but this is considered experimental and may not catch all errors."))}p.isMDXComponent=!0},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(h,s({ref:t},l,{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);