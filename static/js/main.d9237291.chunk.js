(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},66:function(e,t,n){e.exports=n(84)},71:function(e,t,n){},72:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(25),i=n.n(o),s=(n(71),n(31)),c=n(32),l=n(38),u=n(33),m=n(39),f=n(92),h=n(90),p=n(63),d=n(47),v=n.n(d),g=(n(72),n(89)),E=function(e){return r.a.createElement(g.a,Object.assign({style:{fontSize:"calc(10px + 2vmin)",color:"white"}},e))},w=n(91),b=n(93),V=function(e){return r.a.createElement(f.a,null,r.a.createElement(E,null,e.title),r.a.createElement(w.a,e,b.a(function(e){return r.a.createElement(w.a.Item,{key:e,label:e,value:e})})(e.items)))},S=(n(82),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={versions:[],fromVersion:"",toVersion:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/pvinis/rn-diff-purge/master/VERSIONS").then(function(e){return e.text()}).then(function(t){var n=h.a("\n")(t);e.setState({versions:n,fromVersion:n[0],toVersion:n[0]})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(E,null,"RN diff PURGE"),r.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),r.a.createElement(p.a,{href:"https://github.com/pvinis/rn-diff-purge","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star pvinis/rn-diff-purge on GitHub"},"Star"),r.a.createElement(E,null,"Get diff:"),r.a.createElement(f.a,{style:{flexDirection:"row"}},r.a.createElement(V,{title:"From",items:this.state.versions,onValueChange:function(t){return e.setState({fromVersion:t})}}),r.a.createElement(V,{title:"To",items:this.state.versions,onValueChange:function(t){return e.setState({toVersion:t})}}),r.a.createElement("a",{href:"https://github.com/pvinis/rn-diff-purge/compare/version/".concat(this.state.fromVersion,"..version/").concat(this.state.toVersion)},r.a.createElement(E,null,"Diff here")))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[66,1,2]]]);
//# sourceMappingURL=main.d9237291.chunk.js.map