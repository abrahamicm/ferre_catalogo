"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8911],{8911:(dt,h,c)=>{c.r(h),c.d(h,{CategoryPageModule:()=>gt});var s=c(9808),T=c(4182),a=c(3950),Z=c(4643),g=c(7041),r=c(2916),f=c(7466),t=c(5e3),p=c(6727);const I=function(o){return{"background-image":o}};let w=(()=>{class o{constructor(e,n){this.router=e,this.navCtrl=n}ngOnInit(){}goToBack(){this.navCtrl.back()}goToEdit(){this.router.navigate(["edit-profile"])}goToSetting(){this.router.navigate(["setting"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.F0),t.Y36(a.SH))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-header-back"]],inputs:{backgroundImage:"backgroundImage"},decls:4,vars:3,consts:[[1,"img",3,"ngStyle"],[1,"icon"],["name","chevron-back-outline",1,"back",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"div",0)(2,"div",1)(3,"ion-icon",2),t.NdJ("click",function(){return n.goToBack()}),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("ngStyle",t.VKq(1,I,"url("+n.backgroundImage+")")))},directives:[a.Gu,s.PC,a.gu],styles:[".img[_ngcontent-%COMP%]{height:30vh;width:100%;background-position:center center;background-size:cover;background-repeat:no-repeat;position:relative;margin-bottom:50px}.img[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:#fff}.img[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-secondary);border-radius:100%;opacity:1;z-index:9999;left:14px;top:20px;position:absolute;font-size:22px;padding:3px}.main-content[_ngcontent-%COMP%]{padding:24px;margin-top:10px}.main-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-bottom:5px}.main-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;font-family:bold;color:var(--ion-color-dark)}.main-content[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{font-size:13px;font-family:bold}.main-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:14px;font-family:medium;color:var(--ion-color-medium)}.main-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:20px;color:var(--ion-color-medium);padding-right:10px}.main-content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{padding-bottom:10px}.main-content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;color:var(--ion-color-dark);padding:10px 0 5px}.main-content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:bold}.main-content[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100px;margin:10px 0;border-bottom:3px solid var(--ion-color-primary)}.main-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-top:2px solid var(--ion-color-light);font-size:14px;font-family:medium}.main-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{height:20px}"]}),o})();var b=c(5709);const x=o=>o.productos,C=(0,p.P1)(x,o=>o.items),M=(0,p.P1)(x,o=>o.loading);var O=c(7917),P=c(1709),v=c(4850),y=c(3185);let $=(()=>{class o{constructor(){}reamplazar(e){let n;return n=e,n=n.replace("&#8242;",'"'),n=n.replace("&#8216;","\u2018"),n=n.replace("&#8211;","\u2013"),n}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function z(o,i){if(1&o&&(t.TgZ(0,"h3"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.tipo)}}function N(o,i){if(1&o&&(t.TgZ(0,"h4"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.subtipo)}}function Y(o,i){if(1&o&&(t.TgZ(0,"ion-text",15)(1,"b"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.split(":")[1])}}const A=function(o,i){return{centro:o,derecha:i}};function L(o,i){if(1&o&&(t.TgZ(0,"ion-col",13),t.YNc(1,Y,3,1,"ion-text",14),t.qZA()),2&o){const e=i.$implicit,n=t.oxw().$implicit;t.Q6J("ngClass",t.WLB(2,A,!e.includes("Precio"),e.includes("Precio"))),t.xp6(1),t.Q6J("ngIf",n.mostrarSubTipo&&""!=n.subtipo||n.mostrarTipo&&""!=n.tipo)}}function B(o,i){if(1&o&&(t.TgZ(0,"ion-col",16)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit,n=t.oxw();t.xp6(2),t.hij(" ",n.f.reamplazar(e.nombre),"")}}function F(o,i){if(1&o&&(t.TgZ(0,"ion-col",17)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.mts,"")}}function J(o,i){1&o&&(t.TgZ(0,"span"),t._uU(1,"MM"),t.qZA())}function U(o,i){if(1&o&&(t.TgZ(0,"ion-col",18)(1,"div"),t._uU(2),t.YNc(3,J,2,0,"span",3),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.espesor),t.xp6(1),t.Q6J("ngIf",""!=e.espesor)}}function q(o,i){if(1&o&&(t.TgZ(0,"ion-col",19)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.medida)}}function Q(o,i){if(1&o&&(t.TgZ(0,"ion-col",20)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.marca)}}function k(o,i){if(1&o&&(t.TgZ(0,"ion-col",21)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.peso)}}function S(o,i){if(1&o&&(t.TgZ(0,"ion-col",22)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.hij("$",e.precio,"")}}function j(o,i){if(1&o&&(t.TgZ(0,"div",1)(1,"ion-text",2),t.YNc(2,z,2,1,"h3",3),t.YNc(3,N,2,1,"h4",3),t.qZA(),t.TgZ(4,"ion-row"),t.YNc(5,L,2,5,"ion-col",4),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"ion-row",5),t.YNc(8,B,3,1,"ion-col",6),t.YNc(9,F,3,1,"ion-col",7),t.YNc(10,U,4,2,"ion-col",8),t.YNc(11,q,3,1,"ion-col",9),t.YNc(12,Q,3,1,"ion-col",10),t.YNc(13,k,3,1,"ion-col",11),t.YNc(14,S,3,1,"ion-col",12),t.qZA()()),2&o){const e=i.$implicit,n=t.oxw();t.xp6(2),t.Q6J("ngIf",e.mostrarTipo&&"default"!=e.tipo),t.xp6(1),t.Q6J("ngIf",e.mostrarSubTipo&&"default"!=e.subtipo),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,10,n.categoria_select$).cabeceras),t.xp6(3),t.Q6J("ngIf",n.cabeceras.includes("nombre")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("mts")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("espesor")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("medida")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("marca")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("Peso")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("precio"))}}let H=(()=>{class o{constructor(e,n,l,d,u,pt){this.store=e,this.loadingController=n,this.router=l,this.cd=d,this.o=u,this.f=pt,this.productos$=new r.y,this.sedeId$=new r.y,this.categoria_select$=new r.y,this.loading$=new r.y,this.loading=this.loadingController.create({cssClass:"my-custom-class",message:"Cargando datos"})}ngOnInit(){this.productos$=this.store.select(C),this.loading$=this.store.select(M),this.sedeId$=this.store.select(O.eJ),this.categoria_select$=this.store.select(f.Bx),this.loading$.subscribe(e=>{this.loading.then(e?n=>n.present():n=>n.dismiss())}),this.sedeId$.pipe((0,P.zg)(e=>this.categoria_select$.pipe((0,v.U)(n=>[e,n.categoriaId])))).subscribe(e=>{this.store.dispatch((0,b.m)({sedeId:e[0],categoriaId:e[1]}))}).unsubscribe(),this.router.events.subscribe(e=>{e instanceof g.m2&&"/portada"==e.urlAfterRedirects&&this.loading.then(n=>n.dismiss())}),this.categoria_select$.subscribe(e=>this.cabeceras=e.cabeceras.toString()),this.productos$.pipe().subscribe(e=>{this.productos=e})}onlyUnique(e,n,l){return l.indexOf(e)===n}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.yh),t.Y36(a.HT),t.Y36(g.F0),t.Y36(t.sBO),t.Y36(y.G),t.Y36($))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-base-material-list"]],inputs:{MM:"MM",Mts:"Mts",Medida:"Medida",Marca:"Marca",Peso:"Peso",Precio:"Precio",Nombre:"Nombre"},decls:2,vars:1,consts:[["class","zebra",4,"ngFor","ngForOf"],[1,"zebra"],["color","primary"],[4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"zebra-row"],["class","izquierda a",4,"ngIf"],["class","centro b",4,"ngIf"],["class","centro c",4,"ngIf"],["class","centro d","size","5",4,"ngIf"],["class","centro e",4,"ngIf"],["class","centro f",4,"ngIf"],["class","derecha g",4,"ngIf"],[3,"ngClass"],["color","secondary",4,"ngIf"],["color","secondary"],[1,"izquierda","a"],[1,"centro","b"],[1,"centro","c"],["size","5",1,"centro","d"],[1,"centro","e"],[1,"centro","f"],[1,"derecha","g"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-grid"),t.YNc(1,j,15,12,"div",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.productos))},directives:[a.jY,s.sg,a.yW,s.O5,a.Nd,a.wI,s.mk],pipes:[s.Ov],styles:[".derecha[_ngcontent-%COMP%]{text-align:right}.centro[_ngcontent-%COMP%]{text-align:center}.izquierda[_ngcontent-%COMP%]{text-align:left}.zebra[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{background:#fefbe747}.zebra[_ngcontent-%COMP%]:nth-of-type(odd)   ion-row.zebra-row[_ngcontent-%COMP%]{background:#002f8736}.Precio_div[_ngcontent-%COMP%]{text-align:right;margin-left:15px}h3[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:25px;font-family:gretaros;font-style:normal;font-weight:400;font-size:25px;text-align:center;color:var(--ion-color-secondary)}h4[_ngcontent-%COMP%]{margin-bottom:20px;font-family:gretaros;font-style:normal;font-weight:400;font-size:18px;text-align:left;color:var(--ion-color-primary);text-transform:uppercase}@media (prefers-color-scheme: dark){h3[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}h4[_ngcontent-%COMP%]{color:#fff}}"]}),o})();var R=c(2994);function E(o,i){if(1&o&&(t.TgZ(0,"ion-col",2)(1,"ion-text",3)(2,"b"),t._uU(3),t.qZA()()()),2&o){const e=i.$implicit;t.xp6(3),t.Oqu(e.split(":")[1])}}function X(o,i){if(1&o&&(t.TgZ(0,"ion-col",13)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.nombre,"")}}function G(o,i){if(1&o&&(t.TgZ(0,"ion-col",14)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.mts,"")}}function W(o,i){1&o&&(t.TgZ(0,"span"),t._uU(1,"MM"),t.qZA())}function K(o,i){if(1&o&&(t.TgZ(0,"ion-col",15)(1,"div"),t._uU(2),t.YNc(3,W,2,0,"span",16),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.espesor),t.xp6(1),t.Q6J("ngIf",""!=e.espesor)}}function V(o,i){if(1&o&&(t.TgZ(0,"ion-col",17)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.medida)}}function D(o,i){if(1&o&&(t.TgZ(0,"ion-col",18)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.marca)}}function tt(o,i){if(1&o&&(t.TgZ(0,"ion-col",19)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.peso)}}function ot(o,i){if(1&o&&(t.TgZ(0,"ion-col",20)(1,"div"),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.hij("$",e.precio,"")}}function et(o,i){if(1&o&&(t.TgZ(0,"div",4)(1,"ion-row",5),t.YNc(2,X,3,1,"ion-col",6),t.YNc(3,G,3,1,"ion-col",7),t.YNc(4,K,4,2,"ion-col",8),t.YNc(5,V,3,1,"ion-col",9),t.YNc(6,D,3,1,"ion-col",10),t.YNc(7,tt,3,1,"ion-col",11),t.YNc(8,ot,3,1,"ion-col",12),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.cabeceras.includes("nombre")),t.xp6(1),t.Q6J("ngIf",e.cabeceras.includes("mts")),t.xp6(1),t.Q6J("ngIf",e.cabeceras.includes("espesor")),t.xp6(1),t.Q6J("ngIf",e.cabeceras.includes("medida")),t.xp6(1),t.Q6J("ngIf",e.cabeceras.includes("marca")),t.xp6(1),t.Q6J("ngIf",e.cabeceras.includes("Peso")),t.xp6(1),t.Q6J("ngIf",e.cabeceras.includes("precio"))}}let nt=(()=>{class o{constructor(e,n,l,d,u){this.store=e,this.loadingController=n,this.router=l,this.cd=d,this.o=u,this.productos$=new r.y,this.sedeId$=new r.y,this.categoria_select$=new r.y,this.loading$=new r.y,this.loading=this.loadingController.create({cssClass:"my-custom-class",message:"Cargando datos"})}ngOnInit(){this.productos$=this.store.select(C),this.loading$=this.store.select(M),this.sedeId$=this.store.select(O.eJ),this.categoria_select$=this.store.select(f.Bx),this.loading$.subscribe(e=>{this.loading.then(e?n=>n.present():n=>n.dismiss())}),this.sedeId$.pipe((0,P.zg)(e=>this.categoria_select$.pipe((0,v.U)(n=>[e,n.categoriaId])))).subscribe(e=>{this.store.dispatch((0,b.m)({sedeId:e[0],categoriaId:e[1]}))}).unsubscribe(),this.router.events.subscribe(e=>{e instanceof g.m2&&"/portada"==e.urlAfterRedirects&&this.loading.then(n=>n.dismiss())}),this.categoria_select$.subscribe(e=>this.cabeceras=e.cabeceras.toString()),this.productos$.pipe((0,R.b)(console.table)).subscribe(e=>{this.productos=e})}onlyUnique(e,n,l){return l.indexOf(e)===n}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.yh),t.Y36(a.HT),t.Y36(g.F0),t.Y36(t.sBO),t.Y36(y.G))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-oferta-list"]],inputs:{MM:"MM",Mts:"Mts",Medida:"Medida",Marca:"Marca",Peso:"Peso",Precio:"Precio",Nombre:"Nombre"},decls:5,vars:4,consts:[["class","centro",4,"ngFor","ngForOf"],["class","zebra",4,"ngFor","ngForOf"],[1,"centro"],["color","secondary"],[1,"zebra"],[1,"zebra-row"],["class","izquierda a",4,"ngIf"],["class","centro b",4,"ngIf"],["class","centro c",4,"ngIf"],["class","centro d","size","5",4,"ngIf"],["class","centro e",4,"ngIf"],["class","centro f",4,"ngIf"],["class","derecha g",4,"ngIf"],[1,"izquierda","a"],[1,"centro","b"],[1,"centro","c"],[4,"ngIf"],["size","5",1,"centro","d"],[1,"centro","e"],[1,"centro","f"],[1,"derecha","g"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-grid")(1,"ion-row"),t.YNc(2,E,4,1,"ion-col",0),t.ALo(3,"async"),t.qZA(),t.YNc(4,et,9,7,"div",1),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,2,n.categoria_select$).cabeceras),t.xp6(2),t.Q6J("ngForOf",n.productos))},directives:[a.jY,a.Nd,s.sg,a.wI,a.yW,s.O5],pipes:[s.Ov],styles:[".derecha[_ngcontent-%COMP%]{text-align:right}.centro[_ngcontent-%COMP%]{text-align:center}.izquierda[_ngcontent-%COMP%]{text-align:left}.zebra[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{background:#fefbe747}.zebra[_ngcontent-%COMP%]:nth-of-type(odd)   ion-row.zebra-row[_ngcontent-%COMP%]{background:#002f8736}.Precio_div[_ngcontent-%COMP%]{text-align:right;margin-left:15px}h3[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:25px;font-family:gretaros;font-style:normal;font-weight:400;font-size:16px;color:var(--ion-color-secondary)}@media (prefers-color-scheme: dark){h3[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}}"]}),o})();class m{constructor(i,e,n,l,d){this.id=i,this.texto=e,this.icono=n,this.enlace=l,this.tipoEnlace=d}}var _=c(9019);function it(o,i){if(1&o&&(t.TgZ(0,"a",3)(1,"ion-col",4),t._UZ(2,"ion-icon",5),t.TgZ(3,"ion-label",6),t._uU(4),t.qZA()()()),2&o){const e=i.$implicit;t.Q6J("href",e.enlace,t.LSH),t.xp6(2),t.Q6J("name",e.icono),t.xp6(2),t.Oqu(e.texto)}}let ct=(()=>{class o{constructor(){this.numero=_.N.NUMERO,this.labelNUmero=_.N.LABEL_NUMERO,this.ubicacion=_.N.UBICACION,this.botones=[new m(1,this.labelNUmero,"call",`tel:\n    ${this.numero}`,"tel"),new m(2,this.labelNUmero,"logo-whatsapp",`https://api.whatsapp.com/send?phone=${this.numero}`,"whatsapp"),new m(2,"Instagram","logo-instagram","https://www.instagram.com/ferreacerovalencia/","ferreacero"),new m(2,"Ubicaci\xf3n","location",this.ubicacion,"ferreacero")]}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-footer2"]],decls:3,vars:1,consts:[[1,"icon","border-top"],[1,"ion-justify-content-around"],[3,"href",4,"ngFor","ngForOf"],[3,"href"],[1,"icon"],[3,"name"],[1,"title"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"ion-row",1),t.YNc(2,it,5,3,"a",2),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngForOf",n.botones))},directives:[a.Nd,s.sg,a.wI,a.gu,a.Q$],styles:["a[_ngcontent-%COMP%]{text-decoration:none}.border-top[_ngcontent-%COMP%]{border-top:1px solid var(--ion-color-secondary)}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:14px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:30px;padding:5px;border:none;border-radius:50%;color:var(--ion-color-secondary)}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-family:medium;color:var(--ion-color-black);padding-top:10px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--ion-color-medium)}"]}),o})();function at(o,i){1&o&&t._UZ(0,"app-base-material-list",2),2&o&&t.Q6J("Mts","Metros")("Medida","Medida")("Precio","Precio")}function st(o,i){1&o&&t._UZ(0,"app-oferta-list",2),2&o&&t.Q6J("Mts","Metros")("Medida","Medida")("Precio","Precio")}const rt=[{path:"",component:(()=>{class o{constructor(e){this.store=e,this.loading$=new r.y,this.categoria_select$=new r.y}ngOnInit(){this.categoria_select$=this.store.select(f.Bx),this.categoria_select$.subscribe(e=>{this.banner_categoria=null==e.categoriaBanner?"":e.categoriaBanner}).unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-category"]],decls:6,vars:7,consts:[[3,"backgroundImage"],["class","base-material-list",3,"Mts","Medida","Precio",4,"ngIf"],[1,"base-material-list",3,"Mts","Medida","Precio"]],template:function(e,n){1&e&&(t._UZ(0,"app-header-back",0),t.YNc(1,at,1,3,"app-base-material-list",1),t.ALo(2,"async"),t.YNc(3,st,1,3,"app-oferta-list",1),t.ALo(4,"async"),t._UZ(5,"app-footer2")),2&e&&(t.Q6J("backgroundImage",n.banner_categoria),t.xp6(1),t.Q6J("ngIf","ofertas"!=t.lcZ(2,3,n.categoria_select$).categoriaSlug),t.xp6(2),t.Q6J("ngIf","ofertas"==t.lcZ(4,5,n.categoria_select$).categoriaSlug))},directives:[w,s.O5,H,nt,ct],pipes:[s.Ov],styles:[".base-material-list[_ngcontent-%COMP%]{margin-bottom:auto}app-base-material-list[_ngcontent-%COMP%]{overflow:auto}"]}),o})()}];let lt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.Bz.forChild(rt)],g.Bz]}),o})(),gt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.ez,T.u5,a.Pc,Z.K,lt]]}),o})()}}]);