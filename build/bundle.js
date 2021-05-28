!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(u,o){try{var a=t[u](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var u=t.FETCH_USERS="fetch_users",o=(t.fetchUsers=function(){return function(){var e=r(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/users");case 2:o=e.sent,t({type:u,payload:o});case 4:case"end":return e.stop()}},e,void 0)}));return function(t,n,r){return e.apply(this,arguments)}}()},t.FETCH_CURRENT_USER="fetch_current_user"),a=(t.fetchCurrentUser=function(){return function(){var e=r(regeneratorRuntime.mark(function e(t,n,r){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/current_user");case 2:u=e.sent,t({type:o,payload:u});case 4:case"end":return e.stop()}},e,void 0)}));return function(t,n,r){return e.apply(this,arguments)}}()},t.FETCH_ADMINS="fetch_admins");t.fetchAdmins=function(){return function(){var e=r(regeneratorRuntime.mark(function e(t,n,r){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/admins");case 2:u=e.sent,t({type:a,payload:u});case 4:case"end":return e.stop()}},e,void 0)}));return function(t,n,r){return e.apply(this,arguments)}}()}},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),a=(r(o),n(12)),i=r(a),c=n(14),l=r(c),f=n(15),s=r(f),d=n(16),p=r(d),h=n(17),m=r(h);t.default=[u({},i.default,{routes:[u({},l.default,{path:"/",exact:!0}),u({},m.default,{path:"/admins"}),u({},s.default,{path:"/users"}),u({},p.default)]})]},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(9);var u=n(10),o=r(u),a=n(3),i=n(11),c=r(i),l=n(5),f=r(l),s=n(19),d=r(s),p=n(22),h=r(p),m=(0,o.default)();m.use("/api",(0,c.default)("http://react-ssr-api.herokuapp.com",{proxyReqOptDecorator:function(e){return e.headers["x-forwarded-host"]="localhost:3000",e}})),m.use(o.default.static("public")),m.get("*",function(e,t){var n=(0,h.default)(e),r=(0,a.matchRoutes)(f.default,e.path).map(function(e){var t=e.route;return t.loadData?t.loadData(n):null}).map(function(e){if(e)return new Promise(function(t,n){e.then(t).catch(t)})});Promise.all(r).then(function(){var r={},u=(0,d.default)(e,n,r);if(r.url)return t.redirect(301,r.url);r.notFound&&t.status(404),t.send(u)})}),m.listen(3e3,function(){console.log("Listening on prot 3000")})},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("express-http-proxy")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),o=r(u),a=n(3),i=n(13),c=r(i),l=n(1),f=function(e){var t=e.route;return o.default.createElement("div",null,o.default.createElement(c.default,null),(0,a.renderRoutes)(t.routes))};t.default={component:f,loadData:function(e){return(0,e.dispatch)((0,l.fetchCurrentUser)())}}},function(e,t,n){"use strict";function r(e){return{auth:e.auth}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(u),a=n(4),i=n(2),c=function(e){var t=e.auth,n=t?o.default.createElement("a",{href:"/api/logout"},"Logout"):o.default.createElement("a",{href:"/api/auth/google"},"Login");return o.default.createElement("nav",null,o.default.createElement("div",{className:"nav-wrapper"},o.default.createElement(a.Link,{to:"/",className:"brand-logo"},"React SSR"),o.default.createElement("ul",{className:"right"},o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/users"},"Users")),o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/admins"},"Admins")),o.default.createElement("li",null,n))))};t.default=(0,i.connect)(r)(c)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(){return u.default.createElement("div",{className:"center-align",style:{marginTop:"200px"}},u.default.createElement("h3",null,"Welcome"),u.default.createElement("p",null,"Check out these awesome features"))};t.default={component:o}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{users:e.users}}function i(e){return e.dispatch((0,d.fetchUsers)())}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),f=function(e){return e&&e.__esModule?e:{default:e}}(l),s=n(2),d=n(1),p=n(6),h=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"renderUsers",value:function(){return this.props.users.map(function(e){return f.default.createElement("li",{key:e.id},e.name)})}},{key:"head",value:function(){return f.default.createElement(p.Helmet,null,f.default.createElement("title",null,this.props.users.length+" Users Loaded"),f.default.createElement("meta",{property:"og:title",content:"Users App"}))}},{key:"render",value:function(){return f.default.createElement("div",null,this.head(),"Here's a big list of users:",f.default.createElement("ul",null,this.renderUsers()))}}]),t}(l.Component);t.default={loadData:i,component:(0,s.connect)(a,{fetchUsers:d.fetchUsers})(h)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,u.default.createElement("h1",null,"Ooops, route not found.")};t.default={component:o}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{admins:e.admins}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),f=r(l),s=n(2),d=n(1),p=n(18),h=r(p),m=function(e){function t(){return u(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.fetchAdmins()}},{key:"renderAdmins",value:function(){return this.props.admins.map(function(e){return f.default.createElement("li",{key:e.id},e.name)})}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("h3",null,"Protected list of admins"),f.default.createElement("ul",null,this.renderAdmins()))}}]),t}(l.Component);t.default={component:(0,s.connect)(i,{fetchAdmins:d.fetchAdmins})((0,h.default)(m)),loadData:function(e){return(0,e.dispatch)((0,d.fetchAdmins)())}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(i),l=n(2),f=n(4);t.default=function(e){function t(e){return{auth:e.auth}}var n=function(t){function n(){return r(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),a(n,[{key:"render",value:function(){switch(this.props.auth){case!1:return c.default.createElement(f.Redirect,{to:"/"});case null:return c.default.createElement("div",null,"Loading...");default:return c.default.createElement(e,this.props)}}}]),n}(i.Component);return(0,l.connect)(t)(n)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),o=r(u),a=n(20),i=n(4),c=n(2),l=n(3),f=n(21),s=r(f),d=n(6),p=n(5),h=r(p);t.default=function(e,t,n){var r=(0,a.renderToString)(o.default.createElement(c.Provider,{store:t},o.default.createElement(i.StaticRouter,{location:e.path,context:n},o.default.createElement("div",null,(0,l.renderRoutes)(h.default))))),u=d.Helmet.renderStatic();return"\n    <html>\n      <head>\n        "+u.title.toString()+"\n        "+u.meta.toString()+'\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n      </head>\n      <body>\n        <div id="root">'+r+"</div>\n        <script>\n          window.INITIAL_STATE = "+(0,s.default)(t.getState())+'\n        <\/script>\n        <script src="bundle.js"><\/script>\n      </body>\n    </html>\n  '}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),o=n(23),a=r(o),i=n(24),c=r(i),l=n(25),f=r(l);t.default=function(e){var t=c.default.create({baseURL:"http://react-ssr-api.herokuapp.com",headers:{cookie:e.get("cookie")||""}});return(0,u.createStore)(f.default,{},(0,u.applyMiddleware)(a.default.withExtraArgument(t)))}},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),o=n(26),a=r(o),i=n(27),c=r(i),l=n(28),f=r(l);t.default=(0,u.combineReducers)({users:a.default,auth:c.default,admins:f.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.FETCH_USERS:return t.payload.data;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case r.FETCH_CURRENT_USER:return t.payload.data||!1;default:return e}};var r=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.FETCH_ADMINS:return t.payload.data;default:return e}}}]);