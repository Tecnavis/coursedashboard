"use client";
import { useState } from "react";
import Image from "next/image";
import Pagination from "@/components/ui/pagination";
import { online_courses_data } from "@/data/course-data";
import usePagination from "@/hooks/use-pagination";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import CoursePrice from "@/components/course/course-price";
import Link from "next/link";
import { DeleteSvg, LessonsSvg, PenSvg, UserSvgTwo } from "@/components/svg";
import CourseDashboardItemAction from "@/components/course/single/dashboard/course-d-item-action";

export default function InstructorWithdrawalPage() {
  const limit = 6;
  const [myCourses, setMyCourses] = useState([...online_courses_data]);
  const { currentItems, handlePageClick, pageCount } = usePagination(
    myCourses,
    limit
  );

  return (
    <>
      <main className="tp-dashboard-body-bg">
        <DashboardBanner />
        <DashboardContentWrapper>
          {/* dashboard tab area start */}
          <div className="dashboader-area mb-30">
            <div className="tp-dashboard-tab">
              <h2 className="tp-dashboard-tab-title">All Categories</h2>
            </div>
          </div>
          {/* course area start */}
          <div className="course-area">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                {/* <DashboardCourseItemThree course={course} /> */}
                <div className="tp-dashboard-course tp-dashboard-course-2 mb-25">
                  <div className="tp-dashboard-course-thumb">
                    <Link href={`/course-details/${1}`}>
                      <Image
                        src="/assets/img/course/course-thumb-3.jpg"
                        alt="title 123"
                        width={262}
                        height={160}
                      />
                    </Link>
                  </div>
                  <div className="tp-dashboard-course-content">
                    <h4 className="tp-dashboard-course-title">
                      <Link href={`/course-details/${1}`}>API application</Link>
                    </h4>
                    <p>The complete guide to build restful API application</p>
                      <div className="">
                        <div className="tpd-action-inexact-btn">
                          <Link href="/dashboard/create-new-course">
                            <PenSvg />
                          </Link>
                        </div>
                        <button>
                          <span>
                            <DeleteSvg />
                          </span>
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* pagination area start */}
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
          {/* pagination area end */}
        </DashboardContentWrapper>
      </main>
    </>
  );
}
