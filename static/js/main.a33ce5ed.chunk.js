(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,n){e.exports=n(349)},148:function(e,t,n){},347:function(e,t,n){},349:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(59),s=n.n(i),c=(n(148),n(11)),o=n(12),u=n(17),l=n(16),p=n(18),m=n(34),h=Object(m.withScriptjs)(Object(m.withGoogleMap)(function(e){return r.a.createElement(m.GoogleMap,{defaultZoom:8,zoom:e.zoom,defaultCenter:{lat:-34.397,lng:150.644},center:e.center},e.markers&&e.markers.filter(function(e){return e.isVisible}).map(function(t,n,a){var i=e.venues.find(function(e){return e.id===t.id});return r.a.createElement(m.Marker,{key:n,position:{lat:t.lat,lng:t.lng},onClick:function(){return e.handleMarkerClick(t)},animation:1===a.length?google.maps.Animation.BOUNCE:google.maps.Animation.DROP},t.isOpen&&i.bestPhoto&&r.a.createElement(m.InfoWindow,null,r.a.createElement("div",null,r.a.createElement("img",{src:"".concat(i.bestPhoto.prefix,"200x200").concat(i.bestPhoto.suffix)}),r.a.createElement("p",null,r.a.createElement("strong",null,i.name)))))}))})),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h,Object.assign({},this.props,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBP7rV74uLMGdvy8rP17jnp2jVmJ9tXqkg",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100%",width:"75%"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))}}]),t}(a.Component),d=(n(347),function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"baseURL",value:function(){return"https://api.foursquare.com/v2"}},{key:"auth",value:function(){var e={client_id:"RJXDZ3NCXRVZO1CTXMNENSCCA1NWIGG5SV0DSAUGHAUZ2LMX",client_secret:"YPFNNHKRYYOZOD4G4ISWOGRKXILJPYAFTSS5SEYQEIKEX03I",v:"20181213"};return Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&")}},{key:"urlBuilder",value:function(e){return e?Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&"):""}},{key:"headers",value:function(){return{Accept:"application/json"}}},{key:"simpleFetch",value:function(t,n,a){var r={method:n,headers:e.headers()};return fetch("".concat(e.baseURL()).concat(t,"?").concat(e.auth(),"&").concat(e.urlBuilder(a)),r).then(function(e){return e.json()})}}]),e}()),v=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"search",value:function(e){return d.simpleFetch("/venues/search","GET",e)}},{key:"venueDetails",value:function(e){return d.simpleFetch("/venues/".concat(e),"GET")}},{key:"venuePhotos",value:function(e){return d.simpleFetch("/venues/".concat(e,"/photos"),"GET")}}]),e}(),k=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",{className:"listItem",onClick:function(){return e.props.handleListItemClick(e.props)}},r.a.createElement("img",{src:this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix,alt:this.props.categories[0].name}),this.props.name)}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ol",{className:"venueList"},this.props.venues.map(function(t,n){return r.a.createElement(k,Object.assign({key:n},t,{handleListItemClick:e.props.handleListItemClick}))}))}}]),t}(a.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).handleFilterVenues=function(){return""!==e.state.query.trim()?e.props.venues.filter(function(t){return t.name.toLowerCase().includes(e.state.query.toLowerCase())}):e.props.venues},e.handleChange=function(t){e.setState({query:t.target.value});var n=e.props.venues.map(function(n){var a=n.name.toLowerCase().includes(t.target.value.toLowerCase()),r=e.props.markers.find(function(e){return e.id===n.id});return r.isVisible=!!a,r});e.props.updateSuperState({markers:n})},e.state={query:"",venues:[]},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sideBar"},r.a.createElement("input",{type:"search",id:"search",placeholder:"Filter Venues",onChange:this.handleChange}),r.a.createElement(b,Object.assign({},this.props,{venues:this.handleFilterVenues(),handleListItemClick:this.props.handleListItemClick})))}}]),t}(a.Component),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).closeAllMarkers=function(){var t=e.state.markers.map(function(e){return e.isOpen=!1,e});e.setState({markers:Object.assign(e.state.markers,t)})},e.handleMarkerClick=function(t){e.closeAllMarkers(),t.isOpen=!0,e.setState({markers:Object.assign(e.state.markers,t)});var n=e.state.venues.find(function(e){return e.id===t.id});v.venueDetails(t.id).then(function(t){var a=Object.assign(n,t.response.venue);e.setState({venues:Object.assign(e.state.venues,a)})})},e.handleListItemClick=function(t){var n=e.state.markers.find(function(e){return e.id===t.id});e.handleMarkerClick(n),console.log(t)},e.state={venues:[],markers:[],center:[],zoom:12,updateSuperState:function(t){e.setState(t)}},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.search({near:"Austin,TX",query:"tacos",limit:10}).then(function(t){var n=t.response.venues,a=t.response.geocode.feature.geometry.center,r=n.map(function(e){return{lat:e.location.lat,lng:e.location.lng,isOpen:!1,isVisible:!0,id:e.id}});e.setState({venues:n,center:a,markers:r})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,Object.assign({},this.state,{handleListItemClick:this.handleListItemClick})),r.a.createElement(f,Object.assign({},this.state,{handleMarkerClick:this.handleMarkerClick})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[143,2,1]]]);
//# sourceMappingURL=main.a33ce5ed.chunk.js.map