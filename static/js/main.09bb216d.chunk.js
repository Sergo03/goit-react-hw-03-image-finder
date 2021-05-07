(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),s=n(10),i=n(4),l=n(5),u=n(7),h=n(6),m=n(0),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})})}}]),n}(a.Component),g=function(e){var t=e.images,n=e.onOpen;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:a,alt:r,onClick:function(){return n(c)},className:"ImageGalleryItem-image"})},t)}))})},j=function(e){var t=e.images,n=e.onOpen;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:"ImageGallery",children:Object(m.jsx)(g,{images:t,onOpen:n})})})},b=function(e){var t=e.fetchImages;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{className:"Button",type:"button",onClick:t,children:" Load more"})})},p=n(19),f=n.n(p),O=n(20),y=n.n(O),v=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(y.a,{type:"Puff",color:"#00BFFF",height:100,width:100})})},x=document.querySelector("#modal-root"),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handlekeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleDropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handlekeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlekeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(m.jsx)("div",{className:"Overlay",onClick:this.handleDropClick,children:Object(m.jsx)("div",{className:"Modal",children:Object(m.jsx)("img",{src:this.props.selectedImg,alt:""})})}),x)}}]),n}(a.Component),S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,selectedImg:"",showModal:!1,error:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[]})},e.fetchImages=function(){var t=e.state,n=t.currentPage,a=t.searchQuery;e.setState({isLoading:!0}),f.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(n,"&key=20704457-b02886aee8bbd15c3245ed4eb&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.data.hits)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(t){e.setState((function(e){return{selectedImg:e.showModal?"":t,showModal:!e.showModal}}))},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,n=e.isLoading,a=e.showModal,r=e.selectedImg,c=e.error;return Object(m.jsxs)("div",{children:[a&&Object(m.jsx)(w,{selectedImg:r,onClose:this.toggleModal}),Object(m.jsx)(d,{onSubmit:this.onChangeQuery}),c&&Object(m.jsx)("h1",{className:"Error",children:"Error, please try later"}),n&&Object(m.jsx)(v,{}),Object(m.jsx)(j,{images:t,onOpen:this.toggleModal}),t.length>0&&!n&&Object(m.jsx)(b,{fetchImages:this.fetchImages})]})}}]),n}(a.Component);n(64),n(65);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.09bb216d.chunk.js.map