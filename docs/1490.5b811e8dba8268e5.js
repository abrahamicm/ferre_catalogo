"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1490],{1490:(L,p,c)=>{c.r(p),c.d(p,{HomePageModule:()=>y});var l=c(9808),i=c(8118),m=c(4182),s=c(4030),n=c(9863);let d=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-header"]],decls:4,vars:0,consts:[["color","primary"],[2,"width","100%","text-align","center"],["src","assets/img/FERREACERO-5-LOGO-1.png"]],template:function(t,r){1&t&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),n._UZ(3,"img",2),n.qZA()()())},directives:[i.Gu,i.sr,i.wd],styles:[""]}),o})(),u=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-lista-precios"]],decls:3,vars:0,consts:[[1,"ion-text-center"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"h3"),n._uU(2,"Lista de precios"),n.qZA()())},styles:["h3[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:25px;font-family:gretaros;font-style:normal;font-weight:400;font-size:24px;color:var(--ion-color-primary)}"]}),o})(),C=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-ofertas"]],decls:9,vars:1,consts:[[2,"width","85%","margin","0 auto"],[1,"btn-long",3,"routerLink"],[1,"title"],["color","light",1,"name","nombre_1"],["color","secondary",1,"name","nombre_2"],[1,"chevron"],["name","chevron-forward-outline"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ion-text",3),n._uU(4,"Ofer"),n.qZA(),n.TgZ(5,"ion-text",4),n._uU(6,"tas"),n.qZA()(),n.TgZ(7,"div",5),n._UZ(8,"ion-icon",6),n.qZA()()()),2&t&&(n.xp6(1),n.Q6J("routerLink","/ofertas"))},directives:[i.YI,s.rH,i.yW,i.gu],styles:[".btn-long[_ngcontent-%COMP%]{padding:10px 15px;margin:10px;border:2px solid var(--ion-color-primary);border-radius:15px;display:flex;align-items:center;justify-content:center;position:relative;background-color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:10px;font-size:20px;color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-family:gretaros}.btn-long[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{font-size:20px;position:absolute;right:13px}@media (prefers-color-scheme: dark){.btn-long[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-text-color)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-text-color)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-text-color)}}"]}),o})();class a{constructor(e,t,r,Z="",w=0){this.id=e,this.nombre=t,this.imagen=r,this.link=Z,this.separarNombre(w)}separarNombre(e){if(0==e){let r=Math.ceil(this.nombre.length/2);this.nombre_1=this.nombre.substring(0,r),this.nombre_2=this.nombre.substring(r)}else this.nombre_1=this.nombre.substring(0,e),this.nombre_2=this.nombre.substring(e)}}function f(o,e){if(1&o&&(n.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"ion-text",4),n._uU(4),n.qZA()(),n.TgZ(5,"div",5),n._UZ(6,"ion-icon",6),n.qZA()()()),2&o){const t=e.$implicit;n.xp6(1),n.Q6J("routerLink","/"+t.link),n.xp6(3),n.Oqu(t.nombre)}}let O=(()=>{class o{constructor(){this.categorias=[new a(1,"Laminas","advance-card-alaska","laminas"),new a(2,"\xc1ngulos","advance-card-alaska","angulos"),new a(3,"Pletinas","advance-card-alaska","pletinas"),new a(4,"Cabillas","advance-card-alaska","cabillas"),new a(5,"Vigas","advance-card-alaska","vigas"),new a(6,"Tubos estructurales","advance-card-alaska","tubos-estructurales")]}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-categorias-list"]],decls:1,vars:1,consts:[["style","width: 85%;margin:0 auto;",4,"ngFor","ngForOf"],[2,"width","85%","margin","0 auto"],[1,"btn-long",3,"routerLink"],[1,"title"],["color","primary",1,"name","nombre_1"],[1,"chevron"],["name","chevron-forward-outline"]],template:function(t,r){1&t&&n.YNc(0,f,7,2,"div",0),2&t&&n.Q6J("ngForOf",r.categorias)},directives:[l.sg,i.YI,s.rH,i.yW,i.gu],styles:[".btn-long[_ngcontent-%COMP%]{padding:10px 15px;margin:10px;border:2px solid var(--ion-color-primary);border-radius:15px;display:flex;align-items:center;justify-content:center;position:relative;background-color:#fff}.btn-long[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:10px;font-size:20px;color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-family:gretaros}.btn-long[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{font-size:20px;position:absolute;right:13px}@media (prefers-color-scheme: dark){.btn-long[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-text-color)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-text-color)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-text-color)}}"]}),o})(),P=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-contactos"]],decls:3,vars:0,consts:[[1,"ion-text-center"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"h3"),n._uU(2,"Contactos"),n.qZA()())},styles:["h3[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:25px;font-family:gretaros;font-style:normal;font-weight:400;font-size:24px;color:var(--ion-color-primary)}"]}),o})();class g{constructor(e,t,r){this.id=e,this.nombre=t,this.numero=r}}var M=c(4015);function _(o,e){if(1&o&&(n.TgZ(0,"a",2)(1,"ion-col",0),n._UZ(2,"ion-icon",3),n.TgZ(3,"ion-label",4),n._uU(4),n.qZA(),n.TgZ(5,"ion-label",4),n._uU(6),n.qZA()()()),2&o){const t=e.$implicit;n.Q6J("href","tel:"+t.numero,n.LSH),n.xp6(4),n.Oqu(t.nombre),n.xp6(2),n.Oqu(t.numero)}}let v=(()=>{class o{constructor(t){this.callNumber=t,this.contactos=[new g(1,"Vendedor","584143413241"),new g(2,"Vendedor2","584143413241"),new g(3,"Vendedor3","584143413241")]}ngOnInit(){}llamar(t){console.log(t.numero),this.callNumber.callNumber("584124525546",!0).then(r=>console.log("Launched dialer!",r)).catch(r=>console.log("Error launching dialer",r))}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(M.X))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-contactos-cel-list"]],decls:3,vars:1,consts:[[1,"icon"],[3,"href",4,"ngFor","ngForOf"],[3,"href"],["name","call-outline"],[1,"number"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"ion-row"),n.YNc(2,_,7,3,"a",1),n.qZA()()),2&t&&(n.xp6(2),n.Q6J("ngForOf",r.contactos))},directives:[i.Nd,l.sg,i.wI,i.gu,i.Q$],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:var(--ion-color-black)}.number[_ngcontent-%COMP%]{font-family:medium;color:var(--ion-color-black);padding-top:10px}.title[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:14px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:30px;padding:5px;border:2px solid var(--ion-color-secondary);border-radius:50%;color:var(--ion-color-secondary)}"]}),o})();const b=[{path:"",component:(()=>{class o{constructor(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"home-page"]],template:function(t,r){1&t&&(n._UZ(0,"app-header"),n.TgZ(1,"ion-content")(2,"div",0),n._UZ(3,"app-lista-precios")(4,"app-ofertas")(5,"app-categorias-list")(6,"app-contactos")(7,"app-contactos-cel-list"),n.qZA()())},directives:[d,i.W2,u,C,O,P,v],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:transparent}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[s.Bz.forChild(b)],s.Bz]}),o})();var x=c(5642);let y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[l.ez,m.u5,i.Pc,h,x.K]]}),o})()}}]);