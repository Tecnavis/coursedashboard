"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Pagination from "@/components/ui/pagination";
import { online_courses_data } from "@/data/course-data";
import usePagination from "@/hooks/use-pagination";
import CourseDashboardItemAction from "@/components/course/single/dashboard/course-d-item-action";
import { LessonsSvg, PenSvg, UserSvgTwo } from "@/components/svg";
import Link from "next/link";
import CoursePrice from "@/components/course/course-price";

export default function InstructorMyCourseArea() {
  const limit = 6;

  const [myCourses, setMyCourses] = useState([...online_courses_data]);
  const { currentItems, handlePageClick, pageCount } = usePagination(
    myCourses,
    limit
  );

  return (
    <>
      <div className="dashboader-area mb-30">
        <div className="tp-dashboard-tab">
          <h2 className="tp-dashboard-tab-title">My Course...</h2>
        </div>
      </div>
      <div className="course-area">
        <div className="row">
          <div className="col-xl-4 col-md-6">
            {" "}
            <div className="tp-dashboard-course tp-dashboard-course-2 mb-25">
              <div className="tp-dashboard-course-thumb">
                <Link href={`/course-details/${1}`}>
                  <Image
                    src="/assets/img/dashboard/profile/reviews-profile-2.png"
                    alt=""
                    width={262}
                    height={160}
                  />
                </Link>
              </div>
              <div className="tp-dashboard-course-content">
                <div className="tp-dashboard-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span>({18} Reviews)</span>
                </div>
                <h4 className="tp-dashboard-course-title">
                  <Link href={`/course-details/${1}`}>Title 1</Link>
                </h4>
                <div className="tp-dashboard-course-meta">
                  <span>
                    <span>
                      <LessonsSvg />
                    </span>{" "}
                    {12} Lessons
                  </span>
                  <span>
                    <span>
                      <UserSvgTwo />
                    </span>{" "}
                    {10} Student
                  </span>
                </div>
                <div className="tp-dashboard-btn d-flex align-items-center justify-content-between">
                  <div className="tp-course-pricing text-start">
                    <CoursePrice discount={10} price={1000} />
                  </div>
                  <div className="tp-course-action d-flex align-items-center">
                    <div className="tpd-action-inexact-btn">
                      <Link href="/dashboard/create-new-course">
                        <PenSvg />
                      </Link>
                    </div>
                    <CourseDashboardItemAction courseId={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {myCourses.length > 0 && myCourses.length >= limit && (
        <div className="tp-dashboard-pagination pt-20">
          <div className="tp-pagination">
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
              isCenter={true}
            />
          </div>
        </div>
      )}
    </>
  );
}
