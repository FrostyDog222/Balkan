import React, { useEffect, useState } from "react";

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  address: "",
  instructions: "",
  payment: "card", // "card" | "cash"
  cardNumber: "",
  cardName: "",
  cardExpiry: "",
  cardCvc: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Formatting helpers for the card fields.
const groupCard = (v) =>
  v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
const formatExpiry = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 4);
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
};

export default function Checkout({
  isOpen,
  onClose,
  cartItems,
  cartTotal,
  onPlaceOrder,
}) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) return;
    setForm(EMPTY);
    setErrors({});
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const update = (field, transform) => (e) => {
    const value = transform ? transform(e.target.value) : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const setPayment = (payment) => setForm((f) => ({ ...f, payment }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Introdu numele tau";
    if (form.phone.replace(/\D/g, "").length < 6)
      next.phone = "Introdu un numar de telefon valid";
    if (!EMAIL_RE.test(form.email.trim()))
      next.email = "Introdu o adresa de email valida";
    if (!form.address.trim()) next.address = "Introdu adresa de livrare";

    if (form.payment === "card") {
      if (form.cardNumber.replace(/\s/g, "").length < 13)
        next.cardNumber = "Numar de card invalid";
      if (!form.cardName.trim()) next.cardName = "Introdu numele de pe card";
      if (!/^\d{2}\/\d{2}$/.test(form.cardExpiry)) {
        next.cardExpiry = "Format MM/AA";
      } else {
        const mm = parseInt(form.cardExpiry.slice(0, 2), 10);
        if (mm < 1 || mm > 12) next.cardExpiry = "Luna invalida";
      }
      if (!/^\d{3,4}$/.test(form.cardCvc)) next.cardCvc = "CVC invalid";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // No backend: card details are never stored or sent anywhere.
    onPlaceOrder({
      name: form.name,
      phone: form.phone,
      email: form.email,
      address: form.address,
      instructions: form.instructions,
      payment: form.payment,
      items: cartItems,
      total: cartTotal,
    });
  };

  if (!isOpen) return null;

  const isCard = form.payment === "card";
  const submitLabel = isCard
    ? `Plateste ${cartTotal} RON`
    : `Plaseaza comanda · ${cartTotal} RON`;

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div
        className="modal checkout-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Finalizeaza comanda"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Finalizeaza comanda</h2>
          <button className="modal-close" onClick={onClose} aria-label="Inchide">
            &times;
          </button>
        </div>

        <div className="checkout-summary">
          <span>{cartItems.reduce((n, i) => n + i.quantity, 0)} produse</span>
          <span className="checkout-summary-total">{cartTotal} RON</span>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span>Nume complet *</span>
            <input
              type="text"
              value={form.name}
              onChange={update("name")}
              autoComplete="name"
              className={errors.name ? "invalid" : ""}
            />
            {errors.name && <em className="field-error">{errors.name}</em>}
          </label>

          <div className="field-row">
            <label className="field">
              <span>Telefon *</span>
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                autoComplete="tel"
                placeholder="07xx xxx xxx"
                className={errors.phone ? "invalid" : ""}
              />
              {errors.phone && <em className="field-error">{errors.phone}</em>}
            </label>

            <label className="field">
              <span>Email *</span>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                autoComplete="email"
                placeholder="nume@exemplu.com"
                className={errors.email ? "invalid" : ""}
              />
              {errors.email && <em className="field-error">{errors.email}</em>}
            </label>
          </div>
          <p className="field-hint">
            Iti trimitem actualizari despre comanda pe email.
          </p>

          <label className="field">
            <span>Adresa de livrare *</span>
            <input
              type="text"
              value={form.address}
              onChange={update("address")}
              autoComplete="street-address"
              placeholder="Strada, numar, bloc, apartament"
              className={errors.address ? "invalid" : ""}
            />
            {errors.address && <em className="field-error">{errors.address}</em>}
          </label>

          <label className="field">
            <span>Instructiuni de livrare (optional)</span>
            <textarea
              rows="2"
              value={form.instructions}
              onChange={update("instructions")}
              placeholder="Ex: sunati la interfon, lasati la receptie, etc."
            />
          </label>

          <div className="field">
            <span>Metoda de plata *</span>
            <div className="pay-options">
              <button
                type="button"
                className={`pay-option ${isCard ? "selected" : ""}`}
                onClick={() => setPayment("card")}
                aria-pressed={isCard}
              >
                <span className="pay-option-icon" aria-hidden="true">💳</span>
                <span className="pay-option-label">Card online</span>
                <span className="pay-option-desc">Platesti acum</span>
              </button>
              <button
                type="button"
                className={`pay-option ${!isCard ? "selected" : ""}`}
                onClick={() => setPayment("cash")}
                aria-pressed={!isCard}
              >
                <span className="pay-option-icon" aria-hidden="true">💵</span>
                <span className="pay-option-label">Numerar</span>
                <span className="pay-option-desc">La livrare</span>
              </button>
            </div>
          </div>

          {isCard && (
            <div className="card-fields">
              <label className="field">
                <span>Numar card *</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={form.cardNumber}
                  onChange={update("cardNumber", groupCard)}
                  placeholder="1234 5678 9012 3456"
                  autoComplete="cc-number"
                  className={errors.cardNumber ? "invalid" : ""}
                />
                {errors.cardNumber && (
                  <em className="field-error">{errors.cardNumber}</em>
                )}
              </label>

              <label className="field">
                <span>Nume pe card *</span>
                <input
                  type="text"
                  value={form.cardName}
                  onChange={update("cardName")}
                  placeholder="ION POPESCU"
                  autoComplete="cc-name"
                  className={errors.cardName ? "invalid" : ""}
                />
                {errors.cardName && (
                  <em className="field-error">{errors.cardName}</em>
                )}
              </label>

              <div className="field-row">
                <label className="field">
                  <span>Expira (MM/AA) *</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.cardExpiry}
                    onChange={update("cardExpiry", formatExpiry)}
                    placeholder="09/28"
                    autoComplete="cc-exp"
                    className={errors.cardExpiry ? "invalid" : ""}
                  />
                  {errors.cardExpiry && (
                    <em className="field-error">{errors.cardExpiry}</em>
                  )}
                </label>

                <label className="field">
                  <span>CVC *</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.cardCvc}
                    onChange={update(
                      "cardCvc",
                      (v) => v.replace(/\D/g, "").slice(0, 4)
                    )}
                    placeholder="123"
                    autoComplete="cc-csc"
                    className={errors.cardCvc ? "invalid" : ""}
                  />
                  {errors.cardCvc && (
                    <em className="field-error">{errors.cardCvc}</em>
                  )}
                </label>
              </div>
              <p className="field-hint">
                Demo — datele cardului nu sunt procesate sau stocate.
              </p>
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-block btn-lg">
            {submitLabel}
          </button>
        </form>
      </div>
    </div>
  );
}
