const OptionModal = () => {
  const options = [
    { title: "Adults", description: "Age 13+" },
    { title: "Children", description: "Ages 2-12" },
    { title: "Infants", description: "Under 2" },
    { title: "Pets", description: "Bringing a service animal?" },
  ];

  return (
    <>
      <div className="grid gap-2 grid-cols-[2fr_1fr] my-3 ">
        {options.map((option) => {
          return (
            <>
              <div>
                <p className="text-s font-medium">{option.title}</p>
                <p className="text-sm">{option.description}</p>
              </div>
              <div className="flex items-center">
                <button className="w-8 h-8 rounded-full border mx-3">-</button>
                <p>1</p>
                <button className="w-8 h-8 rounded-full border mx-3">+</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default OptionModal;
