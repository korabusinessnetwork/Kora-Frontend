import "./Sidebar.css";

export function Sidebar() {
    return (
        <aside className="sidebar">

            <nav className="sidebar__menu">

                <button className="sidebar__item">
                    Dashboard
                </button>

                <button className="sidebar__item sidebar__item--active">
                    Comandas
                </button>

                <button className="sidebar__item">
                    Produtos
                </button>

                <button className="sidebar__item">
                    Clientes
                </button>

                <button className="sidebar__item">
                    Relatórios
                </button>

            </nav>

            <div className="sidebar__footer">

                <div className="sidebar__divider"></div>

                <button className="sidebar__item">
                    Configurações
                </button>

            </div>

        </aside>
    );
}