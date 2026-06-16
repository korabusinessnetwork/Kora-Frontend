import type { Product } from "../../types/product";

import "./ProductCard.css";

interface ProductCardProps {
    product: Product;
    onAdd: (product: Product) => void;
}

export function ProductCard({
    product,
    onAdd,
}: ProductCardProps) {
    return (
        <article className="product-card">

            <div className="product-card__image">
                📦
            </div>

            <div className="product-card__content">

                <span className="product-card__category">
                    {product.category}
                </span>

                <h3 className="product-card__title">
                    {product.name}
                </h3>

                <span className="product-card__price">
                    R$ {product.price.toFixed(2)}
                </span>

            </div>

            <button
                className="product-card__button"
                onClick={() => onAdd(product)}
            >
                Adicionar
            </button>

        </article>
    );
}