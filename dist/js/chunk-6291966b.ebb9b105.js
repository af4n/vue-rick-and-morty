(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6291966b"],{"5c33":function(a,t,e){"use strict";e.r(t);var c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("h1",[a._v("The Rick and Morty API")]),e("div",{staticClass:"characters-list"},a._l(a.characters,(function(a){return e("character-block",{key:a.id,attrs:{character:a}})})),1),a.pages?e("paginate",{attrs:{"page-count":a.pages,"page-range":3,"margin-pages":2,"click-handler":a.clickCallback,"prev-text":"<","next-text":">","container-class":"pagination","page-class":"page-item","page-link-class":"page-link","prev-class":"page-item","prev-link-class":"page-link","next-class":"page-item","next-link-class":"page-link"},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}):a._e()],1)},r=[],n=(e("d3b7"),e("6d24")),s=function(){return e.e("chunk-2d0dee55").then(e.t.bind(null,"8832",7))},i={name:"rick-and-morty-list",components:{CharacterBlock:n["a"],Paginate:s},data:function(){return{currentPage:1}},computed:{characters:function(){return this.$store.getters["getCharactersByPage"](this.currentPage)},firstCharacter:function(){return this.$store.getters["getCharacterById"]({id:1,page:1})},pages:function(){return this.$store.state.pages}},watch:{currentPage:{handler:function(a){this.$store.dispatch("fetchCharacters",a)},immediate:!0}},methods:{clickCallback:function(a){console.log(a)}}},l=i,o=e("2877"),u=Object(o["a"])(l,c,r,!1,null,null,null);t["default"]=u.exports},"6d24":function(a,t,e){"use strict";var c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-img-top"},[e("img",{attrs:{src:a.character.image,alt:a.character.name}})]),e("div",{staticClass:"card-body"},[e("span",{staticClass:"detailed-info",on:{click:a.detailedInfo}},[e("b",[a._v(a._s(a.character.name))])]),e("hr"),e("span",[a._v(" "+a._s(a.character.status)+" - "+a._s(a.character.species)+" ")]),a._v(" "),e("br"),e("span",[a._v(" Last known location: "+a._s(a.character.location.name)+" ")])])])},r=[],n={name:"character-block",props:{character:{type:Object,required:!0}},methods:{detailedInfo:function(){this.$router.push({name:"CharacterDetails",params:{id:this.character.id}})}}},s=n,i=e("2877"),l=Object(i["a"])(s,c,r,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-6291966b.ebb9b105.js.map