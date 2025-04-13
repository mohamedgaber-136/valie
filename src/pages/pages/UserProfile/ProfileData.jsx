import PropTypes from "prop-types";
import { Dropdown, Input, Button, Modal, Menu, Empty, Pagination, Spin } from "antd";
import { EllipsisOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import pic1 from "../../../../public/assets/imgs/vectors/vectorTest.jpeg";
import "../../../../public/assets/css/custom/userProfile.css";
import { useState } from "react";
import { useAddItemMutation } from "@/Redux/api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useOutletContext } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import OtpModal from "@/components/Modal/OtpModal";

// ProfileData component
const ProfileData = () => {
  // Data and loading state from context
  const { data, isSuccess, isLoading } = useOutletContext();
  const user = isSuccess && data?.data ? { ...data.data } : { bookings: [] };
console.log(user?.phone )
  // Local state hooks for phone and modals
  const [phone, setPhone] = useState(user?.phone);
  const [modal1Open, setModal1Open] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBookings = user?.bookings?.slice(startIndex, startIndex + itemsPerPage) || [];

  // Add item mutations
  const [addItem1, { isLoading: isLoading1 }] = useAddItemMutation();
  const [addItem2, { isLoading: isLoading2 }] = useAddItemMutation();

  // Validation schema for form
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  // Handle page change for pagination
  const handlePageChange = (page) => setCurrentPage(page);

  // Status indicator for bookings
  const checkStatus = (status) => {
    switch (status.toString()) {
      case "1":
        return (
          <span className="badge bg-warning p-2 badge-warning ">
            Pending
            <span className="ms-1 fa fa-check" />
          </span>
        );
      case "2":
        return (
          <span className="badge bg-primary p-2   badge-primary">
            Reserved
            <span className="ms-1 fa fa-check" />
          </span>
        );
      case "3":
        return (
          <span className="badge bg-success p-2 badge-success">
            Completed
            <span className="ms-1 fa fa-check" />
          </span>
        );
      case "4":
        return (
          <span className="badge bg-danger p-2  badge-danger">
            Canceled
            <span className="ms-1 fa fa-check" />
          </span>
        );
      default:
        return null; // Or provide a fallback badge here
    }
  };

  // Dropdown component for user options (e.g., Edit)
  const DropdownBlog = () => (
    <Dropdown
      trigger={["click"]}
      overlay={<Menu><Menu.Item key="edit" onClick={() => setModal1Open(true)}>Edit</Menu.Item></Menu>}
      placement="bottomRight"
      arrow
      overlayClassName="custom-dropdown"
    >
      <Button type="text" icon={<EllipsisOutlined style={{ fontSize: 24 }} />} />
    </Dropdown>
  );

  // Main render for ProfileData
  return (
    <>
      {isLoading ? (
        <div className="loaderParent">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="row mt-4 gap-3">
          {/* Profile Header Section */}
          <div className="col-xl-12">
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="guest-profile">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <img
                        src={pic1}
                        alt="profile pic"
                        style={{ width: 100, height: 100, objectFit: "contain" }}
                        className="border rounded-3"
                      />
                      <div className="ms-3">
                        <h4>{user?.username}</h4>
                        <span className="text-secondary">
                          ID {user?.id ? user.id.slice(1, 6) : "N/A"}
                        </span>
                      </div>
                    </div>
                    <DropdownBlog />
                  </div>
                  <div className="d-flex mt-4">
                    <div className="check-status">
                      <span className="d-block mb-2">
                        Phone Number <PhoneOutlined />
                      </span>
                      <span className="font-w500 fs-16">{user?.phone}</span>
                    </div>
                    <div className="ms-4">
                      <span className="d-block mb-2">
                        Email <MailOutlined />
                      </span>
                      <span className="font-w500 fs-16">{user?.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking History Section */}
          <div className="col-xl-12">
            <div className="card overflow-hidden">
              <div className="card-body">
                <h3>Booking History</h3>
                <div className="d-flex mt-4 flex-column gap-2 justify-content-center">
                  {user?.bookings?.length ? (
                    <>
                      {currentBookings.map((book, index) => (
                        <div className="booking  align-items-center p-3 rounded-5 border gap-1 row p-0 m-0" key={index}>
                          <div className="col-12 col-md-2">
                            <img src={book.product.imgSrc} alt="book" className="rounded-3" />
                          </div>
                          <div className="col-5 col-md-2">
                            <h6>{book?.product.title}</h6>
                            <small className="text-success">#{book.orderNumber}</small>
                            <small className="fw-light text-secondary">{new Date(book.date).toLocaleString()}</small>
                          </div>
                          <div className="col-5 col-md-2">
                            <small className="fw-light text-secondary">Pick Up</small>
                            <h6>{book.pickUpLocation}</h6>
                            <small>{new Date(book.pickUpDate).toLocaleString()}</small>
                          </div>
                          <div className="col-5 col-md-2">
                            <small className="fw-light text-secondary">Drop Off</small>
                            <h6>{book.dropOffLocation}</h6>
                          </div>
                          <div className="col-5 col-md-2">
                            <small className="fw-light text-secondary">Price</small>
                            <h6>{Number(book.price)}$</h6>
                          </div>
                          <div className="col-12 col-md-1">
                            {checkStatus(book.status)}
                          </div>
                        </div>
                      ))}
                      <Pagination
                        current={currentPage}
                        pageSize={itemsPerPage}
                        total={user?.bookings?.length || 0}
                        onChange={handlePageChange}
                      />
                    </>
                  ) : (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for editing profile */}
      <Modal
        centered
        open={modal1Open}
        onCancel={() => setModal1Open(false)}
        footer={null}
      >
        <Formik
          initialValues={{
            username: user?.username || "",
            phone: user?.phone || "",
          }}
          validationSchema={validationSchema}
        >
          {({ values, setFieldValue }) => (
            <Form className="d-flex flex-column gap-3">
              <OtpModal changes={true} isModalOpen={isModalOpen} verifyType="phone" verifyBase="user/profile/verify" setIsModalOpen={setIsModalOpen} />

              {/* Username Field */}
              <div>
                <label>Username</label>
                <Field as={Input} name="username" />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>

              {/* Phone Field */}
              <div>
                <PhoneInput
                  country="us"
                  value={phone}
                  name="phone"
                  onChange={(phone) => {
                    setPhone(phone);
                    setFieldValue("phone", phone);
                  }}
                  inputClass="form-control bg-transparent border-secondary w-100"
                  placeholder="Phone Number"
                  inputStyle={{ borderColor: 'grey', borderWidth: 1 }}
                />
                <ErrorMessage name="phone" component="div" className="text-danger" />
              </div>

              {/* Buttons for submitting changes */}
              <div className="d-flex gap-2">
                <Button
                  className="btn btn-search rounded"
                  onClick={async () => {
                    try {
                      await addItem1({
                        endpoint: "user/profile",
                        newItem: { username: values.username, "_method": "PUT" },
                      }).unwrap();
                      setModal1Open(false);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Update Username
                  {isLoading1 && <Spin />}
                </Button>

                <Button
                  className="btn btn-search rounded"
                  onClick={async () => {
                    try {
                  const req=    await addItem2({
                        endpoint: "user/profile",
                        newItem: { phone: values.phone, "_method": "PUT" },
                      }).unwrap();
                      console.log(req)
                      setIsModalOpen(true);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Update Phone
                  {isLoading2 && <Spin />}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

// PropTypes for validation
ProfileData.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    phone: PropTypes.string,
    email: PropTypes.string,
    bookings: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.shape({
          title: PropTypes.string,
          imgSrc: PropTypes.string,
        }),
        orderNumber: PropTypes.string,
        date: PropTypes.string,
        status: PropTypes.string,
        price: PropTypes.number,
      })
    ),
  }),
};

export default ProfileData;
