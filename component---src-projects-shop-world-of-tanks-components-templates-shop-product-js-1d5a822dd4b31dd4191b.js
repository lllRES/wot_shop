(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"A2+M":function(e,t,a){var r=a("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,a){var r=a("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,a){var r=a("Ijbi"),n=a("EbDI"),l=a("ZhPi"),o=a("Bnag");e.exports=function(e){return r(e)||n(e)||l(e)||o()}},SksO:function(e,t){function a(t,r){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,r)}e.exports=a},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}},X8hv:function(e,t,a){var r=a("sXyB"),n=a("RIqP"),l=a("lSNA"),o=a("8OQS");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s=a("q1tI"),m=a("7ljp").mdx,p=a("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,a=e.children,l=o(e,["scope","children"]),c=p(t),u=s.useMemo((function(){if(!a)return null;var e=i({React:s,mdx:m},c),t=Object.keys(e),l=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(n(t),[""+a])).apply(void 0,[{}].concat(n(l)))}),[a,t]);return s.createElement(u,i({},l))}},"Z/DL":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("q1tI"),n=a.n(r),l=a("vOnD").c.div.withConfig({displayName:"styles__Modal",componentId:"sc-1xgw7pg-0"})(["header{box-shadow:inset 0px -1px 0px ",";}footer{display:flex;width:100%;box-shadow:inset 0px 1px 0px ",";& button{width:100%;height:100%;color:",";border-radius:0px;}}"],(function(e){return e.theme.separator_non_opaque}),(function(e){return e.theme.separator_non_opaque}),(function(e){return e.theme.tint_blue}));var o=a("ZOF5"),c=a("8Xs1");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=Object(r.forwardRef)((function(e,t){var a=e.color,r=e.size,l=s(e,["color","size"]);return n.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:a},l),n.a.createElement("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"}))}));m.defaultProps={color:"currentColor",size:"1em"};var p=m;function u(e){var t=e.data,a={clientEmail:"",productAmount:1,productDiscount:0};function r(e){if(e.preventDefault(),-1!==a.clientEmail.indexOf("@")){var r={amount:(l=t.frontmatter.extra.price,o=a.productDiscount,c=a.productAmount,(l-l/100*o)*c),email:a.clientEmail,comment:""};location.href=(n=r,"https://oplata.qiwi.com/create?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPyXiqJauFTVWrkPBA4D8ecfvczN2yVDoBS5dUJFK1qpZv6hpDnJKhBv8o7yAFyWpWAx13gS9szyjHosJYiyWj8s7Ub4ea59TdwTBVTq3wr&billId="+Date.now()+"&amount="+n.amount+"&email="+encodeURI(n.email)+"&comment="+encodeURI(n.comment)+"&successUrl="+encodeURI("https://vk.com"))}var n,l,o,c}return n.a.createElement(l,{className:"modal fade",id:t.id.replace(/[!-\?\[-\^\{-\}]/g,""),tabIndex:"-1","aria-labelledby":t.id.replace(/[!-\?\[-\^\{-\}]/g,""),"aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-small"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("header",null,n.a.createElement(o.a,{className:"element-large"},n.a.createElement("div",{className:"center-part"},n.a.createElement("span",null,"Оформить заказ")))),n.a.createElement("form",{onSubmit:function(e){r(e)}},n.a.createElement("div",{className:"mt-4 mx-3"},n.a.createElement(o.a,{className:"element-medium mb-2"},n.a.createElement("input",{type:"email",placeholder:"Ваш email",required:!0,onChange:function(e){a.clientEmail=e.target.value},className:"left-part element-medium px-3"})),t.frontmatter.extra.amount>1&&n.a.createElement(o.a,{className:"element-medium mb-2"},n.a.createElement("input",{type:"text",placeholder:"Количество товара (макс. "+t.frontmatter.extra.amount+")",required:!0,onChange:function(e){a.productAmount=e.target.value},className:"left-part element-medium px-3"})),n.a.createElement(o.a,{className:"element-medium mb-2"},n.a.createElement("input",{type:"text",placeholder:"Промокод на скидку (не обязательно)",onChange:function(e){"NEWYEAR"!==e.target.value.toUpperCase()&&"KORBEN"!==e.target.value.toUpperCase()&&"JOVE"!==e.target.value.toUpperCase()&&"STRAIK"!==e.target.value.toUpperCase()&&"INSPIRER"!==e.target.value.toUpperCase()&&"BEOWULF"!==e.target.value.toUpperCase()&&"PROTANKI"!==e.target.value.toUpperCase()&&"AMWAY"!==e.target.value.toUpperCase()&&"VSPISHKA"!==e.target.value.toUpperCase()||(a.productDiscount=10)},className:"left-part element-medium px-3"}))),n.a.createElement(c.a,{title:"Способ оплаты",description:n.a.createElement("span",null,'Нажимая на кнопку "Оплатить" вы соглашаетесь с'," ",n.a.createElement("a",{href:"/rules",target:"blank"},"правилами магазина")),sectionClassName:"mb-4",listClassName:"border-y-inset"},n.a.createElement(o.a,{className:"element-medium mb-2"},n.a.createElement("div",{className:"left-part px-3"},n.a.createElement("i",{className:"primary me-2"},n.a.createElement(p,{size:18})),n.a.createElement("span",null,"Банковская карта или Qiwi")))),n.a.createElement("footer",null,n.a.createElement(o.a,{className:"element-large"},n.a.createElement("button",{type:"button","data-bs-dismiss":"modal","aria-label":"Close",className:"element-button border-right"},"Отмена"),n.a.createElement("button",{type:"submit",className:"element-button fw-bold"},"Оплатить")))))))}},ZhPi:function(e,t,a){var r=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},fD1K:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var r=a("Cj7A"),n=a.n(r),l=a("q1tI"),o=a.n(l),c=a("9eSz"),i=a.n(c),s=a("+7A0"),m=a("A2+M"),p=a("G7xx"),u=a("ofHe"),d=a("vOnD"),f=(n.a.styleVariables.root,d.c.section.withConfig({displayName:"styles__ProductCard",componentId:"h8d0b3-0"})(["display:grid;.product-photo{display:flex;justify-content:center;}& .product-title{margin-bottom:32px;}& .product-about{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:32px;margin-bottom:64px;@media (max-width:992px){grid-template-columns:repeat(1,1fr);}}& .product-price_block{display:flex;align-items:center;margin-bottom:24px;background-color:",";}"],(function(e){return e.theme.background_primary}))),b=a("ZOF5"),v=a("8Xs1"),h=a("Z/DL"),g=a("K7N1");function y(e){var t,a=e.data.mdx,r=e.data.mdx.frontmatter,l=e.data.mdx.frontmatter.extra;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.GatsbySeo,{title:"Купить "+r.title+" | Магазин World of Tanks",description:a.excerpt,canonical:""+e.location.href,openGraph:{url:""+e.location.href,title:"Купить "+r.title+" | Магазин World of Tanks",description:""+a.excerpt}}),o.a.createElement(p.a,{className:"adaptive bg-primary-to-secondary"},o.a.createElement(f,null,o.a.createElement("h1",{className:"large-title__large product-title adaptive text"},r.title),o.a.createElement("div",{className:"product-tab-main"},o.a.createElement("div",{className:"product-about"},o.a.createElement("div",{className:"left-part"},o.a.createElement("div",{className:"product-photo"},o.a.createElement(i.a,{alt:r.title,title:r.title,fluid:r.cover.childImageSharp.fluid,className:"adaptive rounded",style:{maxWidth:"600px",width:"100%"}}))),o.a.createElement("div",{className:"right-part"},o.a.createElement("div",{className:"product-main-info"},o.a.createElement("div",{className:"product-price_block adaptive rounded border-outset p-3"},o.a.createElement("span",{className:"h1__large me-4"},l.price+" ₽"),o.a.createElement("button",{"aria-label":"product-buy-button","data-bs-toggle":"modal","data-bs-target":"#"+a.id.replace(/[!-\?\[-\^\{-\}]/g,""),className:"element-large element-button green product-buy-button"},o.a.createElement("i",null,o.a.createElement(u.a,{size:20})),"Купить"),o.a.createElement(h.a,{data:a})),o.a.createElement(v.a,{title:"Доставка",listClassName:"adaptive rounded border-outset subhead__large border-top p-3"},"После оплаты товар будет отправлен на почту, указанную при оформлении заказа"),o.a.createElement(v.a,{title:"Оплата",listClassName:"adaptive rounded border-outset subhead__large border-top p-3"},"Банковская карта или Qiwi"),o.a.createElement(v.a,{title:"Гарантия",listClassName:"adaptive rounded border-outset subhead__large border-top p-3"},void 0!==(t=g.a(r.categories[0]))&&t.warrantyText?o.a.createElement("span",null,t.warrantyText):o.a.createElement("span",null,n.a.environment.defaultProductWarrantyText))))),o.a.createElement("div",{className:"product-about"},o.a.createElement("div",{className:"left-part"},o.a.createElement("h2",{className:"adaptive text mb-3"},"Описание",o.a.createElement("span",{className:"text_secondary"}," "+r.title)),o.a.createElement("div",{className:"text_tertiary adaptive text"},function(){if(null!==a.excerpt)return o.a.createElement(m.MDXRenderer,null,a.body)}())),o.a.createElement("div",{className:"right-part"},o.a.createElement("h2",{className:"adaptive text mb-3"},"Характеристики",o.a.createElement("span",{className:"text_secondary"}," "+r.title)),o.a.createElement("div",{className:"text_tertiary"},o.a.createElement(v.a,{listClassName:"adaptive rounded border-outset"},o.a.createElement(o.a.Fragment,null,null!==l.server&&o.a.createElement(b.a,{className:"element-medium"},o.a.createElement("span",{className:"left-part px-3"},"Сервер"),o.a.createElement("span",{className:"right-part px-3"},l.server)),null!==l.phone&&o.a.createElement(b.a,{className:"element-medium"},o.a.createElement("span",{className:"left-part px-3"},"Привязка аккаунта и почты к телефону"),o.a.createElement("span",{className:"right-part px-3"},l.phone?"Есть":"Нет")),null!==l.mail&&o.a.createElement(b.a,{className:"element-medium"},o.a.createElement("span",{className:"left-part px-3"},"Привязка аккаунта к почте"),o.a.createElement("span",{className:"right-part px-3"},l.mail?"Есть":"Нет")),null!==l.vehicles.x&&o.a.createElement(b.a,{className:"element-medium"},o.a.createElement("span",{className:"left-part px-3"},"ТОПы"),l.vehicles.x.map((function(e){return o.a.createElement("span",null,o.a.createElement("a",{key:e,target:"blank",href:"https://wiki.wargaming.net/ru/index.php?search="+e},e))}))),null!==l.vehicles.premium&&o.a.createElement(b.a,{className:"element-medium"},o.a.createElement("span",{className:"left-part px-3"},"Премиум техника"),o.a.createElement("span",{className:"right-part px-3"},l.vehicles.premium.map((function(e){return o.a.createElement("a",{key:e,target:"blank",href:"https://wiki.wargaming.net/ru/index.php?search="+e,className:"color-blue"},e)})))))))))))))}},ofHe:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=Object(r.forwardRef)((function(e,t){var a=e.color,r=e.size,c=o(e,["color","size"]);return n.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:a},c),n.a.createElement("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}))}));c.defaultProps={color:"currentColor",size:"1em"},t.a=c},sXyB:function(e,t,a){var r=a("SksO"),n=a("b48C");function l(t,a,o){return n()?e.exports=l=Reflect.construct:e.exports=l=function(e,t,a){var n=[null];n.push.apply(n,t);var l=new(Function.bind.apply(e,n));return a&&r(l,a.prototype),l},l.apply(null,arguments)}e.exports=l}}]);
//# sourceMappingURL=component---src-projects-shop-world-of-tanks-components-templates-shop-product-js-1d5a822dd4b31dd4191b.js.map