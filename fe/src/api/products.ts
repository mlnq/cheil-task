import { IProduct } from '../interfaces/product.js';

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data: IProduct[] = await response.json();

  return data.map((product: any) => ({
    ...product,
    price: {
      ...product.price,
      validFrom: new Date(product.price.validFrom),
      validTo: new Date(product.price.validTo),
    },
  }));
};
