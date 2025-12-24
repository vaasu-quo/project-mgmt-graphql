const ProjectsSkeleton = () => {
  return (
    <div className="row mt-4">
      {[...Array(2)].map((_, index) => (
        <div key={index} className="col-md-6">
          <div className="card mb-3" aria-hidden="true">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-8"></span>
                </h5>

                <button
                  className="btn btn-light disabled placeholder"
                  style={{ width: "60px" }}
                  aria-disabled="true"
                ></button>
              </div>
              <p className="small placeholder-glow">
                <span className="placeholder col-5"></span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSkeleton;
