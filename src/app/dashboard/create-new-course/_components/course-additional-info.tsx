'use client';
import Image from "next/image";
import React from "react";
import file_icon from "@/assets/img/dashboard/bg/select-file-icon.png";
import "./style.css"
export default function CourseAdditionalInfo() {

  return (
    <div className="">
          
      {/* <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse"> */}
      {/* <div className=""> */}
      <div className="">
        <div className="tpd-new-course-categories">
          <div className="">
            <label>Category image</label>
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
          {/* </div> */}
          <br />
          <div className="tpd-input">
            <label>Name </label>
            <input
              style={{ width: "100%" }}
              name="targetedAudience"
              placeholder=" Category Name"
            />
          </div>
          <div className="tpd-input height-auto">
            <label>Description</label>
            <textarea name="materialsIncluded" placeholder="Description" />
          </div>
          <div className="tpd-input height-auto">
          <button className="save">
              Save
            </button>
          </div>
          
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
