import {
    createContext,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";

import type { Product } from "../types/product";
import type { SalePanelItem } from "../types/sale";

interface SaleContextData {
    items: SalePanelItem[];
    addProduct: (product: Product) => void;
}

const SaleContext = createContext<SaleContextData | null>(null);

interface SaleProviderProps {
    children: ReactNode;
}

export function SaleProvider({
    children,
}: SaleProviderProps) {

    const [items, setItems] = useState<SalePanelItem[]>([]);

    function addProduct(product: Product) {

        setItems((previous) => {

            const existing = previous.find(
                (item) => item.id === product.id
            );

            if (existing) {

                return previous.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item
                );

            }

            return [
                ...previous,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                },
            ];

        });

    }

    const value = useMemo(
        () => ({
            items,
            addProduct,
        }),
        [items]
    );

    return (
        <SaleContext.Provider value={value}>
            {children}
        </SaleContext.Provider>
    );
}

export function useSaleContext() {

    const context = useContext(SaleContext);

    if (!context) {
        throw new Error(
            "useSaleContext deve ser usado dentro de SaleProvider"
        );
    }

    return context;

}