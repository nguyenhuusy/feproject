(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{16:function(e,a,t){},32:function(e,a,t){e.exports=t(46)},37:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(19),r=t.n(c),s=(t(37),t(2)),i=t(3),o=t(5),m=t(4),d=t(6),u=t(21),E=t(15),v=t(31),p=t(14),b=t(29),h=t(8),f={data:"",label:"hello",id:"abcd"},g=t(18),y={trending:{offset:0},loading:!1},w={data:[]},k={data:[],name:[]},O=Object(p.c)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TEST_REDUX":return Object(h.a)({},e,{data:a.payload});default:return e}},giphy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_TRENDING_GIFS":case"SEARCH_GIFS":return Object(h.a)({},e,{trending:a.payload,loading:!1});case"GET_MORE_TRENDING_GIFS":return Object(h.a)({},e,{trending:Object(h.a)({},a.payload,{data:[].concat(Object(g.a)(e.trending.data),Object(g.a)(a.payload.data))}),loading:!1});case"GIPHY_LOADING":return Object(h.a)({},e,{loading:!0});default:return e}},getcolor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_COLOR":var t=a.payload,n=t.rowIdx,l=t.columnIdx,c=t.newColor;return e.data[n][l]=c,Object(h.a)({},e,{data:Object(g.a)(e.data)});case"GENERATE_TILES":return Object(h.a)({},e,{data:a.payload});default:return e}},saveColor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SAVE_COLOR":return Object(h.a)({},e,{data:a.payload});case"NAME_COLOR":return Object(h.a)({},e,{name:a.payload});default:return e}}}),j=[b.a],T=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()?Object(p.d)(p.a.apply(void 0,j),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()):p.a.apply(void 0,j),x=Object(p.e)(O,{},T),S=(t(16),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"layoutAuthentication"},l.a.createElement("div",{id:"layoutAuthentication_content"},l.a.createElement("main",null,l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row justify-content-center"},l.a.createElement("div",{class:"col-lg-5"},l.a.createElement("div",{class:"card shadow-lg border-0 rounded-lg mt-5"},l.a.createElement("div",{class:"card-header"},l.a.createElement("h3",{class:"text-center font-weight-light my-4"},"Login")),l.a.createElement("div",{class:"card-body"},l.a.createElement("form",null,l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{class:"small mb-1",for:"inputEmailAddress"},"Email"),l.a.createElement("input",{class:"form-control py-4",id:"inputEmailAddress",type:"email",placeholder:"Enter email address"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{class:"small mb-1",for:"inputPassword"},"Password"),l.a.createElement("input",{class:"form-control py-4",id:"inputPassword",type:"password",placeholder:"Enter password"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("div",{class:"custom-control custom-checkbox"},l.a.createElement("input",{class:"custom-control-input",id:"rememberPasswordCheck",type:"checkbox"}),l.a.createElement("label",{class:"custom-control-label",for:"rememberPasswordCheck"},"Remember password"))),l.a.createElement("div",{class:"form-group d-flex align-items-center justify-content-between mt-4 mb-0"},l.a.createElement("a",{class:"small",href:"password.html"},"Forgot Password?"),l.a.createElement("a",{class:"btn btn-primary",href:"index.html"},"Login")))),l.a.createElement("div",{class:"card-footer text-center"},l.a.createElement("div",{class:"small"},l.a.createElement("a",{href:"register.html"},"Need an account? Sign up!"))))))))),l.a.createElement("div",{id:"layoutAuthentication_footer"},l.a.createElement("footer",{class:"py-4 bg-light mt-auto"},l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"d-flex align-items-center justify-content-between small"},l.a.createElement("div",{class:"text-muted"},"Copyright \xa9 Your Website 2019"),l.a.createElement("div",null,l.a.createElement("a",{href:"#"},"Privacy Policy"),"\xb7",l.a.createElement("a",{href:"#"},"Terms & Conditions")))))))}}]),a}(n.Component)),_=[{label:"Home",url:"/"},{label:"C\xe2u h\u1ecfi",url:"/CauHoi"},{label:"\u0110\xe1nh gi\xe1 mentor",url:"/DanhGiaMentor"},{label:"danh m\u1ee5c",url:"/DanhMuc"}],C=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.label,t=e.link;return l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{className:"nav-link",to:t},a))}}]),a}(n.Component),D=(t(43),n.Component,function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"sb-nav-fixed"},l.a.createElement("nav",{class:"sb-topnav navbar navbar-expand navbar-dark bg-dark"},l.a.createElement("a",{class:"navbar-brand",href:"index.html"},"hybrid-technologies"),l.a.createElement("button",{class:"btn btn-link btn-sm order-1 order-lg-0",id:"sidebarToggle",href:"#"},l.a.createElement("i",{class:"fas fa-bars"})),l.a.createElement("ul",{class:"navbar-nav ml-auto mr-0 mr-md-3 my-2 my-md-0"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",href:"#"},l.a.createElement("i",{class:"fa fa-bell"}))),l.a.createElement("li",{class:"nav-item dropdown"},l.a.createElement("a",{class:"nav-link dropdown-toggle",id:"userDropdown",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{class:"fas fa-user fa-fw"})),l.a.createElement("div",{class:"dropdown-menu dropdown-menu-right","aria-labelledby":"userDropdown"},l.a.createElement("a",{class:"dropdown-item",href:"#"},"Settings"),l.a.createElement("a",{class:"dropdown-item",href:"#"},"Activity Log"),l.a.createElement("div",{class:"dropdown-divider"}),l.a.createElement("a",{class:"dropdown-item",href:"login.html"},"Logout"))))),l.a.createElement("div",{id:"layoutSidenav"},l.a.createElement("div",{id:"layoutSidenav_nav"},l.a.createElement("nav",{class:"sb-sidenav accordion sb-sidenav-dark",id:"sidenavAccordion"},l.a.createElement("div",{class:"sb-sidenav-menu"},l.a.createElement("div",{class:"nav"},l.a.createElement("div",{class:"sb-sidenav-menu-heading"},"Trang"),l.a.createElement("a",{class:"nav-link",href:"/Login"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"Login"),l.a.createElement("div",{class:"sb-sidenav-menu-heading"},"\u0110\u1ec1 m\u1ee5c"),l.a.createElement("a",{class:"nav-link",href:"/DanhGiaMentor"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"\u0110\xe1nh gi\xe1 Mentor"),l.a.createElement("a",{class:"nav-link",href:"/CauHoi"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"C\xe2u h\u1ecfi"),l.a.createElement("a",{class:"nav-link",href:"/DanhMuc"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"Danh m\u1ee5c"))),l.a.createElement("div",{class:"sb-sidenav-footer"},l.a.createElement("div",{class:"small"},"Logged in as:"),"Start Bootstrap"))),l.a.createElement("div",{id:"layoutSidenav_content"},l.a.createElement("div",null,l.a.createElement("div",{class:"container-fluid"},l.a.createElement("h1",{class:"mt-4"},"Qu\u1ea3n l\xfd c\xe2u h\u1ecfi"),l.a.createElement("ol",{class:"breadcrumb mt-4 mb-4"},l.a.createElement("li",{class:"breadcrumb-item active"},"Nh\u1eadp n\u1ed9i dung c\xe2u h\u1ecfi")),l.a.createElement("div",{class:"card mb-4"},l.a.createElement("div",{class:"card-body"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12 col-sm-6 col-md-6"},l.a.createElement("h4",null,"Danh m\u1ee5c"),l.a.createElement("div",{class:"form-check"},l.a.createElement("label",{class:"form-check-label"},l.a.createElement("input",{type:"radio",class:"form-check-input",name:"optradio"}),"T\u1ef1 nh\u1eadp"),l.a.createElement("input",{class:"form-control",type:"text",name:""})),l.a.createElement("div",{class:"form-check"},l.a.createElement("label",{class:"form-check-label"},l.a.createElement("input",{type:"radio",class:"form-check-input",name:"optradio"}),"Ch\u1ecdn s\u1eb5n"),l.a.createElement("select",{class:"form-control",id:"sel1"},l.a.createElement("option",null,"Danh m\u1ee5c c\xf3 s\u1eb5n"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4")))),l.a.createElement("div",{class:"col-12 col-sm-6 col-md-6"},l.a.createElement("h4",null,"M\u1ee5c \u0111\xe1nh gi\xe1"),l.a.createElement("div",{class:"form-check"},l.a.createElement("input",{class:"form-control",type:"text",name:""})," "),l.a.createElement("div",{class:"form-check"},l.a.createElement("select",{class:"form-control",id:"sel1"},l.a.createElement("option",null,"M\u1ee5c \u0111\xe1nh gi\xe1 c\xf3 s\u1eb5n"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"))))))),l.a.createElement("div",{class:"card mb-4"},l.a.createElement("div",{class:"card-body"},l.a.createElement("div",{class:"table-responsive"},l.a.createElement("div",{class:"table-responsive"},l.a.createElement("table",{class:"table table-bordered",id:"dataTable",width:"100%",cellspacing:"0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Thanh \u0111i\u1ec3m"),l.a.createElement("th",null,"N\u1ed9i dung ti\xeau chu\u1ea9n"),l.a.createElement("th",null,"Teamplate"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"System Architect"),l.a.createElement("td",null,l.a.createElement("button",{class:"btn btn-primary"},"Ch\u1ecdn m\u1eabu"))),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Accountant"),l.a.createElement("td",null,l.a.createElement("button",{class:"btn btn-primary"},"Ch\u1ecdn m\u1eabu"))))),l.a.createElement("ul",{class:"btn-Save"},l.a.createElement("li",null,l.a.createElement("button",{class:"btn btn-primary"},"Th\xeam m\u1edbi")))))))),l.a.createElement("footer",{class:"py-4 bg-light mt-auto"},l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"d-flex align-items-center justify-content-between small"},l.a.createElement("div",{class:"text-muted"},"Copyright \xa9 2020"),l.a.createElement("div",null,l.a.createElement("a",{href:"#"},"Privacy Policy"),"\xb7",l.a.createElement("a",{href:"#"},"Terms & Conditions")))))))))}}]),a}(n.Component)),N=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"sb-nav-fixed"},l.a.createElement("nav",{class:"sb-topnav navbar navbar-expand navbar-dark bg-dark"},l.a.createElement("a",{class:"navbar-brand",href:"index.html"},"hybrid-technologies"),l.a.createElement("button",{class:"btn btn-link btn-sm order-1 order-lg-0",id:"sidebarToggle",href:"#"},l.a.createElement("i",{class:"fas fa-bars"})),l.a.createElement("ul",{class:"navbar-nav ml-auto mr-0 mr-md-3 my-2 my-md-0"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",href:"#"},l.a.createElement("i",{class:"fa fa-bell"}))),l.a.createElement("li",{class:"nav-item dropdown"},l.a.createElement("a",{class:"nav-link dropdown-toggle",id:"userDropdown",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{class:"fas fa-user fa-fw"})),l.a.createElement("div",{class:"dropdown-menu dropdown-menu-right","aria-labelledby":"userDropdown"},l.a.createElement("a",{class:"dropdown-item",href:"#"},"Settings"),l.a.createElement("a",{class:"dropdown-item",href:"#"},"Activity Log"),l.a.createElement("div",{class:"dropdown-divider"}),l.a.createElement("a",{class:"dropdown-item",href:"login.html"},"Logout"))))),l.a.createElement("div",{id:"layoutSidenav"},l.a.createElement("div",{id:"layoutSidenav_nav"},l.a.createElement("nav",{class:"sb-sidenav accordion sb-sidenav-dark",id:"sidenavAccordion"},l.a.createElement("div",{class:"sb-sidenav-menu"},l.a.createElement("div",{class:"nav"},l.a.createElement("div",{class:"sb-sidenav-menu-heading"},"Trang"),l.a.createElement("a",{class:"nav-link",href:"/Login"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"Login"),l.a.createElement("div",{class:"sb-sidenav-menu-heading"},"\u0110\u1ec1 m\u1ee5c"),l.a.createElement("a",{class:"nav-link",href:"/DanhGiaMentor"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"\u0110\xe1nh gi\xe1 Mentor"),l.a.createElement("a",{class:"nav-link",href:"/CauHoi"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"C\xe2u h\u1ecfi"),l.a.createElement("a",{class:"nav-link",href:"/DanhMuc"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"Danh m\u1ee5c"))),l.a.createElement("div",{class:"sb-sidenav-footer"},l.a.createElement("div",{class:"small"},"Logged in as:"),"Start Bootstrap"))),l.a.createElement("div",{id:"layoutSidenav_content"},l.a.createElement("div",null,l.a.createElement("div",{class:"container-fluid"},l.a.createElement("ol",{class:"breadcrumb mt-4 mb-4"},l.a.createElement("li",{class:"breadcrumb-item active"},"\u0110\xe1nh gi\xe1")),l.a.createElement("div",{class:"card mb-4"},l.a.createElement("div",{class:"card-header"},l.a.createElement("i",{class:"fas fa-table mr-1"}),"Danh s\xe1ch ch\u1ec9 \u0111\u1ecbnh"),l.a.createElement("div",{class:"card-body"},l.a.createElement("div",{class:"table-responsive"},l.a.createElement("div",{class:"table-responsive col-md-12"},l.a.createElement("table",{class:"table table-bordered",id:"dataTable",width:"100%",cellspacing:"0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Ng\u01b0\u1eddi \u0111\xe1nh gi\xe1"),l.a.createElement("th",null,"Ng\u01b0\u1eddi \u0111\u01b0\u1ee3c \u0111\xe1nh gi\xe1"),l.a.createElement("th",null,"Th\u1eddi h\u1ea1n"),l.a.createElement("th",null,"Thao t\xe1c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:"Nguy\u1ec5n V\u0103n A",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:"Nguy\u1ec5n V\u0103n B",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("input",{type:"datetime",value:"19/5/2020",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("button",{class:"btn btn-primary"},"X\xf3a"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:"Nguy\u1ec5n V\u0103n A",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:"Nguy\u1ec5n V\u0103n B",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("input",{type:"datetime",value:"19/5/2020",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("button",{class:"btn btn-primary"},"X\xf3a"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:"Nguy\u1ec5n V\u0103n A",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:"Nguy\u1ec5n V\u0103n B",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("input",{type:"datetime",value:"19/5/2020",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("button",{class:"btn btn-primary"},"X\xf3a"))))),l.a.createElement("ul",{class:"btn-Save"},l.a.createElement("li",null,l.a.createElement("button",{class:"btn btn-primary"},"L\u01b0u")),l.a.createElement("li",null,l.a.createElement("button",{class:"btn btn-primary"},"X\xf3a h\u1ebft")),l.a.createElement("li",null,l.a.createElement("button",{class:"btn btn-primary"},"C\u1eadp nh\u1eadt"))))))),l.a.createElement("div",{class:"card mb-4"},l.a.createElement("div",{class:"card-header"},l.a.createElement("i",{class:"fas fa-table mr-1"}),"Th\xeam ch\u1ec9 \u0111\u1ecbnh"),l.a.createElement("div",{class:"card-body"},l.a.createElement("div",{class:"table-responsive"},l.a.createElement("div",{class:"table-responsive col-md-12"},l.a.createElement("table",{class:"table table-bordered",id:"dataTable",width:"100%",cellspacing:"0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Ng\u01b0\u1eddi \u0111\xe1nh gi\xe1"),l.a.createElement("th",null,"Ng\u01b0\u1eddi \u0111\u01b0\u1ee3c \u0111\xe1nh gi\xe1"),l.a.createElement("th",null,"Th\u1eddi h\u1ea1n"),l.a.createElement("th",null,"Thao t\xe1c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:"Nguy\u1ec5n V\u0103n A",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:"Nguy\u1ec5n V\u0103n B",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("input",{type:"datetime",value:"19/5/2020",class:"form-control"})),l.a.createElement("td",null,l.a.createElement("button",{class:"btn btn-primary"},"X\xf3a"))))),l.a.createElement("ul",{class:"btn-Save"},l.a.createElement("li",null,l.a.createElement("button",{class:"btn btn-primary"},"Th\xeam m\u1edbi"))))))))))))}}]),a}(n.Component),L=(t(44),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"sb-nav-fixed"},l.a.createElement("nav",{class:"sb-topnav navbar navbar-expand navbar-dark bg-dark"},l.a.createElement("a",{class:"navbar-brand",href:"index.html"},"Start Bootstrap"),l.a.createElement("button",{class:"btn btn-link btn-sm order-1 order-lg-0",id:"sidebarToggle",href:"#"},l.a.createElement("i",{class:"fas fa-bars"})),l.a.createElement("form",{class:"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"},l.a.createElement("div",{class:"input-group"},l.a.createElement("input",{class:"form-control",type:"text",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),l.a.createElement("div",{class:"input-group-append"},l.a.createElement("button",{class:"btn btn-primary",type:"button"},l.a.createElement("i",{class:"fas fa-search"}))))),l.a.createElement("ul",{class:"navbar-nav ml-auto ml-md-0"},l.a.createElement("li",{class:"nav-item dropdown"},l.a.createElement("a",{class:"nav-link dropdown-toggle",id:"userDropdown",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{class:"fas fa-user fa-fw"})),l.a.createElement("div",{class:"dropdown-menu dropdown-menu-right","aria-labelledby":"userDropdown"},l.a.createElement("a",{class:"dropdown-item",href:"#"},"Settings"),l.a.createElement("a",{class:"dropdown-item",href:"#"},"Activity Log"),l.a.createElement("div",{class:"dropdown-divider"}),l.a.createElement("a",{class:"dropdown-item",href:"login.html"},"Logout"))))),l.a.createElement("div",{id:"layoutSidenav"},l.a.createElement("div",{id:"layoutSidenav_nav"},l.a.createElement("nav",{class:"sb-sidenav accordion sb-sidenav-dark",id:"sidenavAccordion"},l.a.createElement("div",{class:"sb-sidenav-menu"},l.a.createElement("div",{class:"nav"},l.a.createElement("div",{class:"sb-sidenav-menu-heading"},"Trang"),l.a.createElement("a",{class:"nav-link",href:"/Login"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"Login"),l.a.createElement("div",{class:"sb-sidenav-menu-heading"},"\u0110\u1ec1 m\u1ee5c"),l.a.createElement("a",{class:"nav-link",href:"/DanhGiaMentor"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"\u0110\xe1nh gi\xe1 Mentor"),l.a.createElement("a",{class:"nav-link",href:"/CauHoi"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"C\xe2u h\u1ecfi"),l.a.createElement("a",{class:"nav-link",href:"/DanhMuc"},l.a.createElement("div",{class:"sb-nav-link-icon"},l.a.createElement("i",{class:"fas fa-tachometer-alt"})),"Danh m\u1ee5c"))),l.a.createElement("div",{class:"sb-sidenav-footer"},l.a.createElement("div",{class:"small"},"Logged in as:"),"Start Bootstrap"))),l.a.createElement("div",{id:"layoutSidenav_content"},l.a.createElement("div",null,l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:""},l.a.createElement("h1",{class:"mt-4"},"Danh s\xe1ch c\xe1c m\u1eabu ti\xeau ch\xed"),l.a.createElement("div",{class:"row mt-3"},l.a.createElement("div",{class:"col-12 col-sm-12 col-md-3 col-lg-3"},l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("select",{class:"custom-select custom-select-nobackground",id:"inputGroupSelect02"},l.a.createElement("option",{selected:!0},"Ch\u1ecdn danh m\u1ee5c"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three")),l.a.createElement("div",{class:"input-group-append"},l.a.createElement("label",{class:"input-group-text",for:"inputGroupSelect02"},l.a.createElement("i",{class:"fas fa-caret-right"}))))),l.a.createElement("div",{class:"col-12 col-sm-12 col-md-3 col-lg-3"},l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("select",{class:"custom-select custom-select-nobackground",id:"inputGroupSelect02"},l.a.createElement("option",{selected:!0},"Ch\u1ecdn m\u1ee5c \u0111\xe1nh gi\xe1"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three")),l.a.createElement("div",{class:"input-group-append"},l.a.createElement("label",{class:"input-group-text",for:"inputGroupSelect02"},l.a.createElement("i",{class:"fas fa-caret-right"}))))),l.a.createElement("div",{class:"col-12 col-sm-12 col-md-3 col-lg-3"},l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("select",{class:"custom-select custom-select-nobackground",id:"inputGroupSelect02"},l.a.createElement("option",{selected:!0},"Ch\u1ecdn c\xe2u h\u1ecfi"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three")),l.a.createElement("div",{class:"input-group-append"},l.a.createElement("label",{class:"input-group-text",for:"inputGroupSelect02"},l.a.createElement("i",{class:"fas fa-caret-right"}))))),l.a.createElement("div",{class:"col-12 col-sm-12 col-md-3 col-lg-3"},l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("select",{class:"custom-select custom-select-nobackground",id:"inputGroupSelect02"},l.a.createElement("option",{selected:!0},"Ch\u1ecdn thang \u0111i\u1ec3m"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three")),l.a.createElement("div",{class:"input-group-append"},l.a.createElement("label",{class:"input-group-text",for:"inputGroupSelect02"},l.a.createElement("i",{class:"fas fa-caret-right"})))))),l.a.createElement("div",{class:"txtNoiDung mt-4"}),l.a.createElement("button",{type:"button",class:"btn btn-primary mt-2 ml-2 btnApDung"},"\xc1p d\u1ee5ng")))),l.a.createElement("footer",{class:"py-4 bg-light mt-auto"},l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"d-flex align-items-center justify-content-between small"},l.a.createElement("div",{class:"text-muted"},"Copyright \xa9 Your Website 2019"),l.a.createElement("div",null,l.a.createElement("a",{href:"#"},"Privacy Policy"),"\xb7",l.a.createElement("a",{href:"#"},"Terms & Conditions"))))))))}}]),a}(n.Component)),G=(n.Component,t(45),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(v.a,{store:x},l.a.createElement("div",{className:"app"},l.a.createElement(u.a,null,l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:D}),l.a.createElement(E.a,{path:"/Login",component:S}),l.a.createElement(E.a,{path:"/CauHoi",component:D}),l.a.createElement(E.a,{path:"/DanhGiaMentor",component:N}),l.a.createElement(E.a,{path:"/DanhMuc",component:L}))),l.a.createElement("footer",{class:"py-4 bg-light mt-auto"},l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"d-flex align-items-center justify-content-between small"},l.a.createElement("div",{class:"text-muted"},"Copyright \xa9 2020"),l.a.createElement("div",null,l.a.createElement("a",{href:"#"},"Privacy Policy"),"\xb7",l.a.createElement("a",{href:"#"},"Terms & Conditions")))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.a0f487ce.chunk.js.map