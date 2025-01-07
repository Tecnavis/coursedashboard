import { PenThreeSvg } from "@/components/svg";
import CourseAdditionalInfo from "./course-additional-info";
import CourseBuilderArea from "./course-builder-area";
import CourseInfoArea from "./course-info-area";
import "./style.css"
export default function CreateNewCourseArea() {
  return (
    <main className="tp-dashboard-body-bg p-relative">
      <div
        className="tpd-dashboard-wrap-bg"
        style={{
          backgroundImage:
            "url(/assets/img/dashboard/bg/dashboard-bg-shape-1.jpg)",
        }}
      >
        {/* create new course area start */}
        <section className="tpd-new-course-area pt-80 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="tpd-new-course-wrap">
                  <div className="tpd-new-course-box">
                    <div
                      className="accordion"
                      id="accordionPanelsStayOpenExample"
                    >
                      <CourseInfoArea />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tpd-course-enroll-list">
                  <ul>
                    <li>
                      <CourseBuilderArea />
                    </li>
                  </ul>
                </div>
                <br />

                <div className="additional">
                  <ul>
                     <h6 style={{textAlign:"center"}}>Create New Category</h6>
                    {/* <li> */}
                    <CourseAdditionalInfo />
                    {/* </li> */}
                  </ul>
                </div>
                <br />
                <div className="tpd-course-enroll-list">
                  <h2 className="tp-dashboard-title">All Category</h2>
                  <ul>
                    <li>
                      <img
                        src="/assets/img/blog/deatils/blog-details-bg.jpg"
                        style={{ height: "160px", width: "100%" }}
                      />
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Category 1</p>
                      <a href="#">
                        <span>
                          <PenThreeSvg />
                        </span>{" "}
                      </a>
                    </li>
                    <hr />
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="/assets/img/blog/deatils/blog-details-bg.jpg"
                        style={{ height: "160px", width: "100%" }}
                      />
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Category 1</p>
                      <a href="#">
                        <span>
                          <PenThreeSvg />
                        </span>{" "}
                      </a>
                    </li>
                    <hr />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* create new course area end */}
      </div>
    </main>
  );
}
