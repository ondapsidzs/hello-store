(this.webpackJsonphello_store_react=this.webpackJsonphello_store_react||[]).push([[0],{36:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var i,a,r,c,o,s,d,l,p,u,h,b,j,x,m,f,g,O,w,v,y,k,q,D,M,z,H,B,S,A,G,C,V,P,Y,Z,N,W,L,F,I,E,R,T,J,U,_,X,$,K,Q,nn,en,tn,an,rn,cn,on,sn,dn,ln,pn,un,hn,bn,jn,xn,mn,fn,gn,On,wn=t(2),vn=t(25),yn=t.n(vn),kn=(t(36),t(7)),qn=t(5),Dn=t(8),Mn=t(3),zn=t(4),Hn=t(12),Bn=t(1),Sn=zn.a.div(i||(i=Object(Mn.a)(['\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  background: black;\n  height: auto;\n  width: 100vw;\n  padding: 10px 0;\n  z-index: 5;\n\n  *,\n  a {\n    font-family: "Poppins", sans-serif;\n    color: white;\n  }\n']))),An=zn.a.div(a||(a=Object(Mn.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  width: 90%;\n"]))),Gn=Object(zn.a)(kn.b)(r||(r=Object(Mn.a)(["\n  font-weight: 900;\n  font-size: 2.5rem;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: 0.2s opacity ease-in-out;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),Cn=zn.a.div(c||(c=Object(Mn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n\n  @media screen and (max-width: 980px) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: ",";\n    width: 100vw;\n    background: black;\n    flex-direction: column;\n    overflow-y: hidden;\n    transition: 0.2s height ease-in-out;\n  }\n"])),(function(n){return n.menuActive?"100vh":"0"})),Vn=zn.a.div(o||(o=Object(Mn.a)(["\n  display: flex;\n\n  @media screen and (max-width: 980px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),Pn=Object(zn.a)(kn.b)(s||(s=Object(Mn.a)(['\n  position: relative;\n  display: block;\n  transition: 0.2s all ease-in-out;\n  transition-property: opacity, transform;\n\n  &::after {\n    content: "";\n    position: absolute;\n    left: 50%;\n    bottom: -10px;\n    height: 8px;\n    width: 0%;\n    background: white;\n    transform: translateX(-50%);\n    transition: 0.2s all ease-in-out;\n  }\n\n  &:not(:first-of-type) {\n    margin-left: 20px;\n\n    @media screen and (max-width: 980px) {\n      margin-left: 0;\n    }\n  }\n\n  &:hover {\n    transform: translateY(-5px);\n    opacity: 0.8;\n\n    &::after {\n      width: 100%;\n    }\n  }\n\n  @media screen and (max-width: 980px) {\n    margin: 2vh 0;\n  }\n']))),Yn=Object(zn.a)(kn.b)(d||(d=Object(Mn.a)(["\n  padding: 10px 30px;\n  background: none;\n  border-radius: 20px;\n  border: 1px solid white;\n  cursor: pointer;\n  margin-left: 100px;\n  transition: 0.2s all ease-in-out;\n  transition-property: background, color, transform;\n\n  &:hover {\n    background: white;\n    color: black;\n    transform: translateY(-5px);\n  }\n\n  @media screen and (max-width: 980px) {\n    margin-left: 0;\n    margin-top: 2vh;\n  }\n"]))),Zn=Object(zn.a)(Hn.c)(l||(l=Object(Mn.a)(["\n  fill: white;\n  display: none;\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  z-index: 10;\n  transition: 0.2s opacity ease-in-out;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  @media screen and (max-width: 980px) {\n    display: block;\n  }\n"]))),Nn=Object(zn.a)(Hn.d)(p||(p=Object(Mn.a)(["\n  fill: white;\n  display: none;\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  z-index: 10;\n  transition: 0.2s opacity ease-in-out;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  @media screen and (max-width: 980px) {\n    display: block;\n  }\n"]))),Wn=function(){var n=Object(wn.useState)(!1),e=Object(Dn.a)(n,2),t=e[0],i=e[1];function a(){window.innerWidth<981&&i(!t)}return Object(Bn.jsx)(Sn,{children:Object(Bn.jsxs)(An,{children:[Object(Bn.jsx)(Gn,{to:"/",children:"Hellooo"}),Object(Bn.jsxs)(Cn,{menuActive:t,onClick:a,children:[Object(Bn.jsxs)(Vn,{children:[Object(Bn.jsx)(Pn,{to:"/",children:"Home"}),Object(Bn.jsx)(Pn,{to:"/store",children:"Store"}),Object(Bn.jsx)(Pn,{to:"/about",children:"About"}),Object(Bn.jsx)(Pn,{to:"/contact-us",children:"Contact Us"})]}),Object(Bn.jsx)(Yn,{to:"/sign-up",children:"Sign Up"})]}),t?Object(Bn.jsx)(Nn,{onClick:a}):Object(Bn.jsx)(Zn,{onClick:a})]})})},Ln=t(13),Fn=zn.a.div(u||(u=Object(Mn.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  width: 100vw;\n  background: black;\n  padding: 100px 0;\n\n  *,\n  a {\n    color: white;\n    font-family: "Poppins", sans-serif;\n  }\n']))),In=zn.a.div(h||(h=Object(Mn.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 980px) {\n    flex-direction: column;\n  }\n"]))),En=zn.a.div(b||(b=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0.5;\n\n  @media screen and (max-width: 980px) {\n    align-items: center;\n  }\n"]))),Rn=Object(zn.a)(kn.b)(j||(j=Object(Mn.a)(["\n  font-weight: 900;\n  font-size: 3rem;\n  text-transform: uppercase;\n  line-height: 3rem;\n  transition: 0.2s opacity ease-in-out;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),Tn=zn.a.div(x||(x=Object(Mn.a)(["\n  font-weight: 300;\n"]))),Jn=zn.a.div(m||(m=Object(Mn.a)(["\n  @media screen and (max-width: 980px) {\n    margin: 30px 0;\n  }\n"]))),Un=zn.a.div(f||(f=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (max-width: 980px) {\n    align-items: center;\n  }\n"]))),_n=Object(zn.a)(kn.b)(g||(g=Object(Mn.a)(["\n  transition: 0.2s opacity ease-in-out;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),Xn=zn.a.div(O||(O=Object(Mn.a)(["\n  flex-grow: 3;\n  text-align: right;\n\n  * {\n    height: 50px;\n    width: auto;\n    cursor: pointer;\n    transition: 0.2s all ease-in-out;\n    transition-property: opacity, transform;\n\n    &:not(:first-of-type) {\n      margin-left: 5px;\n    }\n\n    &:hover {\n      transform: translateY(-5px);\n      opacity: 0.8;\n    }\n  }\n"]))),$n=Object(zn.a)(Ln.a)(w||(w=Object(Mn.a)([""]))),Kn=Object(zn.a)(Ln.b)(v||(v=Object(Mn.a)([""]))),Qn=Object(zn.a)(Ln.c)(y||(y=Object(Mn.a)([""]))),ne=zn.a.div(k||(k=Object(Mn.a)(["\n  font-weight: 300;\n  font-size: 0.85rem;\n"]))),ee=function(){return Object(Bn.jsxs)(Fn,{children:[Object(Bn.jsxs)(In,{children:[Object(Bn.jsxs)(En,{children:[Object(Bn.jsx)(Rn,{to:"/",children:"Hellooo"}),Object(Bn.jsx)(Tn,{children:"hellooo Inc."})]}),Object(Bn.jsx)(Jn,{children:Object(Bn.jsxs)(Un,{children:[Object(Bn.jsx)(_n,{to:"/",children:"Home"}),Object(Bn.jsx)(_n,{to:"/store",children:"Store"}),Object(Bn.jsx)(_n,{to:"/about",children:"About"}),Object(Bn.jsx)(_n,{to:"/contact-us",children:"Contact Us"})]})}),Object(Bn.jsxs)(Xn,{children:[Object(Bn.jsx)($n,{}),Object(Bn.jsx)(Kn,{}),Object(Bn.jsx)(Qn,{})]})]}),Object(Bn.jsx)(ne,{children:"Hellooo \xa92021. This is copyright a thing."})]})},te=["https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29sb3JmdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1544273677-c433136021d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbG9yZnVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbG9yZnVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9yZnVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"],ie=zn.a.div(q||(q=Object(Mn.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  width: 100%;\n  padding: 150px 0;\n"]))),ae=zn.a.div(D||(D=Object(Mn.a)(['\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  width: 90%;\n\n  * {\n    color: white;\n  }\n\n  > div {\n    width: 60%;\n\n    > h1 {\n      font-family: "Poppins", sans-serif;\n      font-weight: 900;\n      font-size: 5rem;\n      text-transform: uppercase;\n      line-height: 5rem;\n\n      @media screen and (max-width: 980px) {\n        font-size: 3rem;\n      }\n    }\n\n    > p {\n      font-family: "Poppins", sans-serif;\n      font-weight: 300;\n      text-align: justify;\n    }\n\n    @media screen and (max-width: 980px) {\n      width: 100%;\n    }\n  }\n\n  @media screen and (max-width: 980px) {\n    align-items: center;\n\n    * {\n      text-align: center;\n    }\n  }\n']))),re=zn.a.div(M||(M=Object(Mn.a)(["\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n\n  * {\n    height: 50px;\n    width: auto;\n    cursor: pointer;\n    color: white;\n    background: black;\n\n    &:hover {\n      fill: black;\n      background: white;\n      border: 1px solid white;\n    }\n  }\n"]))),ce=Object(zn.a)(Hn.a)(z||(z=Object(Mn.a)([""]))),oe=Object(zn.a)(Hn.b)(H||(H=Object(Mn.a)([""]))),se=zn.a.img(B||(B=Object(Mn.a)(["\n  z-index: -1;\n  position: absolute;\n  height: 100%;\n  width: 100vw;\n  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)),\n    ",";\n  background-position: top;\n"])),(function(n){return"url(".concat(n.bgImg[n.imgIndex],")")})),de=function(){var n=Object(wn.useState)(0),e=Object(Dn.a)(n,2),t=e[0],i=e[1];return Object(Bn.jsxs)(ie,{children:[Object(Bn.jsx)(ae,{children:Object(Bn.jsxs)("div",{children:[Object(Bn.jsx)("h1",{children:"Helloooooo!!"}),Object(Bn.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae labore nobis recusandae odit porro sit iste animi quasi impedit rem veritatis, consectetur obcaecati eaque praesentium corrupti. Harum reiciendis officia praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae labore nobis recusandae odit porro sit iste animi quasi impedit rem veritatis, consectetur obcaecati eaque praesentium corrupti. Harum reiciendis officia praesentium!"})]})}),Object(Bn.jsxs)(re,{children:[Object(Bn.jsx)(ce,{onClick:function(){i(0===t?te.length-1:t-=1)}}),Object(Bn.jsx)(oe,{onClick:function(){i(t===te.length-1?0:t+=1)}})]}),Object(Bn.jsx)(se,{bgImg:te,imgIndex:t})]})},le=zn.a.div(S||(S=Object(Mn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  width: 100vw;\n  padding: 100px 0;\n\n  @media screen and (max-width: 980px) {\n    padding: 50px 0;\n  }\n"]))),pe=zn.a.div(A||(A=Object(Mn.a)(['\n  display: flex;\n  justify-content: space-between;\n  width: 60%;\n\n  h2 {\n    font-family: "Poppins", sans-serif;\n    font-family: 900;\n    font-size: 3rem;\n  }\n\n  p {\n    font-family: "Poppins", sans-serif;\n    text-align: justify;\n  }\n\n  @media screen and (max-width: 980px) {\n    flex-direction: column-reverse;\n    width: 90%;\n  }\n']))),ue=zn.a.img(G||(G=Object(Mn.a)(["\n  height: 400px;\n  width: 300px;\n  margin-left: 50px;\n  object-fit: cover;\n  object-position: center;\n\n  @media screen and (max-width: 980px) {\n    height: 200px;\n    width: 100%;\n    margin-left: 0;\n    margin-bottom: 50px;\n  }\n"]))),he=function(){return Object(Bn.jsx)(le,{children:Object(Bn.jsxs)(pe,{children:[Object(Bn.jsxs)("div",{children:[Object(Bn.jsx)("h2",{children:"Hello?"}),Object(Bn.jsxs)("p",{children:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit ea omnis. Sunt, illo quam! Ullam et quasi esse numquam voluptatibus, fuga quidem repudiandae cupiditate sed aliquid architecto itaque.",Object(Bn.jsx)("br",{}),Object(Bn.jsx)("br",{}),"Perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum adipisci quo porro, vero minus maiores harum doloribus aliquid recusandae incidunt autem? Ea nulla quam dolorem pariatur tempora nam mollitia?"]})]}),Object(Bn.jsx)(ue,{src:"https://images.unsplash.com/photo-1433888104365-77d8043c9615?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29sb3JmdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"})]})})},be=t(14),je=t.n(be),xe=t(19),me=zn.a.div(C||(C=Object(Mn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ",";\n  width: ",";\n  min-width: 300px;\n  background: ",";\n  padding: 20px;\n"])),(function(n){return n.height?n.height:"100%"}),(function(n){return n.width?n.width:"100%"}),(function(n){return n.background?n.background:"white"})),fe=zn.a.div(V||(V=Object(Mn.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-x: hidden;\n  width: 100%;\n  height: 100%;\n\n  *:not(:first-child) {\n    margin-top: 10px;\n  }\n"]))),ge=zn.a.img(P||(P=Object(Mn.a)(["\n  height: 300px;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n"]))),Oe=zn.a.div(Y||(Y=Object(Mn.a)(["\n  font-weight: 400;\n  font-size: 1.25rem;\n"]))),we=zn.a.div(Z||(Z=Object(Mn.a)(["\n  font-size: 1.15rem;\n  color: rgba(20, 20, 20, 0.85);\n"]))),ve=zn.a.div(N||(N=Object(Mn.a)(["\n  font-weight: 300;\n  text-align: justify;\n  text-indent: 50px;\n"]))),ye=zn.a.div(W||(W=Object(Mn.a)(["\n  position: absolute;\n  bottom: 0;\n  font-weight: 300;\n  font-size: 0.75rem;\n  color: rgb(80, 199, 199);\n  cursor: pointer;\n"]))),ke=function(n){return Object(Bn.jsx)(me,{width:n.width,height:n.height,background:n.background,children:Object(Bn.jsxs)(fe,{children:[Object(Bn.jsx)(ge,{src:n.src?n.src:"https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9yZnVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",alt:n.alt?n.alt:"Product"}),Object(Bn.jsx)(Oe,{children:n.name?n.name:"Product Name"}),Object(Bn.jsx)(we,{children:n.price?n.price:"$ 200"}),Object(Bn.jsx)(ve,{children:n.description?n.description:"This is a description"}),Object(Bn.jsx)(ye,{children:n.more?n.more:"View more"})]})})},qe=zn.a.div(L||(L=Object(Mn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0;\n  background: rgba(0, 0, 0, 0.1);\n\n  @media screen and (max-width: 980px) {\n    transform: scale(0.8);\n    padding: 0;\n    width: 100vw;\n  }\n"]))),De=zn.a.div(F||(F=Object(Mn.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  padding: 20px;\n\n  > div {\n    display: flex;\n    overflow-x: scroll;\n    height: 100%;\n    width: 100%;\n    margin: 0 20px;\n    background: rgba(0, 0, 0, 0.05);\n    padding: 20px;\n    scroll-behavior: smooth;\n    scrollbar-width: thin;\n\n    > * {\n      margin-left: 50px;\n    }\n  }\n\n  @media screen and (max-width: 980px) {\n    width: 100%;\n    padding: 0;\n  }\n"]))),Me=Object(zn.a)(Hn.a)(I||(I=Object(Mn.a)(["\n  height: 100px;\n  width: 100px;\n  cursor: pointer;\n\n  &:hover {\n    background: black;\n    fill: white;\n  }\n\n  @media screen and (max-width: 980px) {\n    display: none;\n  }\n"]))),ze=Object(zn.a)(Hn.b)(E||(E=Object(Mn.a)(["\n  height: 100px;\n  width: 100px;\n  cursor: pointer;\n\n  &:hover {\n    background: black;\n    fill: white;\n  }\n\n  @media screen and (max-width: 980px) {\n    display: none;\n  }\n"]))),He=function(){var n=Object(wn.useState)([]),e=Object(Dn.a)(n,2),t=e[0],i=e[1];Object(wn.useEffect)((function(){(function(){var n=Object(xe.a)(je.a.mark((function n(){var e,t;return je.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://activitiesapi.herokuapp.com/api/act");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,i(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);return Object(Bn.jsx)(qe,{children:Object(Bn.jsxs)(De,{children:[Object(Bn.jsx)(Me,{onClick:function(){var n=document.getElementById("content3Content");n.scrollLeft<=200?n.scrollLeft=2070:n.scrollLeft-=600}}),Object(Bn.jsx)("div",{id:"content3Content",children:t.map((function(n,e){return Object(Bn.jsx)(ke,{width:"300px",height:"650px",price:!0,alt:n.pics[0].alt,name:n.name,description:n.desc},e)}))}),Object(Bn.jsx)(ze,{onClick:function(){var n=document.getElementById("content3Content");n.scrollLeft>=1870?n.scrollLeft=0:n.scrollLeft+=600}})]})})},Be=zn.a.div(R||(R=Object(Mn.a)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 100px 0;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),\n    url("https://images.unsplash.com/photo-1596276122653-651a3898309f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80");\n']))),Se=zn.a.div(T||(T=Object(Mn.a)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70%;\n\n  div {\n    margin-right: 100px;\n    color: white;\n\n    @media screen and (max-width: 980px) {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-right: 0;\n      margin-bottom: 20px;\n    }\n\n    h2 {\n      font-weight: 900;\n      font-size: 4rem;\n      text-transform: uppercase;\n      line-height: 4rem;\n    }\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n\n    input {\n      font-family: "Poppins", sans-serif;\n      font-size: 1.15rem;\n      background: white;\n      border: none;\n      border-radius: 20px;\n      text-align: center;\n      padding: 0.5rem 2rem;\n      margin-bottom: 20px;\n    }\n\n    button {\n      font-family: "Poppins", sans-serif;\n      background: white;\n      border: 1px solid white;\n      border-radius: 20px;\n      padding: 0.5rem 1rem;\n      cursor: pointer;\n      transition: 0.2s all ease-in-out;\n      transition-property: background, color, transform;\n\n      &:hover {\n        background: none;\n        color: white;\n        transform: translateY(-5px);\n      }\n    }\n  }\n\n  @media screen and (max-width: 980px) {\n    flex-direction: column;\n  }\n']))),Ae=zn.a.div(J||(J=Object(Mn.a)(["\n  position: fixed;\n  top: ",";\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgba(266, 266, 266, 0.8);\n  padding: 30px 200px;\n  border-radius: 20px;\n  opacity: ",";\n  transition: 0.5s all ease-in-out;\n  z-index: 20;\n\n  @media screen and (max-width: 980px) {\n    width: 90%;\n    text-align: center;\n    padding: 20px 0;\n  }\n"])),(function(n){return n.emailSubmitted?"20%":0}),(function(n){return n.emailSubmitted?1:0})),Ge=function(){var n=Object(wn.useState)(!1),e=Object(Dn.a)(n,2),t=e[0],i=e[1],a=Object(wn.useRef)(),r=function(n){fetch("https://email-bc0b0-default-rtdb.firebaseio.com/emails.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}})},c=function(){i(!0),setTimeout((function(){return i(!1)}),2e3)};return Object(Bn.jsxs)(Be,{children:[Object(Bn.jsx)(Ae,{emailSubmitted:t,children:"Hello! Email successfully submitted!"}),Object(Bn.jsxs)(Se,{children:[Object(Bn.jsxs)("div",{children:[Object(Bn.jsx)("h2",{children:"Helloo?!"}),Object(Bn.jsx)("p",{children:"Hello? Subscribe to our Newsletter!"})]}),Object(Bn.jsxs)("form",{action:"/",onSubmit:function(n){n.preventDefault();var e=a.current.value;r(e),c(),a.current.value=""},children:[Object(Bn.jsx)("input",{type:"email",required:!0,placeholder:"Enter your email here",ref:a}),Object(Bn.jsx)("button",{children:"Hello? Join Now"})]})]})]})},Ce=function(){return Object(Bn.jsxs)(Bn.Fragment,{children:[Object(Bn.jsx)(de,{}),Object(Bn.jsx)(he,{}),Object(Bn.jsx)(He,{}),Object(Bn.jsx)(Ge,{})]})},Ve=t(31),Pe=t(30),Ye=t(29),Ze=Object(zn.a)(kn.b)(U||(U=Object(Mn.a)(["\n  display: flex;\n  align-items: center;\n  width: 100px;\n"]))),Ne=zn.a.div(_||(_=Object(Mn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.05);\n"]))),We=zn.a.div(X||(X=Object(Mn.a)(["\n  display: grid;\n  justify-content: space-between;\n  grid-template-columns: 60% 35%;\n  /* grid-gap: 50px; */\n  height: 500px;\n  width: 100%;\n"]))),Le=zn.a.img($||($=Object(Mn.a)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n"]))),Fe=zn.a.div(K||(K=Object(Mn.a)(["\n  height: 100%;\n  width: 100%;\n"]))),Ie=zn.a.div(Q||(Q=Object(Mn.a)(["\n  font-size: 3rem;\n  font-weight: 400;\n  line-height: 3rem;\n"]))),Ee=zn.a.div(nn||(nn=Object(Mn.a)(["\n  font-size: 1.5rem;\n"]))),Re=zn.a.div(en||(en=Object(Mn.a)([""]))),Te=function(n){return Object(Bn.jsxs)(Bn.Fragment,{children:[Object(Bn.jsxs)(Ze,{to:"/store",style:{marginBottom:"20px"},children:[Object(Bn.jsx)(Ye.a,{style:{height:"20px",width:"auto",marginRight:"10px"}}),"Go Back"]}),Object(Bn.jsx)(Ne,{onClick:function(){return console.log(n.itemData)},children:Object(Bn.jsxs)(We,{children:[Object(Bn.jsx)(Le,{src:n.itemData.img.src}),Object(Bn.jsxs)(Fe,{children:[Object(Bn.jsx)(Ie,{children:n.itemData.name}),Object(Bn.jsx)(Ee,{children:n.itemData.price}),Object(Bn.jsx)(Re,{children:n.itemData.description})]})]})})]})},Je=zn.a.div(tn||(tn=Object(Mn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 100px 0;\n"]))),Ue=zn.a.div(an||(an=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n"]))),_e=zn.a.form(rn||(rn=Object(Mn.a)(["\n  display: flex;\n  align-items: center;\n  height: 30px;\n"]))),Xe=zn.a.input(cn||(cn=Object(Mn.a)(['\n  font-family: "Poppins", sans-serif;\n  font-size: 1rem;\n  height: 100%;\n  width: 20%;\n  padding: 0 10px;\n  border: 1px solid black;\n  border-right: none;\n']))),$e=zn.a.button(on||(on=Object(Mn.a)(["\n  background: none;\n  height: 100%;\n  width: auto;\n  border: none;\n"]))),Ke=Object(zn.a)(Pe.a)(sn||(sn=Object(Mn.a)(["\n  fill: white;\n  background: black;\n  height: 100%;\n  width: auto;\n  padding: 5px;\n  cursor: pointer;\n  border: 1px solid black;\n\n  &:hover {\n    fill: black;\n    background: none;\n  }\n"]))),Qe=zn.a.div(dn||(dn=Object(Mn.a)(["\n  display: flex;\n  padding: 50px 0;\n"]))),nt=zn.a.div(ln||(ln=Object(Mn.a)(["\n  display: grid;\n  justify-content: space-between;\n  width: 100%;\n  grid-template-columns: repeat(4, 24%);\n  grid-template-rows: repeat(auto, minmax(300px, auto));\n  grid-gap: 10px;\n  grid-column-gap: 10px;\n"]))),et=Object(zn.a)(kn.b)(pn||(pn=Object(Mn.a)(["\n  border: 1px solid white;\n\n  &:hover {\n    border: 1px solid black;\n  }\n"]))),tt=zn.a.div(un||(un=Object(Mn.a)(["\n  align-self: center;\n"]))),it=Object(zn.a)(kn.b)(hn||(hn=Object(Mn.a)(["\n  margin: 0 5px;\n  color: ",";\n"])),(function(n){return 1===n.children&&"/store"===n.path||n.path.includes(n.children)?"grey":"black"})),at=function(){var n=Object(wn.useState)(!0),e=Object(Dn.a)(n,2),t=e[0],i=e[1],a=Object(wn.useState)(1),r=Object(Dn.a)(a,2),c=r[0],o=r[1],s=Object(wn.useState)([]),d=Object(Dn.a)(s,2),l=d[0],p=d[1],u=Object(wn.useRef)(),h=Object(qn.e)(),b=Object(wn.useState)(!0),j=Object(Dn.a)(b,2),x=j[0],m=j[1],f=Object(wn.useRef)(h.pathname),g=Object(wn.useRef)(l),O=Object(wn.useState)(),w=Object(Dn.a)(O,2),v=w[0],y=w[1];if(Object(wn.useEffect)((function(){var n=function(){var n=Object(xe.a)(je.a.mark((function n(){var e,t;return je.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://products-c9747-default-rtdb.firebaseio.com/products.json");case 2:return e=n.sent,t=e.json(),n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(function(){var e=Object(xe.a)(je.a.mark((function e(){var t,a,r,c,s,d,l,u,h,b,j,x;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:for(c in t=e.sent,a=[],r=0,t)s=Object(Ve.a)({id:c},t[c]),r+=1,a.push(s);d=1,l=20,r<=10?o(1):(d=Math.ceil(r/l),o(d)),u=[],h=1;case 11:if(!(h<=d)){e.next=26;break}b=[],j=0;case 14:if(!(j<l)){e.next=22;break}if(void 0!==(x=a.shift())){e.next=18;break}return e.abrupt("break",22);case 18:b.push(x);case 19:j++,e.next=14;break;case 22:u.push(b);case 23:h++,e.next=11;break;case 26:p(u),i(!1);case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(wn.useEffect)((function(){if(f.current=h.pathname,m(!0),"/store"===h.pathname)m(!0);else if(isNaN(f.current[7])){m(!1),function(){var n=[];g.current=l;for(var e=0;e<g.current.length;e++)for(var t=0;t<g.current[e].length;t++){for(var i=g.current[e][t].name.toLowerCase(),a=[],r=0;r<i.length;r++)" "===i[r]?a.push("-"):a.push(i[r]);i=a.join(""),h.pathname==="/store/".concat(i)&&n.push(g.current[e][t])}y(n[0])}()}else m(!0)}),[h.pathname,l]),t)return Object(Bn.jsx)("div",{});for(var k=[],q=function(n){k.push(Object(Bn.jsx)(it,{path:h.pathname,to:function(){return 1===n?"/store":"/store/".concat(n)},children:n},n))},D=1;D<=c;D++)q(D);return Object(Bn.jsx)(Je,{children:Object(Bn.jsx)(Ue,{children:x?Object(Bn.jsxs)(Bn.Fragment,{children:[Object(Bn.jsxs)(_e,{action:"/",onSubmit:function(n){n.preventDefault();var e=u.current.value;e&&console.log(e)},children:[Object(Bn.jsx)(Xe,{placeholder:"Hello! Seach something...",ref:u}),Object(Bn.jsx)($e,{children:Object(Bn.jsx)(Ke,{})})]}),Object(Bn.jsx)(Qe,{children:Object(Bn.jsx)(nt,{children:l.filter((function(n,e){return"/store"===h.pathname?0===e:h.pathname==="/store/".concat(e+1)})).map((function(n){return n.map((function(n){return Object(Bn.jsx)(et,{to:n.path?"/store/".concat(n.path):"/store",children:Object(Bn.jsx)(ke,{background:"rgba(0,0,0,0.1)",name:n.name,price:n.price,description:!0,more:!0},n.id)},n.id)}))}))})}),Object(Bn.jsx)(tt,{children:k})]}):Object(Bn.jsx)(Te,{itemData:v})})})},rt=zn.a.div(bn||(bn=Object(Mn.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 100px 0;\n"]))),ct=zn.a.div(jn||(jn=Object(Mn.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 70%;\n\n  @media screen and (max-width: 980px) {\n    flex-direction: column-reverse;\n  }\n"]))),ot=zn.a.div(xn||(xn=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n\n  > h1 {\n    font-size: 4rem;\n    line-height: 100%;\n    margin-bottom: 30px;\n  }\n\n  > p {\n    font-weight: 300;\n    line-height: 175%;\n    text-align: justify;\n  }\n\n  @media screen and (max-width: 980px) {\n    width: 100%;\n  }\n"]))),st=zn.a.div(mn||(mn=Object(Mn.a)(["\n  width: 30%;\n\n  > img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n\n  @media screen and (max-width: 980px) {\n    width: 100%;\n    height: 200px;\n    margin-bottom: 30px;\n  }\n"]))),dt=function(){return Object(Bn.jsx)(rt,{children:Object(Bn.jsxs)(ct,{children:[Object(Bn.jsxs)(ot,{children:[Object(Bn.jsx)("h1",{children:"About Us"}),Object(Bn.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum repudiandae sunt sequi modi, excepturi dolores iure, deserunt aut eveniet officia suscipit beatae nisi at sint. Sapiente tempora amet accusantium voluptatem. Sapiente cupiditate et reprehenderit minus sequi suscipit ea, consequuntur quibusdam, rem esse voluptatem sit, voluptas doloremque assumenda pariatur distinctio corrupti exercitationem illum nulla omnis. Incidunt aperiam distinctio culpa quae explicabo! Asperiores dolores hic assumenda soluta minima tenetur ad aspernatur iure rerum aut suscipit quia voluptatum, velit, omnis corporis ipsa animi quod impedit cumque veniam qui iusto? Veniam perspiciatis nesciunt voluptate. Provident ducimus molestiae impedit reprehenderit ipsam accusantium error magnam eligendi magni est esse nisi quo aliquam voluptatibus delectus, tempore quam nostrum? Asperiores, optio! Beatae hic rem minima repellat nihil. Ad? Voluptate ipsam eaque voluptatum aspernatur perspiciatis ut error eum mollitia vel inventore. Amet repellat ab, dolor quae fugit alias perferendis minus et similique id, ullam nostrum eveniet eaque dicta pariatur!"})]}),Object(Bn.jsx)(st,{children:Object(Bn.jsx)("img",{src:"https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNvbG9yZnVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",alt:"about us"})})]})})},lt=zn.a.div(fn||(fn=Object(Mn.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  padding: 100px 0;\n"]))),pt=zn.a.div(gn||(gn=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n\n  > span {\n    font-weight: 300;\n    font-size: 0.85rem;\n    letter-spacing: 0.5rem;\n  }\n\n  > h1 {\n    font-weight: 900;\n    font-size: 6rem;\n    line-height: 100%;\n\n    @media screen and (max-width: 980px) {\n      font-size: 3rem;\n    }\n  }\n\n  @media screen and (max-width: 980px) {\n    justify-content: center;\n    text-align: center;\n  }\n"]))),ut=zn.a.div(On||(On=Object(Mn.a)(["\n  display: flex;\n\n  * {\n    height: 200px;\n    width: auto;\n    cursor: pointer;\n\n    &:hover {\n      opacity: 0.8;\n    }\n\n    @media screen and (max-width: 980px) {\n      height: 100px;\n    }\n  }\n\n  @media screen and (max-width: 980px) {\n    justify-content: center;\n  }\n"]))),ht=function(){return Object(Bn.jsx)(lt,{children:Object(Bn.jsxs)(pt,{children:[Object(Bn.jsx)("span",{children:"Hello!?"}),Object(Bn.jsx)("h1",{children:"Contact Us"}),Object(Bn.jsxs)(ut,{children:[Object(Bn.jsx)(Ln.a,{}),Object(Bn.jsx)(Ln.b,{}),Object(Bn.jsx)(Ln.c,{})]})]})})};var bt=function(){return Object(Bn.jsxs)(kn.a,{children:[Object(Bn.jsx)(Wn,{}),Object(Bn.jsx)(qn.a,{path:"/",exact:!0,component:Ce}),Object(Bn.jsx)(qn.a,{path:"/store",component:at}),Object(Bn.jsx)(qn.a,{path:"/about",component:dt}),Object(Bn.jsx)(qn.a,{path:"/contact-us",component:ht}),Object(Bn.jsx)(ee,{})]})};yn.a.render(Object(Bn.jsx)(bt,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.58e6fab7.chunk.js.map