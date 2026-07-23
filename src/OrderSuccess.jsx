import React, { useEffect } from "react";

export default function OrderSuccess({ isOpen, onClose, method }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const paidByCard = method === "card";

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div
        className="modal success-modal"
        role="alertdialog"
        aria-modal="true"
        aria-label="Comanda plasata"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="success-check" aria-hidden="true">✓</div>
        <h2>{paidByCard ? "Plata efectuata!" : "Comanda a fost plasata!"}</h2>
        <p>
          {paidByCard
            ? "Multumim! Plata a fost confirmata. Te vom contacta in scurt timp si iti trimitem actualizari pe email."
            : "Multumim pentru comanda. Vei plati in numerar la livrare. Te vom contacta in scurt timp pentru confirmare."}
        </p>
        <button className="btn btn-primary btn-lg" onClick={onClose}>
          Inchide
        </button>
      </div>
    </div>
  );
}
