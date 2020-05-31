(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{14:function(t,e,o){},18:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(8),i=o.n(r),c=o(1),l=o(2),s=o(3),d=o(5),u=o(4),f=(o(14),o(20)),p=o(6),m=o.n(p),g=(o(17),function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;return Object(l.a)(this,o),(t=e.call(this)).state={task:""},t.onChange=function(e){return t.setState({task:e.target.value})},t.onSubmit=function(e){if(e.preventDefault(),""===t.state.task)return m.a.options={positionClass:"toast-bottom-left"},m.a.error("Please provide a task. The task cannot be empty","Ooops!"),void t.input.current.focus();t.props.addTodo(t.state.task),t.setState({task:""})},t.input=a.a.createRef(),t}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement(n.Fragment,null,a.a.createElement("header",null,a.a.createElement("form",{onSubmit:this.onSubmit},a.a.createElement("input",{type:"text",autoFocus:!0,autoComplete:"off",placeholder:"Enter an activity...",id:"item",name:"todo_item",onChange:this.onChange,value:this.state.task,ref:this.input,"aria-label":"Type a task"}),a.a.createElement("button",{id:"add",type:"submit","aria-label":"Add a task"},a.a.createElement("i",{className:"fa fa-plus text-white fs-19"})))))}}]),o}(n.Component)),h=Object(n.lazy)((function(){return o.e(3).then(o.bind(null,21))})),v=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],completed:[]},t.updateLocalStorage=function(){var e=t.state,o=e.todos,n=e.completed;console.log(t.state.todos),localStorage.setItem("todoList",JSON.stringify({todos:o,completed:n}))},t.delTodo=function(e){var o=t.state,n=o.todos,a=o.completed;t.setState({todos:Object(c.a)(n.filter((function(t){return t.id!==e}))),completed:Object(c.a)(a.filter((function(t){return t.id!==e})))},(function(){return t.updateLocalStorage()}))},t.addTodo=function(e){var o={id:Object(f.a)(),title:e};t.setState({todos:[o].concat(Object(c.a)(t.state.todos))},(function(){return t.updateLocalStorage()}))},t.toggleCompleted=function(e){var o=t.state,n=o.todos,a=o.completed;0===a.filter((function(t){return t.id===e})).length?t.setState({todos:Object(c.a)(n.filter((function(t){return t.id!==e}))),completed:[].concat(Object(c.a)(a),Object(c.a)(n.filter((function(t){return t.id===e}))))},(function(){return t.updateLocalStorage()})):t.setState({todos:[].concat(Object(c.a)(n),Object(c.a)(a.filter((function(t){return t.id===e})))),completed:Object(c.a)(a.filter((function(t){return t.id!==e})))},(function(){return t.updateLocalStorage()}))},t}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):{todos:[],completed:[]},e=t.todos,o=t.completed;e||(e=[]),o||(o=[]),this.setState({todos:e,completed:o})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(g,{addTodo:this.addTodo}),a.a.createElement("div",{className:"container"},a.a.createElement("ul",{className:"todo",id:"todo"},a.a.createElement(n.Suspense,{fallback:a.a.createElement("p",null,"Loading...")},a.a.createElement(h,{todos:this.state.todos,delTodo:this.delTodo,toggleCompleted:this.toggleCompleted}))),a.a.createElement("ul",{className:"todo",id:"completed"},a.a.createElement(n.Suspense,{fallback:a.a.createElement("p",null,"Loading...")},a.a.createElement(h,{todos:this.state.completed,delTodo:this.delTodo,toggleCompleted:this.toggleCompleted})))))}}]),o}(a.a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var o=t.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/todo-list-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/todo-list-react","/service-worker.js");b?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):S(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(e,t)}))}}()},9:function(t,e,o){t.exports=o(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.81e44110.chunk.js.map