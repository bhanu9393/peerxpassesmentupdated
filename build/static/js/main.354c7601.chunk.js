(this.webpackJsonpassesment=this.webpackJsonpassesment||[]).push([[0],{232:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),l=s(13),c=s.n(l),n=(s(97),s(98),s(7)),d=s(9),o=s(2),r=s(3),u=s(27),h=s.n(u),p=function(){function e(){Object(o.a)(this,e),this.baseUri="https://ghost-blog.ipxp.in/ghost/api/v3/content"}return Object(r.a)(e,[{key:"getPosts",value:function(){return h.a.get("".concat(this.baseUri,"/posts/?key=8196190b08906dda0ebf6e6f5d&include=tags,authors"))}},{key:"getPages",value:function(){return h.a.get("".concat(this.baseUri,"/pages/?key=8196190b08906dda0ebf6e6f5d&include=tags,authors"))}},{key:"getAuthors",value:function(){return h.a.get("".concat(this.baseUri,"/authors/?key=8196190b08906dda0ebf6e6f5d&include=tags,authors"))}},{key:"getTags",value:function(){return h.a.get("".concat(this.baseUri,"/tags/?key=8196190b08906dda0ebf6e6f5d&include=tags,authors"))}}]),e}(),b=s(38),j=s(0);function g(e){var t=e.monthcount;return Object(j.jsx)("div",{children:Object(j.jsx)(b.a,{data:{labels:["Jan","Feb","March","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{fill:{target:"origin",above:"#abba25",below:"#03a1fc"},label:"# of Votes",data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1,minBarLength:2}]},height:"300",options:{plugins:{title:{display:!0,text:"Posts Per Month",align:"start"},subtitle:{display:!1,text:"Custom Chart Subtitle",align:"center",padding:"10px"},legend:{display:!1,labels:{font:{size:8}}}},maintainAspectRatio:!1,lineTension:"0.5",scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,grid:{display:!1}}}}})})}function v(e){var t,s,a,i,l=e.content,c=e.customChart;return Object(j.jsxs)("div",{style:{position:"relative"},children:[Object(j.jsxs)("div",{className:"p-text-center p-mx-auto",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:"60px"},children:[null===l||void 0===l||null===(t=l.posts)||void 0===t?void 0:t.length," ",null===l||void 0===l||null===(s=l.pages)||void 0===s?void 0:s.length," ",null===l||void 0===l||null===(a=l.authors)||void 0===a?void 0:a.length," ",null===l||void 0===l||null===(i=l.tags)||void 0===i?void 0:i.length]}),Object(j.jsx)(b.b,{data:{labels:[120,52,1e3,341,520,60,82,100,200,82,300,201,900,200,1e3],datasets:[{fill:{target:"origin",above:"#e6eced",below:""},data:[120,52,1e3,341,520,60,82,100,200,82,300,201,900,200,1e3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderWidth:1}]},borderColor:"blue",options:{plugins:{title:{display:!0,text:c,align:"start"},legend:{display:!1,labels:{font:{size:8}}}},maintainAspectRatio:!1,lineTension:"0.5",scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,beginAtZero:!0,grid:{display:!1}}}}})]})}var m=function(e,t){return console.log(e),null===e||void 0===e||e.map((function(e,s){switch(new Date(e.published_at).getMonth()+1){case 1:console.log(new Date(e.published_at).getMonth()+1),t[0]=t[0]+1;break;case 2:console.log(new Date(e.published_at).getMonth()+1),t[1]=t[1]+1;break;case 3:console.log(new Date(e.published_at).getMonth()+1),t[2]=t[2]+1;break;case 4:console.log(new Date(e.published_at).getMonth()+1),t[3]=t[3]+1;break;case 5:console.log(new Date(e.published_at).getMonth()+1),t[4]=t[4]+1;break;case 6:console.log(new Date(e.published_at).getMonth()+1),t[5]=t[5]+1;break;case 7:console.log(new Date(e.published_at).getMonth()+1),t[6]=t[6]+1;break;case 8:console.log(new Date(e.published_at).getMonth()+1),t[7]=t[7]+1;break;case 9:console.log(new Date(e.published_at).getMonth()+1),t[8]=t[8]+1;break;case 10:console.log(new Date(e.published_at).getMonth()+1),t[9]=t[9]+1;break;case 11:console.log(new Date(e.published_at).getMonth()+1),t[10]=t[10]+1;break;case 12:console.log(new Date(e.published_at).getMonth()+1),t[11]=t[11]+1}})),t};function x(){var e=new p,t=[0,0,0,0,0,0,0,0,0,0,0,0],s=Object(a.useState)([]),i=Object(n.a)(s,2),l=i[0],c=i[1],d=Object(a.useState)(""),o=Object(n.a)(d,2),r=o[0],u=o[1];Object(a.useEffect)((function(){e.getPosts().then((function(e){var t=e.data.posts.sort((function(e,t){return new Date(e.published_at).getMonth()-new Date(t.published_at).getMonth()}));c(t)}))}),[]),Object(a.useEffect)((function(){var e=m(l,t);console.log(e),u(e)}),[l]);return Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:{backgroundColor:"white"},children:Object(j.jsx)(g,{monthcount:r})})}s(56);function O(e){var t=e.image,s=e.heading,a=e.data;return Object(j.jsxs)("div",{className:"p-grid",children:[Object(j.jsxs)("div",{className:"p-col-12 p-text-bold heading",children:[Object(j.jsx)("img",{src:t,height:"20",width:"20",className:"".concat(t?"":"p-d-none")}),s]}),(null===a||void 0===a?void 0:a.length)>0?Object(j.jsx)(j.Fragment,{children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(j.jsxs)("div",{className:"p-col-12",children:[Object(j.jsxs)("div",{className:"p-grid",children:[Object(j.jsx)("div",{className:"p-col-1 index",children:t+1}),Object(j.jsx)("div",{className:"p-col-10 p-text-left pageLinkHead",children:Object(j.jsx)("a",{href:"".concat(e.url),target:"_blank",children:e.title})}),Object(j.jsx)("div",{className:"p-col-1 p-text-bold",children:Object(j.jsx)("i",{class:"fa fa-edit"})})]}),Object(j.jsxs)("div",{className:"p-grid",children:[Object(j.jsx)("div",{className:"p-col-1"}),Object(j.jsxs)("div",{className:"p-col-9 p-text-left p-text-bold subText",children:[" ",Object(j.jsx)("i",{className:"pi pi-eye-slash p-mt-1"}),Object(j.jsx)("span",{className:"p-ml-1",children:"MARK AS VALID"})]}),Object(j.jsxs)("div",{className:"p-col-2",children:[Object(j.jsx)("i",{class:"pi pi-pencil p-d-inline"})," EDIT"]})]})]})}))}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"p-col-12",children:[Object(j.jsx)("span",{style:{fontSize:"30px"},children:"\ud83d\udc4fAwesome No posts found"}),";"]})})]})}function f(){var e=new p,t=Object(a.useState)(""),s=Object(n.a)(t,2),i=s[0],l=s[1],c=Object(a.useState)(""),o=Object(n.a)(c,2),r=o[0],u=o[1],h=Object(a.useState)(""),b=Object(n.a)(h,2),g=b[0],m=b[1],f=Object(a.useState)(""),N=Object(n.a)(f,2),y=N[0],w=N[1],L=Object(a.useState)(""),k=Object(n.a)(L,2),C=k[0],T=k[1];Object(a.useEffect)((function(){e.getPosts().then((function(e){l(e.data);var t=e.data.posts.sort((function(e,t){return new Date(e.published_at).getMonth()-new Date(t.published_at).getMonth()}));u(t)})),e.getPages().then((function(e){m(e.data)})),e.getAuthors().then((function(e){w(e.data)})),e.getTags().then((function(e){T(e.data)}))}),[]);var J={backgroundColor:"white"};return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{style:{border:"1px solid black",margin:"10px",backgroundColor:"#edf5f7"},children:[Object(j.jsxs)("div",{className:"p-grid p-p-2",children:[Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-3",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:J,children:Object(j.jsx)(v,{content:i,customChart:"Total number of Posts"})})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-3",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:J,children:Object(j.jsx)(v,{content:g,customChart:"Total number of Pages"})})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-3",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:J,children:Object(j.jsx)(v,{content:y,customChart:"Total number of Authors"})})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-3",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:J,children:Object(j.jsx)(v,{content:C,customChart:"Total number of Tags"})})})]}),Object(j.jsxs)("div",{className:"p-grid p-p-2",children:[Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-6",children:Object(j.jsx)(x,{})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-6",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:J,children:Object(j.jsx)(d.a,{className:"custom",style:{height:"300px"},children:Object(j.jsx)(O,{heading:"Top 5 Published Posts",data:r.slice(0,5),style:J})})})})]})]})})}s(226);var N=function(e){var t;return null===e||void 0===e||null===(t=e.posts)||void 0===t?void 0:t.filter((function(e){return""===(null===e||void 0===e?void 0:e.feature_image)&&void 0===(null===e||void 0===e?void 0:e.feature_image)}))},y=function(e){var t,s;return[null===e||void 0===e||null===(t=e.posts)||void 0===t?void 0:t.filter((function(e){return""==e.meta_description||void 0==e.meta_description||null==e.meta_description})),null===e||void 0===e||null===(s=e.posts)||void 0===s?void 0:s.filter((function(e){var t;return(null===(t=e.meta_description)||void 0===t?void 0:t.length)>100}))]},w=function(e){var t,s=[],a=[],i=[];return null===e||void 0===e||null===(t=e.posts)||void 0===t||t.map((function(e){var t=e.html.replace(/(<([^>]+)>)/gi,"").trim().split(new RegExp("\\s+"));t.length<250?s.push(e):t.length>1500?a.push(e):i.push(e)})),[s,a,i]},L=function(e){var t;return null===e||void 0===e||null===(t=e.posts)||void 0===t?void 0:t.filter((function(e){return(null===e||void 0===e?void 0:e.url.length)>100}))},k=s.p+"static/media/robo.0c8c11dd.png",C=s.p+"static/media/handsRaise.f6636aea.png",T=s.p+"static/media/gallory.ebd84ada.png",J=s.p+"static/media/warning.112592b6.png",S=s.p+"static/media/writeHand.7fdf96d5.png";function A(){var e=new p,t=Object(a.useState)([]),s=Object(n.a)(t,2),i=s[0],l=s[1],c=Object(a.useState)([]),o=Object(n.a)(c,2),r=o[0],u=o[1],h=Object(a.useState)([]),b=Object(n.a)(h,2),g=b[0],v=b[1],m=Object(a.useState)([]),x=Object(n.a)(m,2),f=x[0],A=x[1],I=Object(a.useState)([]),W=Object(n.a)(I,2),R=W[0],D=W[1];Object(a.useEffect)((function(){e.getPosts().then((function(e){l(e.data)}))}),[]),Object(a.useEffect)((function(){var e=w(i);u(e);var t=N(i);v(t);var s=L(i);A(s);var a=y(i);D(a)}),[i]);var F={backgroundColor:"white"};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"p-grid p-p-1",style:{border:"1px solid black",margin:"10px",backgroundColor:"#edf5f7"},children:[Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-4",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:F,children:Object(j.jsx)(d.a,{style:{height:"400px"},className:"custom",children:Object(j.jsx)(O,{image:k,heading:"without Meta Description",data:R[0]})})})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-4",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:F,children:Object(j.jsx)(d.a,{className:"custom",style:{height:"400px"},children:Object(j.jsx)(O,{image:T,heading:"List of Posts without Featured Image",data:g})})})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-4",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:F,children:Object(j.jsx)(d.a,{className:"custom",style:{height:"400px"},children:Object(j.jsx)(O,{heading:"Too Short Posts, Below 250 words",data:r[0],image:S})})})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-4",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:F,children:Object(j.jsx)(d.a,{className:"custom",style:{height:"400px"},children:Object(j.jsx)(O,{image:C,heading:"Too long Meta Description",data:R[1]})})})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-4",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:F,children:Object(j.jsx)(d.a,{className:"custom",style:{height:"400px"},children:Object(j.jsx)(O,{heading:"Too Long Posts, More than 1500 words",data:r[1],image:J})})})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-4",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:F,children:Object(j.jsx)(d.a,{className:"custom",style:{height:"400px"},children:Object(j.jsx)(O,{image:"data:image/png;base64,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",heading:"Too long URL",data:f})})})})]})})}var I=s(28),W=[],R=[],D=function(e){var t,s,a,i,l,c,n,d,o,r,u,h,p,b,j,g,v,m,x,O,f,N,y;((null===(t=e.canonical_url)||void 0===t?void 0:t.includes("ghost"))?W.push(e.canonical_url):(null===(s=e.canonical_url)||void 0===s?void 0:s.includes("https://"))&&!(null===(a=e.canonical_url)||void 0===a?void 0:a.includes("ghost"))&&R.push(e.canonical_url),e.url.includes("ghost")?W.push(e.url):e.url.includes("https://")&&!e.url.includes("ghost")&&R.push(e.url),e.tags.map((function(e){var t,s,a,i,l,c;(null===(t=e.canonical_url)||void 0===t?void 0:t.includes("ghost"))?W.push(e.canonical_url):(null===(s=e.canonical_url)||void 0===s?void 0:s.includes("https://"))&&!(null===(a=e.canonical_url)||void 0===a?void 0:a.includes("ghost"))&&R.push(e.canonical_url),(null===(i=e.url)||void 0===i?void 0:i.includes("ghost"))?W.push(e.url):(null===(l=e.url)||void 0===l?void 0:l.includes("https://"))&&!(null===(c=e.url)||void 0===c?void 0:c.includes("ghost"))&&R.push(e.url)})),null===e||void 0===e||null===(i=e.authors)||void 0===i||i.map((function(e){var t,s,a,i,l,c;(null===(t=e.website)||void 0===t?void 0:t.includes("ghost"))?W.push(e.website):(null===(s=e.website)||void 0===s?void 0:s.includes("https://"))&&!(null===(a=e.website)||void 0===a?void 0:a.includes("ghost"))&&R.push(e.website),(null===(i=e.url)||void 0===i?void 0:i.includes("ghost"))?W.push(e.url):(null===(l=e.url)||void 0===l?void 0:l.includes("https://"))&&!(null===(c=e.url)||void 0===c?void 0:c.includes("ghost"))&&R.push(e.url)})),(null===(l=e.primary_author.website)||void 0===l?void 0:l.includes("ghost"))?W.push(e.primary_author.website):(null===(c=e.primary_author.website)||void 0===c?void 0:c.includes("https://"))&&!(null===(n=e.primary_author.website)||void 0===n?void 0:n.includes("ghost"))&&R.push(e.primary_author.website),(null===(d=e.primary_author.url)||void 0===d?void 0:d.includes("ghost"))?W.push(e.primary_author.url):(null===(o=e.primary_author.url)||void 0===o?void 0:o.includes("https://"))&&!(null===(r=e.primary_author.url)||void 0===r?void 0:r.includes("ghost"))&&R.push(e.primary_author.url),null===(u=e.primary_tag)||void 0===u||null===(h=u.website)||void 0===h?void 0:h.includes("ghost"))?W.push(null===(y=e.primary_tag)||void 0===y?void 0:y.website):(null===(p=e.primary_tag)||void 0===p||null===(b=p.website)||void 0===b?void 0:b.includes("https://"))&&!(null===(j=e.primary_tag)||void 0===j||null===(g=j.website)||void 0===g?void 0:g.includes("ghost"))&&R.push(e.primary_tag.website);(null===e||void 0===e||null===(v=e.primary_tag)||void 0===v||null===(m=v.url)||void 0===m?void 0:m.includes("ghost"))?W.push(e.primary_tag.url):(null===e||void 0===e||null===(x=e.primary_tag)||void 0===x||null===(O=x.url)||void 0===O?void 0:O.includes("https://"))&&!(null===e||void 0===e||null===(f=e.primary_tag)||void 0===f||null===(N=f.url)||void 0===N?void 0:N.includes("ghost"))&&R.push(e.primary_tag.url)};function F(e){var t=e.image,s=e.heading,a=e.data;return Object(j.jsxs)("div",{className:"p-grid",children:[Object(j.jsxs)("div",{className:"p-col-12 p-text-bold heading",children:[Object(j.jsx)("img",{src:t,height:"20",width:"20",className:"".concat(t?"":"p-d-none")}),s]}),(null===a||void 0===a?void 0:a.length)>0?Object(j.jsx)(j.Fragment,{children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(j.jsxs)("div",{className:"p-col-12",children:[Object(j.jsxs)("div",{className:"p-grid",children:[Object(j.jsx)("div",{className:"p-col-1 index",children:t+1}),Object(j.jsx)("div",{className:"p-col-10 p-text-left pageLinkHead",children:Object(j.jsx)("a",{href:"".concat(e),target:"_blank",children:a[t]})}),Object(j.jsx)("div",{className:"p-col-1 p-text-bold",children:Object(j.jsx)("i",{class:"fa fa-edit"})})]}),Object(j.jsxs)("div",{className:"p-grid",children:[Object(j.jsx)("div",{className:"p-col-1"}),Object(j.jsxs)("div",{className:"p-col-9 p-text-left p-text-bold subText",children:[" ",Object(j.jsxs)("span",{className:"p-ml-1",children:[Object(j.jsx)("span",{style:{color:"red"},children:"0"})," Times Used"]})]})]})]})}))}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"p-col-12",children:[Object(j.jsx)("span",{style:{fontSize:"30px"},children:"\ud83d\udc4fAwesome No posts found"}),";"]})})]})}function P(e){e.image,e.heading;var t,s,a=e.data;new Date;return Object(j.jsxs)("div",{className:"p-grid",children:[Object(j.jsx)("div",{className:"p-col-12 p-text-bold heading",children:"INTERNAL LINKS"}),Object(j.jsx)("div",{className:"p-col-12 p-text-bold heading",children:null===(t=a[0])||void 0===t?void 0:t.length}),Object(j.jsx)("div",{className:"p-col-12 p-text-bold heading",children:"EXTERNAL LINKS"}),Object(j.jsxs)("div",{className:"p-col-12 p-text-bold heading",children:[" ",null===(s=a[1])||void 0===s?void 0:s.length]})]})}function Q(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),s=t[0],i=t[1],l=new p;Object(a.useEffect)((function(){l.getPosts().then((function(e){var t,s=(null===(t=e.data.posts)||void 0===t||t.map((function(e){return D(e)})),[W,R]);i(s)}))}),[]);var c={backgroundColor:"white"};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"p-grid p-p-1",style:{border:"1px solid black",margin:"10px",backgroundColor:"#edf5f7"},children:[Object(j.jsx)("div",{className:"p-col-12 p-md-4 p-lg-3",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:c,children:Object(j.jsx)(d.a,{style:{height:"400px"},className:"custom",children:Object(j.jsx)(P,{data:s})})})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-4",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:c,children:Object(j.jsx)(d.a,{style:{height:"400px"},className:"custom",children:Object(j.jsx)(F,{heading:"Internal Links",data:s[0]})})})}),Object(j.jsx)("div",{className:"p-col-12 p-md-6 p-lg-4",children:Object(j.jsx)("div",{className:"p-shadow-6 p-p-1",style:c,children:Object(j.jsx)(d.a,{className:"custom",style:{height:"400px"},children:Object(j.jsx)(F,{heading:"External Links",data:s[1]})})})})]})})}var Z=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(I.b,{children:[Object(j.jsx)(I.a,{header:"Dashboard Pages",children:Object(j.jsx)(f,{})}),Object(j.jsx)(I.a,{header:"Post Pages",children:Object(j.jsx)(A,{})}),Object(j.jsx)(I.a,{header:"Internal",children:Object(j.jsx)(Q,{})})]})})},U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,234)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,l=t.getLCP,c=t.getTTFB;s(e),a(e),i(e),l(e),c(e)}))},E=s(25);s(227),s(228),s(229);c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(E.a,{children:Object(j.jsx)(Z,{})})}),document.getElementById("root")),U()},56:function(e,t,s){},97:function(e,t,s){},98:function(e,t,s){}},[[232,1,2]]]);
//# sourceMappingURL=main.354c7601.chunk.js.map