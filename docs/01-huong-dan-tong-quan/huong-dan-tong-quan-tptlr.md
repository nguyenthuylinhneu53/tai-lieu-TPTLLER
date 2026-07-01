# HƯỚNG DẪN SỬ DỤNG TPTLR — DẠNG CÁC BƯỚC THAO TÁC

> Tài liệu được chuyển đổi từ bản HDSD gốc sang định dạng từng bước (step-by-step), phục vụ xây dựng HDSD online.

---

## 1. ĐĂNG NHẬP TPTLR

### 1.1. Thiết lập xác thực OTP (chỉ thực hiện lần đầu)
**Bước 1:** Cài đặt ứng dụng Google Authenticator hoặc Microsoft Authenticator trên điện thoại Smartphone.

**Bước 2:** Mở ứng dụng vừa cài, thực hiện thiết lập yếu tố xác thực bằng mã OTP theo hướng dẫn hiển thị trên ứng dụng.

> Từ lần đăng nhập sau, NSD chỉ cần lấy mã OTP từ ứng dụng đã thiết lập.

### 1.2. Đăng nhập vào chương trình (các lần sau)
**Bước 1:** Chọn ngôn ngữ hiển thị — Tiếng Việt hoặc Tiếng Anh.

**Bước 2:** Nhập Mã cán bộ.

**Bước 3:** Nhập Mật khẩu.

**Bước 4:** Mở ứng dụng Google Authenticator/Microsoft Authenticator trên điện thoại, lấy mã OTP hiển thị.

**Bước 5:** Nhập mã OTP vào màn hình đăng nhập để hoàn tất.

---

## 2. ĐĂNG NHẬP QUỸ TIỀN ĐỂ THỰC HIỆN GIAO DỊCH

### 2.1. Nguyên tắc chung
- Để thực hiện giao dịch (tiền mặt và phi tiền mặt), NSD **bắt buộc** phải đăng nhập quỹ VND.
- Hệ thống **tự động đăng nhập** các quỹ tiền mặc định đã được gán theo nhóm quyền của NSD.
- **Ngoại lệ:** Tại màn hình chức năng **F5 – Chuyển khoản**, NSD chỉ cần đăng nhập quỹ VND vẫn có thể thực hiện giao dịch với các loại tiền tệ khác. Tuy nhiên khi **hủy** giao dịch F5, NSD phải đăng nhập lại các quỹ tiền liên quan.

### 2.2. Các bước thêm quỹ tiền (khi cần đăng nhập thêm loại quỹ)
**Bước 1:** Xác định màn hình đang thao tác:
- Nếu ở chức năng **Giao dịch ngân quỹ** → chọn mục thêm quỹ tiền tại màn hình này.
- Nếu ở chức năng **Giao dịch khách hàng** → chọn mục thêm quỹ tiền tại màn hình này.

**Bước 2:** Chọn **Thêm quỹ tiền**.

**Bước 3:** Từ danh sách hiển thị, **lựa chọn quỹ tiền** cần đăng nhập bổ sung.

**Bước 4:** Xác nhận để hoàn tất đăng nhập quỹ tiền mới.

---

## 3. DANH MỤC CHỨC NĂNG CHÍNH TRÊN TRANG CHỦ

Trang chủ TPTLR gồm 5 Menu chính:
1. Màn hình / Desktop
2. Nhóm chức năng / Section
3. Hỗ trợ / Options
4. Tiện ích / Utilities
5. Trợ giúp / Help

### 3.1. Menu Màn hình / Desktop
**Mục đích:** Dùng để (i) Thay đổi vai trò, hoặc (ii) Thoát khỏi TPTLR.

**Bước 1:** Chọn Menu **Màn hình/Desktop**.

**Bước 2:** Chọn một trong hai thao tác:
- Thay đổi vai trò, hoặc
- Thoát khỏi TPTLR.

### 3.2. Menu Nhóm chức năng / Section
Tùy theo phân quyền, NSD được đăng nhập vào một hoặc một số chức năng sau:

| Chức năng | Mục đích sử dụng |
|---|---|
| Quản trị Chi nhánh / Branch Maint | Xem thông tin quỹ tiền của ĐGD, tra cứu nhật ký giao dịch, phê duyệt giao dịch theo hàng đợi của KSV, quỹ chính ấn chỉ, điều chỉnh quỹ tiền, bàn giao quỹ tiền, báo cáo… |
| Vấn tin và duy trì séc / Chk Status Maint | Vấn tin, cập nhật trạng thái, in lại séc có trạng thái đã phát hành theo từng tài khoản khách hàng. |
| Giao dịch Ngân quỹ | Xuất/nhập tiền cùng ĐGD; điều chuyển tiền với NHNN, các TCTD, ĐGD khác; tiếp quỹ/hoàn quỹ ATM; xuất tiền mặt theo lô; Nhật ký giao dịch; Kiểm quỹ; giao dịch ấn chỉ của GDV; SetPM quỹ tiền… |
| Giao dịch với KH | Tra cứu thông tin khách hàng; Nộp tiền mặt vào tài khoản; Rút tiền mặt từ tài khoản; Tất toán tiền gửi; Giải ngân; Thu nợ; Chuyển khoản trong hệ thống BIDV… |

**Bước thao tác chung:**
**Bước 1:** Chọn Menu **Nhóm chức năng/Section**.

**Bước 2:** Chọn chức năng cần sử dụng trong danh sách được phân quyền (Quản trị Chi nhánh / Vấn tin và duy trì séc / Giao dịch Ngân quỹ / Giao dịch với KH).

**Bước 3:** Thực hiện nghiệp vụ tương ứng theo mục đích sử dụng của chức năng đã chọn.

