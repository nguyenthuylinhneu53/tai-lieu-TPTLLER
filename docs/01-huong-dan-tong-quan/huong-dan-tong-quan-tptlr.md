---
sidebar_position: 1
title: II. HƯỚNG DẪN TỔNG QUAN VỀ CHƯƠNG TRÌNH TPTLR
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# II. HƯỚNG DẪN TỔNG QUAN VỀ CHƯƠNG TRÌNH TPTLR

Hệ thống TPTLR (TP Teller) yêu cầu người sử dụng (NSD) nắm vững quy trình đăng nhập bảo mật hệ thống, cấu trúc các menu chức năng cốt lõi và các phím tắt tác nghiệp nhanh dưới đây.

---

## 1. Đăng nhập hệ thống & Quản lý quỹ đầu ngày

<Tabs>
  <TabItem value="dang-nhap" label="🔐 1. ĐĂNG NHẬP TPTLR" default>

:::📌 Quy định bảo mật
Hệ thống áp dụng phương thức xác thực 2 lớp (2FA). NSD cần cài đặt ứng dụng **Google Authenticator** hoặc **Microsoft Authenticator** trên điện thoại thông minh trước khi thực hiện.
:::

### 🔄 Các bước thực hiện:

* **BƯỚC 1 (Chỉ làm lần đầu):** Mở ứng dụng Authenticator trên điện thoại, quét mã QR được cung cấp trên màn hình hệ thống để cấu hình chuỗi mã OTP.
* **BƯỚC 2:** Tại màn hình đăng nhập TPTLR, lựa chọn ngôn ngữ giao diện (**Tiếng Việt** / **Tiếng Anh**).
* **BƯỚC 3:** Nhập **Mã cán bộ** và **Mật khẩu** của bạn.
* **BƯỚC 4:** Mở ứng dụng Authenticator trên điện thoại, lấy mã OTP gồm 6 chữ số hiện tại, nhập vào ô mã xác thực và nhấn **Đăng nhập**.

  </TabItem>

  <TabItem value="dang-nhap-quy" label="💰 2. ĐĂNG NHẬP QUỸ TIỀN">

Để thực hiện giao dịch (tiền mặt và phi tiền mặt), NSD bắt buộc phải hạch toán đăng nhập quỹ tiền.

### ⚖️ Quy tắc vận hành quỹ:
* **Bắt buộc:** Luôn phải đăng nhập **Quỹ VND** đầu ngày.
* **Đặc lệ F5 (Chuyển khoản):** Chỉ cần đăng nhập quỹ VND vẫn giao dịch được các loại ngoại tệ khác. Tuy nhiên, khi **Hủy giao dịch F5**, hệ thống sẽ yêu cầu NSD phải đăng nhập đủ các quỹ ngoại tệ liên quan.
* **Tự động:** Hệ thống tự động đăng nhập các quỹ tiền mặc định theo nhóm quyền của NSD.

### 🔄 Các bước thêm quỹ thủ công:
* **BƯỚC 1:** Truy cập vào một trong hai phân hệ chức năng:
    * *Cách 1:* Phân hệ **Giao dịch ngân quỹ**.
    * *Cách 2:* Phân hệ **Giao dịch khách hàng**.
* **BƯỚC 2:** Nhấp chọn nút **Thêm quỹ tiền** trên thanh công cụ.
* **BƯỚC 3:** Click **Lựa chọn quỹ tiền** (chọn loại ngoại tệ cần phát sinh giao dịch) và xác nhận đăng nhập quỹ.

  </TabItem>
</Tabs>

---

## 2. Tra cứu Danh mục Chức năng chính (Trang chủ TPTLR)

Trang chủ TPTLR bao gồm **5 nhóm Menu chính**. Tùy thuộc vào phân quyền cụ thể của từng cán bộ tại từng thời kỳ, màn hình sẽ hiển thị các tính năng chi tiết tương ứng.

<Tabs>
  <TabItem value="menu-desktop-section" label="🖥️ DESKTOP & SECTION" default>

### 3.1 Menu Màn hình (Desktop)
Sử dụng khi NSD cần xử lý các tác vụ hệ thống nhanh:
* ⚙️ Thay đổi vai trò làm việc hiện tại.
* ❌ Thoát khỏi chương trình TPTLR an toàn.

### 3.2 Menu Nhóm chức năng (Section)
Đây là khu vực tác nghiệp nghiệp vụ chính của GDV và KSV:

