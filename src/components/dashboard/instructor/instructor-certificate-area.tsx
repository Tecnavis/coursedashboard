import {  DeleteSvg, PenSvg } from "@/components/svg";
import Image from "next/image";

export default function InstructorCertificateArea() {
   return (
      <>
         {/* section area start */}
         <div className="section-area">
            <div className="row">
               <div className="col-lg-6">
                  <div className="tp-dashboard-section">
                     <h2 className="tp-dashboard-title">All Certificates</h2>
                  </div>
               </div>
            </div>
         </div>
         {/* section area end */}
         {/* certificate area start */}
         <div className="tpd-course-area">
            <div className="row">
               <div className="col-12">
                  <div className="tpd-certificate-table li-hover-none mb-25">
                     <ul>
                           <li >
                              <div className="tpd-table-row">
                                 <div className="tpd-certificate-box d-flex justify-content-between align-items-center">
                                    <div className="tpd-certificate-info d-flex align-items-center">
                                       
                                          <div className="tpd-certificate-img mr-15">
                                             <Image src="/assets/img/dashboard/bg/certificate.png" alt="certificate" width={90} height={64} />
                                          </div>
                                       <h4 className="tpd-certificate-title">Web Development Advanced</h4>
                                    </div>
                                    <div className="tpd-cartificate-btn-box d-flex">
                                       <div className="tpd-certificate-edit">
                                          <div className="tpd-action-inexact-btn">
                                             <button>
                                                <PenSvg />
                                                <span className="tpd-action-tooltip">Edit</span>
                                             </button>
                                          </div>
                                       </div>
                                       <div className="tpd-certificate-delete">
                                          <div className="tpd-action-inexact-btn">
                                             <button className="border-bg">
                                                <DeleteSvg />
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         {/* certificate area end */}

         
      </>
   )
}
