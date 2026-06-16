import "./Dashboard.css";

import { ProductGrid } from "../../components/ProductGrid";
import { SalePanel } from "../../components/SalePanel";

export function Dashboard() {
    return (
        <section className="dashboard">

            <div className="dashboard__products">
                <ProductGrid />
            </div>

            <div className="dashboard__sale">
                <SalePanel />
            </div>

        </section>
    );
}