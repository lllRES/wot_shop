(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+f/e":function(e,t,r){"use strict";function a(e){return"https://oplata.qiwi.com/create?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPyXiqJauFTVWrkPBA4D8ecfvczN2yVDoBS5dUJFK1qpZv6hpDnJKhBv8o7yAFyWpWAx13gS9szyjHosJYiyWj8s7Ub4ea59TdwTBVTq3wr&billId="+Date.now()+"&amount="+e.amount+"&email="+encodeURI(e.email)+"&comment="+encodeURI(e.comment)+"&successUrl="+encodeURI("https://vk.com")}r.d(t,"a",(function(){return a}))},"/B+w":function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=Object(a.forwardRef)((function(e,t){var r=e.color,a=e.size,l=o(e,["color","size"]);return n.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:r},l),n.a.createElement("path",{fillRule:"evenodd",d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}))}));l.defaultProps={color:"currentColor",size:"1em"},t.a=l},"A2+M":function(e,t,r){var a=r("X8hv");e.exports={MDXRenderer:a}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var a=r("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},JHk0:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("q1tI");var a=r("2A+t"),n=r("/B+w"),c=r("+f/e");function o(e){var t=Object(a.e)().theme,r="",o=1,l=0,i=e.data;return Object(a.c)("div",{className:"modal fade",id:i.id.replace(/[!-\?\[-\^\{-\}]/g,""),tabIndex:"-1","aria-hidden":"true"},Object(a.c)("div",{className:"modal-dialog modal-dialog-centered modal-sm"},Object(a.c)("div",{className:"modal-content"},Object(a.c)("form",{sx:{backgroundColor:"background_primary",borderRadius:""+t.root.secondaryBorderRadius},onSubmit:function(e){if(e.preventDefault(),-1!==r.indexOf("@")){var t={amount:(a=i.frontmatter.extra.price,n=l,s=o,(a-a/100*n)*s),email:r,comment:""};location.href=Object(c.a)(t)}var a,n,s}},Object(a.c)("div",{className:"element element-large",sx:{boxShadow:"inset 0px -1px 0px "+t.colors.separator_opaque}},Object(a.c)("div",{className:"element-center-part"},Object(a.c)("span",null,"Оформить заказ"))),Object(a.c)("div",{sx:{paddingY:"24px",display:"flex",flexDirection:"column"}},Object(a.c)("div",{className:"element element-medium"},Object(a.c)("div",{className:"element-left-part"},Object(a.c)("input",{type:"email",placeholder:"Ваш email",className:"element element-medium element-input input-filled",sx:{paddingX:"16px"},required:!0,onChange:function(e){r=e.target.value}}))),i.frontmatter.extra.amount>1&&Object(a.c)("div",{className:"element element-medium",sx:{marginTop:"8px"}},Object(a.c)("div",{className:"element-left-part"},Object(a.c)("input",{placeholder:"Количество товара (макс. "+i.frontmatter.extra.amount+")",className:"element element-medium element-input input-filled",sx:{paddingX:"16px"},required:!0,onChange:function(e){o=e.target.value}}))),Object(a.c)("div",{className:"element element-medium",sx:{marginTop:"8px"}},Object(a.c)("div",{className:"element-left-part"},Object(a.c)("input",{type:"text",placeholder:"Купон на скидку (не обязательно)",className:"element element-medium element-input input-filled",sx:{paddingX:"16px"},onChange:function(e){"POMOIKA"===e.target.value.toUpperCase()&&(l=10)}}))),Object(a.c)("div",{sx:{marginTop:"24px"}},Object(a.c)("div",{className:"element element-small",sx:{textTransform:"uppercase",color:"text_secondary",boxShadow:"0px 1px 0px "+t.colors.separator_opaque}},Object(a.c)("div",{className:"element-left-part"},Object(a.c)("span",null,"Способ оплаты"))),Object(a.c)("div",{className:"element element-medium"},Object(a.c)("div",{className:"element-left-part",sx:{color:"text_primary",i:{marginRight:"8px !important"}}},Object(a.c)("i",null,Object(a.c)(n.a,{size:18,sx:{color:"tint_blue"}})),Object(a.c)("span",null,"Банковская карта или Qiwi")))),Object(a.c)("div",{sx:{marginTop:"24px"}},Object(a.c)("div",{className:"element element-small",sx:{color:"text_secondary",boxShadow:"0px -1px 0px "+t.colors.separator_opaque,paddingY:"8px",paddingX:"16px"}},Object(a.c)("span",null,'Нажимая на кнопку "Оплатить" вы соглашаетесь с'," ",Object(a.c)("a",{href:"/rules",target:"blank"},"правилами магазина"))))),Object(a.c)("div",{sx:{display:"flex",boxShadow:"inset 0px 1px 0px "+t.colors.separator_opaque}},Object(a.c)("button",{type:"button","data-dismiss":"modal","aria-label":"Close",className:"element element-large element-button",sx:{width:"100%",justifyContent:"center",color:"tint_blue",paddingX:"16px",boxShadow:"inset -1px 0px 0px "+t.colors.separator_opaque,borderRadius:"0px !important"}},"Отмена"),Object(a.c)("button",{type:"submit",className:"element element-large element-button",sx:{width:"100%",justifyContent:"center",paddingX:"16px",color:"tint_blue",fontWeight:"bold",":hover":{backgroundColor:"transparent"}}},"Оплатить"))))))}},RIqP:function(e,t,r){var a=r("Ijbi"),n=r("EbDI"),c=r("ZhPi"),o=r("Bnag");e.exports=function(e){return a(e)||n(e)||c(e)||o()}},SksO:function(e,t){function r(t,a){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,a)}e.exports=r},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}},X8hv:function(e,t,r){var a=r("sXyB"),n=r("RIqP"),c=r("lSNA"),o=r("8OQS");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r("q1tI"),p=r("7ljp").mdx,m=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=o(e,["scope","children"]),l=m(t),d=s.useMemo((function(){if(!r)return null;var e=i({React:s,mdx:p},l),t=Object.keys(e),c=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(c)))}),[r,t]);return s.createElement(d,i({},c))}},ZhPi:function(e,t,r){var a=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},mHNL:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var a=r("q1tI"),n=r.n(a),c=r("9eSz"),o=r.n(c),l=r("A2+M"),i=r("2A+t"),s=r("SAoE");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=Object(a.forwardRef)((function(e,t){var r=e.color,a=e.size,c=m(e,["color","size"]);return n.a.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:r},c),n.a.createElement("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}))}));d.defaultProps={color:"currentColor",size:"1em"};var u=d,b=r("/B+w"),x=r("+f/e"),f=r("JHk0");function O(e){var t=e.data,r=Object(i.e)().theme,a=t.mdx,c=t.mdx.frontmatter.extra,p="",m=1;return Object(i.c)(n.a.Fragment,null,Object(i.c)(s.a,null,Object(i.c)("div",{sx:{padding:"16px","h1, h2, h3":{marginBottom:"16px",marginTop:"16px"}}},Object(i.c)("div",{sx:{display:"grid",gridTemplateColumns:"2fr 4fr ",gridGap:"16px",gridTemplateAreas:'"product-title product-title"\n"product-image \nproduct-info"',"@media (max-width: 1200px)":{gridTemplateAreas:'"product-title product-title"\n"product-image ."\n"product-info product-info"'}}},Object(i.c)("h1",{sx:{gridArea:"product-title"}},a.frontmatter.title),Object(i.c)(o.a,{alt:a.frontmatter.title+" cover image",fluid:a.frontmatter.cover.childImageSharp.fluid,sx:{gridArea:"product-image",minWidth:"288px",maxWidth:"600px",borderRadius:""+r.root.secondaryBorderRadius}}),Object(i.c)("div",{sx:{gridArea:"product-info"}},Object(i.c)("div",{className:"element element-small",sx:{textTransform:"uppercase",color:"text_secondary"}},Object(i.c)("div",{className:"element-left-part"},Object(i.c)("span",null,"Описание"))),Object(i.c)("div",{sx:{minWidth:"360px"}},Object(i.c)("div",{sx:{backgroundColor:"background_primary",boxShadow:"0px 1px 0px "+r.colors.separator_opaque+", 0px -1px 0px "+r.colors.separator_opaque+", 1px 0px 0px "+r.colors.separator_opaque+", -1px 0px 0px "+r.colors.separator_opaque,marginBottom:"16px",borderRadius:""+r.root.secondaryBorderRadius,".element:first-child":{borderRadius:r.root.secondaryBorderRadius+" "+r.root.secondaryBorderRadius+" 0 0"},".element:last-child":{borderRadius:"0 0 "+r.root.secondaryBorderRadius+" "+r.root.secondaryBorderRadius},".element:hover":{backgroundColor:"fill_quarternary"}}},null!==c.link&&Object(i.c)("div",null,Object(i.c)("a",{href:c.link,target:"blank",className:"element element-large element-row"},Object(i.c)("div",{className:"element-left-part"},Object(i.c)("span",{sx:{color:"tint_blue"}},"Ссылка на аккаунт")),Object(i.c)("div",{className:"element-right-part"},Object(i.c)("i",null,Object(i.c)(u,{size:18,sx:{color:"gray_02"}}))))),null!==c.mail&&Object(i.c)("div",{className:"element element-large element-row",sx:{width:"100%",cursor:"default !important"}},Object(i.c)("div",{className:"element-left-part"},Object(i.c)("span",null,"Привязка к почте - ")),Object(i.c)("div",{className:"element-right-part"},Object(i.c)("span",null,c.mail?"Есть":"Нет"))),null!==c.phone&&Object(i.c)("div",{className:"element element-large element-row",sx:{width:"100%",cursor:"default !important"}},Object(i.c)("div",{className:"element-left-part"},Object(i.c)("span",null,"Привязка к телефону - ")),Object(i.c)("div",{className:"element-right-part"},Object(i.c)("span",null,c.phone?"Есть":"Нет"))),Object(i.c)("div",{className:"element element-large element-row",sx:{width:"100%",cursor:"default !important"}},Object(i.c)("div",{className:"element-left-part"},Object(i.c)("span",null,"Наличие - ")),Object(i.c)("div",{className:"element-right-part"},c.amount>1&&Object(i.c)("span",{sx:{color:"tint_green"}},"В наличии ",c.amount," шт."),1===c.amount&&Object(i.c)("span",{sx:{color:"tint_green"}},"В наличии"),null===c.amount&&Object(i.c)("span",{sx:{color:"tint_red"}},"Нет в наличии"))),null!==c.vehicles.x&&Object(i.c)("div",{className:"element element-large element-row",sx:{width:"100%",cursor:"default !important"}},Object(i.c)("div",{className:"element-left-part",sx:{flexWrap:"wrap",paddingY:"8px",position:"relative !important",".vehicle-link":{":not(:last-child):after":{content:'","',marginLeft:"2px",marginRight:"8px",color:"text_secondary"}}}},Object(i.c)("span",{sx:{whiteSpace:"nowrap",marginRight:"16px"}},"ТОПы:"),c.vehicles.x.map((function(e){return Object(i.c)("span",{className:"vehicle-link"},Object(i.c)("a",{key:e,target:"blank",href:"https://wiki.wargaming.net/ru/index.php?search="+e},e))})))),null!==c.vehicles.premium&&Object(i.c)("div",{className:"element element-large element-row",sx:{width:"100%",cursor:"default !important"}},Object(i.c)("div",{className:"element-left-part",sx:{flexWrap:"wrap",paddingY:"8px",position:"relative !important",".vehicle-link":{":not(:last-child):after":{content:'","',marginLeft:"2px",marginRight:"8px",color:"text_secondary"}}}},Object(i.c)("span",{sx:{whiteSpace:"nowrap",marginRight:"16px"}},"Премиум техника:"),c.vehicles.premium.map((function(e){return Object(i.c)("span",{className:"vehicle-link"},Object(i.c)("a",{key:e,target:"blank",href:"https://wiki.wargaming.net/ru/index.php?search="+e},e))}))))),null!==c.amount&&0!==c.amount&&Object(i.c)("div",{sx:{backgroundColor:"background_primary",boxShadow:"0px 1px 0px "+r.colors.separator_opaque+", 0px -1px 0px "+r.colors.separator_opaque+", 1px 0px 0px "+r.colors.separator_opaque+", -1px 0px 0px "+r.colors.separator_opaque,padding:"16px",display:"flex",borderRadius:""+r.root.secondaryBorderRadius}},Object(i.c)("span",{className:"element element-large",sx:{marginLeft:"8px",marginRight:"24px"}},c.price+" руб."),Object(i.c)("button",{className:"element element-large element-button button-primary","data-toggle":"modal","data-target":"#"+a.id.replace(/[!-\?\[-\^\{-\}]/g,""),sx:{paddingX:"24px"}},"Купить"),Object(i.c)(f.a,{data:a}),Object(i.c)("div",{className:"modal fade",id:a.id.replace(/[!-\?\[-\^\{-\}]/g,""),tabIndex:"-1","aria-hidden":"true"},Object(i.c)("div",{className:"modal-dialog modal-dialog-centered modal-sm"},Object(i.c)("div",{className:"modal-content"},Object(i.c)("form",{sx:{backgroundColor:"background_primary",borderRadius:""+r.root.secondaryBorderRadius},onSubmit:function(e){if(e.preventDefault(),-1!==p.indexOf("@")){var t={amount:c.price*m,email:p,comment:""};location.href=Object(x.a)(t)}}},Object(i.c)("div",{className:"element element-large",sx:{boxShadow:"inset 0px -1px 0px "+r.colors.separator_opaque}},Object(i.c)("div",{className:"element-center-part"},Object(i.c)("span",null,"Оформить заказ"))),Object(i.c)("div",{sx:{paddingY:"24px",display:"flex",flexDirection:"column"}},Object(i.c)("div",{className:"element element-medium"},Object(i.c)("div",{className:"element-left-part"},Object(i.c)("input",{type:"email",placeholder:"Ваш email",className:"element element-medium element-input input-filled",sx:{paddingX:"16px"},required:!0,onChange:function(e){p=e.target.value}}))),c.amount>1&&Object(i.c)("div",{className:"element element-medium",sx:{marginTop:"8px"}},Object(i.c)("div",{className:"element-left-part"},Object(i.c)("input",{placeholder:"Количество товара (макс. "+c.amount+")",className:"element element-medium element-input input-filled",sx:{paddingX:"16px"},required:!0,onChange:function(e){m=e.target.value}}))),Object(i.c)("div",{sx:{marginTop:"24px"}},Object(i.c)("div",{className:"element element-small",sx:{textTransform:"uppercase",color:"text_secondary",boxShadow:"0px 1px 0px "+r.colors.separator_opaque}},Object(i.c)("div",{className:"element-left-part"},Object(i.c)("span",null,"Способ оплаты"))),Object(i.c)("div",{className:"element element-medium"},Object(i.c)("div",{className:"element-left-part",sx:{color:"text_primary",i:{marginRight:"8px !important"}}},Object(i.c)("i",null,Object(i.c)(b.a,{size:18,sx:{color:"tint_blue"}})),Object(i.c)("span",null,"Банковская карта или Qiwi")))),Object(i.c)("div",{sx:{marginTop:"24px"}},Object(i.c)("div",{className:"element element-small",sx:{color:"text_secondary",boxShadow:"0px -1px 0px "+r.colors.separator_opaque,paddingY:"8px",paddingX:"16px"}},Object(i.c)("span",null,'Нажимая на кнопку "Оплатить" вы соглашаетесь с'," ",Object(i.c)("a",{href:"/rules",target:"blank"},"правилами магазина"))))),Object(i.c)("div",{sx:{display:"flex",boxShadow:"inset 0px 1px 0px "+r.colors.separator_opaque}},Object(i.c)("button",{type:"button","data-dismiss":"modal","aria-label":"Close",className:"element element-large element-button",sx:{width:"100%",justifyContent:"center",color:"tint_blue",paddingX:"16px",boxShadow:"inset -1px 0px 0px "+r.colors.separator_opaque,borderRadius:"0px !important"}},"Отмена"),Object(i.c)("button",{type:"submit",className:"element element-large element-button",sx:{width:"100%",justifyContent:"center",paddingX:"16px",color:"tint_blue",fontWeight:"bold",":hover":{backgroundColor:"transparent"}}},"Оплатить")))))))))),null!==a.excerpt&&Object(i.c)("div",{sx:{marginTop:"32px"}},Object(i.c)(l.MDXRenderer,null,a.body)))))}},sXyB:function(e,t,r){var a=r("SksO"),n=r("b48C");function c(t,r,o){return n()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,r){var n=[null];n.push.apply(n,t);var c=new(Function.bind.apply(e,n));return r&&a(c,r.prototype),c},c.apply(null,arguments)}e.exports=c}}]);
//# sourceMappingURL=component---src-data-wot-shop-templates-shop-product-js-dc80a097aaca3739914a.js.map