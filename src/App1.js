import React, { useState } from "react";
import axios from "axios";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        maTin: "",
        tieuDe: "",
        thuTu: "",
        noiDung: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/AddInfo', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleReset = () => {
        setFormData({
            maTin: "",
            tieuDe: "",
            thuTu: "",
            noiDung: ""
        });
    };

    return (
        <div style={{ width: "400px", margin: "auto" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="maTin" style={{ marginBottom: "5px" }}>Mã tin:</label>
                    <input type="text" id="maTin" name="maTin" value={formData.maTin} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="tieuDe" style={{ marginBottom: "5px" }}>Tiêu đề:</label>
                    <input type="text" id="tieuDe" name="tieuDe" value={formData.tieuDe} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="thuTu" style={{ marginBottom: "5px" }}>Thứ tự:</label>
                    <input type="text" id="thuTu" name="thuTu" value={formData.thuTu} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="noiDung" style={{ marginBottom: "5px" }}>Nội dung:</label>
                    <textarea id="noiDung" name="noiDung" value={formData.noiDung} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px", height: "100px" }} />
                </div>
                <div>
                    <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "10px" }}>Thêm tin</button>
                    <button type="button" onClick={handleReset} style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Nhập lại</button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;