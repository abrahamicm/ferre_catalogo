"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3491],{3491:(U,C,r)=>{r.r(C),r.d(C,{HomePageModule:()=>z});var a=r(9808),c=r(3950),h=r(4182),g=r(7041),t=r(5e3),u=r(9019),v=r(520);let P=(()=>{class o{constructor(n){this.http=n}getCategorias(){return this.http.get(u.N.API_URL+"ferre_categorias")}getProductos(){return this.http.get(u.N.API_URL+"ferre-producto")}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(v.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var O=r(3646),f=r(5141),p=r(2916),m=r(7466),x=r(6727);function M(o,e){1&o&&(t.TgZ(0,"div",7)(1,"ion-text",8),t._uU(2,"Ofer"),t.qZA(),t.TgZ(3,"ion-text",9),t._uU(4,"tas"),t.qZA()())}function y(o,e){if(1&o&&(t.TgZ(0,"div",7)(1,"ion-text",10),t._uU(2),t.qZA()()),2&o){const n=t.oxw().$implicit;t.xp6(2),t.Oqu(n.nombre)}}const _=function(o){return{ofertas:o}};function b(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",1),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw().metodo(s.id,s.slug,s.banner,s.cabeceras)}),t.TgZ(1,"div",2),t.YNc(2,M,5,0,"div",3),t.YNc(3,y,3,1,"ng-template",null,4,t.W1O),t.TgZ(5,"div",5),t._UZ(6,"ion-icon",6),t.qZA()()()}if(2&o){const n=e.$implicit,i=t.MAs(4);t.xp6(1),t.Q6J("ngClass",t.VKq(3,_,"ofertas"==n.slug)),t.xp6(1),t.Q6J("ngIf","ofertas"==n.slug)("ngIfElse",i)}}let Z=(()=>{class o{constructor(n,i,l){this.store=n,this.router=i,this.loadingController=l,this.categorias$=new p.y,this.loading$=new p.y,this.categoria_select$=new p.y,this.store.dispatch((0,f.xG)()),this.loading=this.loadingController.create({cssClass:"my-custom-class",message:"Cargando datos"})}ngOnInit(){this.categorias$=this.store.select(m.Q$),this.loading$=this.store.select(m.bd),this.categoria_select$=this.store.select(m.Bx),this.loading$.subscribe(n=>{this.loading.then(n?i=>i.present():i=>i.dismiss())})}metodo(n,i,l,s){this.store.dispatch((0,f.A9)({categoriaId:n,categoriaSlug:i,categoriaBanner:l,cabeceras:s})),this.categoria_select$.subscribe(()=>{this.router.navigate(["/category"])}).unsubscribe()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(x.yh),t.Y36(g.F0),t.Y36(c.HT))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-categorias-list"]],decls:2,vars:3,consts:[["style","width: 85%;margin:0 auto;",3,"click",4,"ngFor","ngForOf"],[2,"width","85%","margin","0 auto",3,"click"],[1,"btn-long",3,"ngClass"],["class","title",4,"ngIf","ngIfElse"],["otras",""],[1,"chevron"],["name","chevron-forward-outline"],[1,"title"],[1,"name","nombre_1"],["color","secondary",1,"name","nombre_2"],["color","primary",1,"name","nombre_1"]],template:function(n,i){1&n&&(t.YNc(0,b,7,5,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngForOf",t.lcZ(1,1,i.categorias$))},directives:[a.sg,a.mk,a.O5,c.yW,c.gu],pipes:[a.Ov],styles:[".btn-long[_ngcontent-%COMP%]{padding:10px 15px;margin:10px;border:2px solid var(--ion-color-primary);border-radius:15px;display:flex;align-items:center;justify-content:center;position:relative;background-color:#fff}.btn-long[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:10px;font-size:20px;color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-family:gretaros}.btn-long[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{font-size:20px;position:absolute;right:13px}@media (prefers-color-scheme: dark){.btn-long[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-text-color)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-text-color)}.btn-long[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-text-color)}}.btn-long.ofertas[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}.btn-long.ofertas[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast)}.btn-long.ofertas[_ngcontent-%COMP%]   .nombre_1[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast)}"]}),o})(),T=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-contactos"]],decls:3,vars:0,consts:[[1,"ion-text-center"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Contactos"),t.qZA()())},styles:["h3[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:25px;font-family:gretaros;font-style:normal;font-weight:400;font-size:24px;color:var(--ion-color-primary)}"]}),o})();class d{constructor(e,n,i){this.id=e,this.nombre=n,this.numero=i}}var A=r(4015);function L(o,e){if(1&o&&(t.TgZ(0,"a",2)(1,"ion-col",0),t._UZ(2,"ion-icon",3),t.TgZ(3,"ion-label",4),t._uU(4),t.qZA(),t.TgZ(5,"ion-label",4),t._uU(6),t.qZA()()()),2&o){const n=e.$implicit;t.Q6J("href","cel"==n.tipo?"tel:"+n.numero:"https://api.whatsapp.com/send?phone="+n.numero,t.LSH),t.xp6(2),t.Q6J("name","whats"==n.tipo?"logo-whatsapp":"call"),t.xp6(2),t.Oqu(n.nombre),t.xp6(2),t.Oqu(n.numero)}}let w=(()=>{class o{constructor(n){this.callNumber=n,this.contactos=[new d(1,"Vendedor","584143413241"),new d(2,"Vendedor2","584143413241"),new d(3,"Vendedor3","584143413241")],this.items=[{id:"1",tipo:"whats",numero:"584143413241",nombre:"Yagua"},{id:"2",tipo:"whats",numero:"584244001351",nombre:"Sanblas"},{id:"3",tipo:"cel",numero:"584143413241",nombre:"Contacto"}]}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(A.X))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-contactos-cel-list"]],decls:3,vars:1,consts:[[1,"icon"],[3,"href",4,"ngFor","ngForOf"],[3,"href"],[3,"name"],[1,"number"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"ion-row"),t.YNc(2,L,7,4,"a",1),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngForOf",i.items))},directives:[c.Nd,a.sg,c.wI,c.gu,c.Q$],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:var(--ion-color-black)}.number[_ngcontent-%COMP%]{font-family:medium;color:var(--ion-color-black);padding-top:10px}.title[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:14px}.icon[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:30px;padding:5px;border:2px solid var(--ion-color-secondary);border-radius:50%;color:var(--ion-color-secondary)}"]}),o})();const F=[{path:"",component:(()=>{class o{constructor(n){this.apiCatalogoService=n,n.getCategorias()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(P))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:6,vars:0,consts:[[1,"home-page"]],template:function(n,i){1&n&&(t._UZ(0,"app-header"),t.TgZ(1,"ion-content")(2,"div",0),t._UZ(3,"app-categorias-list")(4,"app-contactos")(5,"app-contactos-cel-list"),t.qZA()())},directives:[O.G,c.W2,Z,T,w],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:transparent}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),o})()}];let H=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.Bz.forChild(F)],g.Bz]}),o})();var $=r(4643);let z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.ez,h.u5,c.Pc,H,$.K]]}),o})()}}]);