| Chức năng (Section) | Mục đích sử dụng chi tiết |
| :--- | :--- |
| **Quản trị Chi nhánh**<br/>*(Branch Maint)* | Xem thông tin các quỹ tiền của ĐGD, tra cứu nhật ký giao dịch, phê duyệt giao dịch theo hàng đợi của KSV, quản lý quỹ chính ấn chỉ, điều chỉnh/bàn giao quỹ tiền, xuất báo cáo... |
| **Vấn tin & duy trì séc**<br/>*(Chk Status Maint)* | Tra cứu thông tin séc, cập nhật trạng thái séc, in lại séc có trạng thái đã phát hành theo từng tài khoản của khách hàng. |
| **Giao dịch Ngân quỹ** | Thực hiện xuất/nhập tiền cùng ĐGD; điều chuyển tiền với NHNN, các TCTD, ĐGD khác; tiếp quỹ/hoàn quỹ ATM; xuất tiền mặt theo lô, Nhật ký giao dịch, Kiểm quỹ; giao dịch ấn chỉ của GDV, SetPM quỹ tiền... |
| **Giao dịch với KH** | Tra cứu thông tin khách hàng và thực hiện giao dịch: Nộp/Rút tiền mặt, Tất toán tiền gửi, Giải ngân, Thu nợ, Chuyển khoản trong hệ thống BIDV... |

  </TabItem>

  <TabItem value="menu-options" label="🛠️ OPTIONS (HỖ TRỢ)">

Cung cấp các công cụ tra cứu nhanh số dư và ấn chỉ quản lý tài khoản của khách hàng:

* **In số dư tài khoản (Balance Receipt):** Hỗ trợ in nhanh số dư hiện tại của tài khoản thanh toán (DDA) và tài khoản tiết kiệm không kỳ hạn (SAV).
* **Vấn tin sổ tiết kiệm (Passbook Inquiry):** Tra cứu số sê-ri ấn chỉ trắng hoặc ấn chỉ đã gán với tài khoản tiết kiệm không kỳ hạn (SAV) và tài khoản tiền gửi có kỳ hạn (CD).
* **Duy trì sổ tiết kiệm (Passbook Maint):** Cho phép NSD thực hiện Cập nhật / Phát hành / Phát hành lại sổ gán trực tiếp với tài khoản SAV, tài khoản CD.

  </TabItem>

  <TabItem value="menu-utilities" label="🧮 UTILITIES (TIỆN ÍCH) & HELP">

### 3.4 Menu Tiện ích (Utilities)
Tích hợp các công cụ bổ trợ tác nghiệp nhanh tại quầy:

* 🔒 **Khóa ứng dụng (Lock Application):** Khóa nhanh màn hình làm việc TPTLR tạm thời khi cán bộ rời khỏi vị trí quầy giao dịch.
* 🧮 **Máy tính (Calculator):** Hỗ trợ 3 chế độ tính toán chuyên dụng:
    * *Tiêu chuẩn (Standard):* Tính toán cộng trừ nhân chia thông thường.
    * *Nhập theo số tiền (Denomination by Amount):* Nhập tổng số tiền tương ứng với từng mệnh giá tiền mặt hệ thống khai báo để tự tính tổng bảng kê.
    * *Nhập theo số tờ (Denomination by Count):* Nhập số lượng tờ theo từng mệnh giá tiền để hệ thống tự động nhân thành tiền và tổng hợp bảng kê.
* 💱 **Máy tính quy đổi ngoại tệ (Exchange Cal):** Tự động tính toán quy đổi giữa các loại tiền tệ theo tỷ giá mua/bán được cài đặt sẵn. *(Lưu ý: Nếu NSD chỉnh sửa tỷ giá vượt biên độ cho phép của TSC, hệ thống sẽ báo lỗi và chặn giao dịch).*
* 🌐 **Trạng thái host (Host Status):** Kiểm tra trạng thái kết nối Online/Offline của máy trạm và máy chủ. *(Khi hệ thống rơi vào trạng thái Offline, dòng chữ "offline" sẽ cảnh báo trực quan dưới thanh Taskbar của TPTLR).*

### 3.5 Menu Trợ giúp (Help)
* ℹ️ Hiển thị thông tin chi tiết về phiên bản (Version) hiện tại của chương trình TPTLR đang vận hành.

  </TabItem>
</Tabs>

---

## 3. Hướng dẫn Tác nghiệp Nhanh (Phím nóng & Phím tắt)

