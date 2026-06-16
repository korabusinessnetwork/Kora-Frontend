import "./ProductGrid.css";

import { products } from "../../data/products";
import { ProductCard } from "../ProductCard";

export function ProductGrid() {
    const handleAddProduct = (product: { name: string }) => {
        console.log(product.name);
    };

    return (
        <section className="product-grid">

            <div className="product-grid__toolbar">

                <div className="product-grid__title">
                    <h2>Produtos</h2>
                    <span>{products.length} itens disponíveis</span>
                </div>

                <div className="product-grid__actions">

                    <input
                        className="product-grid__search"
                        placeholder="Pesquisar produto..."
                    />

                    <button className="product-grid__button">
                        Todos
                    </button>

                </div>

            </div>

            <div className="product-grid__content">

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAdd={handleAddProduct}
                    />
                ))}

            </div>

        </section>
    );
}