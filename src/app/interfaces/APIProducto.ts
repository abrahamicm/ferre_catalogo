export interface APIProducto {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: GUID;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: Status;
    type: Type;
    link: string;
    title: GUID;
    featured_media: number;
    template: string;
    meta: any[];
    ferre_categorias: number[];
    ferre_sedes: number[];
    acf: Acf;
    yoast_head: string;
    yoast_head_json: YoastHeadJSON;
    _links: Links;
    mostrarTipo?
}

export interface Links {
    self: About[];
    collection: About[];
    about: About[];
    "wp:attachment": About[];
    "wp:term": WpTerm[];
    curies: Cury[];
}

export interface About {
    href: string;
}

export interface Cury {
    name: Name;
    href: Href;
    templated: boolean;
}

export enum Href {
    HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

export enum Name {
    Wp = "wp",
}

export interface WpTerm {
    taxonomy: Taxonomy;
    embeddable: boolean;
    href: string;
}

export enum Taxonomy {
    FerreCategorias = "ferre_categorias",
    FerreSedes = "ferre_sedes",
}

export interface Acf {
    sku: string;
    mm: string;
    mts: string;
    medida: string;
    peso: string;
    precio: string;
    existencia: string;
    tipo: string;
    espesor: string,
    Largo: string,
    Ancho: string,
    orden: string
}

export interface GUID {
    rendered: string;
}

export enum Status {
    Publish = "publish",
}

export enum Type {
    FerreProducto = "ferre-producto",
}

export interface YoastHeadJSON {
    title: string;
    robots: Robots;
    canonical: string;
    og_locale: OgLocale;
    og_type: OgType;
    og_title: string;
    og_url: string;
    og_site_name: OgSiteName;
    article_modified_time?: Date;
    twitter_card: TwitterCard;
    schema: Schema;
}

export enum OgLocale {
    EsES = "es_ES",
}

export enum OgSiteName {
    FerreAceroValenciaSomosTuMejorOpciónEnHierro = "FerreAcero Valencia “Somos tu mejor opción en hierro”",
}

export enum OgType {
    Article = "article",
}

export interface Robots {
    index: Index;
    follow: Follow;
    "max-snippet": MaxSnippet;
    "max-image-preview": MaxImagePreview;
    "max-video-preview": MaxVideoPreview;
}

export enum Follow {
    Follow = "follow",
}

export enum Index {
    Index = "index",
}

export enum MaxImagePreview {
    MaxImagePreviewLarge = "max-image-preview:large",
}

export enum MaxSnippet {
    MaxSnippet1 = "max-snippet:-1",
}

export enum MaxVideoPreview {
    MaxVideoPreview1 = "max-video-preview:-1",
}

export interface Schema {
    "@context": string;
    "@graph": Graph[];
}

export interface Graph {
    "@type": GraphType;
    "@id": string;
    name?: string;
    url?: string;
    sameAs?: string[];
    logo?: Logo;
    image?: Breadcrumb;
    description?: string;
    publisher?: Breadcrumb;
    potentialAction?: PotentialAction[];
    inLanguage?: InLanguage;
    isPartOf?: Breadcrumb;
    datePublished?: Date;
    dateModified?: Date;
    breadcrumb?: Breadcrumb;
    itemListElement?: ItemListElement[];
}

export enum GraphType {
    BreadcrumbList = "BreadcrumbList",
    Organization = "Organization",
    WebPage = "WebPage",
    WebSite = "WebSite",
}

export interface Breadcrumb {
    "@id": string;
}

export enum InLanguage {
    Es = "es",
}

export interface ItemListElement {
    "@type": ItemListElementType;
    position: number;
    name: string;
    item?: string;
}

export enum ItemListElementType {
    ListItem = "ListItem",
}

export interface Logo {
    "@type": LogoType;
    "@id": string;
    inLanguage: InLanguage;
    url: string;
    contentUrl: string;
    width: number;
    height: number;
    caption: Caption;
}

export enum LogoType {
    ImageObject = "ImageObject",
}

export enum Caption {
    FerreAcero = "FerreAcero",
}

export interface PotentialAction {
    "@type": PotentialActionType;
    target: string[] | TargetClass;
    "query-input"?: QueryInput;
}

export enum PotentialActionType {
    ReadAction = "ReadAction",
    SearchAction = "SearchAction",
}

export enum QueryInput {
    RequiredNameSearchTermString = "required name=search_term_string",
}

export interface TargetClass {
    "@type": TargetType;
    urlTemplate: URLTemplate;
}

export enum TargetType {
    EntryPoint = "EntryPoint",
}

export enum URLTemplate {
    HTTPSFerreacerovalenciaCOMVeSSearchTermString = "https://ferreacerovalencia.com.ve/?s={search_term_string}",
}

export enum TwitterCard {
    SummaryLargeImage = "summary_large_image",
}
