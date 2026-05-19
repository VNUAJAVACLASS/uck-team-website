// i18n.js - Hệ thống đa ngôn ngữ cho UCK TEAM website

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem("selectedLanguage") || "vi";
    this.translations = {
      vi: {
        // Header
        "header.university": "HỌC VIỆN NÔNG NGHIỆP VIỆT NAM",
        "header.faculty": "KHOA CÔNG NGHỆ THÔNG TIN",

        // Navigation
        "nav.introduction": "Giới thiệu",
        "nav.projects": "Dự án",
        "nav.collaborations": "Hợp tác",
        "nav.achievements": "Thành tựu",
        "nav.gallery": "Hoạt động",
        "nav.policy": "Chính sách",

        // Banner
        "banner.research_group": "Nhóm nghiên cứu",
        "banner.vnua": "Học viện Nông nghiệp",
        "banner.vietnam": "Việt Nam",
        "banner.description":
          "Nhóm Sinh Viên yêu thích công nghệ của khoa Công nghệ thông tin - Học viện Nông nghiệp Việt Nam.",
        "banner.academy": "Học viện Nông nghiệp",
        "banner.values": "Trân trọng, Hòa đồng & Phát triển",
        "banner.faculty_info": "Khoa Công nghệ thông tin",
        "banner.java_team": "Java Team",

        // About Us
        "about.title": "Về chúng tôi",
        "about.description":
          "UCK Team là một nhóm nghiên cứu và phát triển công nghệ tại Khoa Công nghệ Thông tin, Học viện Nông nghiệp Việt Nam. Được thành lập vào ngày 20 tháng 11 năm 2023 với mục đích đưa công nghệ thông tin vào phục vụ lợi ích sinh viên và cán bộ nhà trường, chúng tôi tập trung vào việc nghiên cứu, phát triển các giải pháp công nghệ nhằm giải quyết các vấn đề về khoa học và công nghệ được đặt ra.",
        "about.years_active": "Năm hoạt động",
        "about.technologies": "Công nghệ sử dụng",
        "about.active_members": "Thành viên hoạt động",

        // Founder
        "founder.title": "Người sáng lập",
        "founder.founder": "Founder",
        "founder.supervisor": "Giảng viên phụ trách",
        "founder.dung.unit":
          "Bộ môn Mạng và Hệ thống thông tin – Khoa Công nghệ thông tin – Học viện Nông nghiệp Việt Nam",
        "founder.dung.position":
          "Trưởng bộ môn Mạng và Hệ thống thông tin, Giám đốc Trung tâm tin học Học viện Nông Nghiệp Việt Nam.",
        "founder.hieu.unit":
          "Bộ môn Công nghệ phần mềm – Khoa Công nghệ thông tin – Học viện Nông nghiệp Việt Nam",
        "founder.hieu.position":
          "Giảng viên chính bộ môn Công nghệ phần mềm, Cựu lập trình viên Fsoft.",
        "founder.unit": "Đơn vị:",
        "founder.position": "Chức vụ:",
        "founder.tthieu": "Ths. Trần Trung Hiếu",
        "founder.pqdung": "TS. Phạm Quang Dũng",
        "founder.dmhieu": "Dương Minh Hiếu",
        "founder.nthai": "Nguyễn Tiến Hải",
        "founder.pvbhung": "Phạm Việt Bảo Hưng",
        "founder.dvhiep": "Đặng Vũ Hiệp",
        "founder.dvnghiep": "Đoàn Văn Nghiệp",
        "founder.dplam": "Đỗ Phúc Lâm",
        "founder.vnthanh": "Vương Nhật Thành",
        "founder.latu": "Lê Anh Tú",
        "founder.vxlam": "Vũ Xuân Lâm",
        "founder.dmdai": "Đoàn Minh Đại",
        "founder.vhttien": "Võ Hoa Thủy Tiên",
        "founder.ltnlan": "Lương Thị Ngọc Lan",
        "founder.ndhoan": "Nguyễn Đức Hoàn",
        "founder.dvhoang": "Đỗ Văn Hoàng",
        "founder.nxloc": "Nguyễn Xuân Lộc",
        "founder.cvtai": "Chu Văn Tài",

        // Research Areas
        "research.title": "Lĩnh vực nghiên cứu",
        "research.website.title": "Phát triển Website",
        "research.website.desc":
          "Phát triển Website với Frameworks hiện đại và mạnh mẽ: SpringBoot, NodeJS, ReactJS, Vue.js,...",
        "research.mobile.title": "Ứng dụng di động",
        "research.mobile.desc":
          "Phát triển ứng dụng di động đa nền tảng với công nghệ React Native, Dart/Flutter, Kotlin,...",
        "research.desktop.title": "Ứng dụng Desktop",
        "research.desktop.desc":
          "Xây dựng ứng dụng Desktop có tính bảo mật cao với Electron, JavaFX.",
        "research.ai.title": "Trí tuệ nhân tạo",
        "research.ai.desc":
          "Nghiên cứu xây dựng các ứng dụng của trí tuệ nhân áp dụng vào phát triển phần mềm.",
        "research.nlp.title": "Xử lý ngôn ngữ tự nhiên",
        "research.nlp.desc":
          "Nghiên cứu các phương pháp xử lý các bài toán về Xử lý ngôn ngữ tự nhiên (NLP).",
        "research.ml.title": "Học máy",
        "research.ml.desc":
          "Huấn luyện các mô hình trí tuệ nhân tạo lớn(LLMs) với các kỹ thuật như Fine-tuning hay RAG.",

        // Team Structure
        "team.title": "Cấu trúc nhóm và thành viên",
        "team.founders": "Người sáng lập",
        "team.gen1": "Thành viên thế hệ 1",
        "team.gen2": "Thành viên thế hệ 2",
        "team.student": "Sinh viên",
        "team.senior": "Anh cả",
        "team.class": "Lớp:",
        "team.cnpm":
          "Bộ môn Công nghệ phần mềm – Khoa Công nghệ thông tin – Học viện Nông nghiệp Việt Nam",
        "team.cntt":
          "Bộ môn Công nghệ thông tin – Khoa Công nghệ thông tin – Học viện Nông nghiệp Việt Nam",

        // Partners
        "partners.title": "Đơn vị đồng hành",

        // Contact
        "contact.title": "Liên hệ với chúng tôi",
        "contact.address": "Địa chỉ",
        "contact.address_detail":
          "P316, Tầng 3 Tòa nhà Bùi Huy Đáp, Học viện Nông nghiệp Việt Nam, Gia Lâm, Hà Nội",
        "contact.phone": "Điện thoại",
        "contact.connect": "Kết nối với chúng tôi",
        "contact.location": "Vị trí của chúng tôi",
        "contact.find_us":
          "Tìm chúng tôi tại Khoa Công nghệ thông tin - Học viện Nông nghiệp Việt Nam",

        // Projects
        "projects.title": "Đề Tài & Dự Án",
        "projects.description":
          "Dưới đây là danh sách các sản phẩm mà UCK TEAM đã, đang, sẽ thực hiện. Các sản phẩm trải dài từ các dự án thực tế đến các đề tài nghiên cứu khoa học tiêu biểu cấp Khoa, cấp Học viên được áp dụng các công nghệ mới và hiệu quả như: Các FrameWorks hiện đại, các ứng dụng AI, ...",
        "projects.completed": "Các Dự Án Đã & Đang Thực Hiện",
        "projects.planned": "Các Dự Án Sẽ Triển Khai",
        "projects.count": "dự án",
        "projects.status.completed": "Hoàn thành",
        "projects.status.developing": "Đang phát triển",
        "projects.status.planned": "Kế hoạch",
        "projects.view_demo": "Xem Demo",
        "projects.view_source": "Xem Source",
        "projects.download_app": "Tải ứng dụng",
        "projects.view_preview": "Xem Preview",
        "projects.view_plan": "Xem Kế Hoạch",
        "projects.no_source": "Chưa có Source",
        "projects.progress": "Tiến độ:",
        "projects.expected": "Dự kiến hoàn thành:",
        "projects.goal": "Mục tiêu:",
        "projects.demo": "Demo:",
        "projects.summary": "Tổng Quan",
        "projects.summary.completed": "Dự án hoàn thành",
        "projects.summary.developing": "Dự án đang phát triển",
        "projects.summary.planned": "Dự án kế hoạch",
        "projects.collaboration":
          "Quan tâm đến việc hợp tác trong các dự án tương lai?",
        "projects.contact_collab": "Liên Hệ Hợp Tác",
        "projects.education": "Giáo dục",
        "projects.service": "Dịch vụ",
        "projects.ai": "Trí tuệ nhân tạo",
        "projects.project-1":
          "Website bán khóa học - Website thương mại điện tử bán các khóa học lập trình từ cơ bản đến nâng cao.",
        "projects.project-2":
          "Website kênh thông tin dịch vụ khu vực Học viện Nông nghiệp Việt Nam (tích hợp quét mã QR thanh toán).",
        "projects.project-3":
          "Ứng dụng di động kênh thông tin dịch vụ khu vực Học viện Nông nghiệp Việt Nam (tích hợp quét mã QR thanh toán).",
        "projects.project-4":
          "Chatbot hỗ trợ người dùng về thông tin dịch vụ khu vực Học viện Nông nghiệp Việt Nam (Fine-tuning từ mô hình AI Gemini).",
        "projects.project-5":
          "Ứng dụng trên Desktop cho phép sinh viên làm bài thi trên máy và giáo viên quản lý thi.",
        "projects.project-6":
          "Website giới thiệu về nhóm nghiên cứu UCK TEAM - khoa Công nghệ thông tin - Học viện Nông Nghiệp Việt Nam.",
        "projects.connect": "Kết nối nhóm tới nhiều người",

        // Achievements
        "achievements.title": "Thành Tựu & Kết Quả Nghiên Cứu",
        "achievements.description":
          "Dưới đây là các thành tựu, kết quả nghiên cứu mà nhóm đã đạt được trong quá trình hoạt động",
        "achievements.talented_members": "Thành viên tài năng",
        "achievements.completed_projects": "Dự án hoàn thành",
        "achievements.outstanding_achievements": "Thành tựu nổi bật",
        "achievements.scientific_publications": "Xuất bản khoa học",
        "achievements.major_title": "Thành Tựu Nổi Bật",
        "achievements.research_areas": "Lĩnh Vực Nghiên Cứu",
        "achievements.publications": "Xuất Bản Khoa Học",
        "achievements.publication1_title":
          "Báo cáo khoa học - Ecourse - Website bán khóa học lập trình",
        "achievements.publication1_type":
          "Khóa luận tốt nghiệp - khoa Công nghệ phần mềm - 2024",
        "achievements.publication2_title":
          "Thuyết minh Nghiên cứu khoa học - VNUA Services - Website kênh thông tin dịch vụ khu vực Học viện Nông nghiệp Việt Nam",
        "achievements.publication2_type":
          "Nghiên cứu khoa học cấp Học viện năm 2025",
        "achievements.publication3_title":
          "Báo cáo khoa học - EduStar 2.0 - Nâng cấp chức năng cho Website công ty giáo dục EduStar",
        "achievements.publication3_type":
          "Thực tập chuyên ngành - khoa Công nghệ phần mềm - 2024",
        "achievements.author1_name": "Đặng Vũ Hiệp",
        "achievements.author2_name": "Dương Minh Hiếu",
        "achievements.author3_names":
          "Dương Minh Hiếu, Nguyễn Tiến Hải, Phạm Việt Bảo Hưng, Đoàn Văn Nghiệp",
        "achievements.connect": "Kết Nối Với UCK TEAM",
        "achievements.connect_desc":
          "Hãy cùng chúng tôi tạo nên những đột phá công nghệ tiếp theo",
        "achievements.join_team": "Tham Gia Nhóm",
        "achievements.view_projects": "Xem Dự Án",
        "achievements.download": "Tải về",
        "achievements.score": "Điểm:",
        "achievements.author": "Tác giả:",
        "achievements.not_available": "Chưa có",
        "achievements.major_title": "Thành Tựu Nổi Bật",
        "achievements.achievement1_title":
          "Đại diện khoa tham gia cuộc thi Nghiên cứu khoa học cấp Khoa năm 2025",
        "achievements.achievement1_desc":
          "Đại diện khoa tham gia cuộc thi Nghiên cứu khoa học cấp Học viện năm 2025 với website kênh thông tin dịch vụ VNUA Services tích hợp thành công thanh toán thực với VietQR và vận dụng mô hình trí tuệ nhân tạo Gemini vào xây dựng Chatbot hỗ trợ người dùng.",
        "achievements.achievement2_title":
          "Phát triển thành công các chức năng mới cho Website công ty giáo dục EduStar",
        "achievements.achievement2_desc":
          "Phát triển thành công các chức năng mới cho Website công ty giáo dục EduStar và áp dụng trí tuệ nhân tạo hỗ trợ người dùng sinh bài viết chuẩn SEO.",
        "achievements.achievement3_title":
          "Fine-tuning Chatbot VNUA Services với mô hình trí tuệ nhân tạo Gemini",
        "achievements.achievement3_desc":
          "Fine-tuning Chatbot VNUA Services qua sử dụng API Key của mô hình trí tuệ nhân tạo Gemini kết hợp truy vấn MySQL.",
        "achievements.tag_website": "Website",
        "achievements.tag_qr_payment": "Thanh toán trực tuyến quét mã QR",
        "achievements.tag_ai": "Trí tuệ nhân tạo",
        "achievements.tag_seo": "SEO",
        "achievements.tag_chatbot": "Chatbot",
        "achievements.tag_gemini": "Gemini",
        "achievements.tag_mysql": "MySQL",

        //Collaborations
        "collaborations.title": "Hợp Tác Trong Nước & Quốc Tế",
        "collaborations.description":
          "Dưới đây là các hợp tác trong nước và quốc tế mà nhóm đã kết nối thành công",

        //Gallery
        "gallery.title": "Hoạt Động & Khoảnh Khắc",
        "gallery.description":
          "Dưới đây là các hình ảnh ghi lại các hoạt động, khoảnh khắc của nhóm trong quá trình hoạt động",

        // Policy
        "policy.title": "Chính sách nhận sinh viên",
        "policy.description":
          "Gia nhập UCK TEAM - Cộng đồng các sinh viên đam mê chuyên ngành Công nghệ thông tin, nơi kết nối và phát triển kỹ năng lập trình chuyên nghiệp của Khoa Công nghệ thông tin - Học viện Nông nghiệp Việt Nam.",
        "policy.requirements": "Yêu cầu tuyển sinh",
        "policy.academic": "Học thuật",
        "policy.technical": "Kỹ thuật",
        "policy.soft_skills": "Kỹ năng mềm",
        "policy.process": "Quy trình tuyển sinh",
        "policy.register": "Đăng ký",
        "policy.register_desc": "Nộp hồ sơ tới chúng tôi",
        "policy.screening": "Sàng lọc",
        "policy.screening_desc": "Kiểm tra và đánh giá hồ sơ",
        "policy.interview": "Phỏng vấn",
        "policy.interview_desc": "Phỏng vấn và đánh giá năng lực",
        "policy.announcement": "Công bố",
        "policy.announcement_desc": "Thông báo kết quả tới ứng viên",
        "policy.benefits": "Quyền lợi thành viên",
        "policy.real_projects": "Dự án thực tế",
        "policy.real_projects_desc":
          "Tham gia các dự án thực tế, đề tài nghiên cứu khoa học",
        "policy.mentorship": "Mentorship",
        "policy.mentorship_desc":
          "Được hướng dẫn trực tiếp bởi thầy Ths.Trần Trung Hiếu",
        "policy.workshop": "Workshop",
        "policy.workshop_desc":
          "Tham gia các buổi workshop tại các hội thảo công nghệ lớn",
        "policy.job_opportunities": "Cơ hội việc làm",
        "policy.job_opportunities_desc":
          "Kết nối với các nhà tuyển dụng liên kết với khoa",
        "policy.skills": "Kỹ năng",
        "policy.skills_desc":
          "Nâng cao kỹ năng công nghệ thông tin của bản thân",
        "policy.community": "Cộng đồng",
        "policy.community_desc":
          "Kết nối với cộng đồng sinh viên ưu tú của khoa",
        "policy.join_cta": "Sẵn sàng gia nhập UCK TEAM?",
        "policy.join_desc":
          "Đừng bỏ lỡ cơ hội trở thành một phần của cộng đồng các sinh viên tài năng. Chúng tôi luôn chào đón các thành viên mới mọi thời điểm. Hãy liên hệ với chúng tôi nếu bạn muốn gia nhập ngôi nhà chung UCK TEAM !",
        "policy.email_address": "Địa chỉ email nhận hồ sơ:",
        "policy.contact_us": "Liên hệ với chúng tôi",
        "policy.academic_gpa":
          "• GPA ≥ 3.0/4.0 hoặc điểm cao các môn toán, lập trình",
        "policy.academic_major":
          "• Đang học ngành CNTT tại Học viện Nông Nghiệp Việt Nam",
        "policy.academic_year": "• Năm 2 trở lên",
        "policy.academic_spirit": "• Có tinh thần học hỏi cao",
        "policy.technical_programming":
          "• Thành thạo ≥ 1 ngôn ngữ lập trình (ưu tiên Java)",
        "policy.technical_algorithm": "• Hiểu biết về thuật toán cơ bản",
        "policy.technical_project": "• Có project cá nhân",
        "policy.technical_git": "• Làm việc với Git cơ bản",
        "policy.soft_passion": "• Có niềm đam mê với công nghệ thông tin",
        "policy.soft_teamwork": "• Hợp tác, cởi mở trong làm việc nhóm",
        "policy.soft_thinking": "• Tư duy logic và sáng tạo",
        "policy.soft_responsibility":
          "• Nghiêm túc, thật thà, tinh thần trách nhiệm cao",
        "policy.commitment": "Cam kết",
        "policy.commitment_ownership":
          "• Mọi sản phẩm được tạo ra trong quá trình tham gia nhóm đều thuộc quyền sở hữu của người sáng lập nhóm (thầy Dũng và thầy Hiếu)",

        // Footer
        "footer.sitemap": "Sơ đồ Website",
        "footer.description":
          "UCK Team là một nhóm nghiên cứu và phát triển công nghệ tại Khoa Công nghệ Thông tin, Học viện Nông nghiệp Việt Nam. Được thành lập vào ngày 20 tháng 11 năm 2023 với mục đích đưa công nghệ thông tin vào phục vụ lợi ích sinh viên và cán bộ nhà trường, chúng tôi tập trung vào việc nghiên cứu, phát triển các giải pháp công nghệ nhằm giải quyết các vấn đề về khoa học và công nghệ được đặt ra..",
        "footer.copyright": "Copyright © UCK TEAM",

        // Common
        "common.loading": "Đang tải...",
        "common.error": "Lỗi",
        "common.success": "Thành công",
        "common.close": "Đóng",
        "common.save": "Lưu",
        "common.cancel": "Hủy",
        "common.confirm": "Xác nhận",
        "common.view_more": "Xem thêm",
        "common.read_more": "Đọc thêm",
      },
      en: {
        // Header
        "header.university": "VIETNAM NATIONAL UNIVERSITY OF AGRICULTURE",
        "header.faculty": "FACULTY OF INFORMATION TECHNOLOGY",

        // Navigation
        "nav.introduction": "Introduction",
        "nav.projects": "Projects",
        "nav.collaborations": "Collaborations",
        "nav.achievements": "Achievements",
        "nav.gallery": "Activities",
        "nav.policy": "Policy",

        // Banner
        "banner.research_group": "Research group",
        "banner.vnua": "Vietnam National University",
        "banner.vietnam": "of Agriculture",
        "banner.description":
          "Group of students who love technology from the Department of Information Technology - Vietnam Academy of Agriculture.",
        "banner.academy": "Vietnam National University",
        "banner.values": "Respect, Harmony & Development",
        "banner.faculty_info": "Faculty of Information Technology",
        "banner.java_team": "Java Team",

        // About Us
        "about.title": "About us",
        "about.description":
          "UCK Team is a technology research and development group at the Faculty of Information Technology, Vietnam Academy of Agriculture. Established on November 20, 2023 with the purpose of bringing information technology to serve the benefits of students and school officials, we focus on researching and developing technology solutions to solve science and technology problems.",
        "about.years_active": "Years active",
        "about.technologies": "Technologies used",
        "about.active_members": "Active members",

        // Founder
        "founder.title": "Founders",
        "founder.founder": "Founder",
        "founder.supervisor": "Supervisor",
        "founder.dung.unit":
          "Department of Networks and Information Systems – Faculty of Information Technology – Vietnam National University of Agriculture",
        "founder.dung.position":
          "Head of Department of Networks and Information Systems, Director of Information Technology Center, Vietnam National University of Agriculture.",
        "founder.hieu.unit":
          "Department of Software Engineering – Faculty of Information Technology – Vietnam National University of Agriculture",
        "founder.hieu.position":
          "Main lecturer of Department of Software Engineering, Former programmer at Fsoft.",
        "founder.unit": "Unit:",
        "founder.position": "Position:",

        "founder.tthieu": "Tran Trung Hieu, Master",
        "founder.pqdung": "Pham Quang Dung, PhD",
        "founder.dmhieu": "Duong Minh Hieu",
        "founder.nthai": "Nguyen Tien Hai",
        "founder.pvbhung": "Pham Viet Bao Hung",
        "founder.dvhiep": "Dang Vu Hiep",
        "founder.dvnghiep": "Doan Van Nghiep",
        "founder.dplam": "Do Phuc Lam",
        "founder.vnthanh": "Vuong Nhat Thanh",
        "founder.latu": "Le Anh Tu",
        "founder.vxlam": "Vu Xuan Lam",
        "founder.dmdai": "Doan Minh Dai",
        "founder.vhttien": "Vo Hoa Thuy Tien",
        "founder.ltnlan": "Luong Thi Ngoc Lan",
        "founder.ndhoan": "Nguyen Duc Hoan",
        "founder.dvhoang": "Do Van Hoang",
        "founder.nxloc": "Nguyen Xuan Loc",
        "founder.cvtai": "Chu Van Tai",

        // Research Areas
        "research.title": "Research Areas",
        "research.website.title": "Website Development",
        "research.website.desc":
          "Developing websites with modern and powerful frameworks: SpringBoot, NodeJS, ReactJS, Vue.js,...",
        "research.mobile.title": "Mobile Applications",
        "research.mobile.desc":
          "Developing cross-platform mobile applications with technologies like React Native, Dart/Flutter, Kotlin,...",
        "research.desktop.title": "Desktop Applications",
        "research.desktop.desc":
          "Building highly secure desktop applications with Electron, JavaFX.",
        "research.ai.title": "Artificial Intelligence",
        "research.ai.desc":
          "Researching and building AI applications applied to software development.",
        "research.nlp.title": "Natural Language Processing",
        "research.nlp.desc":
          "Researching methods to solve Natural Language Processing (NLP) problems.",
        "research.ml.title": "Machine Learning",
        "research.ml.desc":
          "Training large language models (LLMs) with techniques like Fine-tuning and RAG.",

        // Team Structure
        "team.title": "Team structure and members",
        "team.founders": "Founders",
        "team.gen1": "Generation 1 members",
        "team.gen2": "Generation 2 members",
        "team.student": "Student",
        "team.senior": "Senior",
        "team.class": "Class:",
        "team.cnpm":
          "Department of Software Engineering – Faculty of Information Technology – Vietnam National University of Agriculture",
        "team.cntt":
          "Department of Information Technology – Faculty of Information Technology – Vietnam National University of Agriculture",

        // Partners
        "partners.title": "Partners",

        // Contact
        "contact.title": "Contact us",
        "contact.address": "Address",
        "contact.address_detail":
          "Room 316, 3rd Floor, Bui Huy Dap Building, Vietnam National University of Agriculture, Gia Lam, Hanoi",
        "contact.phone": "Phone",
        "contact.connect": "Connect with us",
        "contact.location": "Our location",
        "contact.find_us":
          "Find us at Faculty of Information Technology - Vietnam National University of Agriculture",

        // Projects
        "projects.title": "Research Topics & Projects",
        "projects.description":
          "Below is a list of products that UCK TEAM has been, is and will make. The products range from practical projects to typical scientific research topics at the Faculty and Student level, applying new and effective technologies such as: Modern FrameWorks, AI applications, ...",
        "projects.completed": "Completed & In Progress Projects",
        "projects.planned": "Future Projects",
        "projects.count": "projects",
        "projects.status.completed": "Completed",
        "projects.status.developing": "In Development",
        "projects.status.planned": "Planned",
        "projects.view_demo": "View Demo",
        "projects.view_source": "View Source",
        "projects.download_app": "Download App",
        "projects.view_preview": "View Preview",
        "projects.view_plan": "View Plan",
        "projects.no_source": "No Source Available",
        "projects.progress": "Progress:",
        "projects.expected": "Expected completion:",
        "projects.goal": "Goal:",
        "projects.demo": "Demo:",
        "projects.summary": "Overview",
        "projects.summary.completed": "Completed projects",
        "projects.summary.developing": "Projects in development",
        "projects.summary.planned": "Planned projects",
        "projects.collaboration":
          "Interested in collaborating on future projects?",
        "projects.contact_collab": "Contact for Collaboration",
        "projects.education": "Education",
        "projects.service": "Service",
        "projects.ai": "Artificial intelligence",
        "projects.project-1":
          "Course Selling Website - E-commerce platform selling programming courses from beginner to advanced level.",
        "projects.project-2":
          "Regional Service Information Website for Vietnam National University of Agriculture (integrated QR code payment scanning).",
        "projects.project-3":
          "Mobile Application for Regional Service Information of Vietnam National University of Agriculture (integrated QR code payment scanning).",
        "projects.project-4":
          "Chatbot supporting users with regional service information for Vietnam National University of Agriculture (Fine-tuned from Gemini AI model).",
        "projects.project-5":
          "Desktop Application allowing students to take exams on computers and teachers to manage examinations.",
        "projects.project-6":
          "Website introducing UCK TEAM research group - Faculty of Information Technology - Vietnam National University of Agriculture.",
        "projects.connect": "Connect the group to everyone",

        // Achievements
        "achievements.title": "Achievements & Research Results",
        "achievements.description":
          "Below are the achievements and research results that the team has achieved during our activities",
        "achievements.talented_members": "Talented members",
        "achievements.completed_projects": "Completed projects",
        "achievements.outstanding_achievements": "Outstanding achievements",
        "achievements.scientific_publications": "Scientific publications",
        "achievements.major_title": "Major Achievements",
        "achievements.research_areas": "Research Areas",
        "achievements.publications": "Scientific Publications",
        "achievements.publication1_title":
          "Scientific Report - Ecourse - Programming Course Sales Website",
        "achievements.publication1_type":
          "Graduation Thesis - Faculty of Software Technology - 2024",
        "achievements.publication2_title":
          "Research Explanation - VNUA Services - Information Service Channel Website for Vietnam National University of Agriculture",
        "achievements.publication2_type":
          "Institute-level Scientific Research 2025",
        "achievements.publication3_title":
          "Scientific Report - EduStar 2.0 - Upgrading Functions for EduStar Education Company Website",
        "achievements.publication3_type":
          "Professional Internship - Faculty of Software Technology - 2024",
        "achievements.author1_name": "Dang Vu Hiep",
        "achievements.author2_name": "Duong Minh Hieu",
        "achievements.author3_names":
          "Duong Minh Hieu, Nguyen Tien Hai, Pham Viet Bao Hung, Doan Van Nghiep",
        "achievements.connect": "Connect With UCK TEAM",
        "achievements.connect_desc":
          "Join us to create the next technological breakthroughs",
        "achievements.join_team": "Join Team",
        "achievements.view_projects": "View Projects",
        "achievements.download": "Download",
        "achievements.score": "Score:",
        "achievements.author": "Author:",
        "achievements.not_available": "Not available",
        "achievements.major_title": "Major Achievements",
        "achievements.achievement1_title":
          "Faculty Representative in Faculty-level Scientific Research Competition 2025",
        "achievements.achievement1_desc":
          "Faculty representative in the Institute-level Scientific Research Competition 2025 with VNUA Services information channel website successfully integrating real payment with VietQR and applying Gemini AI model to build user support Chatbot.",
        "achievements.achievement2_title":
          "Successfully Developed New Features for EduStar Education Company Website",
        "achievements.achievement2_desc":
          "Successfully developed new features for EduStar education company website and applied artificial intelligence to help users generate SEO-standard articles.",
        "achievements.achievement3_title":
          "Fine-tuning VNUA Services Chatbot with Gemini AI Model",
        "achievements.achievement3_desc":
          "Fine-tuning VNUA Services Chatbot using API Key of Gemini AI model combined with MySQL queries.",
        "achievements.tag_website": "Website",
        "achievements.tag_qr_payment": "QR Code Online Payment",
        "achievements.tag_ai": "Artificial Intelligence",
        "achievements.tag_seo": "SEO",
        "achievements.tag_chatbot": "Chatbot",
        "achievements.tag_gemini": "Gemini",
        "achievements.tag_mysql": "MySQL",

        //Collaborations
        "collaborations.title": "Domestic & International Cooperation",
        "collaborations.description":
          "Below are the domestic and international collaborations that the group has successfully connected",

        //Gallery
        "gallery.title": "Activities & Moments",
        "gallery.description":
          "Below are pictures capturing the group's activities and moments during the activity",

        // Policy
        "policy.title": "Student recruitment policy",
        "policy.description":
          "Join UCK TEAM - A community of passionate students majoring in Information Technology, a place to connect and develop professional programming skills from the Faculty of Information Technology - Vietnam Academy of Agriculture.",
        "policy.requirements": "Admission requirements",
        "policy.academic": "Academic",
        "policy.technical": "Technical",
        "policy.soft_skills": "Soft Skills",
        "policy.process": "Recruitment process",
        "policy.register": "Register",
        "policy.register_desc": "Submit application to us",
        "policy.screening": "Screening",
        "policy.screening_desc": "Review and evaluate applications",
        "policy.interview": "Interview",
        "policy.interview_desc": "Interview and competency assessment",
        "policy.announcement": "Announcement",
        "policy.announcement_desc": "Notify results to candidates",
        "policy.benefits": "Member benefits",
        "policy.real_projects": "Real projects",
        "policy.real_projects_desc":
          "Participate in real projects and scientific research topics",
        "policy.mentorship": "Mentorship",
        "policy.mentorship_desc": "Guided by Mr. Tran Trung Hieu",
        "policy.workshop": "Workshop",
        "policy.workshop_desc":
          "Participate in workshops at major technology conferences",
        "policy.job_opportunities": "Job opportunities",
        "policy.job_opportunities_desc":
          "Connect with recruiters affiliated with the faculty",
        "policy.skills": "Skills",
        "policy.skills_desc": "Improve your information technology skills",
        "policy.community": "Community",
        "policy.community_desc":
          "Connect with the community of outstanding students of the faculty",
        "policy.join_cta": "Ready to join UCK TEAM?",
        "policy.join_desc":
          "Don't miss the opportunity to become part of a community of talented students. We always welcome new members at any time. Contact us if you want to join the UCK TEAM family!",
        "policy.email_address": "Email for applications:",
        "policy.contact_us": "Contact us",
        "policy.academic_gpa":
          "• GPA ≥ 3.0/4.0 or high grades in math,programming courses",
        "policy.academic_major":
          "• Currently studying IT at Vietnam National University of Agriculture",
        "policy.academic_year": "• 2nd year or above",
        "policy.academic_spirit": "• High learning spirit",
        "policy.technical_programming":
          "• Proficient in ≥ 1 programming language (Java preferred)",
        "policy.technical_algorithm": "• Understanding of basic algorithms",
        "policy.technical_project": "• Have personal projects",
        "policy.technical_git": "• Basic Git knowledge",
        "policy.soft_passion": "• Passionate about information technology",
        "policy.soft_teamwork": "• Effective teamwork",
        "policy.soft_thinking": "• Logical and creative thinking",
        "policy.soft_responsibility":
          "• Serious attitude and high sense of responsibility",
        "policy.commitment": "Commitment",
        "policy.commitment_ownership":
          "• All products created during participation in the team belong to the ownership of the group founders (Mr. Dung and Mr. Hieu)",

        // Footer
        "footer.sitemap": "Sitemap",
        "footer.description":
          "UCK Team is a technology research and development group at the Faculty of Information Technology, Vietnam Academy of Agriculture. Established on November 20, 2023 with the purpose of bringing information technology to serve the benefits of students and school officials, we focus on researching and developing technology solutions to solve science and technology problems.",
        "footer.copyright": "Copyright © UCK TEAM",

        // Common
        "common.loading": "Loading...",
        "common.error": "Error",
        "common.success": "Success",
        "common.close": "Close",
        "common.save": "Save",
        "common.cancel": "Cancel",
        "common.confirm": "Confirm",
        "common.view_more": "View more",
        "common.read_more": "Read more",
      },
    };

    this.init();
  }

  init() {
    this.createLanguageToggle();
    this.translatePage();
    this.bindEvents();
  }

  createLanguageToggle() {
    // Tạo language toggle button và thêm vào header
    const header = document.querySelector("header .container .flex");
    if (header) {
      const langToggle = document.createElement("div");
      langToggle.className = "language-toggle flex items-center space-x-2";
      langToggle.innerHTML = `
              <div class="relative">
    <button id="langToggleBtn" class="flex items-center space-x-2 px-3 py-2  hover:bg-white/20 rounded-lg transition-colors duration-200">
        <img src="assets/${this.currentLang}.svg" alt="${
          this.currentLang
        } flag" class="w-6 h-6 rounded-full object-cover">
        &nbsp;<span class="text-white font-medium">${
          this.currentLang === "vi" ? "Tiếng Việt" : "English"
        }</span>
        &nbsp;<i data-lucide="chevron-down" class="w-4 h-4 text-white"></i>
    </button>
    <div id="langDropdown" class="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-200 hidden" style="z-index: 99999;">
        <button class="lang-option w-full px-4 py-2 text-left hover:text-blue-600 rounded-t-lg flex items-center space-x-2 transition-colors duration-200" data-lang="vi">
            <img src="assets/vi.svg" alt="Vietnam flag" class="w-6 h-6 rounded-full object-cover transition-all duration-200">
            <span class="whitespace-nowrap text-black">&nbsp;Tiếng Việt</span>
        </button>
        <button class="lang-option w-full px-4 py-2 text-left hover:text-blue-600 rounded-b-lg flex items-center space-x-2 transition-colors duration-200" data-lang="en">
            <img src="assets/en.svg" alt="English flag" class="w-6 h-6 rounded-full object-cover transition-all duration-200">
            <span class="whitespace-nowrap text-black">&nbsp;English</span>
        </button>
    </div>
</div>
            `;

      // Chèn vào cuối header để tự động căn phải
      header.appendChild(langToggle);
    }
  }

  bindEvents() {
    const toggleBtn = document.getElementById("langToggleBtn");
    const dropdown = document.getElementById("langDropdown");
    const langToggle = document.querySelector(".language-toggle");

    if (toggleBtn && dropdown && langToggle) {
      // Toggle dropdown on click
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("hidden");
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", (e) => {
        if (!langToggle.contains(e.target)) {
          dropdown.classList.add("hidden");
        }
      });

      // Language selection
      const langOptions = document.querySelectorAll(".lang-option");
      langOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
          const lang = e.currentTarget.getAttribute("data-lang");
          this.changeLanguage(lang);
        });
      });
    }
  }

  changeLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem("selectedLanguage", lang);

    // Language names mapping
    const langNames = {
      vi: "Tiếng Việt",
      en: "English",
    };

    // Update button text AND flag image
    const toggleBtn = document.getElementById("langToggleBtn");
    if (toggleBtn) {
      // Update flag image
      const flagImg = toggleBtn.querySelector("img");
      if (flagImg) {
        flagImg.src = `assets/${lang}.svg`;
        flagImg.alt = `${lang} flag`;
      }

      // Update text with full language name
      const span = toggleBtn.querySelector("span");
      if (span) {
        span.textContent = langNames[lang] || lang.toUpperCase();
      }
    }

    // Hide dropdown
    const dropdown = document.getElementById("langDropdown");
    if (dropdown) {
      dropdown.classList.add("hidden");
    }

    // Translate page
    this.translatePage();

    // Re-initialize icons after translation
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  translatePage() {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.getTranslation(key);
      if (translation) {
        element.textContent = translation;
      }
    });

    // Translate placeholders
    const placeholderElements = document.querySelectorAll(
      "[data-i18n-placeholder]",
    );
    placeholderElements.forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      const translation = this.getTranslation(key);
      if (translation) {
        element.setAttribute("placeholder", translation);
      }
    });

    // Translate alt attributes
    const altElements = document.querySelectorAll("[data-i18n-alt]");
    altElements.forEach((element) => {
      const key = element.getAttribute("data-i18n-alt");
      const translation = this.getTranslation(key);
      if (translation) {
        element.setAttribute("alt", translation);
      }
    });

    // Translate title attributes
    const titleElements = document.querySelectorAll("[data-i18n-title]");
    titleElements.forEach((element) => {
      const key = element.getAttribute("data-i18n-title");
      const translation = this.getTranslation(key);
      if (translation) {
        element.setAttribute("title", translation);
      }
    });
  }

  getTranslation(key) {
    const translations = this.translations[this.currentLang];
    return translations && translations[key] ? translations[key] : key;
  }

  // Method to add translation key to element
  addTranslation(element, key) {
    element.setAttribute("data-i18n", key);
    const translation = this.getTranslation(key);
    if (translation) {
      element.textContent = translation;
    }
  }
}

// Initialize i18n when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  window.i18n = new I18n();
});

// CSS for language toggle
const style = document.createElement("style");
style.textContent = `
    .language-toggle {
        position: relative;
        margin-left: auto;
    }
    
    .flag-icon {
        font-size: 16px;
    }
    
    .lang-option:hover span {
        color: #2563eb;
    }
    
    .lang-option.active {
        background-color: #dbeafe;
        color: #1d4ed8;
    }
    
    #langDropdown {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        z-index: 99999 !important;
        position: absolute !important;
    }
`;
document.head.appendChild(style);
