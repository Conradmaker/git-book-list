(this["webpackJsonpgit-book-list"]=this["webpackJsonpgit-book-list"]||[]).push([[0],{20:function(n,e,t){n.exports=t(33)},25:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(8),i=t.n(o),l=(t(25),t(1)),c=t(7),u=t(10),s=t(2);function d(){var n=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: "," 0.3s linear;\n  background: rgba(18, 7, 82, 0.95);\n  ul {\n    width: 100%;\n    li {\n      width: 100%;\n      text-align: center;\n      font-weight: bold;\n      letter-spacing: 3px;\n      border-bottom: 1px solid #817d99;\n      a,\n      span {\n        text-decoration: none;\n        color: white;\n        font-weight: bold;\n        letter-spacing: 3px;\n        text-align: center;\n        display: block;\n        padding: 15px 0px;\n\n        cursor: pointer;\n        transition: 0.125s all ease-in;\n        &:hover {\n          color: #817d99;\n        }\n      }\n    }\n    li:last-child {\n      border: none;\n    }\n  }\n  i {\n    position: fixed;\n    top: 20px;\n    right: 30px;\n    font-size: 25px;\n    cursor: pointer;\n    transition: 0.125s all ease-in;\n    &:hover {\n      color: #817d99;\n    }\n  }\n"]);return d=function(){return n},n}function p(){var n=Object(l.a)(["\n  min-width: 300px;\n"]);return p=function(){return n},n}function m(){var n=Object(l.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  button {\n    display: block;\n    width: 100%;\n    padding: 10px 0px;\n    margin: 10px 0;\n    border: none;\n    outline: none;\n    font-size: 16px;\n    letter-spacing: 3px;\n    text-align: center;\n    cursor: pointer;\n    transition: 0.2s all ease-in;\n  }\n\n  button:nth-child(1) {\n    color: rgb(18, 7, 82);\n    font-size: 16px;\n    letter-spacing: 3px;\n    background: #fff;\n    &::before {\n      content: "Contact";\n    }\n    &:hover {\n      width: 140%;\n      &::before {\n        content: "010-8731-0337";\n      }\n    }\n  }\n  button:nth-child(2) {\n    background: none;\n    color: white;\n    border: 2px solid white;\n    &:hover {\n      color: #817d99;\n      border: 2px solid #817d99;\n    }\n  }\n']);return m=function(){return n},n}function b(){var n=Object(l.a)(["\nfrom{\n    opacity: 0;\n}\nto{\n    opacity: 1;\n}\n"]);return b=function(){return n},n}var f=Object(s.c)(b()),g=s.b.div(m()),h=s.b.div(p()),x=s.b.div(d(),f);function v(n){var e=n.setMenuOpen;return r.a.createElement(x,null,r.a.createElement("i",null,r.a.createElement(u.b,{onClick:function(){return e(!1)}})),r.a.createElement(h,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"HOME")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Conradmaker"},"Portfolio ")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Conradmaker"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Conradmaker"},"GitBooks"))),r.a.createElement(g,null,r.a.createElement("button",null),r.a.createElement("button",{onClick:function(){return e(!1)}},"Close"))))}function E(){var n=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 10;\n  background: #120752;\n\n  color: white;\n\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n"]);return E=function(){return n},n}function k(){var n=Object(l.a)(["\n  padding: 15px;\n  font-size: 18px;\n  letter-spacing: 2px;\n  display: flex;\n  align-items: center;\n  transition: 0.125s all ease-in;\n  cursor: pointer;\n  &:hover {\n    color: #6d6698;\n    strong {\n      background: #6d6698;\n    }\n  }\n  strong {\n    padding: 2px 5px;\n    margin-right: 10px;\n    color: #120752;\n    background: #fff;\n    transition: 0.125s all ease-in;\n  }\n  span {\n    font-weight: bold;\n  }\n"]);return k=function(){return n},n}function w(){var n=Object(l.a)(["\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  font-size: 17px;\n  cursor: pointer;\n  transition: 0.125s all ease-in;\n  i {\n    margin-left: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 25px;\n  }\n  &:hover {\n    color: #6d6698;\n  }\n"]);return w=function(){return n},n}function j(){var n=Object(l.a)(["\nfrom{\n    color: white;\n}\nto{\n    color: #6d6698;\n}\n"]);return j=function(){return n},n}Object(s.c)(j());var y=s.b.div(w()),O=s.b.div(k()),z=s.b.header(E());function C(){var n=Object(a.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1];return r.a.createElement(z,null,r.a.createElement(O,null,r.a.createElement("strong",null,"RESUME"),r.a.createElement("span",null,"BY WONGEUN")),r.a.createElement(y,{onClick:function(){return o(!t)}},r.a.createElement("span",null,"MENU"),r.a.createElement("i",null,r.a.createElement(u.a,null))),t&&r.a.createElement(v,{setMenuOpen:o}))}function S(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 20px;\n  border-radius: 5px;\n  max-width: 450px;\n  min-width: 350px;\n  height: 350px;\n  background: #fff;\n  position: relative;\n  transition: all 0.3s ease;\n  &:hover {\n    transform: translateY(-10px);\n    box-shadow: 0px 4px 10px black;\n    "," {\n      div {\n        background-color: rgba(0, 0, 0, 0);\n      }\n    }\n  }\n"]);return S=function(){return n},n}function B(){var n=Object(l.a)(["\n  height: 50%;\n  img,\n  div {\n    width: 100%;\n    height: 50%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n  }\n  div {\n    transition: all 0.5s ease;\n    background-color: rgba(0, 0, 0, 0.3);\n    height: 50%;\n  }\n"]);return B=function(){return n},n}function M(){var n=Object(l.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 50%;\n  h1 {\n    font-size: 33px;\n    font-weight: bold;\n    letter-spacing: 2px;\n    padding: 0 15px 5px 15px;\n    border-bottom: 2px solid black;\n  }\n  p {\n  }\n  a {\n    width: 80%;\n    button {\n      font-size: 23px;\n      width: 100%;\n      border: none;\n      border-radius: 5px;\n      background: #202d42;\n      color: white;\n      cursor: pointer;\n      &:hover {\n        background: #35415e;\n      }\n    }\n  }\n"]);return M=function(){return n},n}var D=s.b.div(M()),G=s.b.div(B()),I=s.b.article(S(),G);function L(n){var e=n.thumnail,t=n.name,a=n.desc,o=n.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null,r.a.createElement(G,null,r.a.createElement("img",{src:"".concat(e),alt:"".concat(t)}),r.a.createElement("div",null)),r.a.createElement(D,null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a),r.a.createElement("a",{href:"".concat(o)},r.a.createElement("button",null,"Link")))))}var N=t(5),R=t(9),T=t(18),A="pageItem/ADD_LIST",H=6,Y=[{id:0,name:"HTML",desc:"\uc548\ub155\ud558\uc138\uc694",url:"https://app.gitbook.com/@conrad-maker/s/html/",thumnail:"https://www.htmlblender.com/wp-content/uploads/2019/01/Begini-Sejarah-HTML.png"},{id:2,name:"CSS",desc:"My favorite ",url:"https://app.gitbook.com/@conrad-maker/s/css/",thumnail:"https://sabe.io/classes/css/hero.png"},{id:3,name:"JAVA",desc:"BackEnd Stack",url:"https://app.gitbook.com/@conrad-maker/s/java/",thumnail:"https://lviv.itea.ua/wp-content/uploads/2016/03/java-2-min.png"},{id:4,name:"Data Base",desc:"oracle & mySQL ...",url:"https://app.gitbook.com/@conrad-maker/s/database/",thumnail:"https://www.combell.com/build/website/images/meta/database.png"},{id:5,name:"Twitter Clone",desc:" Next.js & React.js & \n\n\n\n Redux & Redux-middleware",url:"https://app.gitbook.com/@conrad-maker/s/nodebird/",thumnail:"https://help.twitter.com/content/dam/help-twitter/logos/card_wide_blue.png"}];function J(){var n=Object(l.a)(["\n      display: flex;\n    "]);return J=function(){return n},n}function U(){var n=Object(l.a)(["\n  position: fixed;\n  z-index: 11;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  animation: "," 1s ease;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: none;\n  ","\n"]);return U=function(){return n},n}function _(){var n=Object(l.a)(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 20px;\n  background: #fff;\n  border-radius: 5px;\n  animation: "," 1s ease;\n  input {\n    font-size: 20px;\n    margin: 20px 0;\n    padding: 2px 4px;\n    border-radius: 3px;\n    outline: none;\n    border: 2px solid navy;\n  }\n  button {\n    outline: none;\n    border: none;\n    background: cyan;\n    cursor: pointer;\n    color: navy;\n    font-size: 20px;\n    border-radius: 4px;\n    padding: 2px 5px;\n    &:hover {\n      background: white;\n    }\n  }\n"]);return _=function(){return n},n}function F(){var n=Object(l.a)(["\nfrom{\ntransform:translateY(400px)\n}\nto{\n  transform:translateY(0px)\n}\n"]);return F=function(){return n},n}function W(){var n=Object(l.a)(["\nfrom{\n  opacity: 0;\n}\nto{\n  opacity: 1;\n}\n"]);return W=function(){return n},n}var P=Object(s.c)(W()),Q=Object(s.c)(F()),V=s.b.form(_(),Q),q=s.b.div(U(),P,(function(n){return n.open&&Object(s.a)(J())}));function K(){var n=Object(N.b)(),e=Object(a.useState)(!1),t=Object(c.a)(e,2),o=t[0],i=t[1],l=Object(a.useState)({name:"",desc:"",url:"",thumnail:""}),u=Object(c.a)(l,2),s=u[0],d=u[1],p=s.name,m=s.desc,b=s.url,f=s.thumnail,g=function(n){var e=n.target,t=e.name,a=e.value;d(Object(T.a)({},s,Object(R.a)({},t,a)))};return r.a.createElement("div",null,r.a.createElement(q,{open:o},r.a.createElement(V,{onSubmit:function(e){var t;e.preventDefault(),n({type:A,body:{id:H++,name:(t=s).name,desc:t.desc,url:t.url,thumnail:t.thumnail}}),console.log(s)}},r.a.createElement("input",{type:"text",name:"name",placeholder:"name",onChange:g,value:p}),r.a.createElement("input",{type:"text",name:"desc",placeholder:"desc",onChange:g,value:m}),r.a.createElement("input",{type:"text",name:"url",placeholder:"url",onChange:g,value:b}),r.a.createElement("input",{type:"text",name:"thumnail",placeholder:"thumnail",onChange:g,value:f}),r.a.createElement("button",{onClick:function(){return i(!1)}},"GO"))),r.a.createElement("button",{style:{width:"40px",height:"40px",backgound:"cyan",position:"fixed",bottom:"30px",right:"30px"},onClick:function(){return i(!0)}},"New"))}function X(){var n=Object(l.a)(["\n  width: 100%;\n  padding: 20px 100px;\n  box-sizing: border-box;\n  background: #202d42;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return X=function(){return n},n}var Z=s.b.section(X());function $(){var n=Object(N.c)((function(n){return n.pageItem}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,n.map((function(n){return r.a.createElement(L,{key:n.id,name:n.name,desc:n.desc,url:n.url,thumnail:n.thumnail})})),r.a.createElement(L,{name:"Add more",desc:"",url:"",thumnail:"https://e7.pngegg.com/pngimages/986/1024/png-clipart-computer-icons-plus-sign-plus-sign-logo-cross.png"}),r.a.createElement(K,null)))}function nn(){var n=Object(l.a)(['\n  width: 100%;\n  height: 550px;\n  margin-top: 50px;\n  color: white;\n  background-size: cover;\n  background-attachment: fixed;\n  background-image: url("https://ideastream-production.s3.amazonaws.com/uploads/2020/2/19/Book%20Shelves.jpg?null");\n']);return nn=function(){return n},n}function en(){var n=Object(l.a)(['\n  width: 80%;\n  margin: 0 auto;\n  h1 {\n    font-size: 40px;\n    font-weight: bold;\n    line-height: 1.8;\n    &::after {\n      content: "";\n      background-color: #ffffff;\n      display: block;\n      height: 2px;\n      margin: 0.325em 0 0.5em 0;\n      width: 100%;\n    }\n  }\n']);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n  background-color: rgba(30, 40, 80, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n"]);return tn=function(){return n},n}var an=s.b.div(tn()),rn=s.b.article(en()),on=s.b.section(nn());function ln(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(on,null,r.a.createElement(an,null,r.a.createElement(rn,null,r.a.createElement("h1",null,"Git Book pages"),r.a.createElement("span",null,"\uacf5\ubd80\ud558\uba74\uc11c \uc815\ub9ac\ud55c \ub0b4\uc6a9\ub4e4")))),r.a.createElement($,null))}var cn=function(){return r.a.createElement("div",null,r.a.createElement(ln,null))},un=t(3),sn=t(19),dn=Object(un.combineReducers)({pageItem:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case A:return n.concat(e.body);default:return n}}}),pn=Object(un.createStore)(dn,Object(sn.composeWithDevTools)());i.a.render(r.a.createElement(N.a,{store:pn},r.a.createElement(cn,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e874a3e0.chunk.js.map