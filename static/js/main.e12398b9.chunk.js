(this["webpackJsonpreact-api-crypto"]=this["webpackJsonpreact-api-crypto"]||[]).push([[0],{21:function(e,c,t){},40:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var a=t(2),s=t.n(a),n=t(15),r=t.n(n),i=t(6),l=(t(21),t(16)),o=t.n(l),j=(t(40),t(0)),p=function(e){var c=e.name,t=e.image,a=e.symbol,s=e.price,n=e.volume,r=e.priceChange,i=e.marketcap,l=e.supply;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:t,alt:"crypto"}),Object(j.jsx)("h1",{children:c}),Object(j.jsx)("p",{className:"coin-symbol",children:a})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-price",children:["$",s.toLocaleString()]}),r<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[r.toFixed(2),"%"]}),Object(j.jsx)("p",{className:"coin-marketcap",children:i.toLocaleString()}),Object(j.jsxs)("p",{className:"coin-volume",children:["$",n.toLocaleString()]}),Object(j.jsx)("p",{className:"supply",children:l.toLocaleString()})]})]})})};var d=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],d=r[1];Object(a.useEffect)((function(){o.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false").then((function(e){s(e.data)})).catch((function(e){return alert("Error")}))}),[]);var m=t.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coinquery",children:[Object(j.jsx)("h1",{className:"coin-info",children:"Search a currency"}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){d(e.target.value)}})}),Object(j.jsx)("p",{class:"info",children:" A react app using the CoinGecko API"}),Object(j.jsx)("img",{class:"imgs",src:"logo192.png",alt:"react"})]}),Object(j.jsx)("div",{className:"catCont",children:Object(j.jsxs)("div",{className:"cat",children:[Object(j.jsx)("p",{children:"Name"}),Object(j.jsxs)("div",{className:"catdata",children:[Object(j.jsx)("p",{children:"Price"}),Object(j.jsx)("p",{children:"24h%"}),Object(j.jsx)("p",{children:"Market Cap"}),Object(j.jsx)("p",{children:"Volume(24h)"}),Object(j.jsx)("p",{children:"Supply"})]})]})}),m.map((function(e){return Object(j.jsx)(p,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume,supply:e.circulating_supply},e.id)}))]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e12398b9.chunk.js.map