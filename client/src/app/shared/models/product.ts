export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    productType: string;
    productBrand: string;
    photos: IPhoto[];
}

export interface IProductToCreate {
  name: string;
  description: string;
  price: number;
  pictureUrl?: string;
  productTypeId: number;
  productBrandId: number;
}

export class ProductFormValues implements IProductToCreate {
  name = '';
  description = '';
  price = 0;
  productBrandId: number;
  productTypeId: number;

  constructor(init?: ProductFormValues) {
    Object.assign(this, init);
  }
}

export interface IPhoto {
  id: number;
  pictureUrl: string;
  fileName: string;
  isMain: boolean;
}
