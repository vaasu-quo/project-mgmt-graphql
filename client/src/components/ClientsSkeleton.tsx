const ClientsSkeleton = () => {
  return (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th style={{ width: "25%" }}>Name</th>
          <th style={{ width: "35%" }}>Email</th>
          <th style={{ width: "25%" }}>Phone</th>
          <th style={{ width: "15%" }}></th>
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, index) => (
          <tr key={index} aria-hidden="true">
            <td className="placeholder-glow">
              <span className="placeholder col-7"></span>
            </td>
            <td className="placeholder-glow">
              <span className="placeholder col-9"></span>
            </td>
            <td className="placeholder-glow">
              <span className="placeholder col-8"></span>
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm disabled placeholder"
                style={{ width: "38px" }}
                aria-disabled="true"
                aria-label="Delete"
              ></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientsSkeleton;
