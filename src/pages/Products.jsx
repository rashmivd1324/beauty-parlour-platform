import productsData from "../data/productsData";

const Products = ({ addToCart }) => {
  return (
    <section className="products-page">
      <h2>Our Products</h2>

      <div className="products-grid">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <button
              className="primary-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;



