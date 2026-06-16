import "./Header.css";

export function Header() {
    return (
        <header className="header">

            <div className="header__logo">

                <div className="header__logo-icon">
                    🛒
                </div>

                <div className="header__logo-text">
                    <h1 className="header__title">PDV</h1>
                    <span>Frente de Caixa</span>
                </div>

            </div>

            <div className="header__search">
                <input
                    type="text"
                    placeholder="Buscar produto ou código de barras..."
                />
            </div>

            <div className="header__info">

                <div className="header__datetime">
                    <strong>10:43</strong>
                    <span>16/06/2026</span>
                </div>

                <div className="header__user">

                    <div className="header__avatar">
                        M
                    </div>

                    <div className="header__operator">
                        <span>Operador:</span>
                        <strong>Matheus</strong>
                    </div>

                </div>

            </div>

        </header>
    );
}