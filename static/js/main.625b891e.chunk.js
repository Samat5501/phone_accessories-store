(this["webpackJsonpmodal-gallery"]=this["webpackJsonpmodal-gallery"]||[]).push([[0],{25:function(A,e,c){},26:function(A,e,c){},34:function(A,e,c){},46:function(A,e,c){"use strict";c.r(e);var t=c(1),a=c.n(t),i=c(18),s=c.n(i),r=(c(34),c(10)),n=(c(25),c(12)),o=c(7),l=c.p+"static/media/logo.31b47eee.jpg",d=c(0),j=function(){var A=Object(o.c)((function(A){return A.CartReducer})).totalQuantities;return console.log(A),Object(d.jsx)("div",{className:"navbar",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"nav__container",children:[Object(d.jsx)("div",{className:"nav__left",children:Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("img",{className:"img-logo",src:l,alt:"logo"})})}),Object(d.jsx)("div",{className:"nav__right",children:Object(d.jsx)(r.b,{to:"/cart",children:Object(d.jsxs)("div",{className:"basket",children:[Object(d.jsx)(n.b,{className:"icon"}),Object(d.jsx)("span",{children:A})]})})})]})})})},u=(c(26),c(3)),m=c(15),p=function(){return Object(d.jsx)("div",{className:"header",children:"Header"})},b=c(11),x=c.n(b),B=function(){var A=Object(o.c)((function(A){return A.ProductsReducer})).products;return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{}),Object(d.jsx)("div",{className:"container mtb-30",children:Object(d.jsx)("div",{className:"row",children:A.map((function(A){var e;return Object(d.jsx)("div",{className:"col-3",children:Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("div",{className:"product-img",children:Object(d.jsx)(r.b,{to:"/details/".concat(A.id),children:Object(d.jsx)("img",(e={src:"/img/".concat(A.image),className:"img"},Object(m.a)(e,"src","/img/".concat(A.image)),Object(m.a)(e,"alt","img name"),e))})}),Object(d.jsx)("div",{className:"product__name",children:A.name}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-6",children:Object(d.jsxs)("div",{className:"product__price",children:[Object(d.jsx)("span",{className:"actualPrice",children:x.a.format(A.price,{code:"USD"})}),Object(d.jsx)("span",{className:"discount",children:A.discount})]})}),Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)("div",{className:"product__discount__price",children:x.a.format(A.discountPrice,{code:"USD"})})})]})]})},A.id)}))})})]})},E=function(){var A=Object(o.c)((function(A){return A.CartReducer})),e=A.products,c=A.totalQuantities,t=A.totalPrice,a=Object(o.b)();return Object(d.jsx)("div",{className:"cart",children:Object(d.jsx)("div",{className:"container",children:e.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Your Cart"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-9",children:Object(d.jsx)("div",{className:"cart__heading",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-2",children:"Picture"}),Object(d.jsx)("div",{className:"col-2",children:"Name"}),Object(d.jsx)("div",{className:"col-2",children:"Price"}),Object(d.jsx)("div",{className:"col-2",children:"Inc/Dec"}),Object(d.jsx)("div",{className:"col-2",children:"Total Price"}),Object(d.jsx)("div",{className:"col-2",children:"Remove"})]})})}),e.map((function(A){return Object(d.jsxs)("div",{className:"row vertical",children:[Object(d.jsx)("div",{className:"col-2",children:Object(d.jsx)("div",{className:"cart__img",children:Object(d.jsx)("img",{src:"/img/".concat(A.image),alt:A.name})})}),Object(d.jsx)("div",{className:"col-2",children:Object(d.jsx)("div",{className:"cart__name",children:A.name})}),Object(d.jsx)("div",{className:"col-2",children:Object(d.jsx)("div",{className:"cart__price",children:x.a.format(A.discountPrice,{code:"USD"})})}),Object(d.jsx)("div",{className:"col-2",children:Object(d.jsx)("div",{className:"detail__info cart__inDec",children:Object(d.jsxs)("div",{className:"detail__wrapper",children:[Object(d.jsx)("span",{className:"decrease",onClick:function(){return a({type:"DEC",payload:A.id})},children:Object(d.jsx)(n.a,{})}),Object(d.jsx)("span",{className:"quantity",children:A.quantity}),Object(d.jsx)("span",{className:"increase",onClick:function(){return a({type:"INC",payload:A.id})},children:Object(d.jsx)(n.c,{})})]})})}),Object(d.jsx)("div",{className:"col-2",children:Object(d.jsx)("div",{className:"cart__total text",children:x.a.format(A.discountPrice*A.quantity,{code:"USD"})})}),Object(d.jsx)("div",{className:"col-2",children:Object(d.jsx)("div",{onClick:function(){return a({type:"REMOVE",payload:A.id})},className:"cart__remove",children:Object(d.jsx)(n.d,{})})})]},A.id)})),Object(d.jsx)("div",{className:"col-3 summary-col",children:Object(d.jsxs)("div",{className:"summary",children:[Object(d.jsx)("div",{className:"summary__heading",children:"summary"}),Object(d.jsx)("div",{className:"summary__details",children:Object(d.jsxs)("div",{className:"row mb-10",children:[Object(d.jsx)("div",{className:"col-6",children:"Total Items:"}),Object(d.jsx)("div",{className:"col-6",children:c}),Object(d.jsxs)("div",{className:"row mb-10",children:[Object(d.jsx)("div",{className:"col-6",children:"Total Price"}),Object(d.jsx)("div",{className:"col-6",children:x.a.format(t,{code:"USD"})})]}),Object(d.jsx)("button",{type:"button",className:"checkout",children:"Checkout"})]})})]})})]})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"hel",children:"Your Cart is empty"}),Object(d.jsxs)(r.b,{to:"/",className:"back_home",children:[Object(d.jsx)("span",{children:"back to shop"})," "]})]})})})},v=c(28),O="PRODUCT",Q=function(){var A=Object(u.e)().id,e=Object(o.b)(),c=Object(o.c)((function(A){return A.ProductsReducer})).product;console.log("DetailsProduct",c),Object(t.useEffect)((function(){e(function(A){return{type:O,id:A}}(A))}),[c,A]);var a=Object(t.useState)(1),i=Object(v.a)(a,2),s=i[0],r=i[1];return Object(d.jsx)("div",{className:"container mt-100",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)("div",{className:"detail__image",children:Object(d.jsx)("img",{src:"/img/".concat(c.image)})})}),Object(d.jsxs)("div",{className:"col-6",children:[Object(d.jsx)("div",{className:"detail__name",children:c.name}),Object(d.jsxs)("div",{className:"detail__price",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Price: "})," ",Object(d.jsx)("span",{className:"detail__actual-price",children:x.a.format(c.price,{code:"USD"})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"discountPrice: "})," ",Object(d.jsx)("span",{className:"detail__discount-price",children:x.a.format(c.discountPrice,{code:"USD"})})]})]}),Object(d.jsx)("div",{className:"detail__info",children:Object(d.jsxs)("div",{className:"detail__wrapper",children:[Object(d.jsx)("span",{onClick:function(){return s>1?r(s-1):"1"},className:"decrease",children:Object(d.jsx)(n.a,{})}),Object(d.jsx)("span",{className:"quantity",children:s}),Object(d.jsx)("span",{onClick:function(A){return r(s+1)},className:"increase",children:Object(d.jsx)(n.c,{})}),Object(d.jsx)("button",{onClick:function(){return e({type:"ADD_TO_CART",payload:{product:c,quantity:s}})},className:"add-btn",children:"add to cart"})]})}),Object(d.jsxs)("div",{className:"detail__text",children:[Object(d.jsx)("h3",{children:"Detail"}),c.desc]})]})]})})};var g=function(){return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(u.a,{exact:!0,path:"/",component:B}),Object(d.jsx)(u.a,{path:"/cart",component:E}),Object(d.jsx)(u.a,{path:"/details/:id",component:Q})]})},h=c(21),z=c(8),q={products:[{id:1,name:"airPods-max",image:c.p+"static/media/1.39fedcaa.png",price:20,discount:2,discountPrice:20,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},{id:2,name:"case iPhone11",image:c.p+"static/media/2.7c0c19aa.jpg",price:30,discount:5,discountPrice:30,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},{id:3,name:"headphones",image:c.p+"static/media/3.549ea996.jpg",price:15,discount:3,discountPrice:15,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},{id:4,name:"apple charger",image:"data:image/jpeg;base64,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",price:50,discount:4,discountPrice:50,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},{id:5,name:"portable phone charger",image:c.p+"static/media/5.30f12311.jpg",price:25,discount:2,discountPrice:25,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},{id:6,name:"selfie pulk",image:"data:image/jpeg;base64,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",price:60,discount:6,discountPrice:60,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},{id:7,name:"case for apple",image:c.p+"static/media/7.f31792e4.jpg",price:35,discount:2,discountPrice:35,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},{id:8,name:"charge cable for apple",image:c.p+"static/media/8.edc547c8.jpg",price:80,discount:7,discountPrice:80,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},{id:9,name:"case for Iphone 12",image:c.p+"static/media/9.3a13ed83.jpg",price:95,discount:4,discountPrice:95,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},{id:10,name:"wireless earphone",image:c.p+"static/media/10.dcff69ec.png",price:120,discount:3,discountPrice:120,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"}],product:{}};console.log("ProductReducerProduct",q.products);var N=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(z.a)(Object(z.a)({},A),{},{product:A.products.find((function(A){return A.id===parseInt(e.id)}))});default:return A}},f=c(27),D=c(29),P={products:[],totalPrice:0,totalQuantities:0};console.log("cartReducerProducts",P.products);var C=Object(h.combineReducers)({ProductsReducer:N,CartReducer:function(){var A,e,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=t.payload,i=a.product,s=a.quantity;console.log("product",i);var r=c.products.find((function(A){return A.id===i.id}));if(r)return c;var n=c.totalPrice+i.discountPrice*s,o=c.totalQuantities+s;return i.quantity=s,Object(z.a)(Object(z.a)({},c),{},{products:[].concat(Object(D.a)(c.products),[i]),totalPrice:n,totalQuantities:o});case"INC":return A=c.products.find((function(A){return A.id===t.payload})),e=c.products.findIndex((function(A){return A.id===t.payload})),A.quantity+=1,c.products[e]=A,Object(z.a)(Object(z.a)({},c),{},{totalPrice:c.totalPrice+A.discountPrice,totalQuantities:c.totalQuantities+1});case"DEC":return A=c.products.find((function(A){return A.id===t.payload})),e=c.products.findIndex((function(A){return A.id===t.payload})),A.quantity>1?(A.quantity-=1,c.products[e]=A,Object(z.a)(Object(z.a)({},c),{},{totalPrice:c.totalPrice-A.discountPrice,totalQuantities:c.totalQuantities-1})):c;case"REMOVE":A=c.products.find((function(A){return A.id===t.payload}));var l=c.products.filter((function(A){return A.id!==t.payload}));return Object(z.a)(Object(z.a)({},c),{},{products:l,totalPrice:c.totalPrice-A.discountPrice*A.quantity,totalQuantities:c.totalQuantities-A.quantity});default:return c}}}),R=Object(h.createStore)(C,Object(f.devToolsEnhancer)());s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(o.a,{store:R,children:Object(d.jsx)(g,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.625b891e.chunk.js.map