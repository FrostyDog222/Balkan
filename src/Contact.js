import React from "react";

export default function Contact() {
  function copyPhoneNumberToClipboard() {
    const phoneNumber = "0757 776 557";
    const tempInput = document.createElement("input");

    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Numărul de telefon a fost copiat în clipboard!");
  }

  return (
    <div>
      <h1 className="contactTitle">Contacteaza-ne</h1>
      <div className="contactContainer">
        <div className="contactOptions phoneNumber" onClick={copyPhoneNumberToClipboard}>
          <img className="infoImg contactImg" src="./assets/images/phone-call.png" alt="Phone Number" />
          <h2 className="phoneNumber">0757 776 557</h2>
        </div>
        <div className="contactOptions facebook">
          <a href="https://www.facebook.com/profile.php?id=100067158668509" target="_blank" rel="noopener noreferrer">
            <img className="infoImg contactImg" src="/assets/images/facebook.png" alt="Facebook Icon" />
            <h2>BALKAN FOOD HOUSE</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
