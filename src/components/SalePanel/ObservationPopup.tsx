import { useState } from "react";

import "./ObservationPopup.css";

interface ObservationPopupProps {
    onClose: () => void;
    onSave: (text: string) => void;
}

export function ObservationPopup({
    onClose,
    onSave,
}: ObservationPopupProps) {

    const [text, setText] = useState("");

    function handleSave() {
        onSave(text);
        onClose();
    }

    return (

        <div className="observation-popup">

            <span className="observation-popup__title">
                Adicionar observação
            </span>

            <textarea
                className="observation-popup__textarea"
                placeholder="Ex.: retirar cebola, ponto da carne, sem gelo..."
                value={text}
                onChange={(event) =>
                    setText(event.target.value)
                }
            />

            <div className="observation-popup__actions">

                <button
                    className="observation-popup__cancel"
                    type="button"
                    onClick={onClose}
                >
                    Cancelar
                </button>

                <button
                    className="observation-popup__save"
                    type="button"
                    onClick={handleSave}
                >
                    Salvar
                </button>

            </div>

        </div>

    );
}