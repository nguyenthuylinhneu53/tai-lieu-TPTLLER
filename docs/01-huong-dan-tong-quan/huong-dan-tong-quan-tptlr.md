---
sidebar_position: 1
title: II. HƯỚNG DẪN TỔNG QUAN VỀ CHƯƠNG TRÌNH TPTLR
---

# II. HƯỚNG DẪN TỔNG QUAN VỀ CHƯƠNG TRÌNH TPTLR

Hệ thống TPTLR (TP Teller) yêu cầu người sử dụng nắm vững quy trình đăng nhập bảo mật hệ thống, cấu trúc các menu chức năng cốt lõi và các phím tắt tác nghiệp nhanh dưới đây.

---

## 1. Đăng nhập hệ thống & Quản lý quỹ đầu ngày

<Tabs>
  <TabItem value="dang-nhap" label="🔐 1. ĐĂNG NHẬP TPTLR" default>

:::📌 Quy định bảo mật
Hệ thống áp dụng phương thức xác thực 2 lớp (2FA). NSD cần cài đặt ứng dụng **Google Authenticator** hoặc **Microsoft Authenticator** trên điện thoại thông minh trước khi thực hiện.
:::

### 🔄 Các bước thực hiện:

1. **BƯỚC 1 (Chỉ làm lần đầu):** Mở ứng dụng Authenticator trên điện thoại, quét mã QR được cung cấp trên màn hình hệ thống để cấu hình chuỗi mã OTP.
2. **BƯỚC 2:** Tại màn hình đăng nhập TPTLR, lựa chọn ngôn ngữ giao diện (**Tiếng Việt** / **Tiếng Anh**).
3. **BƯỚC 3:** Nhập **Mã cán bộ** và **Mật khẩu** của bạn.
4. **BƯỚC 4:** Mở ứng dụng Authenticator trên điện thoại, lấy mã OTP gồm 6 chữ số hiện tại, nhập vào ô mã xác thực và nhấn **Đăng nhập**.

  </TabItem>

  <TabItem value="dang-nhap-quy" label="💰 2. ĐĂNG NHẬP QUỸ TIỀN">

Để thực hiện giao dịch (tiền mặt và phi tiền mặt), NSD bắt buộc phải hạch toán đăng nhập quỹ tiền.

### ⚖️ Quy tắc vận hành quỹ:

* **Bắt buộc:** Luôn phải đăng nhập **Quỹ VND** đầu ngày.
* **Đặc lệ F5 (Chuyển khoản):** Chỉ cần đăng nhập quỹ VND vẫn giao dịch được các loại ngoại tệ khác. Tuy nhiên, khi **Hủy giao dịch F5**, hệ thống sẽ yêu cầu NSD phải đăng nhập đủ các quỹ ngoại tệ liên quan.
* **Tự động:** Hệ thống tự động đăng nhập các quỹ tiền mặc định theo nhóm quyền của NSD.

### 🔄 Các bước thêm quỹ thủ công:

1. **BƯỚC 1:** Truy cập vào một trong hai phân hệ chức năng:
    * *Cách 1:* Phân hệ **Giao dịch ngân quỹ**.
    * *Cách 2:* Phân hệ **Giao dịch khách hàng**.
2. **BƯỚC 2:** Nhấp chọn nút **Thêm quỹ tiền** trên thanh công cụ.
3. **BƯỚC 3:** Click **Lựa chọn quỹ tiền** (chọn loại ngoại tệ cần phát sinh giao dịch) và xác nhận đăng nhập quỹ.

  </TabItem>
</Tabs>

---

## 2. Tra cứu Danh mục Chức năng chính (Trang chủ TPTLR)

Trang chủ TPTLR bao gồm 5 nhóm Menu chính. Tùy thuộc vào phân quyền cụ thể của từng cán bộ tại từng thời kỳ, màn hình sẽ hiển thị các tính năng chi tiết tương ứng.

---

## 3. Hướng dẫn Tác nghiệp Nhanh (Phím nóng & Phím tắt)

<Tabs>
  <TabItem value="phim-tat" label="⌨️ PHÍM NÓNG & PHÍM TẮT CHUNG" default>

Danh mục đầy đủ tất cả các tổ hợp phím tắt xem tại file đính kèm hệ thống: *Phu Luc I. Danh sach to hop cac phim tat tren TP Teller.docx.*

  </TabItem>

  <TabItem value="dieu-huong" label="🔄 THAO TÁC ĐIỀU HƯỚNG Ô NHẬP LIỆU">

<div style={{backgroundColor: '#006653', color: '#ffffff', padding: '12px 20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', marginBottom: '20px'}}>
  <span>THAO TÁC CỦA GIAO DỊCH VIÊN KHI NHẬP LIỆU</span>
  <span style={{backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '12px', fontSize: '13px', letterSpacing: '1px'}}>MAKER</span>
</div>

### 🎯 Quy trình điều chuyển ô thông tin không dùng chuột:

1. **BƯỚC 1:** Sử dụng phím **Tab** để di chuyển tuần tự từ ô nhập liệu này sang ô nhập liệu khác hoặc di chuyển đến các nút bấm.
2. **BƯỚC 2 (Đối với ô có danh sách thả xuống - Dropdown list):** Khi phím Tab di chuyển đến ô Dropdown, nhấn phím **F4** trên bàn phím để hệ thống tự động bung danh sách các giá trị lựa chọn. Sử dụng phím **Mũi tên lên** hoặc **Mũi tên xuống** để di chuyển chọn giá trị phù hợp.
3. **BƯỚC BỔ TRỢ (Dành cho bàn phím có cụm phím số):** NSD có thể sử dụng phím trừ **(-)** hoặc phím cộng **(+)** tại cụm bàn phím số để di chuyển nhanh qua lại giữa các trường thông tin thay thế hoàn toàn cho phím Tab hoặc chuột trong suốt quá trình tác nghiệp hạch toán tại quầy.

  </TabItem>
</Tabs>