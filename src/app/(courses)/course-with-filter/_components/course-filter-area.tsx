"use client";
import CoursePrice from "@/components/course/course-price";
import ResetFilter from "@/components/course/filter/reset-filter";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import Pagination from "@/components/ui/pagination";
import useCourseFilter from "@/hooks/use-course-filter";
import usePagination from "@/hooks/use-pagination";
import Image from "next/image";
import Link from "next/link";

export default function CourseFilterArea() {
  const { state } = useCourseFilter();
  const { currentItems, handlePageClick, pageCount } = usePagination(
    state.filteredCourses,
    6
  );
  return (
    <section>
      {state.filteredCourses.length > 0 ? (
        <div className="tp-filter-mt-2">
          <div className="container">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="tp-course-item p-relative fix mb-30">
                      <div className="tp-course-teacher mb-15">
                        <span>
                          <Image
                            src="/assets/img/course/course-thumb-3.jpg"
                            alt="image"
                            width={30}
                            height={30}
                          />
                          author_name
                        </span>
                        <span className="discount">-{6}% </span>
                      </div>
                      <div className="tp-course-thumb">
                        <Link href={`/course-details/${1}`}>
                          <Image
                            className="course-lightblue"
                            src="/assets/img/course/course-thumb-3.jpg"
                            alt="hhhh"
                            width={352}
                            height={200}
                          />
                        </Link>
                      </div>
                      <div className="tp-course-content">
                        <div className="tp-course-tag mb-10">
                          <span>Category</span>
                        </div>
                        <div className="tp-course-meta">
                          <span>
                            <span>
                              <LessonsSvg />
                            </span>{" "}
                            6 Lessons
                          </span>
                          <span>
                            <span>
                              <UserSvgTwo />
                            </span>{" "}
                            40 Student
                          </span>
                        </div>
                        <h4 className="tp-course-title">
                          <Link href={`/course-details/${1}`}>rtfgyhiu</Link>
                        </h4>
                        <div className="tp-course-rating d-flex align-items-end justify-content-between">
                          <div className="tp-course-rating-star">
                            <p>
                              5<span> /100</span>
                            </p>
                            <div className="tp-course-rating-icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                          <div className="tp-course-pricing home-2">
                            <CoursePrice discount={50} price={1200} />
                          </div>
                        </div>
                      </div>
                      <div className="tp-course-btn home-2">
                        <Link href={`/course-details/${1}`}>
                          Preview this Courses
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="tp-course-item p-relative fix mb-30">
                      <div className="tp-course-teacher mb-15">
                        <span>
                          <Image
                            src="/assets/img/course/course-thumb-3.jpg"
                            alt="image"
                            width={30}
                            height={30}
                          />
                          author_name
                        </span>
                        <span className="discount">-{6}% </span>
                      </div>
                      <div className="tp-course-thumb">
                        <Link href={`/course-details/${1}`}>
                          <Image
                            className="course-lightblue"
                            src="/assets/img/course/course-thumb-3.jpg"
                            alt="hhhh"
                            width={352}
                            height={200}
                          />
                        </Link>
                      </div>
                      <div className="tp-course-content">
                        <div className="tp-course-tag mb-10">
                          <span>Category</span>
                        </div>
                        <div className="tp-course-meta">
                          <span>
                            <span>
                              <LessonsSvg />
                            </span>{" "}
                            6 Lessons
                          </span>
                          <span>
                            <span>
                              <UserSvgTwo />
                            </span>{" "}
                            40 Student
                          </span>
                        </div>
                        <h4 className="tp-course-title">
                          <Link href={`/course-details/${1}`}>rtfgyhiu</Link>
                        </h4>
                        <div className="tp-course-rating d-flex align-items-end justify-content-between">
                          <div className="tp-course-rating-star">
                            <p>
                              5<span> /100</span>
                            </p>
                            <div className="tp-course-rating-icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                          <div className="tp-course-pricing home-2">
                            <CoursePrice discount={50} price={1200} />
                          </div>
                        </div>
                      </div>
                      <div className="tp-course-btn home-2">
                        <Link href={`/course-details/${1}`}>
                          Preview this Courses
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="tp-course-item p-relative fix mb-30">
                      <div className="tp-course-teacher mb-15">
                        <span>
                          <Image
                            src="/assets/img/course/course-thumb-3.jpg"
                            alt="image"
                            width={30}
                            height={30}
                          />
                          author_name
                        </span>
                        <span className="discount">-{6}% </span>
                      </div>
                      <div className="tp-course-thumb">
                        <Link href={`/course-details/${1}`}>
                          <Image
                            className="course-lightblue"
                            src="/assets/img/course/course-thumb-3.jpg"
                            alt="hhhh"
                            width={352}
                            height={200}
                          />
                        </Link>
                      </div>
                      <div className="tp-course-content">
                        <div className="tp-course-tag mb-10">
                          <span>Category</span>
                        </div>
                        <div className="tp-course-meta">
                          <span>
                            <span>
                              <LessonsSvg />
                            </span>{" "}
                            6 Lessons
                          </span>
                          <span>
                            <span>
                              <UserSvgTwo />
                            </span>{" "}
                            40 Student
                          </span>
                        </div>
                        <h4 className="tp-course-title">
                          <Link href={`/course-details/${1}`}>rtfgyhiu</Link>
                        </h4>
                        <div className="tp-course-rating d-flex align-items-end justify-content-between">
                          <div className="tp-course-rating-star">
                            <p>
                              5<span> /100</span>
                            </p>
                            <div className="tp-course-rating-icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                          <div className="tp-course-pricing home-2">
                            <CoursePrice discount={50} price={1200} />
                          </div>
                        </div>
                      </div>
                      <div className="tp-course-btn home-2">
                        <Link href={`/course-details/${1}`}>
                          Preview this Courses
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="tp-event-inner-pagination pb-100">
                    <div className="tp-dashboard-pagination pt-20">
                      <div className="tp-pagination">
                        <Pagination
                          handlePageClick={handlePageClick}
                          pageCount={pageCount}
                          isCenter={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ResetFilter />
      )}
    </section>
  );
}
