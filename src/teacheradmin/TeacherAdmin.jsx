import React from "react";
import '../../public/css/sadmin/css/bootstrap-icons.min.css';
import '../../public/css/sadmin/css/datatables.min.css';
import '../../public/css/sadmin/css/style.css';
import '../../public/css/sadmin/css/material-symbols-outlined.css';
import { Link, NavLink } from "react-router-dom";

const TeacherAdmin = () => {
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
                     <h5>Abhishek</h5>
                     <p>Teacher</p>
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
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i><span class="nav-label">Students</span>
                  </NavLink>
                </div>
                
                <ul className="sub-menu">
                  <li className="link_name"><a href="courses.html">Courses</a></li>
                </ul>
              </li>
              <li>
                <div className="icon-link">
                  <a href="#" onClick={(e) => {e.preventDefault();}} className="menu-toggle">
                    <i class="fa fa-bed" aria-hidden="true"></i><span class="nav-label">Classes</span>
                  </a>
                </div>
               
                <ul className="sub-menu">
                  <li className="link_name"><a href="#">Activities</a></li>
                </ul>
              </li>
              <li>
                <div className="icon-link">
                  <a href="#" onClick={(e) => {e.preventDefault();}} className="menu-toggle">
                    <i class="fa fa-microphone" aria-hidden="true"></i><span class="nav-label">Records</span> 
                  </a>
                </div>
               
                <ul className="sub-menu">
                  <li className="link_name"><a href="#">Phased-I Deemed Applications</a></li>
                </ul>
              </li>
              <li>
                <div className="icon-link">
                  <a href="#" onClick={(e) => {e.preventDefault();}} className="menu-toggle">
                   <i class="fa fa-calendar" aria-hidden="true"></i><span class="nav-label">Statistics</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="icon-link">
                  <a href="#" onClick={(e) => {e.preventDefault();}} className="menu-toggle">
                   <i class="fa fa-cog" aria-hidden="true"></i><span class="nav-label">Settings</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="icon-link">
                  <a href="#" onClick={(e) => {e.preventDefault();}} className="menu-toggle">
                  <i class="fa fa-home" aria-hidden="true"></i><span class="nav-label">Staff Room</span>
                  </a>
                </div>
              </li>
              
            </ul>
          </div>          
        </div>
       
      </div>
      </div>
      </main>


       </div>
    </>
  )
}

export default TeacherAdmin
