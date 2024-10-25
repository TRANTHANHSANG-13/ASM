const fetchData = async (endpoint) => {
    const response = await fetch(`http://localhost:3000/${endpoint}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}`);
    }
    const data = await response.json();
    return data;
};
const hien1Khach = (khach) => {
    return `<div>
        <h4>${khach.ten}</h4>
        <p>Điện thoại: ${khach.phone}</p>
        <p>Email: ${khach.email}</p>
    </div>`;
};
export const showlistkhach = async () => {
    try {
        const data = await fetchData('khach_arr');
        const html_arr = data.map(hien1Khach);
        document.getElementById('data-khach').innerHTML = html_arr.join("");
    }
    catch (error) {
        console.error('Error fetching khách hàng:', error);
    }
};
const hien1Phong = (phong) => {
    return `<div>
        <h4>${phong.ten}</h4>
        <p>Giá: ${phong.gia} VND</p>
        <p>Mô tả: ${phong.mota}</p>
    </div>`;
};
export const showlistphong = async () => {
    try {
        const data = await fetchData('phong_arr');
        const html_arr = data.map(hien1Phong);
        document.getElementById('data-phong').innerHTML = html_arr.join("");
    }
    catch (error) {
        console.error('Error fetching phòng:', error);
    }
};
const hien1DatPhong = (datPhong) => {
    return `<div>
        <h4>${datPhong.tenKhach}</h4>
        <p>Khách sạn ID: ${datPhong.khachsanId}</p>
        <p>Phòng ID: ${datPhong.phongId}</p>
        <p>Ngày đặt: ${datPhong.ngayDat}</p>
    </div>`;
};
export const showlistdatphong = async () => {
    try {
        const data = await fetchData('datphong_arr');
        const html_arr = data.map(hien1DatPhong);
        document.getElementById('data-datphong').innerHTML = html_arr.join("");
    }
    catch (error) {
        console.error('Error fetching đặt phòng:', error);
    }
};
const hien1ChiNhanh = (chiNhanh) => {
    return `<div>
        <h4>${chiNhanh.ten}</h4>
        <p>Địa chỉ: ${chiNhanh.diachi}</p>
        <img src="${chiNhanh.hinh}" alt="${chiNhanh.ten}" width="100">
    </div>`;
};
export const showlistchinhanh = async () => {
    try {
        const data = await fetchData('chinhanh_arr');
        const html_arr = data.map(hien1ChiNhanh);
        document.getElementById('data-chinhanh').innerHTML = html_arr.join("");
    }
    catch (error) {
        console.error('Error fetching chi nhánh:', error);
    }
};
const hien1CoSo = (coSo) => {
    return `<div>
        <h4>${coSo.ten}</h4>
        <p>Địa chỉ: ${coSo.diachi}</p>
        <p>Ghi chú: ${coSo.ghichu}</p>
    </div>`;
};
export const showlistcoso = async () => {
    try {
        const data = await fetchData('coso_arr');
        const html_arr = data.map(hien1CoSo);
        document.getElementById('data-coso').innerHTML = html_arr.join("");
    }
    catch (error) {
        console.error('Error fetching cơ sở:', error);
    }
};
const hien1DichVu = (dv) => {
    return `<div>
        <h4>${dv.ten}</h4>
        <p>Giá: ${dv.gia} VND</p>
        <p>Mô tả: ${dv.mota}</p>
    </div>`;
};
export const showlistdichvu = async () => {
    try {
        const data = await fetchData('dichvu_arr');
        const html_arr = data.map(hien1DichVu);
        document.getElementById('data-dichvu').innerHTML = html_arr.join("");
    }
    catch (error) {
        console.error('Error fetching dịch vụ:', error);
    }
};
