import { useState } from "react";
import { MessageSquarePlus, X } from "lucide-react";

import "./SaleItem.css";
import { ObservationPopup } from "./ObservationPopup";

interface SaleItemProps {
    name: string;
    quantity: number;
    price: number;
}

export function SaleItem({
    name,
    quantity,
    price,
}: SaleItemProps) {

    const [isOpen, setIsOpen] = useState(false);

    const [observation, setObservation] = useState("");

    return (

        <div className="sale-item">

            <div className="sale-item__header">

                <div className="sale-item__info">

                    <span className="sale-item__title">
                        {name}
                    </span>

                    <span className="sale-item__details">
                        {quantity}x • R$ {price.toFixed(2)}
                    </span>

                </div>

                <div className="sale-item__actions">

                    <button
                        className="sale-item__comment"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <MessageSquarePlus size={18} />
                    </button>

                    <button
                        className="sale-item__remove"
                        type="button"
                    >
                        <X size={18} />
                    </button>

                </div>

            </div>

            {observation.trim() !== "" && (

                <div className="sale-item__observation-preview">

                    💬 {observation}

                </div>

            )}

            {isOpen && (

                <ObservationPopup
                    onClose={() => setIsOpen(false)}
                    onSave={(text) => {
                        setObservation(text);
                        setIsOpen(false);
                    }}
                />

            )}

        </div>

    );

}