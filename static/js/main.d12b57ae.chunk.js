(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(7),o=n.n(a),i=(n(13),n(2)),h=n(3),l=n(5),b=n(4),j=function(e){var t=e.name,n=e.email;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"roboAvatar",src:"https://robohash.org/".concat(e.id,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots.map((function(e){return Object(r.jsx)(j,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(r.jsx)("div",{children:t})},u=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{type:"search",placeholder:"search robot",className:"pa3 ba b--green bg-lightest-blue",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oops That Is Not Good!"}):this.props.children}}]),n}(s.a.Component),p=(n(14),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLocaleLowerCase().includes(e.state.searchfield.toLocaleLowerCase())}));return 0===this.state.robots.length?Object(r.jsx)("h1",{children:"Loading!"}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f2",children:"RobotFriends"}),Object(r.jsx)(u,{searchChange:this.onSearchChange}),Object(r.jsx)("hr",{}),Object(r.jsx)(f,{children:Object(r.jsx)(O,{children:Object(r.jsx)(d,{robots:t})})})]})}}]),n}(c.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(15);o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.d12b57ae.chunk.js.map