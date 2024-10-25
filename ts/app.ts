// Các kiểu dữ liệu
type TKhach = { id: number; ten: string; phone: string; email: string; };
type TPhong = { id: number; ten: string; gia: number; mota: string; };
type TDatPhong = { id: number; tenKhach: string; khachsanId: number; phongId: number; ngayDat: string; };
type TChiNhanh = { id: number; ten: string; diachi: string; hinh: string; };
type TCoso = { id: number; ten: string; diachi: string; ghichu: string; };
type TDichVu = { id: number; ten: string; gia: number; mota: string; };

// Hàm fetch dữ liệu từ server
const fetchData = async (endpoint: string) => {
    const response = await fetch(`http://localhost:3000/${endpoint}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}`);
    }
    const data = await response.json();
    return data;
};

// Hiển thị một khách
const hien1Khach = (khach: TKhach) => {
    return `<div>
        <h4>${khach.ten}</h4>
        <p>Điện thoại: ${khach.phone}</p>
        <p>Email: ${khach.email}</p>
    </div>`;
};

// Hiển thị danh sách khách hàng từ API
export const showlistkhach = async () => {
    try {
        const data = await fetchData('khach_arr');
        const html_arr = data.map(hien1Khach);
        document.getElementById('data-khach').innerHTML = html_arr.join("");
    } catch (error) {
        console.error('Error fetching khách hàng:', error);
    }
};

// Hiển thị một phòng
const hien1Phong = (phong: TPhong) => {
    return `<div>
        <h4>${phong.ten}</h4>
        <p>Giá: ${phong.gia} VND</p>
        <p>Mô tả: ${phong.mota}</p>
    </div>`;
};

// Hiển thị danh sách phòng từ API
export const showlistphong = async () => {
    try {
        const data = await fetchData('phong_arr');
        const html_arr = data.map(hien1Phong);
        document.getElementById('data-phong').innerHTML = html_arr.join("");
    } catch (error) {
        console.error('Error fetching phòng:', error);
    }
};

// Hiển thị một đặt phòng
const hien1DatPhong = (datPhong: TDatPhong) => {
    return `<div>
        <h4>${datPhong.tenKhach}</h4>
        <p>Khách sạn ID: ${datPhong.khachsanId}</p>
        <p>Phòng ID: ${datPhong.phongId}</p>
        <p>Ngày đặt: ${datPhong.ngayDat}</p>
    </div>`;
};

// Hiển thị danh sách đặt phòng từ API
export const showlistdatphong = async () => {
    try {
        const data = await fetchData('datphong_arr');
        const html_arr = data.map(hien1DatPhong);
        document.getElementById('data-datphong').innerHTML = html_arr.join("");
    } catch (error) {
        console.error('Error fetching đặt phòng:', error);
    }
};

// Hiển thị một chi nhánh
const hien1ChiNhanh = (chiNhanh: TChiNhanh) => {
    return `<div>
        <h4>${chiNhanh.ten}</h4>
        <p>Địa chỉ: ${chiNhanh.diachi}</p>
        <img src="${chiNhanh.hinh}" alt="${chiNhanh.ten}" width="100">
    </div>`;
};

// Hiển thị danh sách chi nhánh từ API
export const showlistchinhanh = async () => {
    try {
        const data = await fetchData('chinhanh_arr');
        const html_arr = data.map(hien1ChiNhanh);
        document.getElementById('data-chinhanh').innerHTML = html_arr.join("");
    } catch (error) {
        console.error('Error fetching chi nhánh:', error);
    }
};

// Hiển thị một cơ sở
const hien1CoSo = (coSo: TCoso) => {
    return `<div>
        <h4>${coSo.ten}</h4>
        <p>Địa chỉ: ${coSo.diachi}</p>
        <p>Ghi chú: ${coSo.ghichu}</p>
    </div>`;
};

// Hiển thị danh sách cơ sở từ API
export const showlistcoso = async () => {
    try {
        const data = await fetchData('coso_arr');
        const html_arr = data.map(hien1CoSo);
        document.getElementById('data-coso').innerHTML = html_arr.join("");
    } catch (error) {
        console.error('Error fetching cơ sở:', error);
    }
};

// Hiển thị một dịch vụ
const hien1DichVu = (dv: TDichVu) => {
    return `<div>
        <h4>${dv.ten}</h4>
        <p>Giá: ${dv.gia} VND</p>
        <p>Mô tả: ${dv.mota}</p>
    </div>`;
};

// Hiển thị danh sách dịch vụ từ API
export const showlistdichvu = async () => {
    try {
        const data = await fetchData('dichvu_arr');
        const html_arr = data.map(hien1DichVu);
        document.getElementById('data-dichvu').innerHTML = html_arr.join("");
    } catch (error) {
        console.error('Error fetching dịch vụ:', error);
    }
};
