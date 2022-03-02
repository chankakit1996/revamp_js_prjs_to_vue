import{c as te,d as w,r as u,a as T,b as d,e as o,w as A,v as ne,F as B,f as U,t as $,p as I,g as D,h as y,o as r,n as P,i as V,j as Q,k,l as X,m as G,q,s as C,u as S,x as se,y as ae,z as ie,A as le,B as re}from"./vendor.ffd13bbc.js";const ue=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))p(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&p(t)}).observe(document,{childList:!0,subtree:!0});function c(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(l){if(l.ep)return;l.ep=!0;const s=c(l);fetch(l.href,s)}};ue();const de=e=>new Promise(n=>setTimeout(n,e));async function ce(e,n=3e3){return await de(n),e()}const z=e=>Math.floor(Math.random()*e),pe={loading:0},ve={namespaced:!0,state:pe,getters:{},mutations:{set(e,n){const c=Object.keys(n),p=Object.keys(e);c.map((l,s)=>{p.includes(l)||console.error("payload is not part of state")}),Object.assign(e,n)},addCount(e){e.loading+=1},minusCount(e){e.loading-=1}},actions:{set(e,n){e.commit("set",n)},async load(e,n){e.commit("addCount");const c=await ce(n,1e3);return e.commit("minusCount"),c}}},_e={},me={namespaced:!0,state:_e,getters:{},mutations:{set(e,n){const c=Object.keys(n),p=Object.keys(e);c.map((l,s)=>{p.includes(l)||console.error("payload is not part of state")}),Object.assign(e,n)}},actions:{set(e,n){e.commit("set",n)},sample(e,n){const c=()=>{console.log("sample actions")};e.dispatch("loading/load",c,{root:!0})}}},fe=te({modules:{sample:me,loading:ve}});var b=(e,n)=>{const c=e.__vccOpts||e;for(const[p,l]of n)c[p]=l;return c};const he=w({name:"Movie Seat Booking",setup(e,{attrs:n,slots:c,emit:p,expose:l}){const s=[],t=z(10)+1,a=9;for(let m=0;m<t;m++){const _=[];for(let g=0;g<a;g++)_.push(u(z(2)));s.push(_)}const i=u(0),v=T(()=>f.value*i.value),f=u(10);return{distribution:s,count:i,total:v,selectedValue:f,selectSeat:m=>{if(m.value===2)m.value=0,i.value--;else if(m.value===0)m.value=2,i.value++;else return}}}}),K=e=>(I("data-v-0fd7b6f6"),e=e(),D(),e),$e={class:"movie-seat-booking-wrapper"},ge={class:"movie-container"},ye=K(()=>o("label",null,"Pick a movie:",-1)),we=K(()=>o("option",{value:"10"},"Avengers: Endgame ($10)",-1)),be=K(()=>o("option",{value:"12"},"Joker ($12)",-1)),Ce=K(()=>o("option",{value:"8"},"Toy Story 4 ($8)",-1)),Se=K(()=>o("option",{value:"9"},"The Lion King ($9)",-1)),Re=[we,be,Ce,Se],ke=K(()=>o("ul",{class:"showcase"},[o("li",null,[o("div",{class:"seat"}),o("small",null,"N/A")]),o("li",null,[o("div",{class:"seat selected"}),o("small",null,"Selected")]),o("li",null,[o("div",{class:"seat occupied"}),o("small",null,"Occupied")])],-1)),Ne={class:"container"},Te=K(()=>o("div",{class:"screen"},null,-1)),Ie=["onClick"],De={class:"text"},Pe=y(" You have selected "),Me={id:"count"},Ae=y(" seats for a price of $"),Ee={id:"total"};function Oe(e,n,c,p,l,s){return r(),d("div",$e,[o("div",ge,[ye,A(o("select",{id:"movie","onUpdate:modelValue":n[0]||(n[0]=t=>e.selectedValue=t)},Re,512),[[ne,e.selectedValue]])]),ke,o("div",Ne,[Te,(r(!0),d(B,null,U(e.distribution,(t,a)=>(r(),d("div",{class:"row",key:a},[(r(!0),d(B,null,U(t,(i,v)=>(r(),d("div",{class:P(["seat",[i.value===1?"occupied":"",i.value===2?"selected":""]]),onClick:f=>e.selectSeat(i),key:v},null,10,Ie))),128))]))),128))]),o("p",De,[Pe,o("span",Me,$(e.count),1),Ae,o("span",Ee,$(e.total),1)])])}var Be=b(he,[["render",Oe],["__scopeId","data-v-0fd7b6f6"]]);const x=()=>{const e=["application"];return e[Math.floor(Math.random()*e.length)]},Ue=e=>{e.value=!0,console.log(e),setTimeout(()=>{e.value=!1},2e4)},Ke=w({name:"Hang Man",setup(e,{attrs:n,slots:c,emit:p,expose:l}){const s=u(x()),t=s.value.split(""),a=u([]),i=u(),v=u(!1),f=T(()=>a.value.filter(R=>t.includes(R))),h=T(()=>a.value.filter(R=>!t.includes(R))),m=T(()=>h.value.length),_=R=>{if(console.log(R),g.value||R.keyCode<65||R.keyCode>90)return;const J=R.key.toLocaleLowerCase();a.value.includes(J)?Ue(v):a.value.push(J)},g=T(()=>m.value>5?"lose":t.every(R=>f.value.includes(R))?"win":""),Y=T(()=>g.value=="win"?"Congratulations! You won! \u{1F603}":"Unfortunately you lost. \u{1F615}"),j=()=>{s.value=x(),a.value=[]};return V(()=>{i.value.addEventListener("keydown",_)}),Q(()=>{i.value.removeEventListener("keydown",_)}),{notification:v,words:s,guessLetters:a,correctLetters:f,wrongWords:h,wrongCount:m,status:g,finalMsg:Y,reset:j,wrapper:i}}}),E=e=>(I("data-v-1fbce32e"),e=e(),D(),e),Ge={class:"hang-man-wrapper",ref:"wrapper",tabindex:"0"},Le=E(()=>o("h1",null,"Hangman",-1)),He=E(()=>o("p",null,"Find the hidden word - Enter a letter",-1)),Ye={class:"game-container"},qe={height:"250",width:"200",class:"figure-container"},Fe=E(()=>o("line",{x1:"60",y1:"20",x2:"140",y2:"20"},null,-1)),je=E(()=>o("line",{x1:"140",y1:"20",x2:"140",y2:"50"},null,-1)),Ve=E(()=>o("line",{x1:"60",y1:"20",x2:"60",y2:"230"},null,-1)),We=E(()=>o("line",{x1:"20",y1:"230",x2:"100",y2:"230"},null,-1)),Ze={key:0,cx:"140",cy:"70",r:"20"},Je={key:1,x1:"140",y1:"90",x2:"140",y2:"150"},Qe={key:2,x1:"140",y1:"120",x2:"120",y2:"100"},Xe={key:3,x1:"140",y1:"120",x2:"160",y2:"100"},ze={key:4,x1:"140",y1:"150",x2:"120",y2:"180"},xe={key:5,x1:"140",y1:"150",x2:"160",y2:"180"},eo={class:"wrong-letters-container"},oo={key:0,id:"wrong-letters"},to=E(()=>o("p",null,"Wrong",-1)),no={class:"word",id:"word"},so={class:"letter"},ao={key:0,class:"popup-container",id:"popup-container"},io={class:"popup"},lo={id:"final-message"},ro={key:0,id:"final-message-reveal-word"},uo=E(()=>o("p",null,"You have already entered this letter",-1)),co=[uo];function po(e,n,c,p,l,s){return r(),d("div",Ge,[Le,He,o("div",Ye,[(r(),d("svg",qe,[Fe,je,Ve,We,e.wrongCount>0?(r(),d("circle",Ze)):k("",!0),e.wrongCount>1?(r(),d("line",Je)):k("",!0),e.wrongCount>2?(r(),d("line",Qe)):k("",!0),e.wrongCount>3?(r(),d("line",Xe)):k("",!0),e.wrongCount>4?(r(),d("line",ze)):k("",!0),e.wrongCount>5?(r(),d("line",xe)):k("",!0)])),o("div",eo,[e.wrongCount>0?(r(),d("div",oo,[to,(r(!0),d(B,null,U(e.wrongWords,(t,a)=>(r(),d("span",null,$(t),1))),256))])):k("",!0)]),o("div",no,[(r(!0),d(B,null,U(e.words,(t,a)=>(r(),d("span",so,$(e.guessLetters.includes(t)?t:""),1))),256))])]),e.status?(r(),d("div",ao,[o("div",io,[o("h2",lo,$(e.finalMsg),1),e.status=="lose"?(r(),d("h3",ro,$(`... the word was ${e.words}`),1)):k("",!0),o("button",{id:"play-button",onClick:n[0]||(n[0]=(...t)=>e.reset&&e.reset(...t))},"Play Again")])])):k("",!0),o("div",{class:P(["notification-container",e.notification?"show":""]),id:"notification-container"},co,2)],512)}var vo=b(Ke,[["render",po],["__scopeId","data-v-1fbce32e"]]);const _o=w({name:"Infinite Scroll Blog",setup(e,{attrs:n,slots:c,emit:p,expose:l}){const s=u(5),t=u(1),a=u([]),i=u(!1),v=u(),f=u(null),h=async()=>{i.value=!0,setTimeout(async()=>{const m=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${s.value}&_page=${t.value}`);t.value++;const _=await m.json();a.value=a.value.concat(_),i.value=!1},2e3)};return h(),V(()=>{const m={};v.value=new IntersectionObserver(async([_])=>{_&&_.isIntersecting&&(console.log("intersected"),await h())},m),v.value.observe(f.value)}),{posts:a,showLoader:i,loaderRef:f}}}),F=e=>(I("data-v-a7420ce6"),e=e(),D(),e),mo={class:"infinite-scroll-blog-wrapper"},fo=F(()=>o("h1",null,"My Blog",-1)),ho=F(()=>o("div",{class:"filter-container"},[o("input",{type:"text",id:"filter",class:"filter",placeholder:"Filter posts..."})],-1)),$o={id:"posts-container"},go={class:"post"},yo={class:"number"},wo={class:"post-info"},bo={class:"post-title"},Co={class:"post-body"},So=F(()=>o("div",{class:"circle"},null,-1)),Ro=F(()=>o("div",{class:"circle"},null,-1)),ko=F(()=>o("div",{class:"circle"},null,-1)),No=[So,Ro,ko];function To(e,n,c,p,l,s){return r(),d("div",mo,[fo,ho,o("div",$o,[(r(!0),d(B,null,U(e.posts,(t,a)=>(r(),d("div",go,[o("div",yo,$(t.id),1),o("div",wo,[o("h2",bo,$(t.title),1),o("p",Co,$(t.body),1)])]))),256))]),o("div",{class:P(["loader",e.showLoader?"show":""]),ref:"loaderRef"},No,2)])}var Io=b(_o,[["render",To],["__scopeId","data-v-a7420ce6"]]);function Do(){const e=localStorage.getItem("transItem");return e?JSON.parse(e):[]}const Po=w({name:"Expense Tracker",setup(e,{attrs:n,slots:c,emit:p,expose:l}){const s=u(),t=u(),a=u(Do()),i=T(()=>a.value.filter(_=>_.amount>0).reduce((_,g)=>_+g.amount,0).toFixed(2)),v=T(()=>Math.abs(a.value.filter(_=>_.amount<0).reduce((_,g)=>_+g.amount,0)).toFixed(2)),f=()=>{if(s.value&&t.value){const _=t.value<0?"minus":"plus";a.value.push({name:s.value,amount:t.value,className:_}),s.value="",t.value=""}else alert("Please add a text and amount")},h=_=>{a.value.splice(_,1)},m=()=>{a.value=[]};return window.onbeforeunload=()=>{localStorage.setItem("transItem",JSON.stringify(a.value))},{addTrans:f,removeTrans:h,trans:a,name:s,amount:t,income:i,expense:v,reset:m}}}),N=e=>(I("data-v-d32a99ba"),e=e(),D(),e),Mo={class:"expense-tracker-wrapper"},Ao=N(()=>o("h2",null,"Expense Tracker",-1)),Eo={class:"container"},Oo=N(()=>o("h4",null,"Your Balance",-1)),Bo={id:"balance"},Uo={class:"inc-exp-container"},Ko=N(()=>o("h4",null,"Income",-1)),Go={id:"money-plus",class:"money plus"},Lo=N(()=>o("h4",null,"Expense",-1)),Ho={id:"money-minus",class:"money minus"},Yo=N(()=>o("h3",null,"History",-1)),qo={id:"list",class:"list"},Fo=["onClick"],jo=N(()=>o("h3",null,"Add new transaction",-1)),Vo={class:"form-control"},Wo=N(()=>o("label",{for:"text"},"Text",-1)),Zo={class:"form-control"},Jo=N(()=>o("label",{for:"amount"},[y("Amount "),o("br"),y(" (negative - expense, positive - income)")],-1)),Qo=N(()=>o("button",{class:"btn",type:"submit"},"Add transaction",-1)),Xo=N(()=>o("button",{class:"btn",type:"reset"},"Reset transaction",-1));function zo(e,n,c,p,l,s){return r(),d("div",Mo,[Ao,o("div",Eo,[Oo,o("h1",Bo," $"+$(parseInt(e.income,10)-parseInt(e.expense,10)),1),o("div",Uo,[o("div",null,[Ko,o("p",Go,"+$"+$(e.income),1)]),o("div",null,[Lo,o("p",Ho,"-$"+$(e.expense),1)])]),Yo,o("ul",qo,[(r(!0),d(B,null,U(e.trans,(t,a)=>(r(),d("li",{class:P(t.className)},[y($(t.name)+" ",1),o("span",null,"$"+$(Math.abs(t.amount)),1),o("button",{class:"delete-btn",onClick:i=>e.removeTrans(a)}," x ",8,Fo)],2))),256))]),jo,o("form",{id:"form",onSubmit:n[2]||(n[2]=X((...t)=>e.addTrans&&e.addTrans(...t),["prevent"])),onReset:n[3]||(n[3]=X((...t)=>e.reset&&e.reset(...t),["prevent"]))},[o("div",Vo,[Wo,A(o("input",{type:"text",id:"text","onUpdate:modelValue":n[0]||(n[0]=t=>e.name=t),placeholder:"Enter text..."},null,512),[[G,e.name]])]),o("div",Zo,[Jo,A(o("input",{type:"number","onUpdate:modelValue":n[1]||(n[1]=t=>e.amount=t),placeholder:"Enter amount..."},null,512),[[G,e.amount]])]),Qo,Xo],32)])])}var xo=b(Po,[["render",zo],["__scopeId","data-v-d32a99ba"]]);const et=w({name:"Modal Menu Slider",setup(e,{attrs:n,slots:c,emit:p,expose:l}){const s=u(!1),t=u(!1),a=u(),i=u(),v=u(),f=u(),h=u(),m=u(),_=g=>{if(f.value.contains(g.target))t.value=!t.value;else if(t.value&&(!i.value.contains(g.target)||h.value.contains(g.target)))t.value=!t.value;else if(v.value.contains(g.target))s.value=!s.value;else if(s.value&&!a.value.contains(g.target))s.value=!s.value;else return};return V(()=>{m.value.addEventListener("click",_)}),Q(()=>{m.value.removeEventListener("click",_)}),{showNav:s,showModal:t,navRef:a,modalRef:i,menuRef:v,signUpRef:f,modalCrossRef:h,wrapper:m}}}),L=e=>(I("data-v-0729c3ff"),e=e(),D(),e),ot={id:"navbar",ref:"navRef"},tt=q('<div class="logo" data-v-0729c3ff><img src="https://randomuser.me/api/portraits/men/76.jpg" alt="user" data-v-0729c3ff></div><ul data-v-0729c3ff><li data-v-0729c3ff><a href="#" data-v-0729c3ff>Home</a></li><li data-v-0729c3ff><a href="#" data-v-0729c3ff>Portfolio</a></li><li data-v-0729c3ff><a href="#" data-v-0729c3ff>Blog</a></li><li data-v-0729c3ff><a href="#" data-v-0729c3ff>Contact Me</a></li></ul>',2),nt=[tt],st={class:"toggle",id:"toggle",ref:"menuRef"},at=L(()=>o("div",null,null,-1)),it=L(()=>o("div",null,null,-1)),lt=L(()=>o("div",null,null,-1)),rt=[at,it,lt],ut=L(()=>o("h1",null,"My Landing Page",-1)),dt=L(()=>o("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, amet! ",-1)),ct={class:"cta-btn",id:"open",ref:"signUpRef"},pt=q('<div class="container" data-v-0729c3ff><h2 data-v-0729c3ff>What is this landing page about?</h2><p data-v-0729c3ff> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusamus ab consectetur eos provident ipsa est perferendis architecto. Provident, quaerat asperiores. Quo esse minus repellat sapiente, impedit obcaecati necessitatibus. </p><p data-v-0729c3ff> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio officia ipsa. Cum dignissimos possimus et non provident facilis saepe! </p><h2 data-v-0729c3ff>Tell Me More</h2><p data-v-0729c3ff> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eaque delectus explicabo qui reprehenderit? Aspernatur ad similique minima accusamus maiores accusantium libero autem iusto reiciendis ullam impedit esse quibusdam, deleniti laudantium rerum beatae, deserunt nemo neque, obcaecati exercitationem sit. Earum. </p><h2 data-v-0729c3ff>Benefits</h2><ul data-v-0729c3ff><li data-v-0729c3ff>Lifetime Access</li><li data-v-0729c3ff>30 Day Money Back</li><li data-v-0729c3ff>Tailored Customer Support</li></ul><p data-v-0729c3ff> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quam nostrum, fugiat, itaque natus officia laborum dolorum id accusantium culpa architecto tenetur fuga? Consequatur provident rerum eius ratione dolor officiis doloremque minima optio dignissimos doloribus odio debitis vero cumque itaque excepturi a neque, expedita nulla earum accusamus repellat adipisci veritatis quam. Ipsum fugiat iusto pariatur consectetur quas libero dolor dolores dolorem, nostrum ducimus doloremque placeat accusamus iste, culpa quaerat consequatur? </p></div>',1),vt={class:"modal",ref:"modalRef"},_t={class:"close-btn",id:"close",ref:"modalCrossRef"},mt=L(()=>o("i",{class:"fa fa-times"},null,-1)),ft=[mt],ht=q('<div class="modal-header" data-v-0729c3ff><h3 data-v-0729c3ff>Sign Up</h3></div><div class="modal-content" data-v-0729c3ff><p data-v-0729c3ff>Register with us to get offers, support and more</p><form class="modal-form" data-v-0729c3ff><div data-v-0729c3ff><label for="name" data-v-0729c3ff>Name</label><input type="text" id="name" placeholder="Enter Name" class="form-input" data-v-0729c3ff></div><div data-v-0729c3ff><label for="email" data-v-0729c3ff>Email</label><input type="email" id="email" placeholder="Enter Email" class="form-input" data-v-0729c3ff></div><div data-v-0729c3ff><label for="password" data-v-0729c3ff>Password</label><input type="password" id="password" placeholder="Enter Password" class="form-input" data-v-0729c3ff></div><div data-v-0729c3ff><label for="password2" data-v-0729c3ff>Confirm Password</label><input type="password" id="password2" placeholder="Confirm Password" class="form-input" data-v-0729c3ff></div><input type="submit" value="Submit" class="submit-btn" data-v-0729c3ff></form></div>',2);function $t(e,n,c,p,l,s){return r(),d("div",{class:P(["modal-menu-slider-wrapper",e.showNav?"show-nav":""]),ref:"wrapper"},[o("nav",ot,nt,512),o("header",null,[o("div",st,rt,512),ut,dt,o("button",ct,"Sign Up",512)]),pt,o("div",{class:P(["modal-container",e.showModal?"show-modal":""]),id:"modal"},[o("div",vt,[o("button",_t,ft,512),ht],512)],2)],2)}var gt=b(et,[["render",$t],["__scopeId","data-v-0729c3ff"]]);const ee="memoryCards",yt=()=>{const e=localStorage.getItem(ee);return e?JSON.parse(e):[]},wt=w({name:"Memory Cards",setup(e,{attrs:n,slots:c,emit:p,expose:l}){const s=u(0),t=u(!1),a=u(),i=u(),v=u(yt()),f=T(()=>v.value[s.value]),h=()=>{!a.value||!i.value||(v.value.push({question:a.value,answer:i.value,flipped:!1}),a.value="",i.value="",t.value=!t.value)},m=g=>{const Y=s.value+g;Y>=v.value.length||Y<0||(s.value=s.value+g)},_=()=>{v.value=[]};return window.onbeforeunload=()=>{localStorage.setItem(ee,JSON.stringify(v.value))},{cards:v,currentCard:f,updateCard:m,currentIndex:s,showAddCard:t,addCard:h,question:a,answer:i,resetCard:_}}}),O=e=>(I("data-v-290e1fdf"),e=e(),D(),e),bt={class:"memory-cards-wrapper"},Ct=O(()=>o("i",{class:"fas fa-trash"},null,-1)),St=y(" Clear Cards "),Rt=[Ct,St],kt=y(" Memory Cards "),Nt=O(()=>o("i",{class:"fas fa-plus"},null,-1)),Tt=y(" Add New Card "),It=[Nt,Tt],Dt={id:"cards-container",class:"cards"},Pt=["onClick"],Mt={key:0,class:"inner-card-back"},At={key:1,class:"inner-card-front"},Et={class:"navigation"},Ot=O(()=>o("i",{class:"fas fa-arrow-left"},null,-1)),Bt=[Ot],Ut={id:"current"},Kt=O(()=>o("i",{class:"fas fa-arrow-right"},null,-1)),Gt=[Kt],Lt=y(" Add New Card "),Ht=O(()=>o("i",{class:"fas fa-times"},null,-1)),Yt=[Ht],qt={class:"form-group"},Ft=O(()=>o("label",{for:"question"},"Question",-1)),jt={class:"form-group"},Vt=O(()=>o("label",{for:"answer"},"Answer",-1)),Wt=O(()=>o("i",{class:"fas fa-plus"},null,-1)),Zt=y(" Add Card "),Jt=[Wt,Zt];function Qt(e,n,c,p,l,s){return r(),d("div",bt,[o("button",{id:"clear",class:"clear btn",onClick:n[0]||(n[0]=(...t)=>e.resetCard&&e.resetCard(...t))},Rt),o("h1",null,[kt,o("button",{id:"show",class:"btn btn-small",onClick:n[1]||(n[1]=t=>e.showAddCard=!e.showAddCard)},It)]),o("div",Dt,[(r(!0),d(B,null,U(e.cards,(t,a)=>(r(),d("div",{class:P(["card",[t.flipped?"show-answer":"",e.currentIndex==a?"active":"",e.currentIndex>a?"right":"",e.currentIndex<a?"left":""]])},[(r(),d("div",{class:"inner-card",key:t.question,onClick:i=>t.flipped=!t.flipped},[t.flipped?(r(),d("div",Mt,[o("p",null,$(t.answer),1)])):(r(),d("div",At,[o("p",null,$(t.question),1)]))],8,Pt))],2))),256))]),o("div",Et,[o("button",{id:"prev",class:"nav-button",onClick:n[2]||(n[2]=t=>e.updateCard(-1))},Bt),o("p",Ut,$(e.cards.length>0?`${e.currentIndex+1}/${e.cards.length}`:""),1),o("button",{id:"next",class:"nav-button",onClick:n[3]||(n[3]=t=>e.updateCard(1))},Gt)]),o("div",{id:"add-container",class:P(["add-container",e.showAddCard?"show":""])},[o("h1",null,[Lt,o("button",{id:"hide",class:"btn btn-small btn-ghost",onClick:n[4]||(n[4]=t=>e.showAddCard=!e.showAddCard)},Yt)]),o("div",qt,[Ft,A(o("textarea",{id:"question",placeholder:"Enter question...","onUpdate:modelValue":n[5]||(n[5]=t=>e.question=t)},null,512),[[G,e.question]])]),o("div",jt,[Vt,A(o("textarea",{id:"answer",placeholder:"Enter Answer...","onUpdate:modelValue":n[6]||(n[6]=t=>e.answer=t)},null,512),[[G,e.answer]])]),o("button",{id:"add-card",class:"btn",onClick:n[7]||(n[7]=(...t)=>e.addCard&&e.addCard(...t))},Jt)],2)])}var Xt=b(wt,[["render",Qt],["__scopeId","data-v-290e1fdf"]]);const zt=w({name:"Currency One",emits:["update:currencyOne"],props:["currencyOne"],setup(e,{attrs:n,slots:c,emit:p,expose:l}){}}),xt=["value"],en=q('<option value="AED">AED</option><option value="ARS">ARS</option><option value="AUD">AUD</option><option value="BGN">BGN</option><option value="BRL">BRL</option><option value="BSD">BSD</option><option value="CAD">CAD</option><option value="CHF">CHF</option><option value="CLP">CLP</option><option value="CNY">CNY</option><option value="COP">COP</option><option value="CZK">CZK</option><option value="DKK">DKK</option><option value="DOP">DOP</option><option value="EGP">EGP</option><option value="EUR">EUR</option><option value="FJD">FJD</option><option value="GBP">GBP</option><option value="GTQ">GTQ</option><option value="HKD">HKD</option><option value="HRK">HRK</option><option value="HUF">HUF</option><option value="IDR">IDR</option><option value="ILS">ILS</option><option value="INR">INR</option><option value="ISK">ISK</option><option value="JPY">JPY</option><option value="KRW">KRW</option><option value="KZT">KZT</option><option value="MXN">MXN</option><option value="MYR">MYR</option><option value="NOK">NOK</option><option value="NZD">NZD</option><option value="PAB">PAB</option><option value="PEN">PEN</option><option value="PHP">PHP</option><option value="PKR">PKR</option><option value="PLN">PLN</option><option value="PYG">PYG</option><option value="RON">RON</option><option value="RUB">RUB</option><option value="SAR">SAR</option><option value="SEK">SEK</option><option value="SGD">SGD</option><option value="THB">THB</option><option value="TRY">TRY</option><option value="TWD">TWD</option><option value="UAH">UAH</option><option value="USD">USD</option><option value="UYU">UYU</option><option value="VND">VND</option><option value="ZAR">ZAR</option>',52),on=[en];function tn(e,n,c,p,l,s){return r(),d("select",{id:"currency-one",value:e.currencyOne,onInput:n[0]||(n[0]=t=>e.$emit("update:currencyOne",t.target.value))},on,40,xt)}var nn=b(zt,[["render",tn]]);const sn=w({name:"Currency Two",emits:["update:currencyTwo"],props:["currencyTwo"],setup(e,{attrs:n,slots:c,emit:p,expose:l}){return{}}}),an=["value"],ln=q('<option value="AED">AED</option><option value="ARS">ARS</option><option value="AUD">AUD</option><option value="BGN">BGN</option><option value="BRL">BRL</option><option value="BSD">BSD</option><option value="CAD">CAD</option><option value="CHF">CHF</option><option value="CLP">CLP</option><option value="CNY">CNY</option><option value="COP">COP</option><option value="CZK">CZK</option><option value="DKK">DKK</option><option value="DOP">DOP</option><option value="EGP">EGP</option><option value="EUR">EUR</option><option value="FJD">FJD</option><option value="GBP">GBP</option><option value="GTQ">GTQ</option><option value="HKD">HKD</option><option value="HRK">HRK</option><option value="HUF">HUF</option><option value="IDR">IDR</option><option value="ILS">ILS</option><option value="INR">INR</option><option value="ISK">ISK</option><option value="JPY">JPY</option><option value="KRW">KRW</option><option value="KZT">KZT</option><option value="MXN">MXN</option><option value="MYR">MYR</option><option value="NOK">NOK</option><option value="NZD">NZD</option><option value="PAB">PAB</option><option value="PEN">PEN</option><option value="PHP">PHP</option><option value="PKR">PKR</option><option value="PLN">PLN</option><option value="PYG">PYG</option><option value="RON">RON</option><option value="RUB">RUB</option><option value="SAR">SAR</option><option value="SEK">SEK</option><option value="SGD">SGD</option><option value="THB">THB</option><option value="TRY">TRY</option><option value="TWD">TWD</option><option value="UAH">UAH</option><option value="USD">USD</option><option value="UYU">UYU</option><option value="VND">VND</option><option value="ZAR">ZAR</option>',52),rn=[ln];function un(e,n,c,p,l,s){return r(),d("select",{id:"currency-two",value:e.currencyTwo,onInput:n[0]||(n[0]=t=>e.$emit("update:currencyTwo",t.target.value))},rn,40,an)}var dn=b(sn,[["render",un]]),cn="/revamp_js_prjs_to_vue/assets/money.3d65b0b1.png";const pn=w({name:"Exchange Rate",setup(e,{attrs:n,slots:c,emit:p,expose:l}){const s=u({}),t=u("USD"),a=u("USD"),i=u(1),v=u(),f=()=>{[t.value,a.value]=[a.value,t.value]},h=()=>{fetch("https://open.exchangerate-api.com/v6/latest").then(m=>{m.json().then(_=>{s.value=_.rates,v.value=(s.value[t.value]/s.value[a.value]*i.value).toFixed(2)})})};return h(),{rates:s,calculate:h,currencyOne:t,currencyTwo:a,valueOne:i,valueTwo:v,swap:f}},components:{CurrencyOne:nn,CurrencyTwo:dn}}),W=e=>(I("data-v-b0f6eb2e"),e=e(),D(),e),vn={class:"exchange-rate-wrapper"},_n=W(()=>o("img",{src:cn,alt:"",class:"money-img"},null,-1)),mn=W(()=>o("h1",null,"Exchange Rate Calculator",-1)),fn=W(()=>o("p",null,"Choose the currency and the amounts to get the exchange rate",-1)),hn={class:"container"},$n={class:"currency"},gn={class:"swap-rate-container"},yn={class:"rate",id:"rate"},wn={class:"currency"},bn=["value"];function Cn(e,n,c,p,l,s){const t=C("CurrencyOne"),a=C("CurrencyTwo");return r(),d("div",vn,[_n,mn,fn,o("div",hn,[o("div",$n,[S(t,{currencyOne:e.currencyOne,"onUpdate:currencyOne":[n[0]||(n[0]=i=>e.currencyOne=i),e.calculate]},null,8,["currencyOne","onUpdate:currencyOne"]),A(o("input",{type:"number",id:"amount-one",placeholder:"0","onUpdate:modelValue":n[1]||(n[1]=i=>e.valueOne=i),onInput:n[2]||(n[2]=(...i)=>e.calculate&&e.calculate(...i))},null,544),[[G,e.valueOne]])]),o("div",gn,[o("button",{class:"btn",id:"swap",onClick:n[3]||(n[3]=(...i)=>e.swap&&e.swap(...i))},"Swap"),o("div",yn,$(`1 ${e.currencyOne} = ${e.rates[e.currencyOne]/e.rates[e.currencyTwo]} ${e.currencyTwo}`),1)]),o("div",wn,[S(a,{currencyTwo:e.currencyTwo,"onUpdate:currencyTwo":[n[4]||(n[4]=i=>e.currencyTwo=i),e.calculate]},null,8,["currencyTwo","onUpdate:currencyTwo"]),o("input",{type:"number",id:"amount-two",placeholder:"0",onInput:n[5]||(n[5]=(...i)=>e.calculate&&e.calculate(...i)),value:e.valueTwo},null,40,bn)])])])}var Sn=b(pn,[["render",Cn],["__scopeId","data-v-b0f6eb2e"]]);function oe(){const e=["sigh","tense","airplane","ball","pies","juice","warlike","bad","north","dependent","steer","silver","highfalutin","superficial","quince","eight","feeble","admit","drag","loving"];return e[Math.floor(Math.random()*e.length)]}const Rn=w({name:"Typing Game",setup(e,{attrs:n,slots:c,emit:p,expose:l}){const s=u(oe()),t=u(""),a=u(0),i=u(!1),v=u("medium"),f=u(0),h=u(!0),m=()=>{v.value=="hard"?f.value=5:v.value=="medium"?f.value=7:f.value=10};return m(),{word:s,inputWord:t,typing:()=>{i.value=!0,s.value===t.value&&(a.value+=1,s.value=oe(),t.value="",a.value=a.value++)},score:a,initGame:i,difficulty:v,selectDiff:j=>{if(i.value){j.preventDefault();return}v.value=j.target.value,m()},time:f,countTime:()=>{setInterval(()=>{f.value-=1},1e3)},showSetting:h}}}),M=e=>(I("data-v-2f434da7"),e=e(),D(),e),kn={class:"typing-game-wrapper"},Nn=M(()=>o("i",{class:"fas fa-cog"},null,-1)),Tn=[Nn],In={id:"settings-form"},Dn=M(()=>o("label",{for:"difficulty"},"Difficulty",-1)),Pn=["value"],Mn=M(()=>o("option",{value:"easy"},"Easy",-1)),An=M(()=>o("option",{value:"medium"},"Medium",-1)),En=M(()=>o("option",{value:"hard"},"Hard",-1)),On=[Mn,An,En],Bn=["value"],Un=["value"],Kn={class:"container"},Gn=M(()=>o("h2",null,"\u{1F469}\u200D\u{1F4BB} Speed Typer \u{1F468}\u200D\u{1F4BB}",-1)),Ln=M(()=>o("small",null,"Type the following:",-1)),Hn={id:"word"},Yn={class:"time-container"},qn=y(" Time left: "),Fn={id:"time"},jn={class:"score-container"},Vn=y(" Score: "),Wn={id:"score"},Zn={id:"end-game-container",class:"end-game-container"},Jn=M(()=>o("h1",null,"Time ran out",-1)),Qn=M(()=>o("button",{onclick:"location.reload()"},"Reload",-1));function Xn(e,n,c,p,l,s){return r(),d("div",kn,[o("button",{id:"settings-btn",class:"settings-btn",onClick:n[0]||(n[0]=t=>e.showSetting=!e.showSetting)},Tn),o("div",{id:"settings",class:P(["settings",e.showSetting?"":"hide"])},[o("form",In,[o("div",null,[Dn,e.initGame?(r(),d("select",{key:1,disabled:"",value:e.difficulty,id:"difficulty"},[o("option",{value:e.difficulty},$(e.difficulty),9,Un)],8,Bn)):(r(),d("select",{key:0,id:"difficulty",onInput:n[1]||(n[1]=(...t)=>e.selectDiff&&e.selectDiff(...t)),value:e.difficulty},On,40,Pn))])])],2),o("div",Kn,[Gn,Ln,o("h1",Hn,$(e.word),1),A(o("input",{type:"text",id:"text",autocomplete:"off",placeholder:"Type the word here...",autofocus:"","onUpdate:modelValue":n[2]||(n[2]=t=>e.inputWord=t),onInput:n[3]||(n[3]=(...t)=>e.typing&&e.typing(...t)),onInputOnce:n[4]||(n[4]=(...t)=>e.countTime&&e.countTime(...t))},null,544),[[G,e.inputWord]]),o("p",Yn,[qn,o("span",Fn,$(e.time)+"s",1)]),o("p",jn,[Vn,o("span",Wn,$(e.score),1)]),A(o("div",Zn,[Jn,o("p",null,"Your final score is "+$(e.score),1),Qn],512),[[se,e.time<=0]])])])}var zn=b(Rn,[["render",Xn],["__scopeId","data-v-2f434da7"]]),xn="/revamp_js_prjs_to_vue/assets/mic.9eb71eee.png";const es=()=>Math.floor(Math.random()*100)+1,os=w({name:"Speak Number Guessing Games",setup(e,{attrs:n,slots:c,emit:p,expose:l}){window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;const s=new window.SpeechRecognition,t=u(""),a=u(""),i=es(),v=()=>{a.value=""};console.log(i);const f=h=>typeof h!="string"?!1:!Number.isNaN(h)&&!Number.isNaN(parseFloat(h));return s.start(),s.addEventListener("result",h=>{t.value=h.results[0][0].transcript,console.log(h.results[0][0]),f(t.value)?(t.value=parseInt(t.value),(t.value<1||t.value>100)&&(a.value="Number must be between 1 and 100"),t.value>i?a.value="GO HIGHER":t.value<i?a.value="GO LOWER":a.value="win"):a.value="That is not a valid number"}),s.addEventListener("end",()=>{a.value=="win"?s.stop():s.start()}),{recognition:s,msg:t,resMsg:a,randomNum:i,restart:v}}}),H=e=>(I("data-v-a5fa9930"),e=e(),D(),e),ts={key:0,class:"speak-number-guessing-game-wrapper"},ns=y(" Congrats! You have guessed the number! "),ss=H(()=>o("br",null,null,-1)),as=H(()=>o("br",null,null,-1)),is={key:1,class:"speak-number-guessing-game-wrapper"},ls=H(()=>o("img",{src:xn,alt:"Speak"},null,-1)),rs=H(()=>o("h1",null,"Guess a Number Between 1 - 100",-1)),us=H(()=>o("h3",null,"Speak the number into your microphone",-1)),ds={key:0,id:"msg",class:"msg"},cs=H(()=>o("div",null,"You said:",-1)),ps={class:"box"};function vs(e,n,c,p,l,s){return e.resMsg=="win"?(r(),d("div",ts,[o("h2",null,[ns,ss,as,y(" It was "+$(e.randomNum),1)]),o("button",{class:"play-again",id:"play-again",onClick:n[0]||(n[0]=(...t)=>e.restart&&e.restart(...t))}," Play Again ")])):(r(),d("div",is,[ls,rs,us,e.msg?(r(),d("div",ds,[cs,o("span",ps,$(e.msg),1),o("div",null,$(e.resMsg),1)])):k("",!0)]))}var _s=b(os,[["render",vs],["__scopeId","data-v-a5fa9930"]]);const ms=w({components:{MovieSeatBooking:Be,HangMan:vo,InfiniteScrollBlog:Io,ExpenseTracker:xo,ModalMenuSlider:gt,MemoryCards:Xt,ExchangeRate:Sn,TypingGame:zn,SpeakNumberGuessingGame:_s},name:"Main",setup(e,{attrs:n,slots:c,emit:p,expose:l}){return{}}}),fs={class:"main-wrapper"};function hs(e,n,c,p,l,s){const t=C("SpeakNumberGuessingGame"),a=C("TypingGame"),i=C("ExchangeRate"),v=C("MemoryCards"),f=C("ModalMenuSlider"),h=C("ExpenseTracker"),m=C("MovieSeatBooking"),_=C("HangMan"),g=C("InfiniteScrollBlog");return r(),d("div",fs,[S(t),S(a),S(i),S(v),S(f),S(h),S(m),S(_),S(g)])}var $s=b(ms,[["render",hs],["__scopeId","data-v-296af9e5"]]);const gs="/revamp_js_prjs_to_vue/",ys=[{name:"main",path:"/",component:$s},{path:"/:catchAll(.*)",redirect:"/"}],ws=ae({history:ie(`${gs}`),routes:ys,scrollBehavior(e,n,c){return{el:"#app",top:0,behavior:"smooth"}}}),bs=w({name:"App",setup(){return document.title="Project Skeleton",{}}});function Cs(e,n,c,p,l,s){const t=C("router-view");return r(),le(t)}var Ss=b(bs,[["render",Cs]]);const Z=re(Ss);Z.use(fe);Z.use(ws);Z.mount("#app");