### 3.3. Menu Hỗ trợ / Options

| Chức năng | Mục đích sử dụng |
|---|---|
| In số dư tài khoản / Balance Receipt | In số dư tài khoản thanh toán (DDA) và tài khoản tiết kiệm không kỳ hạn (SAV). |
| Vấn tin sổ tiết kiệm / Passbook Inquiry | Vấn tin số seri ấn chỉ gán với tài khoản SAV và tài khoản CD. |
| Duy trì sổ tiết kiệm / Passbook Maint | Cập nhật / Phát hành / Phát hành lại sổ gán với tài khoản SAV, tài khoản CD. |

**Bước thao tác chung:**
**Bước 1:** Chọn Menu **Hỗ trợ/Options**.

**Bước 2:** Chọn chức năng cần dùng (In số dư tài khoản / Vấn tin sổ tiết kiệm / Duy trì sổ tiết kiệm).

**Bước 3:** Thực hiện thao tác tương ứng (in, vấn tin, cập nhật/phát hành/phát hành lại sổ).

### 3.4. Menu Tiện ích / Utilities

| Chức năng | Mục đích sử dụng |
|---|---|
| Khóa ứng dụng / Lock Application | Khóa ứng dụng TP Teller. |
| Máy tính / Calculator | Tính toán với 3 lựa chọn cách nhập: Tiêu chuẩn (Standard); Nhập theo số tiền (Denomination by Amount); Nhập theo số tờ (Denomination by Count). |
| Máy tính quy đổi ngoại tệ / Exchange Cal | Tính toán số tiền quy đổi giữa các đơn vị tiền tệ; tự động hiển thị tỷ giá mua/bán đã cài đặt. |
| Trạng thái host / Host Status | Xem trạng thái online/offline của máy trạm NSD và máy chủ. |

**Bước thao tác — Khóa ứng dụng:**
**Bước 1:** Chọn Menu **Tiện ích/Utilities**.

**Bước 2:** Chọn **Khóa ứng dụng/Lock Application** để khóa TP Teller.

**Bước thao tác — Máy tính:**
**Bước 1:** Chọn Menu **Tiện ích/Utilities** → **Máy tính/Calculator**.

**Bước 2:** Chọn cách nhập phù hợp:
- **Tiêu chuẩn/Standard**: nhập và tính toán như máy tính thông thường.
- **Nhập theo số tiền/Denomination by Amount**: nhập số tiền tương ứng từng mệnh giá tiền mặt theo từng loại tiền tệ, hệ thống tự tính tổng.
- **Nhập theo số tờ/Denomination by Count**: nhập số tờ theo từng mệnh giá tiền mặt theo từng loại tiền tệ, hệ thống tự tính tổng.

**Bước thao tác — Máy tính quy đổi ngoại tệ:**
**Bước 1:** Chọn Menu **Tiện ích/Utilities** → **Máy tính quy đổi n.tệ/Exchange Cal**.

**Bước 2:** Xem tỷ giá mua/bán do chương trình tự động hiển thị.

**Bước 3:** Nhập số tiền cần quy đổi.

> **Lưu ý:** Nếu NSD chỉnh sửa tỷ giá vượt biên độ đã được TSC cài đặt, chương trình sẽ hiển thị ngay thông báo lỗi và không cho phép sửa.

**Bước thao tác — Xem trạng thái Host:**
**Bước 1:** Chọn Menu **Tiện ích/Utilities** → **Trạng thái host/Host Status**.

**Bước 2:** Quan sát trạng thái online/offline của máy trạm và máy chủ.

> Khi máy chủ offline, thanh taskbar phía dưới màn hình TPTLR sẽ hiển thị chữ "offline".

### 3.5. Menu Trợ giúp / Help
**Bước 1:** Chọn Menu **Trợ giúp/Help**.

**Bước 2:** Xem thông tin phiên bản TPTLR đang sử dụng.

---

## 4. PHÍM NÓNG TRUY CẬP NHANH CHỨC NĂNG

### 4.1. Tổ hợp phím CTRL/ALT + chữ cái
**Bước 1:** Xác định loại thao tác cần thực hiện:
- Truy cập nhanh **chức năng chính** → dùng **CTRL + chữ cái**. Ví dụ:
  - Quản trị Chi nhánh: **Ctrl + B**
  - Vấn tin và duy trì séc: **Ctrl + K**
  - Giao dịch Ngân quỹ: **Ctrl + U**
  - Giao dịch với KH: **Ctrl + T**
- Truy cập nhanh **nút chức năng** trong màn hình giao dịch → dùng **ALT + chữ cái**.

**Bước 2:** Nhấn tổ hợp phím tương ứng để thực hiện thao tác mong muốn.

> Danh sách đầy đủ các tổ hợp phím tắt: xem **Phụ lục I — Danh sách tổ hợp các phím tắt trên TP Teller.docx**.

### 4.2. Di chuyển bằng phím Tab
**Bước 1:** Nhấn phím **Tab** để di chuyển giữa các trường thông tin và nút chức năng trên màn hình giao dịch.

**Bước 2:** Khi con trỏ/chuột đến trường có định dạng dropdown list, nhấn **F4** để hiển thị danh sách giá trị.

**Bước 3:** Dùng phím **mũi tên lên/xuống** để di chuyển và chọn giá trị mong muốn.

**Bước 4 (tùy chọn — với bàn phím có cụm phím số):** Dùng phím **–** hoặc **+** ở cụm phím số để di chuyển giữa các trường thông tin và nút chức năng, thay cho việc kết hợp chuột + bàn phím hoặc dùng Tab.

---

*Hết tài liệu.*