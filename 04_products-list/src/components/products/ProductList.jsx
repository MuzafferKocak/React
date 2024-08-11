import ProductCard from "./ProductCard";
import "./Products.scss";
const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="products-list">
      {/*//! hier mit spread method*/}
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}

      {/*//! Best Practice untere Componente schicken */}
      
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}

      {/* //* auf dem weg Destructuring */}
      {/* {products.map(({ price, title, image, id }) => {
        return (
          <div key={id}>
            <div>
              <h3>{price} </h3>
            </div>
            <img src={image} alt={title} />
            <div>
              <h2>{title} </h2>
            </div>
          </div>
        );
      })} */}
      {/* //* Verwendung in Map */}
      {/* {products.map((product) => {
        const { price, title, image, id } = product;
        return (
          <div key={id}>
            <div>
              <h3>{price} </h3>
            </div>
            <img src={image} alt={title} />
            <div>
              <h2>{title} </h2>
            </div>
          </div>
        );
      })} */}
      {/* //* ohne Destructuring */}
      {/* {products.map((product) => (
        <div key={product.id}>
          <div>
            <h3>{product.price} </h3>
          </div>
          <img src={product.image} alt={product.title} />
          <div>
            <h2>{product.title} </h2>
          </div>
        </div>
      ))} */}
    </div>
  );
};
export default ProductList;