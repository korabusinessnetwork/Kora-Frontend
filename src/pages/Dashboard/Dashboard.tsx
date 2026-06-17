import "./Dashboard.css";

import { ProductGrid } from "../../components/ProductGrid";
import { SalePanel } from "../../components/SalePanel";

import { useSaleContext } from "../../contexts/SaleContext";

export function Dashboard() {

    const {
        items,
        addProduct,
    } = useSaleContext();

    return (

        <section className="dashboard">

            <div className="dashboard__products">

                <ProductGrid
                    onAdd={addProduct}
                />

            </div>

            <div className="dashboard__sale">

                <SalePanel
                    items={items}
                />

            </div>

        </section>

    );

}