import * as axios from 'axios'

const x = new axios.Axios({
  baseURL: import.meta.env.VITE_API
});

export interface IProduct {
  "id": number,
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": string[],
}

export abstract class DummyAPI {
  static async listProducts() {
    const r = await x.get('/products');
    return JSON.parse(r.data) as {
      products: IProduct[],
    };
  }
}