const AccordionElement = ({
  idClicked,
  setIdClicked,
  id,
  title,
  subtitle,
  content,
}) => {
  return (
    <div
      className={
        "border border-white/70 rounded-xl overflow-hidden transition-all duration-500 " +
        (idClicked === id ? "max-h-[600px] shadow-lg bg-gray-200/50" : "max-h-20")
      }
    >
      <button
        type="button"
        className={`w-full flex items-center justify-between px-6 py-2.5 text-left hover:bg-gray-50/80 transition-all  duration-500 cursor-pointer 
          ${idClicked === id ? "bg-gray-50/80" : "bg-transparent"}`}
        onClick={() => {
          idClicked === id ? setIdClicked(null) : setIdClicked(id);
        }}
      >
        <div>
          <h3 className="!text-lg font-semibold text-gray-900">{title}</h3>

          <p className="mt-1 text-md text-gray-500">{subtitle}</p>
        </div>

        <span className="text-xl text-gray-500">{
        idClicked === id ? "-" :
        "+"}</span>
      </button>

      <div
        className={
          "px-6 py-4 transition-all duration-500 " +
          (idClicked === id ? "opacity-100" : "opacity-0")
        }
      >
        {typeof content === "string" ? (
          <p className="text-gray-600 leading-7">{content}</p>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default AccordionElement;
