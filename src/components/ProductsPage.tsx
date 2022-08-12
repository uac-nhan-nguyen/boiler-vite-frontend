import {useEffect, useState} from "react";
import {DummyAPI, IProduct} from "api/dummy";

export const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[] | undefined>()

  useEffect(() => {
    if (products == null) {
      DummyAPI.listProducts().then((e) => {
        if (products === undefined){
          setProducts(e.products);
        }
      })
    }

  }, []);

  if (products == null) {
    return <>
      <div>Loading products..</div>
    </>
  }

  return <>
    <h1>Products</h1>
    {products && products.map((i) => {
      return <div key={i.id}>
        <div>{i.title}</div>
      </div>
    })}
  </>
}