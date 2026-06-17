import "./ProductGrid.css";

import { products } from "../../data/products";
import { ProductCard } from "../ProductCard";

import type { Product } from "../../types/product";

interface ProductGridProps {
    onAdd: (product: Product) => void;
}

export function ProductGrid({
    onAdd,
}: ProductGridProps) {

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

                    <button
                        className="product-grid__button"
                        type="button"
                    >
                        Todos
                    </button>

                </div>

            </div>

            <div className="product-grid__content">

                {products.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                        onAdd={onAdd}
                    />

                ))}

            </div>

        </section>
    );

}