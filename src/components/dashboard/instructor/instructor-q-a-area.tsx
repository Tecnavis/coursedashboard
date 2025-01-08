"use client";
import Image from "next/image";
import { useState } from "react";
type Props = {
  item: {
    id: number;
    student: {
      name: string;
      date: string;
      profileImg: string;
    };
    question: string;
    course: string;
    replies: number;
    status: string;
  };
};
// student q-a data
const studentQaData = [
  {
    id: 1,
    student: {
      name: "Hanson Deck",
      date: "June 11, 2021 at 6:01 am",
      profileImg: "/assets/img/dashboard/profile/reviews-profile-1.png",
    },
    question: "Hello! Could you explain the last lesson?",
    course: "New Course",
    replies: 2,
    status: "pending",
  },
];
// instructor q-a data
const instructorQaData = [
  {
    id: 1,
    student: {
      name: "Hanson Deck",
      date: "June 11, 2021 at 6:01 am",
      profileImg: "/assets/img/dashboard/profile/reviews-profile-1.png",
    },
    question: "Hello! Could you explain the last lesson?",
    course: "New Course",
    replies: 2,
    status: "pending",
  },
];
// tabs
const tabs = ["Student", "Instructor"];

export default function InstructorQuestionAnswerArea({ item }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const question_answer_data =
    activeTab === "Student" ? studentQaData : instructorQaData;

  return (
    <>
      <section className="tpd-order-area">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-dashboard-section">
              <h2 className="tp-dashboard-title">Employee & Students</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="tpd-dashboard-qa-tab mb-30">
                  <div
                    className="nav nav-tabs tpd-dashboard-qa-tab-bg"
                    id="myTab"
                    role="tablist"
                  >
                    {tabs.map((tab) => (
                      <button
                        onClick={() => setActiveTab(tab)}
                        key={tab}
                        className={`nav-link ${
                          activeTab === tab ? "active" : ""
                        } ${tab === "Student" ? "monthly" : "yearly"}`}
                      >
                        {tab}
                      </button>
                    ))}
                    <div className="test"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="myTabContent">
              <div className="tpd-table mb-45">
                <ul>
                  <li className="tpd-table-head">
                    <div className="tpd-table-row">
                      <div className="tpd-instructor-qa-student">
                        <h4 className="tpd-table-title">Name</h4>
                      </div>
                      <div className="tpd-instructor-qa-question">
                        <h4 className="tpd-table-title">Email</h4>
                      </div>
                      <div className="tpd-instructor-qa-reply">
                        <h4 className="tpd-table-title">Phone</h4>
                      </div>
                      <div className="tpd-instructor-qa-status">
                        <h4 className="tpd-table-title">Action</h4>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="tpd-table-row">
                      <div className="tpd-instructor-qa-student">
                        <div className="tpd-reviews-profile d-flex align-items-center">
                          <div className="tpd-reviews-thumb">
                            <Image
                              src="/assets/img/dashboard/profile/reviews-profile-2.png"
                              alt=""
                              width={38}
                              height={38}
                            />
                          </div>
                          <div className="tpd-reviews-text">
                            <h4 className="tpd-reviews-thumb-title">Name</h4>
                            <span className="tpd-common-date">12/23/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="tpd-instructor-qa-question">
                        <h4 className="tpd-common-text">info@gmail.com</h4>
                      </div>
                      <div className="tpd-instructor-qa-reply">
                        <h4 className="tpd-common-text">987654321</h4>
                      </div>
                      <div className="tpd-instructor-qa-btn">
                        <a className="tpd-border-btn" href="#">
                          Edit
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
