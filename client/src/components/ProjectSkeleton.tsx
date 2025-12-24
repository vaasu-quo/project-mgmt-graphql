const ProjectSkeleton = () => {
  return (
    <div className="mx-auto w-75 card p-5">
      {/* Back Button */}
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-light btn-sm disabled placeholder"
          style={{ width: "80px" }}
          aria-disabled="true"
        ></button>
      </div>

      {/* Project Title */}
      <h1 className="placeholder-glow">
        <span className="placeholder col-6"></span>
      </h1>

      {/* Project Description */}
      <p className="placeholder-glow">
        <span className="placeholder col-10"></span>
        <span className="placeholder col-8"></span>
        <span className="placeholder col-9"></span>
      </p>

      {/* Project Status Section */}
      <h5 className="mt-3 placeholder-glow">
        <span className="placeholder col-4"></span>
      </h5>
      <p className="lead placeholder-glow">
        <span className="placeholder col-3"></span>
      </p>

      {/* Client Information Section */}
      <h5 className="mt-5 placeholder-glow">
        <span className="placeholder col-5"></span>
      </h5>
      <ul className="list-group">
        <li className="list-group-item placeholder-glow">
          <span className="placeholder col-6"></span>
        </li>
        <li className="list-group-item placeholder-glow">
          <span className="placeholder col-7"></span>
        </li>
        <li className="list-group-item placeholder-glow">
          <span className="placeholder col-5"></span>
        </li>
      </ul>

      {/* Update Project Details Form */}
      <div className="mt-5">
        <h3 className="placeholder-glow">
          <span className="placeholder col-6"></span>
        </h3>
        <form>
          {/* Name Input */}
          <div className="mb-3">
            <label className="form-label placeholder-glow">
              <span className="placeholder col-2"></span>
            </label>
            <div className="placeholder-glow">
              <span className="placeholder col-12 form-control"></span>
            </div>
          </div>

          {/* Description Textarea */}
          <div className="mb-3">
            <label className="form-label placeholder-glow">
              <span className="placeholder col-3"></span>
            </label>
            <div className="placeholder-glow">
              <span
                className="placeholder col-12"
                style={{ height: "100px", display: "block" }}
              ></span>
            </div>
          </div>

          {/* Status Select */}
          <div className="mb-3">
            <label className="form-label placeholder-glow">
              <span className="placeholder col-2"></span>
            </label>
            <div className="placeholder-glow">
              <span className="placeholder col-12 form-select"></span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="btn btn-primary disabled placeholder"
            style={{ width: "100px" }}
            aria-disabled="true"
          ></button>
        </form>
      </div>

      {/* Delete Project Button */}
      <div className="d-flex mt-5 ms-auto">
        <button
          className="btn btn-danger m-2 disabled placeholder"
          style={{ width: "150px" }}
          aria-disabled="true"
        ></button>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
