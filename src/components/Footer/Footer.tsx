const Footer = () => {
  return (
    <footer
      className="text-center bottom-0 position-absolute w-100 rounded-3 bg-secondary-subtle"
      // style={{ backgroundColor: '#e1e1e1' }}
    >
      <div className=" d-flex justify-content-between p-2">
        <div className="text-center text-dark p-3">
          © {new Date().getFullYear()} Copyright: team-4
          <a
            className=" ms-2 me-1"
            href="https://www.linkedin.com/in/mhmdnsr-dev/"
            target="_blank">
            Mohamed
          </a>
          &
          <a className=" mx-1" href="#" target="_blank">
            David
          </a>
          &
          <a className=" mx-1" href="#" target="_blank">
            Esraa
          </a>
        </div>
        <section className="">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#"
            role="button"
            data-mdb-ripple-color="dark">
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#"
            role="button"
            data-mdb-ripple-color="dark">
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#"
            role="button"
            data-mdb-ripple-color="dark">
            <i className="fab fa-instagram" />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#"
            role="button"
            data-mdb-ripple-color="dark">
            <i className="fab fa-linkedin" />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#"
            role="button"
            data-mdb-ripple-color="dark">
            <i className="fab fa-github" />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
