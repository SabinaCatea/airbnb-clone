import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function CountryCode() {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country={"eg"}
      enableSearch={true}
      value={phone}
      onChange={(phone) => setPhone(phone)}
      inputStyle={{ width: "100%" }}
    />
  );
}

export default CountryCode;
