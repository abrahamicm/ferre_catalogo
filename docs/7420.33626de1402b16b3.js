"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7420],{7420:(lt,u,a)=>{a.r(u),a.d(u,{CategoryPageModule:()=>rt});var s=a(9808),y=a(4182),c=a(3950),T=a(4643),g=a(7041),r=a(2916),f=a(7466),t=a(5e3),p=a(6727);const Z=function(e){return{"background-image":e}};let I=(()=>{class e{constructor(o,n){this.router=o,this.navCtrl=n}ngOnInit(){}goToBack(){this.navCtrl.back()}goToEdit(){this.router.navigate(["edit-profile"])}goToSetting(){this.router.navigate(["setting"])}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g.F0),t.Y36(c.SH))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header-back"]],inputs:{backgroundImage:"backgroundImage"},decls:4,vars:3,consts:[[1,"img",3,"ngStyle"],[1,"icon"],["name","chevron-back-outline",1,"back",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"ion-header")(1,"div",0)(2,"div",1)(3,"ion-icon",2),t.NdJ("click",function(){return n.goToBack()}),t.qZA()()()()),2&o&&(t.xp6(1),t.Q6J("ngStyle",t.VKq(1,Z,"url("+n.backgroundImage+")")))},directives:[c.Gu,s.PC,c.gu],styles:[".img[_ngcontent-%COMP%]{height:30vh;width:100%;background-position:center center;background-size:cover;background-repeat:no-repeat;position:relative;margin-bottom:50px}.img[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:#fff}.img[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-secondary);border-radius:100%;opacity:1;z-index:9999;left:14px;top:20px;position:absolute;font-size:22px;padding:3px}.main-content[_ngcontent-%COMP%]{padding:24px;margin-top:10px}.main-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-bottom:5px}.main-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;font-family:bold;color:var(--ion-color-dark)}.main-content[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{font-size:13px;font-family:bold}.main-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:14px;font-family:medium;color:var(--ion-color-medium)}.main-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:20px;color:var(--ion-color-medium);padding-right:10px}.main-content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{padding-bottom:10px}.main-content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;color:var(--ion-color-dark);padding:10px 0 5px}.main-content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:bold}.main-content[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100px;margin:10px 0;border-bottom:3px solid var(--ion-color-primary)}.main-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-top:2px solid var(--ion-color-light);font-size:14px;font-family:medium}.main-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{height:20px}"]}),e})();var h=a(5709);const x=e=>e.productos,b=(0,p.P1)(x,e=>e.items),C=(0,p.P1)(x,e=>e.loading);var M=a(7917),O=a(1709),P=a(4850),v=a(3185);function w(e,i){if(1&e&&(t.TgZ(0,"h3"),t._uU(1),t.qZA()),2&e){const o=t.oxw().$implicit;t.xp6(1),t.Oqu(o.tipo)}}function $(e,i){if(1&e&&(t.TgZ(0,"h4"),t._uU(1),t.qZA()),2&e){const o=t.oxw().$implicit;t.xp6(1),t.Oqu(o.subtipo)}}function z(e,i){if(1&e&&(t.TgZ(0,"ion-text",15)(1,"b"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.split(":")[1])}}const A=function(e,i){return{centro:e,derecha:i}};function Y(e,i){if(1&e&&(t.TgZ(0,"ion-col",13),t.YNc(1,z,3,1,"ion-text",14),t.qZA()),2&e){const o=i.$implicit,n=t.oxw().$implicit;t.Q6J("ngClass",t.WLB(2,A,!o.includes("Precio"),o.includes("Precio"))),t.xp6(1),t.Q6J("ngIf",n.mostrarSubTipo||n.mostrarTipo)}}function L(e,i){if(1&e&&(t.TgZ(0,"ion-col",16)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.hij(" ",o.nombre,"")}}function J(e,i){if(1&e&&(t.TgZ(0,"ion-col",17)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.hij(" ",o.mts,"")}}function q(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"MM"),t.qZA())}function B(e,i){if(1&e&&(t.TgZ(0,"ion-col",18)(1,"div"),t._uU(2),t.YNc(3,q,2,0,"span",3),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.espesor),t.xp6(1),t.Q6J("ngIf",""!=o.espesor)}}function F(e,i){if(1&e&&(t.TgZ(0,"ion-col",19)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.medida)}}function N(e,i){if(1&e&&(t.TgZ(0,"ion-col",20)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.marca)}}function Q(e,i){if(1&e&&(t.TgZ(0,"ion-col",21)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.peso)}}function U(e,i){if(1&e&&(t.TgZ(0,"ion-col",22)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.hij("$",o.precio,"")}}function k(e,i){if(1&e&&(t.TgZ(0,"div",1)(1,"ion-text",2),t.YNc(2,w,2,1,"h3",3),t.YNc(3,$,2,1,"h4",3),t.qZA(),t.TgZ(4,"ion-row"),t.YNc(5,Y,2,5,"ion-col",4),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"ion-row",5),t.YNc(8,L,3,1,"ion-col",6),t.YNc(9,J,3,1,"ion-col",7),t.YNc(10,B,4,2,"ion-col",8),t.YNc(11,F,3,1,"ion-col",9),t.YNc(12,N,3,1,"ion-col",10),t.YNc(13,Q,3,1,"ion-col",11),t.YNc(14,U,3,1,"ion-col",12),t.qZA()()),2&e){const o=i.$implicit,n=t.oxw();t.xp6(2),t.Q6J("ngIf",o.mostrarTipo&&"default"!=o.tipo),t.xp6(1),t.Q6J("ngIf",o.mostrarSubTipo&&"default"!=o.subtipo),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,10,n.categoria_select$).cabeceras),t.xp6(3),t.Q6J("ngIf",n.cabeceras.includes("nombre")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("mts")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("espesor")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("medida")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("marca")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("Peso")),t.xp6(1),t.Q6J("ngIf",n.cabeceras.includes("precio"))}}let S=(()=>{class e{constructor(o,n,l,d,_){this.store=o,this.loadingController=n,this.router=l,this.cd=d,this.o=_,this.productos$=new r.y,this.sedeId$=new r.y,this.categoria_select$=new r.y,this.loading$=new r.y,this.loading=this.loadingController.create({cssClass:"my-custom-class",message:"Cargando datos"})}ngOnInit(){this.productos$=this.store.select(b),this.loading$=this.store.select(C),this.sedeId$=this.store.select(M.eJ),this.categoria_select$=this.store.select(f.Bx),this.loading$.subscribe(o=>{this.loading.then(o?n=>n.present():n=>n.dismiss())}),this.sedeId$.pipe((0,O.zg)(o=>this.categoria_select$.pipe((0,P.U)(n=>[o,n.categoriaId])))).subscribe(o=>{this.store.dispatch((0,h.m)({sedeId:o[0],categoriaId:o[1]}))}).unsubscribe(),this.router.events.subscribe(o=>{o instanceof g.m2&&"/portada"==o.urlAfterRedirects&&this.loading.then(n=>n.dismiss())}),this.categoria_select$.subscribe(o=>this.cabeceras=o.cabeceras.toString()),this.productos$.pipe().subscribe(o=>{this.productos=o})}onlyUnique(o,n,l){return l.indexOf(o)===n}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.yh),t.Y36(c.HT),t.Y36(g.F0),t.Y36(t.sBO),t.Y36(v.G))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-base-material-list"]],inputs:{MM:"MM",Mts:"Mts",Medida:"Medida",Marca:"Marca",Peso:"Peso",Precio:"Precio",Nombre:"Nombre"},decls:2,vars:1,consts:[["class","zebra",4,"ngFor","ngForOf"],[1,"zebra"],["color","primary"],[4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"zebra-row"],["class","izquierda a",4,"ngIf"],["class","centro b",4,"ngIf"],["class","centro c",4,"ngIf"],["class","centro d","size","5",4,"ngIf"],["class","centro e",4,"ngIf"],["class","centro f",4,"ngIf"],["class","derecha g",4,"ngIf"],[3,"ngClass"],["color","secondary",4,"ngIf"],["color","secondary"],[1,"izquierda","a"],[1,"centro","b"],[1,"centro","c"],["size","5",1,"centro","d"],[1,"centro","e"],[1,"centro","f"],[1,"derecha","g"]],template:function(o,n){1&o&&(t.TgZ(0,"ion-grid"),t.YNc(1,k,15,12,"div",0),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",n.productos))},directives:[c.jY,s.sg,c.yW,s.O5,c.Nd,c.wI,s.mk],pipes:[s.Ov],styles:[".derecha[_ngcontent-%COMP%]{text-align:right}.centro[_ngcontent-%COMP%]{text-align:center}.izquierda[_ngcontent-%COMP%]{text-align:left}.zebra[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{background:#fefbe747}.zebra[_ngcontent-%COMP%]:nth-of-type(odd)   ion-row.zebra-row[_ngcontent-%COMP%]{background:#002f8736}.Precio_div[_ngcontent-%COMP%]{text-align:right;margin-left:15px}h3[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:25px;font-family:gretaros;font-style:normal;font-weight:400;font-size:25px;text-align:center;color:var(--ion-color-secondary)}h4[_ngcontent-%COMP%]{margin-bottom:20px;font-family:gretaros;font-style:normal;font-weight:400;font-size:18px;text-align:left;color:var(--ion-color-primary);text-transform:uppercase}@media (prefers-color-scheme: dark){h3[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}h4[_ngcontent-%COMP%]{color:#fff}}"]}),e})();var j=a(2994);function H(e,i){if(1&e&&(t.TgZ(0,"ion-col",2)(1,"ion-text",3)(2,"b"),t._uU(3),t.qZA()()()),2&e){const o=i.$implicit;t.xp6(3),t.Oqu(o.split(":")[1])}}function R(e,i){if(1&e&&(t.TgZ(0,"ion-col",13)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.hij(" ",o.nombre,"")}}function E(e,i){if(1&e&&(t.TgZ(0,"ion-col",14)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.hij(" ",o.mts,"")}}function X(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"MM"),t.qZA())}function G(e,i){if(1&e&&(t.TgZ(0,"ion-col",15)(1,"div"),t._uU(2),t.YNc(3,X,2,0,"span",16),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.espesor),t.xp6(1),t.Q6J("ngIf",""!=o.espesor)}}function W(e,i){if(1&e&&(t.TgZ(0,"ion-col",17)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.medida)}}function K(e,i){if(1&e&&(t.TgZ(0,"ion-col",18)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.marca)}}function V(e,i){if(1&e&&(t.TgZ(0,"ion-col",19)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.peso)}}function D(e,i){if(1&e&&(t.TgZ(0,"ion-col",20)(1,"div"),t._uU(2),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.hij("$",o.precio,"")}}function tt(e,i){if(1&e&&(t.TgZ(0,"div",4)(1,"ion-row",5),t.YNc(2,R,3,1,"ion-col",6),t.YNc(3,E,3,1,"ion-col",7),t.YNc(4,G,4,2,"ion-col",8),t.YNc(5,W,3,1,"ion-col",9),t.YNc(6,K,3,1,"ion-col",10),t.YNc(7,V,3,1,"ion-col",11),t.YNc(8,D,3,1,"ion-col",12),t.qZA()()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("ngIf",o.cabeceras.includes("nombre")),t.xp6(1),t.Q6J("ngIf",o.cabeceras.includes("mts")),t.xp6(1),t.Q6J("ngIf",o.cabeceras.includes("espesor")),t.xp6(1),t.Q6J("ngIf",o.cabeceras.includes("medida")),t.xp6(1),t.Q6J("ngIf",o.cabeceras.includes("marca")),t.xp6(1),t.Q6J("ngIf",o.cabeceras.includes("Peso")),t.xp6(1),t.Q6J("ngIf",o.cabeceras.includes("precio"))}}let ot=(()=>{class e{constructor(o,n,l,d,_){this.store=o,this.loadingController=n,this.router=l,this.cd=d,this.o=_,this.productos$=new r.y,this.sedeId$=new r.y,this.categoria_select$=new r.y,this.loading$=new r.y,this.loading=this.loadingController.create({cssClass:"my-custom-class",message:"Cargando datos"})}ngOnInit(){this.productos$=this.store.select(b),this.loading$=this.store.select(C),this.sedeId$=this.store.select(M.eJ),this.categoria_select$=this.store.select(f.Bx),this.loading$.subscribe(o=>{this.loading.then(o?n=>n.present():n=>n.dismiss())}),this.sedeId$.pipe((0,O.zg)(o=>this.categoria_select$.pipe((0,P.U)(n=>[o,n.categoriaId])))).subscribe(o=>{this.store.dispatch((0,h.m)({sedeId:o[0],categoriaId:o[1]}))}).unsubscribe(),this.router.events.subscribe(o=>{o instanceof g.m2&&"/portada"==o.urlAfterRedirects&&this.loading.then(n=>n.dismiss())}),this.categoria_select$.subscribe(o=>this.cabeceras=o.cabeceras.toString()),this.productos$.pipe((0,j.b)(console.table)).subscribe(o=>{this.productos=o})}onlyUnique(o,n,l){return l.indexOf(o)===n}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.yh),t.Y36(c.HT),t.Y36(g.F0),t.Y36(t.sBO),t.Y36(v.G))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-oferta-list"]],inputs:{MM:"MM",Mts:"Mts",Medida:"Medida",Marca:"Marca",Peso:"Peso",Precio:"Precio",Nombre:"Nombre"},decls:5,vars:4,consts:[["class","centro",4,"ngFor","ngForOf"],["class","zebra",4,"ngFor","ngForOf"],[1,"centro"],["color","secondary"],[1,"zebra"],[1,"zebra-row"],["class","izquierda a",4,"ngIf"],["class","centro b",4,"ngIf"],["class","centro c",4,"ngIf"],["class","centro d","size","5",4,"ngIf"],["class","centro e",4,"ngIf"],["class","centro f",4,"ngIf"],["class","derecha g",4,"ngIf"],[1,"izquierda","a"],[1,"centro","b"],[1,"centro","c"],[4,"ngIf"],["size","5",1,"centro","d"],[1,"centro","e"],[1,"centro","f"],[1,"derecha","g"]],template:function(o,n){1&o&&(t.TgZ(0,"ion-grid")(1,"ion-row"),t.YNc(2,H,4,1,"ion-col",0),t.ALo(3,"async"),t.qZA(),t.YNc(4,tt,9,7,"div",1),t.qZA()),2&o&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,2,n.categoria_select$).cabeceras),t.xp6(2),t.Q6J("ngForOf",n.productos))},directives:[c.jY,c.Nd,s.sg,c.wI,c.yW,s.O5],pipes:[s.Ov],styles:[".derecha[_ngcontent-%COMP%]{text-align:right}.centro[_ngcontent-%COMP%]{text-align:center}.izquierda[_ngcontent-%COMP%]{text-align:left}.zebra[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{background:#fefbe747}.zebra[_ngcontent-%COMP%]:nth-of-type(odd)   ion-row.zebra-row[_ngcontent-%COMP%]{background:#002f8736}.Precio_div[_ngcontent-%COMP%]{text-align:right;margin-left:15px}h3[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:25px;font-family:gretaros;font-style:normal;font-weight:400;font-size:16px;color:var(--ion-color-secondary)}@media (prefers-color-scheme: dark){h3[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}}"]}),e})();class m{constructor(i,o,n,l,d){this.id=i,this.texto=o,this.icono=n,this.enlace=l,this.tipoEnlace=d}}function et(e,i){if(1&e&&(t.TgZ(0,"a",3)(1,"ion-col",4),t._UZ(2,"ion-icon",5),t.TgZ(3,"ion-label",6),t._uU(4),t.qZA()()()),2&e){const o=i.$implicit;t.Q6J("href",o.enlace,t.LSH),t.xp6(2),t.Q6J("name",o.icono),t.xp6(2),t.Oqu(o.texto)}}let nt=(()=>{class e{constructor(){this.botones=[new m(1,"0414341324","call","tel:58414341324","tel"),new m(2,"0414341324","logo-whatsapp","https://api.whatsapp.com/send?phone=58414341324","whatsapp"),new m(2,"ferreacero","logo-instagram","https://www.instagram.com/ferreacerovalencia/","ferreacero"),new m(2,"ferreacero","location","https://www.google.co.ve/maps/place/FERREACERO+VALENCIA/@10.2514055,-67.9127437,21z/data=!4m5!3m4!1s0x0:0xc40a037e3d1487bf!8m2!3d10.2515276!4d-67.913054?hl=es&shorturl=1","ferreacero")]}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer2"]],decls:3,vars:1,consts:[[1,"icon","border-top"],[1,"ion-justify-content-around"],[3,"href",4,"ngFor","ngForOf"],[3,"href"],[1,"icon"],[3,"name"],[1,"title"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"ion-row",1),t.YNc(2,et,5,3,"a",2),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngForOf",n.botones))},directives:[c.Nd,s.sg,c.wI,c.gu,c.Q$],styles:["a[_ngcontent-%COMP%]{text-decoration:none}.border-top[_ngcontent-%COMP%]{border-top:1px solid var(--ion-color-secondary)}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:14px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:30px;padding:5px;border:none;border-radius:50%;color:var(--ion-color-secondary)}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-family:medium;color:var(--ion-color-black);padding-top:10px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--ion-color-medium)}"]}),e})();function it(e,i){1&e&&t._UZ(0,"app-base-material-list",2),2&e&&t.Q6J("Mts","Metros")("Medida","Medida")("Precio","Precio")}function ct(e,i){1&e&&t._UZ(0,"app-oferta-list",2),2&e&&t.Q6J("Mts","Metros")("Medida","Medida")("Precio","Precio")}const at=[{path:"",component:(()=>{class e{constructor(o){this.store=o,this.loading$=new r.y,this.categoria_select$=new r.y}ngOnInit(){this.categoria_select$=this.store.select(f.Bx),this.categoria_select$.subscribe(o=>{this.banner_categoria=null==o.categoriaBanner?"":o.categoriaBanner}).unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-category"]],decls:6,vars:7,consts:[[3,"backgroundImage"],["class","base-material-list",3,"Mts","Medida","Precio",4,"ngIf"],[1,"base-material-list",3,"Mts","Medida","Precio"]],template:function(o,n){1&o&&(t._UZ(0,"app-header-back",0),t.YNc(1,it,1,3,"app-base-material-list",1),t.ALo(2,"async"),t.YNc(3,ct,1,3,"app-oferta-list",1),t.ALo(4,"async"),t._UZ(5,"app-footer2")),2&o&&(t.Q6J("backgroundImage",n.banner_categoria),t.xp6(1),t.Q6J("ngIf","ofertas"!=t.lcZ(2,3,n.categoria_select$).categoriaSlug),t.xp6(2),t.Q6J("ngIf","ofertas"==t.lcZ(4,5,n.categoria_select$).categoriaSlug))},directives:[I,s.O5,S,ot,nt],pipes:[s.Ov],styles:[".base-material-list[_ngcontent-%COMP%]{margin-bottom:auto}app-base-material-list[_ngcontent-%COMP%]{overflow:auto}"]}),e})()}];let st=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(at)],g.Bz]}),e})(),rt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,y.u5,c.Pc,T.K,st]]}),e})()}}]);