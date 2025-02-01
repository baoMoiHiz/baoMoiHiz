// 🔥 1️⃣ Hàm chuyển hướng về trang chủ
function diVeTrangChu() {
    window.location.href = "https://whitehac237.github.io/chanQC/#";
}

// 🔥 2️⃣ Hàm hiển thị cửa sổ đăng nhập
function hienCuaSoDangNhap() {
    cuaSoDangNhap.style.display = "flex";
}

// 🔥 3️⃣ Hàm đóng cửa sổ đăng nhập
function dongCuaSoDangNhap() {
    cuaSoDangNhap.style.display = "none";
}

// 🔥 4️⃣ Hàm kiểm tra thông tin đăng nhập
function xuLyDangNhap() {
    const tenDangNhap = document.getElementById("username").value;
    const matKhau = document.getElementById("password").value;

    if (tenDangNhap === "admin" && matKhau === "123456") {
        alert("✅ Đăng nhập thành công!");

        // Lưu trạng thái đăng nhập vào LocalStorage
        localStorage.setItem("daDangNhap", "true");

        // Chuyển hướng đến trang chính
        window.location.href = "index.html";
    } else {
        alert("❌ Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}



// 🔥 5️⃣ Hàm xử lý khi nhấn ra ngoài cửa sổ thì đóng nó
function xuLyClickNgoai(event) {
    if (event.target === cuaSoDangNhap) {
        dongCuaSoDangNhap();
    }
}

// 📌 Lấy các phần tử từ HTML
const cuaSoDangNhap = document.getElementById("loginPopup"); // Cửa sổ đăng nhập
const nutDangNhap = document.getElementById("cuaDangNhap"); // Nút mở cửa sổ đăng nhập
const nutDongDangNhap = document.getElementById("closeLoginPopup"); // Nút đóng cửa sổ
const nutXacNhanDangNhap = document.getElementById("submitLogin"); // Nút xác nhận đăng nhập

// 🔥 6️⃣ Hàm gắn sự kiện cho các nút
function ganSuKienDangNhap() {
    if (nutDangNhap) {
        nutDangNhap.addEventListener("click", hienCuaSoDangNhap);
    } else {
        console.error("❌ Không tìm thấy nút Đăng Nhập!");
    }

    if (nutDongDangNhap) {
        nutDongDangNhap.addEventListener("click", dongCuaSoDangNhap);
    }

    if (nutXacNhanDangNhap) {
        nutXacNhanDangNhap.addEventListener("click", xuLyDangNhap);
    }

    window.addEventListener("click", xuLyClickNgoai);
}

// 🔥 7️⃣ Gắn sự kiện khi trang đã tải xong
document.addEventListener("DOMContentLoaded", function() {
    let nutTrangChu = document.getElementById("homeButton");

    if (nutTrangChu) { // Kiểm tra nếu nút Trang Chủ có tồn tại
        nutTrangChu.addEventListener("click", function(event) {
            event.preventDefault(); // Ngăn không cho chuyển hướng mặc định
            diVeTrangChu();
        });
    }
    ganSuKienDangNhap(); // Gọi hàm để gắn sự kiện cho nút đăng nhập
});
