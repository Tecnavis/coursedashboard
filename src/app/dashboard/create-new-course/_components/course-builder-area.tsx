'use client';
import AnnouncementModal from "@/components/modal/announcement-modal";
import { PlusFiveSvg } from "@/components/svg";
import useGlobalContext from "@/hooks/use-global-context";


export default function CourseBuilderArea() {
	const { handleAnnounceAddEditModal } = useGlobalContext();
	return (
		<div className="accordion-item">
			<h6 className="accordion-header">
				<button className="accordion-button collapsed tpd-new-course-heading-title " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
					ADD NEW LESSON
				</button>
			</h6>
			<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
				<div className="accordion-body">
					<div className="tpd-new-course-modal-btn">

						{/* modal-announcement-btn */}
						<button type="button" className="btn btn-primary" onClick={() => handleAnnounceAddEditModal()} data-bs-whatever="@fat"><span><PlusFiveSvg /></span> Add New Lesson</button>
						{/* modal-announcement-btn-end */}

						{/* announcement modal */}
						<AnnouncementModal />
						{/* announcement modal */}

					</div>
				</div>
			</div>
		</div>
	)
}
