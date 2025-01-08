'use client';
import { useEffect, useState } from "react";
import useGlobalContext from "@/hooks/use-global-context";
import { CloseFourSvg } from "../svg";
import { Modal } from "react-bootstrap";

export default function AnnouncementModal() {
   const { showAnnounceAddEditModal,handleAnnounceAddEditModal,announceEditMode:edit } = useGlobalContext();
   const [announcement, setAnnouncement] = useState<string>(edit? edit.announcement:'');
   const [title, setTitle] = useState<string>(edit? edit.courseTitle:'');

   useEffect(() => {
      if (edit) {
         setAnnouncement(edit.announcement || ''); 
         setTitle(edit.courseTitle || '');
      } else {
         setAnnouncement(''); 
         setTitle('');
      }
   }, [edit]);

   return (
      <>
         <Modal className="tpd-modal-announcement" show={showAnnounceAddEditModal} onHide={handleAnnounceAddEditModal} centered={true}>
            <div className="modal-header">
               <h4 className="tpd-modal-title" id="exampleModaltow">{edit ? 'Edit' : 'Create'} New Lessons</h4>
               <button onClick={() => handleAnnounceAddEditModal()} type="button" className="tpd-modal-btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span>
                     <CloseFourSvg />
                  </span>
               </button>
            </div>
            <div className="modal-body">
               <form>
                  <div className="tpd-input-white mb-20">
                     <label>Course Title</label>
                     <input type="text" placeholder="Course Title" value={announcement} onChange={(e) => setAnnouncement(e.target.value)} />
                  </div><hr/>
                  <div className="tpd-input-white mb-20">
                     <label>Course Select</label>
                     <select style={{width:"100%",height:"45px",border:"1px solid #e6e8f0"}}>
                        <option>Course 1</option>
                        <option>Course 1</option>
                        <option>Course 1</option>
                     </select>
                  </div>
                  <div className="tpd-input-white mb-20">
                     <label>Course Video</label>
                     <input type="text" placeholder="course link" value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="tpd-input-white mb-20">
                     <label> Video Name</label>
                     <input type="text" placeholder="Video Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="tpd-new-course-box-duration d-flex align-items-end">
              <div className="tpd-input mr-20">
                <label className="font">Total Course Duration</label>
                <input
                  type="number"
                  name="courseDurationHours"
                  placeholder="00"
                />
                <p>Hour</p>
              </div>
              <div className="tpd-input">
                <input
                  type="number"
                  name="courseDurationMinutes"
                  placeholder="00"
                />
                <p>Minute</p>
              </div>
            </div>
                  <div className="tpd-input mt-35">
                        <label className="font">Course Price</label>
                        <div className="tpd-order-filter tpd-redio-style tmy-tab">
                           <ul className="nav nav-tabs" id="myTab" role="tablist">
                              <li className="nav-item p-relative" role="presentation">
                                 <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-selected="false" tabIndex={-1}>
                                    <span className="tpd-redio-style-span"></span>
                                    <span>Free</span>
                                 </button>
                              </li>
                              <li className="nav-item p-relative" role="presentation">
                                 <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-selected="false" tabIndex={-1}>
                                    <span className="tpd-redio-style-span"></span>
                                    <span>Paid</span>
                                 </button>
                              </li>
                           </ul>
                        </div>
                     </div><br/>
                     <button className="save">
              Add + 
            </button>
               </form>
            </div>
            <div className="modal-footer">
               <button type="button" data-bs-dismiss="modal" aria-label="Close" className="tpd-btn-cancel">Cancel</button>
               <button type="submit" className="tpd-btn-edit ml-10">Save</button>
            </div>
            
         </Modal>
      </>
   )
}
