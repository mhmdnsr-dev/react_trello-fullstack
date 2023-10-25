const Spinners = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm" aria-hidden="true" />
        <span role="status">Loading...</span>
      </button>
    </div>
  );
};

export default Spinners;
