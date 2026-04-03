import React from "react";
import '../../public/css/sadmin/css/bootstrap-icons.min.css';
import '../../public/css/sadmin/css/datatables.min.css';
import '../../public/css/sadmin/css/style.css';
import '../../public/css/sadmin/css/material-symbols-outlined.css';
import { Link, NavLink } from "react-router-dom";
import { Chart } from "react-google-charts";
import StudentPieChart from "./charts/StudentPieChart";
const AdminLayout = () => {

  const data = [
  ["Month", "Robotics", "Coding", "AI Fundamentals", "Computational Thinking"],
  ["Jan", 130, 70, 50, 40],
  ["Feb", 80, 60, 40, 30],
  ["Mar", 120, 90, 70, 60],
  ["Apr", 180, 140, 110, 90],
  ["May", 140, 110, 90, 70],
  ["Jun", 240, 190, 160, 120],
  ["Jul", 90, 160, 120, 80],
  ["Aug", 130, 180, 150, 110],
  ["Sep", 160, 200, 170, 130],
  ["Oct", 260, 80, 60, 50],
  ["Nov", 120, 170, 130, 100],
  ["Dec", 170, 110, 90, 70],
];

const options = {
  title: "",
  curveType: "function",
  legend: { position: "bottom" },
  pointSize: 5,
  colors: ["#3b5bdb", "#f59f00", "#40c057", "#fa5252"],
  chartArea: {
    left: 30,
    width: "100%",
  },
};
  return (
  <>
  <div className="noJS dashboard-page">
   <header className="navbar_custom">
    <div className="container-fluid">
      <div className="navbar navbar-expand-xl  ">
        <div className="inner_header_registration">
          <a className="logo-align" onClick={(e) => {e.preventDefault();}} href="#">
            <div className="brand-img">
              <img src="images/sadmin-img/logo.svg" alt="Logo" />
            </div>
            
          </a>
        </div>
        <div className="brand-name"> 
          <a href="#" onClick={(e) => {e.preventDefault();}} className="menu-toggle menu_sidebar_box"><span className="material-symbols-outlined bx-menu">menu</span></a>
           
        </div>
        <div className="right_section fordesktop">
          <div role="button" className="btn-sec">
            <a href="#" className="notifications_unread"><span className="material-symbols-outlined">notifications_unread</span></a>
            <a href="#" className="mail_unread"><span className="material-symbols-outlined">mail</span></a>
          </div>
          <div className="dropdown profile_dropdown">
            <div role="button" className="user_logIn- " data-bs-toggle="dropdown" aria-expanded="false">
              <div className="profile">
                <img src="images/sadmin-img/profile.png" alt="profile" />
              </div>
              <div className="name_user">
                <h5>Mr. Rohit Kumar</h5>
                <p>Student</p>
              </div>
              <span className="material-symbols-outlined mt-3">keyboard_arrow_down</span>
            </div>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"><span className="material-symbols-outlined">
                    account_circle
                  </span>Profile</a></li>
              <li><a className="dropdown-item" href="#"><span className="material-symbols-outlined">
                    settings_b_roll
                  </span>Setting</a></li>
              <li><Link className="dropdown-item" to="/login"><span className="material-symbols-outlined">
                    chip_extraction
                  </span>
                  Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>

  
   <main className="cd__main">
    <div class='dashboard'>
      <div className="sidebar sidebar_custom" id="sidebar2">
      
        <div id="dco-sidebar">
          <div className="main-menu-sec">
            <ul className="nav-links main-menu">
              <li>
                <div className="icon-link">
                  <NavLink className={"active"} to={"/"} onClick={(e) => {e.preventDefault();}}>
                    <span className="material-symbols-outlined">speed</span>
                    <span className="link_name">Dashboard</span>
                  </NavLink>
                </div>
               
                <ul className="sub-menu">
                  <li className="link_name"><NavLink to={"/"}>Dashboard</NavLink></li>
                </ul>
              </li>
              <li>
                <div className="icon-link">
                  <NavLink to={"/"} onClick={(e) => {e.preventDefault();}}>
                    <span className="material-symbols-outlined">book_2</span>
                    <span className="link_name">Courses</span>
                  </NavLink>
                </div>
                
                <ul className="sub-menu">
                  <li className="link_name"><a href="courses.html">Courses</a></li>
                </ul>
              </li>
              <li>
                <div className="icon-link">
                  <a href="#" onClick={(e) => {e.preventDefault();}} className="menu-toggle">
                    <span className="material-symbols-outlined">person_play</span>
                    <span className="link_name">Activities </span>
                  </a>
                </div>
               
                <ul className="sub-menu">
                  <li className="link_name"><a href="#">Activities</a></li>
                </ul>
              </li>
              <li>
                <div className="icon-link">
                  <a href="#" onClick={(e) => {e.preventDefault();}} className="menu-toggle">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="link_name">Settings</span>
                  </a>
                </div>
               
                <ul className="sub-menu">
                  <li className="link_name"><a href="#">Phased-I Deemed Applications</a></li>
                </ul>
              </li>
              
            </ul>
          </div>          
        </div>
       
      </div>
      <div class='dashboard-app main-content home-section'>
        <div class='dashboard-content'>
          <div className="upper_banner-text">
            <div className="container-fluid">
              <div className="top_content">
                <h4>Dashboard</h4>                
                <div className="btn-sec">
                 
                   
                </div>
              </div>
            </div>
          </div>
          
          <div className="container-fluid spacing_gap overflow-sec">
            <div className="row">
               <div className="col-md-6">
                 <div className="card card-custom shadow-sm">
        <div className="row align-items-center">

          
            <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h6>Overall<br/>Class Score</h6>
                        <div className="score-number">68%</div>
                       
                    </div>
                    <div className="trophy"><img src="images/sadmin-img/cup.png"/></div>
                </div>
            </div>

         
            <div className="col-md-6 mt-4 mt-md-0">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h6>Course<br/>Assigned</h6>
                        <div className="score-number">24</div>
                        
                    </div>

                  
                    <div className="circle-wrapper">
                        <div className="center-circle"></div>

                     
                        <div className="dot green" style={{top:"0%", left:"50%"}}></div>
                        <div className="dot green" style={{top:"10%", left:"75%"}}></div>
                        <div className="dot light-green" style={{top:"30%", left:"90%"}}></div>
                        <div className="dot yellow" style={{top:"55%", left:"95%"}}></div>
                        <div className="dot yellow" style={{top:"75%", left:"80%"}}></div>
                        <div className="dot light-green" style={{top:"90%", left:"55%"}}></div>
                        <div className="dot green" style={{top:"80%", left:"25%"}}></div>
                        <div className="dot light-green" style={{top:"60%", left:"5%"}}></div>
                        <div className="dot yellow" style={{top:"35%", left:"10%"}}></div>
                        <div className="dot green" style={{top:"15%", left:"25%"}}></div>
                    </div>

                </div>
            </div>

        </div>
    </div>

               </div>



          <div className="col-md-6"> <div className="live-banner mb-4">
              <div className="row">
               
                <div className="col-md-3 text-center mb-4 mb-md-0">
                    <div className="live-illustration"><img src="images/sadmin-img/live-banner-img2.jpg" alt=""/></div>
                </div>
               
                <div className="col-md-9 live-content text-center text-md-start">
                    <div className="live-title">Mr. Rohit Kumar</div>
                    <div className="live-subtitle">
                        6th Class 
                    </div>
                    <div className="live-time">Session : 10:00 am </div>
                </div>
               
               
              </div>
            </div>
            </div>
            </div>

           
            <div className="row gy-4">
              <div className="col-md-12 col-lg-12">
                <div className="dashboad-box">
                  <ul className="status-list">
                    <li className="status-card payment-card">
                      <div className="card-header">
                          <div className="icon-circle">
                              <img src="images/sadmin-img/card-1.png" alt="Letter Icon"/>
                          </div>
                          <div className="card-title">Active Enrollments</div>
                      </div>
                      <div className="content">
                          <a href="#">
                              <div className="status-info text-light">23 enrolled</div>
                          </a>
                      </div>
                      <a href="javascript:avoid(0)" className="next-arrow"><i className="bi bi-arrow-right-short"></i></a>
                    </li>
                    <li className="status-card payment-card">
                      <div className="card-header">
                          <div className="icon-circle">
                              <img src="images/sadmin-img/card-2.png" alt="Letter Icon"/>
                          </div>
                          <div className="card-title">Upcoming Session</div>
                      </div>
                      <div className="content">
                          <a href="#">
                              <div className="status-info text-light">2 this week</div>
                          </a>
                      </div>
                      <a href="javascript:avoid(0)" className="next-arrow"><i className="bi bi-arrow-right-short"></i></a>
                    </li>
                    <li className="status-card payment-card">
                      <div className="card-header">
                          <div className="icon-circle">
                              <img src="images/sadmin-img/card-3.png" alt="Letter Icon"/>
                          </div>
                          <div className="card-title">Avg. Performance</div>
                      </div>
                      <div className="content">
                          <a href="#">
                              <div className="status-info text-light">0%</div>
                          </a>
                      </div>
                      <a href="javascript:avoid(0)" className="next-arrow"><i className="bi bi-arrow-right-short"></i></a>
                    </li>
                    <li className="status-card payment-card">
                      <div className="card-header">
                          <div className="icon-circle">
                              <img src="images/sadmin-img/card-4.png" alt="Letter Icon"/>
                          </div>
                          <div className="card-title">Assesment</div>
                      </div>
                      <div className="content">
                          <a href="#">
                              <div className="status-info text-light">A</div>
                          </a>
                      </div>
                      <a href="javascript:avoid(0)" className="next-arrow"><i className="bi bi-arrow-right-short"></i></a>
                    </li>
                  </ul>
                </div>
              </div>

               <div className="col-md-6 col-lg-6">
                <div className="dashboad-box-BG">
                  <div className="card_sap_head border-0 pb-0">
                    <div className="heading_ico">
                      <h4>Performance Growth</h4>
                    </div>
                    <div className="dropdown list_card_drop">
                      <div className="list_icon circle-more_horiz" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="material-symbols-outlined">more_horiz</span>
                      </div>
                      <ul className="dropdown-menu p-0">
                        <li className="p-1"><b>Print chart</b></li>
                        <hr className="m-0"/>
                        <li><a className="dropdown-item" href="#">Download PNG image</a></li>
                        <li><a className="dropdown-item" href="#">Download JPEG image</a></li>
                        <li><a className="dropdown-item" href="#">Download PDF document</a></li>
                        <li><a className="dropdown-item" href="#">Download SVG vector image</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* <div id="curve_chart" style="width:100%;height:300px"></div> */}
                   <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
      loader={<div>Loading Chart...</div>}
    />
                </div>
              </div>     
                     
              <div className="col-md-6 col-lg-6">
                <div className="dashboad-box-BG">
                  <div className="card_sap_head border-0 pb-0">
                    <div className="heading_ico">
                      <h4>Courses</h4>
                    </div>
                    <div className="dropdown list_card_drop">
                      <div className="list_icon circle-more_horiz" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="material-symbols-outlined">more_horiz</span>
                      </div>
                      <ul className="dropdown-menu p-0">
                        <li className="p-1"><b>Print chart</b></li>
                        <hr className="m-0"/>
                        <li><a className="dropdown-item" href="#">Download PNG image</a></li>
                        <li><a className="dropdown-item" href="#">Download JPEG image</a></li>
                        <li><a className="dropdown-item" href="#">Download PDF document</a></li>
                        <li><a className="dropdown-item" href="#">Download SVG vector image</a></li>
                      </ul>
                    </div>
                  </div>
                  <div id="chartContainer" className="donut-chart-sec">
                    {/* <div id="chartdiv" style="width:100%;height:300px"></div> */}
                    <StudentPieChart />
                  </div>                
                </div>
              </div>

              <div className="col-md-12 col-lg-12">
                <div className="dashboad-box-BG">
                  <div className="card_sap_head">
                    <div className="heading_ico">
                      <h4>Class Progress</h4>
                    </div>
                    <div className="search-sec">
                      <input type="text" className="form-control" placeholder="Search" />
                      <span className="material-symbols-outlined">search</span>
                    </div>
                  
                    <div className="export-pdf-sec">
                      <input type="text" className="form-control" placeholder="Export to PDF" />
                      <span className="material-symbols-outlined">picture_as_pdf</span>
                    </div>
                    <div className="dropdown list_card_drop">
                      <div className="list_icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="material-symbols-outlined">more_vert</span>
                      </div>
                      <ul className="dropdown-menu p-0">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                      </ul>
                    </div>
                  </div>
                  <table id="example" className="table custom_table table-hover w-100">
                    <thead>
                      <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Courses</th>  
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01</td>
                        <td>TinkerCAD</td> 
                        <td><a href="https://360.articulate.com/review/content/877067c2-3ae1-4c98-bed9-f6a3c32ef774/review" target="_blank" className="btn quick-btn">In Progress</a></td>
                      </tr>
                      <tr>
                        <td>02</td>
                        <td>Drone</td> 
                        <td><a href=" https://360.articulate.com/review/content/839d4409-166f-48d2-a7a4-c3bc8011ed14/review" target="_blank" className="btn quick-btn">In Progress</a></td>
                      </tr>
                      <tr>
                        <td>03</td>
                        <td>MIT</td> 
                        <td><a href="https://360.articulate.com/review/content/268ae8ad-b483-4f93-b38d-94fabeb84990/review" target="_blank" className="btn quick-btn">In Progress</a></td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div> 
            </div>
          </div>          
        </div>
      </div>
    </div>

    <footer>
        <div className="footer-top-sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="footer-nav-sec">
                  <p>Content Provided and Maintained by Steam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </div>
  </>

  );
};

export default AdminLayout;
