// Dữ liệu nội dung cho component HdsdInteractive.
// Đây là nơi bạn thêm/sửa nội dung — KHÔNG cần sửa code trong index.js.
//
// Mỗi phần tử là 1 mục ở sidebar:
//   id            : mã định danh duy nhất
//   icon          : icon hiển thị trước tiêu đề ở sidebar — tuỳ chọn
//   title         : tên hiển thị ở sidebar & tiêu đề trang
//   category      : nhãn phân loại nhỏ (VD: 'TP Teller') — tuỳ chọn
//   description   : mô tả ngắn dưới tiêu đề — tuỳ chọn
//   breadcrumb    : đường dẫn menu, hiện trong pill tối màu — tuỳ chọn
//   note          : ghi chú dạng banner vàng — tuỳ chọn
//   steps         : mảng bước thao tác — hiện ở tab "Thao tác"
//   rules         : mảng quy tắc hệ thống — hiện ở tab "Quy tắc hệ thống" (tuỳ chọn)
//   commonErrors  : mảng lỗi thường gặp — hiện ở tab "Lỗi thường gặp" (tuỳ chọn)
//   mockup        : { meta: [chuỗi hiển thị ở thanh trên khung minh hoạ], fields: [{icon, label, tip}] }
//   step có thể là chuỗi text (tự hiện số) hoặc { icon, text } (hiện icon riêng)

const hdsdSections = [
  {
    id: 'dang-nhap',
    title: 'Đăng nhập TPTLR',
    icon: '🔐',
    category: 'TP Teller',
    description: 'Thiết lập xác thực OTP và đăng nhập vào chương trình TPTLR hằng ngày.',
    breadcrumb: 'Trang chủ → Đăng nhập → Xác thực OTP',
    note: 'Màn hình Demo tương tác: di chuyển chuột vào từng trường để xem mô tả ý nghĩa và lỗi thường gặp.',
    steps: [
      { icon: '📱', text: 'Cài đặt ứng dụng Google Authenticator hoặc Microsoft Authenticator trên điện thoại (chỉ làm 1 lần đầu).' },
      { icon: '🔐', text: 'Thiết lập yếu tố xác thực OTP theo hướng dẫn hiển thị trên ứng dụng.' },
      { icon: '🌐', text: 'Chọn ngôn ngữ hiển thị: Tiếng Việt hoặc Tiếng Anh.' },
      { icon: '🧑‍💼', text: 'Nhập Mã cán bộ và Mật khẩu.' },
      { icon: '🔑', text: 'Lấy mã OTP từ ứng dụng đã thiết lập và nhập vào màn hình đăng nhập.' },
    ],
    rules: [
      'Mã OTP đổi mới sau mỗi 30 giây, chỉ nhập trong thời gian hiệu lực.',
      'Sai mật khẩu quá 5 lần liên tiếp sẽ khoá tài khoản, cần quản trị mở khoá.',
    ],
    commonErrors: [
      'Nhập sai định dạng Mã cán bộ (thiếu số 0 đầu).',
      'Nhập mã OTP đã hết hạn.',
      'Chưa thiết lập Authenticator trước khi đăng nhập lần đầu.',
    ],
    mockup: {
      meta: ['Mã chi nhánh: 120000 - CN SỞ GIAO DỊCH 1', 'Ngày: 22/06/2026'],
      fields: [
        { icon: '🧑‍💼', label: 'Mã cán bộ', tip: 'Mã định danh nhân viên trong hệ thống. Lỗi thường gặp: nhập sai định dạng, thiếu số 0 đầu.' },
        { icon: '🔒', label: 'Mật khẩu', tip: 'Mật khẩu đăng nhập cá nhân. Lỗi thường gặp: nhập sai quá 5 lần sẽ bị khóa tài khoản, cần liên hệ quản trị để mở khóa.' },
        { icon: '🔑', label: 'Mã xác thực OTP', tip: 'Mã OTP lấy từ ứng dụng Authenticator. Lỗi thường gặp: nhập mã đã hết hạn (OTP đổi mỗi 30 giây).' },
      ],
    },
  },
  {
    id: 'dang-nhap-quy-tien',
    title: 'Đăng nhập quỹ tiền',
    icon: '💰',
    category: 'TP Teller',
    description: 'Đăng nhập thêm các loại quỹ tiền cần thiết trước khi thực hiện giao dịch.',
    breadcrumb: 'Giao dịch ngân quỹ / Giao dịch khách hàng → Thêm quỹ tiền',
    steps: [
      { icon: '🖥️', text: 'Xác định màn hình đang thao tác: Giao dịch ngân quỹ hoặc Giao dịch khách hàng.' },
      { icon: '➕', text: 'Chọn "Thêm quỹ tiền".' },
      { icon: '💰', text: 'Từ danh sách hiển thị, lựa chọn quỹ tiền cần đăng nhập bổ sung.' },
      { icon: '✅', text: 'Xác nhận để hoàn tất đăng nhập quỹ tiền mới.' },
    ],
  },
  {
    id: 'danh-muc-chuc-nang',
    title: 'Danh mục chức năng chính',
    icon: '🗂️',
    category: 'TP Teller',
    description: 'Tổng quan các nhóm chức năng nghiệp vụ trên trang chủ TPTLR.',
    breadcrumb: 'Trang chủ → Nhóm chức năng',
    steps: [
      { icon: '📋', text: 'Chọn Menu "Nhóm chức năng/Section".' },
      { icon: '🗂️', text: 'Chọn chức năng cần sử dụng: Quản trị Chi nhánh, Vấn tin và duy trì séc, Giao dịch Ngân quỹ, hoặc Giao dịch với KH.' },
      { icon: '⚙️', text: 'Thực hiện nghiệp vụ tương ứng theo mục đích sử dụng của chức năng đã chọn.' },
    ],
  },
  {
    id: 'phim-tat',
    title: 'Phím tắt truy cập nhanh',
    icon: '⌨️',
    category: 'TP Teller',
    description: 'Các tổ hợp phím giúp thao tác nhanh hơn trên mọi màn hình giao dịch.',
    breadcrumb: 'CTRL/ALT + chữ cái · Tab · F4',
    steps: [
      { icon: '⌨️', text: 'Dùng CTRL + chữ cái để truy cập nhanh các chức năng chính (VD: Ctrl+B cho Quản trị Chi nhánh).' },
      { icon: '🔘', text: 'Dùng ALT + chữ cái để truy cập nhanh các nút chức năng trong màn hình giao dịch.' },
      { icon: '↹', text: 'Dùng phím Tab để di chuyển giữa các trường thông tin và nút chức năng.' },
      { icon: '🔽', text: 'Với trường dropdown list, nhấn F4 để hiển thị danh sách, dùng mũi tên lên/xuống để chọn giá trị.' },
    ],
  },
];

export default hdsdSections;
