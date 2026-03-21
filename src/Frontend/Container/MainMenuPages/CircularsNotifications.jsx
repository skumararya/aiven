import React, { useState } from "react";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import Spinner from "../Spinner.jsx";
import { useGetNoticeAndTendersQuery } from "../../../redux/api/apiService";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CircularsNotifications = () => {
  const {
    data: noticesResponse,
    isLoading,
    isError,
  } = useGetNoticeAndTendersQuery();
  const notices = noticesResponse?.data || [];
  const [isHovered, setIsHovered] = useState(false);
  const skeletonRows = 4;
  // const getMediaUrl = (path) => {
  //   if (path && path.startsWith('http')) {
  //     return path;
  //   }
  //   return `${API_BASE_URL}/${path}`;
  // };

  // Function to convert date from yyyy-mm-dd to dd-mm-yyyy
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Return original if invalid date

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const buttonStyle = {};

  const renderContent = () => {
    // if (isLoading) return <Spinner />;
    // if (isError) return <p className="text-center p-4">Could not load data.</p>;
    // if (notices.length === 0)
    //   return <p className="text-center p-4">No data found.</p>;

    return (
      <div className="col-12 my-3">
        <div className="table-responsive">
          <table className="table table-bordered custm-table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Sr.No.</th>
                <th style={{ textAlign: "center" }}>Title</th>
                <th style={{ textAlign: "center" }}>Date</th>
                <th style={{ textAlign: "center" }}>Document</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <SkeletonTheme baseColor="#c7c2c2ff" highlightColor="#e0dede">
                  {Array.from({ length: skeletonRows }).map((_, index) => (
                    <tr key={index}>
                      <td>
                        <Skeleton width={20} height={20} />
                      </td>
                      <td>
                        <Skeleton width={180} height={20} />
                      </td>
                      <td>
                        <Skeleton width={150} height={20} />
                      </td>
                      <td>
                        <Skeleton width={200} height={20} />
                      </td>
                    </tr>
                  ))}
                </SkeletonTheme>
              ) : (
                notices.map((item, index) => (
                  <tr key={item.id || index}>
                    <td style={{ textAlign: "left" }}>{index + 1}</td>
                    <td>{item.title}</td>
                    <td style={{ textAlign: "left" }}>
                      {formatDate(item.from_date)}
                    </td>
                    <td>
                      <div
                        className="btn btn-sm btn-outline-danger"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <i className="fas fa-file-pdf mr-2"></i>
                        <Link
                          // href={getMediaUrl(item.aad_file)}
                          to={item.aad_file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm "
                        >
                          View PDF
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      <InnerBannerBreadCrumb
        pageTitle="Circulars & Notifications"
        title2="Circulars & Notifications"
      />
      <div className="profile-content-bg">
        <div className="container">
          <div className="col-12 white-bg white-profile-b">
            <div className="row p-3">
              <div className="col-12">
                <div className="profile-title text-left">
                  <h2>Circulars & Notifications</h2>
                  {/* <div className="sub-underline"></div> */}
                </div>
              </div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircularsNotifications;
