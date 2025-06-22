// Hàm tạo HTML cho founder trong layout đặc biệt (section founder)
function createFounderSpecialHTML(founder) {
  const isRight = founder.layoutType === "right";
  const flexDirection = isRight ? "md:flex-row-reverse" : "md:flex-row";
  const textAlign = isRight ? "md:text-right" : "md:text-left";
  const justifyContent = isRight ? "md:justify-end" : "";
  const orderClasses = isRight ? "order-2 md:order-1" : "";
  const orderClasses2 = isRight ? "order-1 md:order-2" : "";

  return `
      <div class="flex flex-col ${flexDirection} space-y-12 items-center gap-4 md:gap-8 bg-white rounded-xl p-4 md:p-0" data-aos="${founder.aos
    }">
        <!-- Avatar -->
        <div class="flex-shrink-0">
          <div class="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden bg-gray-100">
            <img src="${founder.avatar}" alt="${founder.name
    }" class="w-full h-full object-cover object-center" />
          </div>
        </div>
  
        <!-- Content -->
        <div class="flex-1 text-center ${textAlign}">
          <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-4 ${justifyContent}">
            ${isRight
      ? `
              <span class="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium ${orderClasses}" data-i18n="${founder.role}">
                ${founder.roleText}
              </span>
              <h3 class="text-xl md:text-3xl font-bold text-gray-800 ${orderClasses2}" data-i18n="founder.${founder.id}">
                ${founder.name}
              </h3>
            `
      : `
              <h3 class="text-xl md:text-3xl font-bold text-gray-800" data-i18n="founder.${founder.id}">
                ${founder.name}
              </h3>
              <span class="${founder.roleColor} text-white px-3 py-1 rounded-full text-sm font-medium" data-i18n="${founder.role}">
                ${founder.roleText}
              </span>
            `
    }
          </div>
  
          <div class="space-y-2 text-gray-700 mb-6">
            <p class="text-sm md:text-lg">
              <strong data-i18n="founder.unit">Đơn vị:</strong>
              <span data-i18n="${founder.unit}">${founder.unitText}</span>
            </p>
            <p class="text-sm md:text-lg">
              <strong data-i18n="founder.position">Chức vụ:</strong>
              <span data-i18n="${founder.position}">${founder.positionText
    }</span>
            </p>
            <p class="text-sm md:text-lg">
              <strong>Email:</strong> ${founder.email}
            </p>
          </div>
  
          <!-- Social Links -->
          <div class="flex gap-4 justify-center ${isRight ? "md:justify-end" : "md:justify-start"
    }">
            <a href="${founder.social.website}" class="p-2 md:p-3 ${isRight ? "bg-blue-100" : "bg-gray-200"
    } rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group" target="_blank">
              <i data-lucide="globe" class="w-5 h-5 md:w-6 md:h-6"></i>
            </a>
            <a href="${founder.social.zalo
    }" class="p-2 md:p-3 bg-sky-300 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 group">
              <img src="assets/zalo-icon.svg" class="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="${founder.social.facebook
    }" class="p-2 md:p-3 bg-blue-600 rounded-full hover:bg-blue-800 text-white transition-all duration-300 group">
              <i data-lucide="facebook" class="w-5 h-5 md:w-6 md:h-6"></i>
            </a>
          </div>
        </div>
      </div>
    `;
}

// Hàm tạo HTML cho founder trong layout thường (team section)
function createFounderNormalHTML(founder) {
  return `
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 bg-white rounded-xl p-4 md:p-6 shadow-sm" data-aos="fade-left">
        <!-- Avatar -->
        <div class="flex-shrink-0">
          <div class="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-100">
            <img src="${founder.avatar}" alt="${founder.name}" class="w-full h-full object-cover object-center" />
          </div>
        </div>
  
        <!-- Content -->
        <div class="flex-1 text-center sm:text-left">
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
            <h4 class="text-lg md:text-2xl font-bold text-gray-800" data-i18n="founder.${founder.id}">
              ${founder.name}
            </h4>
            <span class="${founder.roleColor} text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium mx-auto sm:mx-0 w-fit" data-i18n="${founder.role}">
              ${founder.roleText}
            </span>
          </div>
  
          <div class="space-y-1 text-gray-700 mb-4 text-sm md:text-base">
            <p class="break-words">
              <strong data-i18n="founder.unit">Đơn vị:</strong>
              <span data-i18n="${founder.unit}">${founder.unitText}</span>
            </p>
            <p class="break-words">
              <strong data-i18n="founder.position">Chức vụ:</strong>
              <span data-i18n="${founder.position}">${founder.positionText}</span>
            </p>
            <p class="break-all">
              <strong>Email:</strong> ${founder.email}
            </p>
          </div>
  
          <!-- Social Links -->
          <div class="flex gap-2 md:gap-3 justify-center sm:justify-start">
            <a href="${founder.social.website}" class="p-2 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300" target="_blank">
              <i data-lucide="globe" class="w-4 h-4 md:w-5 md:h-5"></i>
            </a>
            <a href="${founder.social.zalo}" class="p-2 bg-sky-300 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300">
              <img src="assets/zalo-icon.svg" class="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="${founder.social.facebook}" class="p-2 bg-blue-600 rounded-full hover:bg-blue-800 text-white transition-all duration-300">
              <i data-lucide="facebook" class="w-4 h-4 md:w-5 md:h-5"></i>
            </a>
          </div>
        </div>
      </div>
    `;
}

// Hàm render founder cho section đặc biệt
function renderFounderSpecial() {
  const container = document.getElementById("founder-special-container");
  if (container && typeof memberFounder !== "undefined") {
    container.innerHTML = memberFounder
      .map((founder) => createFounderSpecialHTML(founder))
      .join("");
  }
}

// Hàm render founder cho team section
function renderFounderNormal() {
  const container = document.getElementById("founder-normal-container");
  if (container && typeof memberFounder !== "undefined") {
    container.innerHTML = memberFounder
      .map((founder) => createFounderNormalHTML(founder))
      .join("");
  }
}

// Hàm khởi tạo founder
function initFounders() {
  renderFounderSpecial();
  renderFounderNormal();

  // Khởi tạo lại lucide icons sau khi render
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Chạy khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", initFounders);
