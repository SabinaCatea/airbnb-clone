const Account = () => {
  const paragraphClass = () => {
    return "pb-2 pl-5 pr-28";
  };
  return (
    <div className="absolute content-start text-sm items-start py-5 right-8 top-20 border-solid border-1 border-grey-50 rounded-lg bg-white shadow-2xl">
      <div className="">
        <p className={`${paragraphClass()} font-semibold`}>Mesaje</p>
        <p className={`${paragraphClass()} font-semibold`}>Calatorii</p>
        <p className={`${paragraphClass()} font-semibold`}>Favorite</p>
        <div className="border border-grey-50 w-50"></div>
        <p className="pb-2 pl-5 pt-2">Inchiriaza locuinta prin airbnb</p>
        <p className={`${paragraphClass()}`}>Invita o gazda</p>
        <p className={`${paragraphClass()}`}>Cont</p>
        <div className="border border-grey-50 w-50"></div>
        <p className={`${paragraphClass()} pt-2`}>Centru de asistenta</p>
        <p className={`${paragraphClass()}`}>Deconecteaza-te</p>
      </div>
    </div>
  );
};

export default Account;
