webpackJsonp([6],{587:function(t,e,n){n(622);var a=n(9)(n(606),n(634),"data-v-66b4ac62",null);t.exports=a.exports},606:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(57),s=n.n(a),r=n(211),i=n.n(r),A=n(66),c=n.n(A),o=n(202),l=n.n(o),d=n(208),p=n.n(d),u=n(131),C=n(49),b=n(87);e.default={mixins:[b.c],data:function(){return{currentIndex:0,switches:[{name:"我喜欢的"},{name:"最近听的"}]}},computed:s()({noResult:function(){return 0===this.currentIndex?!this.favoriteList.length:!this.playHistory.length},noResultDesc:function(){return 0===this.currentIndex?"暂无收藏歌曲":"你还没有听过歌曲"}},n.i(C.a)(["favoriteList","playHistory"])),methods:s()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.listWrapper.style.bottom=e,this.$refs.favoriteList&&this.$refs.favoriteList.refresh(),this.$refs.playList&&this.$refs.playList.refresh()},switchItem:function(t){this.currentIndex=t},selectSong:function(t){this.insertSong(new u.a(t))},back:function(){this.$router.back()},random:function(){var t=0===this.currentIndex?this.favoriteList:this.playHistory;0!==t.length&&(t=t.map(function(t){return new u.a(t)}),this.randomPlay({list:t}))}},n.i(C.c)(["insertSong","randomPlay"])),components:{Switches:i.a,Scroll:c.a,SongList:l.a,NoResult:p.a}}},612:function(t,e,n){e=t.exports=n(578)(!0),e.push([t.i,".user-center[data-v-66b4ac62]{position:fixed;top:0;bottom:0;z-index:100;width:100%;background:#222}.user-center.slide-enter-active[data-v-66b4ac62],.user-center.slide-leave-active[data-v-66b4ac62]{transition:all .3s}.user-center.slide-enter[data-v-66b4ac62],.user-center.slide-leave-to[data-v-66b4ac62]{transform:translate3d(100%,0,0)}.user-center .back[data-v-66b4ac62]{position:absolute;top:0;left:6px;z-index:50}.user-center .back .icon-back[data-v-66b4ac62]{display:block;padding:10px;font-size:22px;color:#ffcd32}.user-center .switches-wrapper[data-v-66b4ac62]{margin:10px 0 30px}.user-center .play-btn[data-v-66b4ac62]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid hsla(0,0%,100%,.5);color:hsla(0,0%,100%,.5);border-radius:100px;font-size:0}.user-center .play-btn .icon-play[data-v-66b4ac62]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.user-center .play-btn .text[data-v-66b4ac62]{display:inline-block;vertical-align:middle;font-size:12px}.user-center .list-wrapper[data-v-66b4ac62]{position:absolute;top:110px;bottom:0;width:100%}.user-center .list-wrapper .list-scroll[data-v-66b4ac62]{height:100%;overflow:hidden}.user-center .list-wrapper .list-scroll .list-inner[data-v-66b4ac62]{padding:20px 30px}.user-center .no-result-wrapper[data-v-66b4ac62]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["/home/user/Documents/myself/vue/vue-music1/src/components/user-center/user-center.vue"],names:[],mappings:"AACA,8BACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,kGAEE,kBAAqB,CACtB,AACD,uFAEE,+BAAmC,CACpC,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,+CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,gDACE,kBAAsB,CACvB,AACD,wCACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,oCAAwC,AACxC,yBAA6B,AAC7B,oBAAqB,AACrB,WAAa,CACd,AACD,mDACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,8CACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,4CACE,kBAAmB,AACnB,UAAW,AACX,SAAU,AACV,UAAY,CACb,AACD,yDACE,YAAa,AACb,eAAiB,CAClB,AACD,qEACE,iBAAmB,CACpB,AACD,iDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"user-center.vue",sourcesContent:["\n.user-center[data-v-66b4ac62] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n  width: 100%;\n  background: #222;\n}\n.user-center.slide-enter-active[data-v-66b4ac62],\n.user-center.slide-leave-active[data-v-66b4ac62] {\n  transition: all 0.3s;\n}\n.user-center.slide-enter[data-v-66b4ac62],\n.user-center.slide-leave-to[data-v-66b4ac62] {\n  transform: translate3d(100%, 0, 0);\n}\n.user-center .back[data-v-66b4ac62] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.user-center .back .icon-back[data-v-66b4ac62] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.user-center .switches-wrapper[data-v-66b4ac62] {\n  margin: 10px 0 30px 0;\n}\n.user-center .play-btn[data-v-66b4ac62] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid rgba(255,255,255,0.5);\n  color: rgba(255,255,255,0.5);\n  border-radius: 100px;\n  font-size: 0;\n}\n.user-center .play-btn .icon-play[data-v-66b4ac62] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.user-center .play-btn .text[data-v-66b4ac62] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.user-center .list-wrapper[data-v-66b4ac62] {\n  position: absolute;\n  top: 110px;\n  bottom: 0;\n  width: 100%;\n}\n.user-center .list-wrapper .list-scroll[data-v-66b4ac62] {\n  height: 100%;\n  overflow: hidden;\n}\n.user-center .list-wrapper .list-scroll .list-inner[data-v-66b4ac62] {\n  padding: 20px 30px;\n}\n.user-center .no-result-wrapper[data-v-66b4ac62] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},622:function(t,e,n){var a=n(612);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(579)("7cd732db",a,!0)},634:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"user-center"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("div",{staticClass:"switches-wrapper"},[n("switches",{attrs:{switches:t.switches,currentIndex:t.currentIndex},on:{switch:t.switchItem}})],1),t._v(" "),n("div",{ref:"playBtn",staticClass:"play-btn",on:{click:t.random}},[n("i",{staticClass:"icon-play"}),t._v(" "),n("span",{staticClass:"text"},[t._v("随机播放全部")])]),t._v(" "),n("div",{ref:"listWrapper",staticClass:"list-wrapper"},[0===t.currentIndex?n("scroll",{ref:"favoriteList",staticClass:"list-scroll",attrs:{data:t.favoriteList}},[n("div",{staticClass:"list-inner"},[n("song-list",{attrs:{songs:t.favoriteList},on:{select:t.selectSong}})],1)]):t._e(),t._v(" "),1===t.currentIndex?n("scroll",{ref:"playList",staticClass:"list-scroll",attrs:{data:t.playHistory}},[n("div",{staticClass:"list-inner"},[n("song-list",{attrs:{songs:t.playHistory},on:{select:t.selectSong}})],1)]):t._e()],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.noResult,expression:"noResult"}],staticClass:"no-result-wrapper"},[n("no-result",{attrs:{title:t.noResultDesc}})],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=6.ac34e37ef2008307bab0.js.map