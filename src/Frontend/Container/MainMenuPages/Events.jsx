import React, { useMemo } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import { useGetEventsQuery } from "../../../redux/api/apiService";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EventCard = ({ event }) => {
  
  const getImageUrl = (path) => {
    if (path && path.startsWith("http")) {
      return path;
    }
    return `${API_BASE_URL}/${path}`;
  };                 

  return (
    <div className="p-2" style={{ height:"600px"}}>
      <div className="event-bx optn-1 h-100" >
        <img
          src={getImageUrl(event.upload_image_path)}
          className="img-fluid event-card-img"
          alt={event.title}
        />
        <div className="p-3 d-flex flex-column ">
          <h5 style={{fontSize: "16px"}}>{event.title}</h5>
          <p className="card-description flex-grow-1">
            {event.description.length > 100
              ? `${event.description.substring(0, 100)}...`
              : event.description}
          </p>
          <div className="time-date" style={{marginTop:"10px"}}>
            <p className="mdi mdi-clock-outline">
              {" "}
              {event.events_from_time} to {event.events_to_time}
            </p>
            <p className="mdi mdi-calendar">
              {" "}
              {moment(event.events_from_date).format("DD-MMM-YYYY")}
            </p>
          </div>
          <div className="event-address">
            <p className="mdi mdi-map-marker">
              {" "}
              {event.event_location || "New Delhi"}
            </p>
            <Link to={`/event/${event.id}`} className="btn cta_button">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const { data: eventsResponse, isLoading, isError } = useGetEventsQuery();

  const events = useMemo(() => eventsResponse?.data || [], [eventsResponse]);
  console.log("upcoming events date", new Date().getTime())
  const upcomingEvents = useMemo( 
    () =>
      events.filter(
        (item) =>
          new Date(item.events_from_date).getTime() >= new Date().getTime()
      ),
    [events]
  );

  const pastEvents = useMemo(
    () =>
      events.filter(
        (item) =>
          new Date(item.events_from_date).getTime() < new Date().getTime()
      ),
    [events]
  );

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // if (isLoading) return <Spinner />;
  if (isError)
    return (
      <div className="container py-5 text-center">
        <h2>Could not load events.</h2>
      </div>
    );

  return (
    <>
      <InnerBannerBreadCrumb pageTitle={"Events"} title2={"Events"} />

      <div className="event-lists-sec">
        <div className="container">
          <div className="row mt-4">
            <div className="col-12">
              <div className="profile-content-title text-left">
                <h2>Upcoming Events</h2>
                <div className="sub-underline"></div>
              </div>
            </div>
          </div>

          <div className="my-4">
            {isLoading ? (
              // Skeletons shown while loading
              <Slider {...sliderSettings} infinite>
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="p-2">
                    <div className="event-card-skeleton">
                      <Skeleton height={180} /> {/* Image placeholder */}
                      <Skeleton
                        width={150}
                        height={20}
                        style={{ marginTop: "10px" }}
                      />{" "}
                      {/* Title */}
                      <Skeleton
                        width={100}
                        height={15}
                        style={{ marginTop: "6px" }}
                      />{" "}
                      {/* Date or subtitle */}
                    </div>
                  </div>
                ))}
              </Slider>
            ) : upcomingEvents.length > 0 ? (
              // Actual slider when data is ready
              <Slider {...sliderSettings} infinite={upcomingEvents.length > 3}>
                {upcomingEvents.map((item) => (
                  <EventCard key={item.id} event={item} />
                ))}
              </Slider>
            ) : (
              <p>No upcoming events at this time.</p>
            )}
          </div>

          {/* <div className="my-4">
            {upcomingEvents.length > 0 ? (
                <Slider {...sliderSettings} infinite={upcomingEvents.length > 3}>
                    {upcomingEvents.map((item) => <EventCard key={item.id} event={item} />)}
                </Slider>
            ) : <p>No upcoming events at this time.</p>}
          </div> */}
        </div>
      </div>

      <div className="event-lists-sec bottom">
        <div className="container">
          <div className="row mt-4">
            <div className="col-12">
              <div className="profile-content-title text-left">
                <h2>Past Events</h2>
                <div className="sub-underline"></div>
              </div>
            </div>
          </div>

          <div className="my-4">
            {isLoading ? (
              // Show skeleton slides while loading
              <Slider {...sliderSettings} infinite>
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="p-2">
                    <div className="event-card-skeleton">
                      <Skeleton height={180} /> {/* Image placeholder */}
                      <Skeleton
                        width={150}
                        height={20}
                        style={{ marginTop: "10px" }}
                      />{" "}
                      {/* Title */}
                      <Skeleton
                        width={100}
                        height={15}
                        style={{ marginTop: "6px" }}
                      />{" "}
                      {/* Date / subtitle */}
                    </div>
                  </div>
                ))}
              </Slider>
            ) : pastEvents.length > 0 ? (
              // Render actual slider when data is ready
              <Slider {...sliderSettings} infinite={pastEvents.length > 3}>
                {pastEvents.map((item) => (
                  <EventCard key={item.id} event={item} />
                ))} 
              </Slider>
            ) : (
              // Fallback if no data
              <p>No past events found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
