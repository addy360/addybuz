const Copyright = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="
                  copyright_container
                  d-flex
                  flex-sm-row flex-column
                  align-items-center
                  justify-content-start
                "
            >
              <div className="copyright_content">
                Copyright &copy;
                <span className="mx-3">{fullYear}</span>
                All rights reserved
              </div>
              <div className="logos ml-sm-auto">
                <ul className="logos_list">
                  <li>
                    <a href="index.html#">
                      <img src="/images/logos_1.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <img src="/images/logos_2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <img src="/images/logos_3.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <img src="/images/logos_4.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
