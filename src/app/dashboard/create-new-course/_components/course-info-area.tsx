import Image from "next/image";
import file_icon from "@/assets/img/dashboard/bg/select-file-icon.png";

export default function CourseInfoArea() {
  const certificateData = [
    { id: 1, imgSrc: "/assets/img/dashboard/cartificate/cartificate-1.png" },
    { id: 2, imgSrc: "/assets/img/dashboard/cartificate/cartificate-2.png" },
    { id: 3, imgSrc: "/assets/img/dashboard/cartificate/cartificate-3.png" },
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button tpd-new-course-heading-title"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Course Info
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
      >
        <div className="accordion-body">
          <div className="tpd-new-course-box-1">
            <div className="tpd-new-course-select2 row">
              <div className="tpd-input col-6">
                <label>Choose a Category</label>
                <select
                  style={{
                    width: "100%",
                    height: "44px",
                    borderColor: "#e4dede;",
                    borderRadius: "8px",
                  }}
                >
                  <option>Course 1</option>
                  <option>Course 2</option>
                  <option>Course 3</option>
                </select>
              </div>
              <div className="tpd-input col-6">
                <label>Course Name</label>
                <input type="text" placeholder="new course" />
              </div>
              <div className="tpd-input col-6">
                <label>Difficulty Level</label>
                <input type="text" placeholder="Intermediate" />
              </div>
              <div className="tpd-input col-6">
                <label>Language</label>
                <input type="text" placeholder="language" />
              </div>
            </div>

            <div className="tpd-input">
              <label>Course Title</label>
              <input type="text" placeholder="New Course" />
            </div>

            <div className="tpd-input about-height">
              <label>About Course</label>
              <textarea placeholder="About Course"></textarea>
            </div>
            {/* <div className="tpd-new-course-box-3"> */}
            <div className="tpd-new-course-categories">
              <div className="tpd-input course-file">
                <label>Course Cover image</label>
                <div
                  className="tpd-new-course-file-content text-center"
                  style={{
                    backgroundImage:
                      "url(/assets/img/dashboard/bg/select-file.png)",
                  }}
                >
                  <div className="tpd-new-course-file-thumb mb-15">
                    <Image src={file_icon} alt="file-icon" />
                  </div>
                  <span className="upload-btn">
                    <input
                      id="tpd-new-course-file-input"
                      type="file"
                      accept="image/png, image/jpeg"
                    />
                    <label htmlFor="tpd-new-course-file-input">
                      Choose Image to Upload
                    </label>
                  </span>
                  <p>Size: 700x430 pixels</p>
                </div>
              </div>
            </div>
            <div className="tpd-input-box row">
              <div className="tpd-input col-6">
                <label>Regular Price ($)</label>
                <input type="text" placeholder="Set course price" />
              </div>
              <div className="tpd-input col-6">
                <label>Discounted Price ($)</label>
                <input type="number" placeholder="20" />
              </div>
            </div>
            <div className="tpd-new-course-box-1">
              <div className="row">
                <div className="tpd-input col-6">
                  <label>What Will I Learn?</label>
                  <textarea
                    name="whatYouWillLearn"
                    placeholder="Write here the course benefits (One per line)"
                  />
                </div>
                <div className="tpd-input col-6">
                  <label>Targeted Audience</label>
                  <textarea
                    name="targetedAudience"
                    placeholder="Specify the target audience that will benefit the most from the course."
                  />
                </div>
                <div className="tpd-input height-auto col-6">
                  <label>Materials Included</label>
                  <textarea
                    name="materialsIncluded"
                    placeholder="A list of assets you will be providing for the students in this course (One per line)"
                  />
                </div>
                <div className="tpd-input col-6">
                  <label>Requirements/Instructions</label>
                  <textarea
                    name="requirements"
                    placeholder="A list of assets you will be providing for the students in this course (One per line)"
                  />
                </div>
                <div className="tpd-input height-auto col-6">
                  <label>Rating</label>
                  <input type="number" placeholder="rating" />
                </div>
                <div className="tpd-input col-6">
                  <label>Status</label>
                  <select
                    style={{
                      width: "100%",
                      height: "44px",
                      borderColor: "#e4dede;",
                      borderRadius: "8px",
                    }}
                  >
                    <option>Select</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="tpd-input col-12">
                  <label>Status</label>
                  <select
                    style={{
                      width: "100%",
                      height: "44px",
                      borderColor: "#e4dede;",
                      borderRadius: "8px",
                    }}
                  >
                    <option>Select</option>
                    <option>Instructor 1</option>
                    <option>Instructor 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="tpd-new-course-instructor">
              <div className="row">
                {certificateData.map((certificate) => (
                  <div key={certificate.id} className="col-lg-4 col-sm-6">
                    <div className="tpd-new-course-cartificate mb-30">
                      <Image
                        src={certificate.imgSrc}
                        alt={`certificate-${certificate.id}`}
                        width={215}
                        height={276}
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tpd-input height-auto">
          <button className="save">
              Save
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
