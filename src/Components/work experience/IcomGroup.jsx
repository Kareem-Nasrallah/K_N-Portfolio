import AccordionElement from "./accordionElement";

const IcomGroup = ({ idClicked, setIdClicked }) => {
  const icomTecniqalUsed = [
    "HTML",
    "Javascript",
    "CSS",
    "WordPress",
    "Elementor",
  ];

  return (
    <div
      className={`job mb-4 border-4 hover:border-(--hover-color) p-8 rounded-2xl shadow-lg hover:bg-gray-300/50 flex-1 
    ${typeof idClicked === "string" && idClicked.includes("icom") ? "border-(--hover-color) bg-gray-300/50" : "border-blue-900 bg-gray-300"}`}
    >
      <div className="flex gap-4 items-start">
        <img
          src="/company logos/icom logo.png"
          alt="mb-alfa Logo"
          className="h-14 rounded-lg"
        />
        <div>
          <h3 className="text-xl font-semibold">ICOM group - Media Creation</h3>
          <p className="mb-2">
            ( March 2026 -{" "}
            <strong className="text-indigo-900! font-semibold">Present</strong>{" "}
            )
          </p>
        </div>
      </div>

      <div className="space-y-3 my-4">
        {/* About the Company */}

        <AccordionElement
          title={"About the Company"}
          subtitle={"The product and the environment I worked in"}
          content={
            "MB ALFA developed an ERP platform for restaurant management, providing restaurants with tools to manage their operations while allowing their customers to reserve tables, order food, and make payments through the same platform."
          }
          id={"icom-company"}
          idClicked={idClicked}
          setIdClicked={setIdClicked}
        />

        {/* My Responsibilities */}
        <AccordionElement
          title={"My Responsibilities"}
          subtitle={"What I worked on as a Front-End Developer"}
          content={
            <ul className="space-y-3 text-gray-600 leading-7 list-disc list-inside">
              <li>
                Developed and maintained frontend features using React and
                TypeScript, taking ownership of challenging and unfamiliar tasks
                and independently researching solutions when needed.
              </li>

              <li>
                Integrated APIs by reviewing API documentation and responses
                through Swagger and coordinating requirements with backend
                developers.
              </li>

              <li>
                Worked closely with the testing team to identify and resolve
                issues and ensure features worked as expected.
              </li>

              <li>
                Participated in meetings with potential clients to demonstrate
                the platform and explain its features and capabilities.
              </li>

              <li>
                Created the required functional documentation and expanded it
                with technical details to make it useful as a reference for
                future Front-End developers.
              </li>
            </ul>
          }
          id={"icom-responsibilities"}
          idClicked={idClicked}
          setIdClicked={setIdClicked}
        />

        {/* Experience & Growth */}
        <AccordionElement
          title={"Experience & Growth"}
          subtitle={"What I gained from working in a small team"}
          content={
            "Working within a very small Front-End team gave me significant ownership over the development process. I frequently handled challenging or unfamiliar requirements independently, which pushed me to research, learn new technologies and approaches, and find effective solutions with minimal supervision."
          }
          id={"icom-growth"}
          idClicked={idClicked}
          setIdClicked={setIdClicked}
        />
      </div>

      <div className="mt-4">
        <strong>Technologies used:</strong>
        <br />
        <ui>
          {icomTecniqalUsed.map((tech, index) => (
            <li
              className="list-none inline-block m-1 py-1 px-2 text-sm rounded-full"
              style={{
                background: "var(--hover-color)",
                color: "var(--secon-bg-color)",
              }}
              key={index}
            >
              {tech}
            </li>
          ))}
        </ui>
      </div>
    </div>
  );
};

export default IcomGroup;
