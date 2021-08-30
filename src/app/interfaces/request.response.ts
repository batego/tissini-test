export interface Sections {
  name: string;
  image: string;
  products: Product[];
}

export interface Product {
  id: number;
  category_id: number;
  catalog_id: number;
  reference: string;
  name: string;
  price: string;
  description: null;
  custitem_allowed_for_warehouse_sale: null | string;
  custitem_tissiniapp_saletag: null | string;
  is_new: null | string;
  tdollars: null;
  scope: null;
  created_at: Date;
  updated_at: Date;
  categories: Categories;
  image: ImageClass;
  variants: Variant[];
}

export interface Categories {
  id: number;
  parent_id: number;
  name: string;
  category: Category;
  image: string;
  pos: number;
  active: number;
  updated_at: Date;
  parent: Parent;
}

export enum Category {
  Joyas = "joyas",
  Textiles = "textiles",
}

export interface Parent {
  id: number;
  parent_id: number | null;
  name: Name;
  category: Category;
  image: ImageEnum;
  pos: number;
  active: number;
  updated_at: Date;
  parent?: Parent | null;
}

export enum ImageEnum {
  ImgCategoriesJoyasJpg = "/img/categories/joyas.jpg",
  ImgCategoriesTextilesBlusasJpg = "/img/categories/textiles-blusas.jpg",
  ImgCategoriesTextilesFajasJpg = "/img/categories/textiles-fajas.jpg",
  ImgCategoriesTextilesJeansDamaJpg = "/img/categories/textiles-jeans-dama.jpg",
  ImgCategoriesTextilesJeansJpg = "/img/categories/textiles-jeans.jpg",
  ImgCategoriesTextilesJpg = "/img/categories/textiles.jpg",
  ImgCategoriesTextilesSportJpg = "/img/categories/textiles-sport.jpg",
}

export enum Name {
  Blusas = "Blusas",
  Damas = "Damas",
  Fajas = "Fajas",
  Jeans = "Jeans",
  Joyas = "Joyas",
  Sport = "Sport",
  Textiles = "Textiles",
}

export interface ImageClass {
  id: number;
  product_id: number;
  url: string;
  url_original: string;
  pos: number;
  text_color: null;
  created_at: Date;
}

export interface Variant {
  id: number;
  product_id: number;
  sku: string;
  quantity: number;
  size: string;
  color: null;
  price: string;
  sale_price: null;
  custitem_tj_category: string;
}
