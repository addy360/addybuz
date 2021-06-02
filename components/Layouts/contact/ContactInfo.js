const ContactInfo = () => {
  return (
    <div className="contact_info">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div
              className="
                  contact_info_container
                  d-flex
                  flex-lg-row flex-column
                  justify-content-between
                  align-items-between
                "
            >
              <div
                className="
                    contact_info_item
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-start
                  "
              >
                <div className="contact_info_image">
                  <i className="fas fa-phone-square fa-3x"></i>
                </div>
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+255 988 111 111</div>
                </div>
              </div>

              <div
                className="
                    contact_info_item
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-start
                  "
              >
                <div className="contact_info_image">
                  <i className="fas fa-at fa-3x"></i>
                </div>
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">Jane@email.com</div>
                </div>
              </div>

              <div
                className="
                    contact_info_item
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-start
                  "
              >
                <div className="contact_info_image">
                  <i className="fas fa-street-view fa-3x"></i>
                </div>
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">
                    Somewhere in Tanzania, Africa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
