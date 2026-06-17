import "./SalePanel.css";
import type { SalePanelItem } from "../../types/sale";

import { SaleItem } from "./SaleItem";

interface SalePanelProps {
    items: SalePanelItem[];
}

export function SalePanel({
    items,
}: SalePanelProps) {
    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const discount = 0;

    const total = subtotal - discount;
    return (
        <aside className="sale-panel">

            <header className="sale-panel__header">

                <h2>Venda Atual</h2>

                <button
                    className="sale-panel__menu"
                    type="button"
                >
                    ⋮
                </button>

            </header>

            <div className="sale-panel__table">

                <span>Produto</span>

                <span>Valor</span>

            </div>

            <div className="sale-panel__items">

                {items.map((item) => (

                    <SaleItem
                        key={item.id}
                        
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                    />

                ))}

            </div>

            <div className="sale-panel__summary">

                <div className="sale-panel__row">

                    <span>Subtotal</span>

                    <span>R$ {subtotal.toFixed(2)}</span>

                </div>

                <div className="sale-panel__row">

                    <span>Desconto</span>

                    <span>R$ {discount.toFixed(2)}</span>

                </div>

            </div>

            <div className="sale-panel__total">

                <span>Total</span>

                <strong>R$ {total.toFixed(2)}</strong>
            </div>

            <button
                className="sale-panel__receive"
                type="button"
            >
                Receber Venda
            </button>

        </aside>
    );
}