Để tăng tốc độ xử lý giao dịch tại quầy, giảm thiểu thời gian sử dụng chuột, NSD thực hiện tác nghiệp theo luồng phím tắt được thiết kế focus theo từng vai trò xử lý dưới đây:

<Tabs>
  <TabItem value="phim-tat" label="⌨️ TỔ HỢP PHÍM NÓNG" default>

<div style={{backgroundColor: '#006653', color: '#ffffff', padding: '12px 20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', marginBottom: '20px'}}>
  <span>👤 ÁP DỤNG CHO CÁN BỘ GIAO DỊCH VIÊN</span>
  <span style={{backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '12px', fontSize: '13px', letterSpacing: '1px'}}>MAKER</span>
</div>

### 1️⃣ Truy cập nhanh phân hệ chính (`CTRL` + Chữ cái):
Tại màn hình chính, nhấn tổ hợp phím sau để mở ngay các phân hệ nghiệp vụ:
* <kbd>Ctrl</kbd> + <kbd>K</kbd> : Mở **Vấn tin và duy trì séc**
* <kbd>Ctrl</kbd> + <kbd>U</kbd> : Mở **Giao dịch Ngân quỹ**
* <kbd>Ctrl</kbd> + <kbd>T</kbd> : Mở **Giao dịch với Khách hàng**

### 2️⃣ Thao tác nút chức năng nhanh (`ALT` + Chữ cái):
* Khi đang ở trong bất kỳ màn hình giao dịch nào, nhấn tổ hợp <kbd>Alt</kbd> + [Chữ cái gạch chân trên nút] để kích hoạt nhanh nút chức năng đó (Ví dụ: `Alt + G` để Gửi GD, `Alt + H` để Hoàn thành...).

<div style={{backgroundColor: '#1a5276', color: '#ffffff', padding: '12px 20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', marginBottom: '20px', marginTop: '30px'}}>
  <span>📋 ÁP DỤNG CHO KIỂM SOÁT VIÊN</span>
  <span style={{backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '12px', fontSize: '13px', letterSpacing: '1px'}}>CHECKER</span>
</div>

### 1️⃣ Truy cập nhanh danh mục hàng đợi phê duyệt:
* <kbd>Ctrl</kbd> + <kbd>B</kbd> : Mở nhanh phân hệ **Quản trị Chi nhánh** để kiểm tra và duyệt giao dịch từ hàng đợi.

### 2️⃣ Phụ lục đính kèm:
* *Danh mục đầy đủ tất cả tổ hợp phím tắt xem tại file đính kèm hệ thống: Phu luc I. Danh sach to hop cac phim tat tren TP Teller.docx.*

  </TabItem>

  <TabItem value="dieu-huong" label="🔄 THAO TÁC ĐIỀU HƯỚNG Ô NHẬP LIỆU">

<div style={{backgroundColor: '#006653', color: '#ffffff', padding: '12px 20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', marginBottom: '20px'}}>
  <span>👤 THAO TÁC CỦA GIAO DỊCH VIÊN KHI NHẬP LIỆU</span>
  <span style={{backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '12px', fontSize: '13px', letterSpacing: '1px'}}>MAKER</span>
</div>

### 🔄 Quy trình điều chuyển ô thông tin không dùng chuột:

* **BƯỚC 1:** Sử dụng phím <kbd>Tab</kbd> để di chuyển tuần tự từ ô nhập liệu này sang ô nhập liệu khác hoặc di chuyển đến các nút bấm.
* **BƯỚC 2 (Đối với ô có danh sách thả xuống - Dropdown list):** 1. Khi phím Tab di chuyển đến ô Dropdown, nhấn phím <kbd>F4</kbd> trên bàn phím để hệ thống tự động bung danh sách các giá trị lựa chọn.
  2. Sử dụng phím **Mũi tên lên ($\uparrow$)** hoặc **Mũi tên xuống ($\downarrow$)** để di chuyển chọn giá trị phù hợp.
* **BƯỚC BỔ TRỢ (Dành cho bàn phím có cụm phím số):** NSD có thể sử dụng phím trừ <kbd>-</kbd> hoặc phím cộng <kbd>+</kbd> tại cụm bàn phím số để di chuyển nhanh qua lại giữa các trường thông tin thay thế hoàn toàn cho phím Tab hoặc chuột trong suốt quá trình tác nghiệp hạch toán tại quầy.

  </TabItem>
</Tabs>