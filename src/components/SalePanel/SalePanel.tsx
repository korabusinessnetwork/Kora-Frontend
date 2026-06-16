import "./SalePanel.css";

export function SalePanel() {
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

                <div className="sale-panel__item">

                    <div className="sale-panel__item-info">

                        <span className="sale-panel__item-title">
                            Coca-Cola 350ml
                        </span>

                        <span className="sale-panel__item-details">
                            2x • R$ 8,00
                        </span>

                    </div>

                    <button
                        className="sale-panel__item-remove"
                        type="button"
                    >
                        🗑️
                    </button>

                </div>

            </div>

            <button
                className="sale-panel__observation"
                type="button"
            >
                💬 Adicionar observação
            </button>

            <div className="sale-panel__summary">

                <div className="sale-panel__row">

                    <span>Subtotal</span>

                    <span>R$ 16,00</span>

                </div>

                <div className="sale-panel__row">

                    <span>Desconto</span>

                    <span>R$ 0,00</span>

                </div>

            </div>

            <div className="sale-panel__total">

                <span>Total</span>

                <strong>R$ 16,00</strong>

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