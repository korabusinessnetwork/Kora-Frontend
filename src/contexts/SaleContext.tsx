import {
    createContext,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";

import type { Product } from "../types/product";

export interface SaleItem {
    product: Product;
    quantity: number;
}

interface SaleContextData {
    items: SaleItem[];
    addProduct: (product: Product) => void;
}

const SaleContext = createContext<SaleContextData | null>(null);

interface SaleProviderProps {
    children: ReactNode;
}

export function SaleProvider({ children }: SaleProviderProps) {
    const [items, setItems] = useState<SaleItem[]>([]);

    function addProduct(product: Product) {
        setItems((previous) => {
            const existing = previous.find(
                (item) => item.product.id === product.id
            );

            if (existing) {
                return previous.map((item) =>
                    item.product.id === product.id
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
                    product,
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