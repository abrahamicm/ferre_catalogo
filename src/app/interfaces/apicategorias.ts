export interface APICategorias {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    meta: any[];
    acf: Acf;
    yoast_head: string;
    yoast_head_json: YoastHeadJSON;
    _links: Links;
}

export interface Links {
    self: About[];
    collection: About[];
    about: About[];
    "wp:post_type": About[];
    curies: Cury[];
}

export interface About {
    href: string;
}

export interface Cury {
    name: string;
    href: string;
    templated: boolean;
}

export interface Acf {
    banner: Banner;
    orden: string;
    cabeceras?: string[];
}

export interface Banner {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: string;
    name: string;
    status: string;
    uploaded_to: number;
    date: Date;
    modified: Date;
    menu_order: number;
    mime_type: string;
    type: string;
    subtype: string;
    icon: string;
    width: number;
    height: number;
    sizes: Sizes;
}

export interface Sizes {
    thumbnail: string;
    "thumbnail-width": number;
    "thumbnail-height": number;
    medium: string;
    "medium-width": number;
    "medium-height": number;
    medium_large: string;
    "medium_large-width": number;
    "medium_large-height": number;
    large: string;
    "large-width": number;
    "large-height": number;
    "1536x1536": string;
    "1536x1536-width": number;
    "1536x1536-height": number;
    "2048x2048": string;
    "2048x2048-width": number;
    "2048x2048-height": number;
    "homefix-blog-thumb": string;
    "homefix-blog-thumb-width": number;
    "homefix-blog-thumb-height": number;
    "homefix-blog-ii-column": string;
    "homefix-blog-ii-column-width": number;
    "homefix-blog-ii-column-height": number;
    "homefix-blog-iii-column": string;
    "homefix-blog-iii-column-width": number;
    "homefix-blog-iii-column-height": number;
    "homefix-blog-list": string;
    "homefix-blog-list-width": number;
    "homefix-blog-list-height": number;
    "homefix-blog-ii-column-masonry": string;
    "homefix-blog-ii-column-masonry-width": number;
    "homefix-blog-ii-column-masonry-height": number;
    "homefix-blog-iii-column-masonry": string;
    "homefix-blog-iii-column-masonry-width": number;
    "homefix-blog-iii-column-masonry-height": number;
    "homefix-portfolio-ii-column": string;
    "homefix-portfolio-ii-column-width": number;
    "homefix-portfolio-ii-column-height": number;
    "homefix-portfolio-iii-column": string;
    "homefix-portfolio-iii-column-width": number;
    "homefix-portfolio-iii-column-height": number;
    "homefix-portfolio-iv-column": string;
    "homefix-portfolio-iv-column-width": number;
    "homefix-portfolio-iv-column-height": number;
    "homefix-portfolio-iii&iv-fullwidth": string;
    "homefix-portfolio-iii&iv-fullwidth-width": number;
    "homefix-portfolio-iii&iv-fullwidth-height": number;
    "homefix-event-list": string;
    "homefix-event-list-width": number;
    "homefix-event-list-height": number;
    "homefix-event-single-type1": string;
    "homefix-event-single-type1-width": number;
    "homefix-event-single-type1-height": number;
    "homefix-event-single-type4": string;
    "homefix-event-single-type4-width": number;
    "homefix-event-single-type4-height": number;
    "homefix-event-single-type5": string;
    "homefix-event-single-type5-width": number;
    "homefix-event-single-type5-height": number;
    "homefix-event-list2": string;
    "homefix-event-list2-width": number;
    "homefix-event-list2-height": number;
    woocommerce_thumbnail: string;
    "woocommerce_thumbnail-width": number;
    "woocommerce_thumbnail-height": number;
    woocommerce_single: string;
    "woocommerce_single-width": number;
    "woocommerce_single-height": number;
    woocommerce_gallery_thumbnail: string;
    "woocommerce_gallery_thumbnail-width": number;
    "woocommerce_gallery_thumbnail-height": number;
    shop_catalog: string;
    "shop_catalog-width": number;
    "shop_catalog-height": number;
    shop_single: string;
    "shop_single-width": number;
    "shop_single-height": number;
    shop_thumbnail: string;
    "shop_thumbnail-width": number;
    "shop_thumbnail-height": number;
}

export interface YoastHeadJSON {
    title: string;
    robots: Robots;
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_url: string;
    og_site_name: string;
    twitter_card: string;
    schema: Schema;
}

export interface Robots {
    index: string;
    follow: string;
    "max-snippet": string;
    "max-image-preview": string;
    "max-video-preview": string;
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
    breadcrumb?: Breadcrumb;
    itemListElement?: ItemListElement[];
}

export enum GraphType {
    BreadcrumbList = "BreadcrumbList",
    CollectionPage = "CollectionPage",
    Organization = "Organization",
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
    "@type": string;
    "@id": string;
    inLanguage: InLanguage;
    url: string;
    contentUrl: string;
    width: number;
    height: number;
    caption: string;
}

export interface PotentialAction {
    "@type": PotentialActionType;
    target: string[] | TargetClass;
    "query-input"?: string;
}

export enum PotentialActionType {
    ReadAction = "ReadAction",
    SearchAction = "SearchAction",
}

export interface TargetClass {
    "@type": string;
    urlTemplate: string;
}
