const Alert = ({ message }: { message: string }) => {
  return (
    <>
      <div
        className=" p-3 bg-danger-subtle d-flex align-items-center justify-content-center m-5 gap-2"
        role="alert">
        <i className="fa-solid fa-circle-exclamation" />

        <div>{message}</div>
      </div>
    </>
  );
};

export default Alert;
