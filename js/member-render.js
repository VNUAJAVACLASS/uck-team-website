// Hàm tạo HTML cho một thành viên
function createMemberHTML(member) {
  return `
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 bg-white rounded-xl p-4 md:p-6 shadow-sm" data-aos="fade-left">
        <!-- Avatar -->
        <div class="flex-shrink-0">
          <div class="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-100">
            <img src="${member.avatar}" alt="${member.name}" class="w-full h-full object-cover object-center" />
          </div>
        </div>
  
        <!-- Content -->
        <div class="flex-1 text-center sm:text-left">
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
            <h4 class="text-lg md:text-2xl font-bold text-gray-800" data-i18n="founder.${member.id}">
              ${member.name}
            </h4>
            <span class="bg-green-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium mx-auto sm:mx-0 w-fit" data-i18n="${member.role}">
              ${member.roleText}
            </span>
          </div>
  
          <div class="space-y-1 text-gray-700 mb-4 text-sm md:text-base">
            <p class="break-words">
              <strong data-i18n="team.class">Lớp:</strong>
              ${member.class} - <span data-i18n="${member.department}">${member.departmentText}</span>
            </p>
            <p class="break-all">
              <strong>Email:</strong> ${member.email}
            </p>
          </div>
  
          <!-- Social Links -->
          <div class="flex gap-2 md:gap-3 justify-center sm:justify-start">
            <a href="${member.social.github}" class="p-2 hover:bg-gray-400 rounded-full bg-gray-800 text-white transition-all duration-300" target="_blank">
              <i data-lucide="github" class="w-4 h-4 md:w-5 md:h-5"></i>
            </a>
            <!-- <a href="${member.social.zalo}" class="p-2 bg-sky-300 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300">
              <img src="assets/zalo-icon.svg" class="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="${member.social.facebook}" class="p-2 bg-blue-600 rounded-full hover:bg-blue-800 text-white transition-all duration-300">
              <i data-lucide="facebook" class="w-4 h-4 md:w-5 md:h-5"></i>
            </a> -->
          </div>
        </div>
      </div>
    `;
}

// Hàm render thành viên thế hệ 1
function renderGen1Members() {
  const container = document.getElementById("gen1-members-container");
  if (container && typeof memberGen1 !== "undefined") {
    container.innerHTML = memberGen1
      .map((member) => createMemberHTML(member))
      .join("");
  }
}

// Hàm render thành viên thế hệ 2
function renderGen2Members() {
  const container = document.getElementById("gen2-members-container");
  if (container && typeof memberGen2 !== "undefined") {
    container.innerHTML = memberGen2
      .map((member) => createMemberHTML(member))
      .join("");
  }
}

// Hàm khởi tạo - gọi khi DOM đã sẵn sàng
function initTeamMembers() {
  renderGen1Members();
  renderGen2Members();

  // Khởi tạo lại lucide icons sau khi render
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Chạy khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", initTeamMembers);
