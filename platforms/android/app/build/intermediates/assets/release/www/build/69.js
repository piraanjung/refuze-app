webpackJsonp([69],{286:function(n,l,t){"use strict";function u(n){return e._20(0,[(n()(),e._19(-1,null,["\n"])),(n()(),e._0(1,0,null,null,10,"ion-grid",[["class","grid"]],null,null,null,null,null)),e.Z(2,16384,null,0,h.a,[],null,null),(n()(),e._19(-1,null,["\n  "])),(n()(),e._0(4,0,null,null,6,"ion-row",[["class","row"],["id","splash-background-image"]],null,null,null,null,null)),e.Z(5,16384,null,0,v.a,[],null,null),(n()(),e._19(-1,null,["\n    "])),(n()(),e._0(7,0,null,null,0,"img",[["class","splash-screen"]],[[8,"src",4]],null,null,null,null)),(n()(),e._19(-1,null,["\n    "])),(n()(),e._0(9,0,null,null,0,"img",[["class","logo"]],[[8,"src",4]],null,null,null,null)),(n()(),e._19(-1,null,["\n  "])),(n()(),e._19(-1,null,["\n"])),(n()(),e._19(-1,null,["\n"]))],null,function(n,l){var t=l.component;n(l,7,0,t.data.backgroundImage);n(l,9,0,t.data.logo)})}Object.defineProperty(l,"__esModule",{value:!0});var e=t(0),a=(t(5),t(109),function(){function n(){}return n.prototype.ngOnChanges=function(n){clearInterval(this.timer),this.executeEvents()},n.prototype.getData=function(){return this.data},n.prototype.getEvents=function(){return this.events},n.prototype.executeEvents=function(){var n=this.getData()&&this.getData().duration?this.getData().duration:1e4,l=null;this.getEvents()&&(l=this.getEvents().onRedirect),this.timer=setTimeout(function(){l&&l()},n)},n.prototype.ngOnDestroy=function(){clearInterval(this.timer)},n}()),r=function(){return function(){}}(),s=t(184),o=t(185),i=t(186),c=t(187),_=t(188),g=t(189),d=t(190),p=t(191),f=t(192),h=t(111),v=t(112),y=e.Y({encapsulation:2,styles:[],data:{}}),m=e.W("splash-screen-layout-2",a,function(n){return e._20(0,[(n()(),e._0(0,0,null,null,1,"splash-screen-layout-2",[],null,null,null,u,y)),e.Z(1,704512,null,0,a,[],null,null)],null,null)},{data:"data",events:"events"},{},[]),b=t(16),k=t(17),D=t(110),E=t(35);t.d(l,"SplashScreenLayout2ModuleNgFactory",function(){return w});var w=e.X(r,[],function(n){return e._11([e._12(512,e.i,e.T,[[8,[s.a,o.a,i.a,c.a,_.a,g.a,d.a,p.a,f.a,m]],[3,e.i],e.s]),e._12(4608,b.k,b.j,[e.r,[2,b.s]]),e._12(4608,k.n,k.n,[]),e._12(4608,k.c,k.c,[]),e._12(512,b.b,b.b,[]),e._12(512,k.m,k.m,[]),e._12(512,k.d,k.d,[]),e._12(512,k.k,k.k,[]),e._12(512,D.a,D.a,[]),e._12(512,D.b,D.b,[]),e._12(512,r,r,[]),e._12(256,E.a,a,[])])})}});