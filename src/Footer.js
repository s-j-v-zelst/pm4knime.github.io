export default Footer => {
  return (
    <footer className="footer">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span className="text-muted float-left">
          PM4KNIME is a product of the{" "}
          <a href="https://fit.fraunhofer.de" target="_blank">
            Fraunhofer Institute for Applied Information Technology (FIT)
          </a>
        </span>
        <div>
          <a
            className="float-right"
            href="#"
            data-toggle="modal"
            data-target="#DataProtectionModal"
          >
            Data Protection
          </a>
          <span className="float-right ml-1 mr-1 text-muted">|</span>
          <a
            className="float-right"
            href="#"
            data-toggle="modal"
            data-target="#ImprintModal"
          >
            Imprint
          </a>
        </div>
      </div>
    </footer>
  );
};
