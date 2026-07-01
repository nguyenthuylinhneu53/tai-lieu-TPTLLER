// Dữ liệu nội dung cho component HdsdInteractive.
// Đây là nơi bạn thêm/sửa nội dung — KHÔNG cần sửa code trong index.js.
//
// Mỗi phần tử trong mảng là 1 mục ở sidebar, gồm:
//   id          : mã định danh duy nhất (không dấu, không khoảng trắng)
//   title       : tên hiển thị ở sidebar
//   breadcrumb  : dòng đường dẫn nhỏ (tùy chọn, có thể bỏ)
//   steps       : mảng các bước thao tác dạng text (tùy chọn)
//   mockup      : mảng các trường trên màn hình demo, mỗi trường có { label, tip } (tùy chọn)

const hdsdSections = [
  {
    id: 'dang-nhap',
    title: 'Đăng nhập TPTLR',
    breadcrumb: 'Trang chủ → Đăng nhập → Xác thực OTP',
    steps: [
      'Cài đặt ứng dụng Google Authenticator hoặc Microsoft Authenticator trên điện thoại (chỉ làm 1 lần đầu).',
      'Thiết lập yếu tố xác thực OTP theo hướng dẫn hiển thị trên ứng dụng.',
      'Chọn ngôn ngữ hiển thị: Tiếng Việt hoặc Tiếng Anh.',
      'Nhập Mã cán bộ và Mật khẩu.',
      'Lấy mã OTP từ ứng dụng đã thiết lập và nhập vào màn hình đăng nhập.',
    ],
    mockup: [
      {
        label: 'Mã cán bộ',
        tip: 'Mã định danh nhân viên trong hệ thống. Lỗi thường gặp: nhập sai định dạng, thiếu số 0 đầu.',
      },
      {
        label: 'Mật khẩu',
        tip: 'Mật khẩu đăng nhập cá nhân. Lỗi thường gặp: nhập sai quá 5 lần sẽ bị khóa tài khoản, cần liên hệ quản trị để mở khóa.',
      },
      {
        label: 'Mã xác thực OTP',
        tip: 'Mã OTP lấy từ ứng dụng Authenticator. Lỗi thường gặp: nhập mã đã hết hạn (OTP đổi mỗi 30 giây).',
      },
    ],
  },
  {
    id: 'dang-nhap-quy-tien',
    title: 'Đăng nhập quỹ tiền',
    breadcrumb: 'Giao dịch ngân quỹ / Giao dịch khách hàng → Thêm quỹ tiền',
    steps: [
      'Xác định màn hình đang thao tác: Giao dịch ngân quỹ hoặc Giao dịch khách hàng.',
      'Chọn "Thêm quỹ tiền".',
      'Từ danh sách hiển thị, lựa chọn quỹ tiền cần đăng nhập bổ sung.',
      'Xác nhận để hoàn tất đăng nhập quỹ tiền mới.',
    ],
  },
  {
    id: 'danh-muc-chuc-nang',
    title: 'Danh mục chức năng chính',
    breadcrumb: 'Trang chủ → Nhóm chức năng',
    steps: [
      'Chọn Menu "Nhóm chức năng/Section".',
      'Chọn chức năng cần sử dụng: Quản trị Chi nhánh, Vấn tin và duy trì séc, Giao dịch Ngân quỹ, hoặc Giao dịch với KH.',
      'Thực hiện nghiệp vụ tương ứng theo mục đích sử dụng của chức năng đã chọn.',
    ],
  },
  {
    id: 'phim-tat',
    title: 'Phím tắt truy cập nhanh',
    breadcrumb: 'CTRL/ALT + chữ cái · Tab · F4',
    steps: [
      'Dùng CTRL + chữ cái để truy cập nhanh các chức năng chính (VD: Ctrl+B cho Quản trị Chi nhánh).',
      'Dùng ALT + chữ cái để truy cập nhanh các nút chức năng trong màn hình giao dịch.',
      'Dùng phím Tab để di chuyển giữa các trường thông tin và nút chức năng.',
      'Với trường dropdown list, nhấn F4 để hiển thị danh sách, dùng mũi tên lên/xuống để chọn giá trị.',
    ],
  },
];

export default hdsdSections;
