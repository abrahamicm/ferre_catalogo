"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5668],{5668:(z,C,c)=>{c.r(C),c.d(C,{HomePageModule:()=>U});var a=c(9808),r=c(3950),h=c(4182),g=c(7041),o=c(5e3),u=c(9019),v=c(520);let O=(()=>{class t{constructor(n){this.http=n}getCategorias(){return this.http.get(u.N.API_URL+"ferre_categorias")}getProductos(){return this.http.get(u.N.API_URL+"ferre-producto")}}return t.\u0275fac=function(n){return new(n||t)(o.LFG(v.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var P=c(3646),f=c(5141),p=c(2916),m=c(7466),x=c(6727);function M(t,e){1&t&&(o.TgZ(0,"div",8)(1,"ion-text",9),o._uU(2,"Ofer"),o.qZA(),o.TgZ(3,"ion-text",10),o._uU(4,"tas"),o.qZA()())}function y(t,e){if(1&t&&(o.TgZ(0,"div",8)(1,"ion-text",11),o._uU(2),o.qZA()()),2&t){const n=o.oxw().$implicit;o.xp6(2),o.Oqu(n.nombre)}}const b=function(t){return{ofertas:t}};function _(t,e){if(1&t){const n=o.EpF();o.TgZ(0,"div",2),o.NdJ("click",function(){const s=o.CHM(n).$implicit;return o.oxw().metodo(s.id,s.slug,s.banner,s.cabeceras)}),o.TgZ(1,"div",3),o.YNc(2,M,5,0,"div",4),o.YNc(3,y,3,1,"ng-template",null,5,o.W1O),o.TgZ(5,"div",6),o._UZ(6,"ion-icon",7),o.qZA()()()}if(2&t){const n=e.$implicit,i=o.MAs(4);o.xp6(1),o.Q6J("ngClass",o.VKq(3,b,"ofertas"==n.slug)),o.xp6(1),o.Q6J("ngIf","ofertas"==n.slug)("ngIfElse",i)}}let Z=(()=>{class t{constructor(n,i,l){this.store=n,this.router=i,this.loadingController=l,this.categorias$=new p.y,this.loading$=new p.y,this.categoria_select$=new p.y,this.store.dispatch((0,f.xG)()),this.loading=this.loadingController.create({cssClass:"my-custom-class",message:"Cargando datos"})}ngOnInit(){this.categorias$=this.store.select(m.Q$),this.loading$=this.store.select(m.bd),this.categoria_select$=this.store.select(m.Bx),this.loading$.subscribe(n=>{this.loading.then(n?i=>i.present():i=>i.dismiss())})}metodo(n,i,l,s){this.store.dispatch((0,f.A9)({categoriaId:n,categoriaSlug:i,categoriaBanner:l,cabeceras:s})),this.categoria_select$.subscribe(()=>{this.router.navigate(["/category"])}).unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(x.yh),o.Y36(g.F0),o.Y36(r.HT))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-categorias-list"]],decls:3,vars:3,consts:[[2,"margin-top","40px"],["style","width: 85%;margin:0 auto;",3,"click",4,"ngFor","ngForOf"],[2,"width","85%","margin","0 auto",3,"click"],[1,"btn-long",3,"ngClass"],["class","title",4,"ngIf","ngIfElse"],["otras",""],[1,"chevron"],["name","chevron-forward-outline"],[1,"title"],[1,"name","nombre_1"],["color","secondary",1,"name","nombre_2"],["color","primary",1,"name","nombre_1"]],template:function(n,i){1&n&&(o._UZ(0,"div",0),o.YNc(1,_,7,5,"div",1),o.ALo(2,"async")),2&n&&(o.xp6(1),o.Q6J("ngForOf",o.lcZ(2,1,i.categorias$)))},directives:[a.sg,a.mk,a.O5,r.yW,r.gu],pipes:[a.Ov],styles:[".btn-long[_ngcontent-%COMP%]{padding:10px 15px;margin:10px;border:2px solid var(--ion-color-primary);border-radius:15px;display:flex;align-items:center;justify-content:center;position:relative;background-color:#fff}.btn-long[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:10px;font-size:20px;color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-family:gretaros}.btn-long[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{font-size:20px;position:absolute;right:13px}@media (prefers-color-scheme: dark){.btn-long[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-primary)}}.btn-long.ofertas[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}.btn-long.ofertas[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast)}.btn-long.ofertas[_ngcontent-%COMP%]   .nombre_1[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast)}"]}),t})(),T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-contactos"]],decls:3,vars:0,consts:[[1,"ion-text-center"]],template:function(n,i){1&n&&(o.TgZ(0,"div",0)(1,"h3"),o._uU(2,"Contactos"),o.qZA()())},styles:["h3[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:25px;font-family:gretaros;font-style:normal;font-weight:400;font-size:24px;color:var(--ion-color-primary)}@media (prefers-color-scheme: dark){h3[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}}"]}),t})();class d{constructor(e,n,i){this.id=e,this.nombre=n,this.numero=i}}var A=c(4015);function L(t,e){if(1&t&&(o.TgZ(0,"a",2)(1,"ion-col",0),o._UZ(2,"ion-icon",3),o.TgZ(3,"ion-label",4),o._uU(4),o.qZA(),o.TgZ(5,"ion-label",4),o._uU(6),o.qZA()()()),2&t){const n=e.$implicit;o.Q6J("href",n.enlace,o.LSH),o.xp6(2),o.Q6J("name",n.icono),o.xp6(2),o.Oqu(n.nombre),o.xp6(2),o.Oqu(n.label)}}let F=(()=>{class t{constructor(n){this.callNumber=n,this.contactos=[new d(1,"Vendedor","584143413241"),new d(2,"Vendedor2","584143413241"),new d(3,"Vendedor3","584143413241")],this.items=[{id:"1",enlace:"https://api.whatsapp.com/send?phone=584143413241",nombre:"Whatsapp",icono:"logo-whatsapp",label:"584143413241"},{id:"3",enlace:"tel:584143413241",nombre:"Tel\xe9fono",icono:"call",label:"584143413241"},{id:"2",enlace:"https://www.google.co.ve/maps/place/FERREACERO+VALENCIA/@10.2514055,-67.9127437,21z/data=!4m5!3m4!1s0x0:0xc40a037e3d1487bf!8m2!3d10.2515276!4d-67.913054?hl=es&shorturl=1",nombre:"Ubicaci\xf3n",icono:"location-outline",label:"Yagua"}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(A.X))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-contactos-cel-list"]],decls:3,vars:1,consts:[[1,"icon"],[3,"href",4,"ngFor","ngForOf"],[3,"href"],[3,"name"],[1,"number"]],template:function(n,i){1&n&&(o.TgZ(0,"div",0)(1,"ion-row"),o.YNc(2,L,7,4,"a",1),o.qZA()()),2&n&&(o.xp6(2),o.Q6J("ngForOf",i.items))},directives:[r.Nd,a.sg,r.wI,r.gu,r.Q$],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:var(--ion-color-black)}.number[_ngcontent-%COMP%]{font-family:medium;color:var(--ion-color-black);padding-top:10px}.title[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:14px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:30px;padding:5px;border:2px solid var(--ion-color-secondary);border-radius:50%;color:var(--ion-color-secondary)}"]}),t})();const w=[{path:"",component:(()=>{class t{constructor(n){this.apiCatalogoService=n,n.getCategorias()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(O))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home"]],decls:6,vars:0,consts:[[1,"home-page"]],template:function(n,i){1&n&&(o._UZ(0,"app-header"),o.TgZ(1,"ion-content")(2,"div",0),o._UZ(3,"app-categorias-list")(4,"app-contactos")(5,"app-contactos-cel-list"),o.qZA()())},directives:[P.G,r.W2,Z,T,F],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color: transparent}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()}];let H=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[g.Bz.forChild(w)],g.Bz]}),t})();var $=c(4643);let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.ez,h.u5,r.Pc,H,$.K]]}),t})()}}]);