// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // 사이드바에 대한 CSS를 별도로 설정할 수 있습니다.

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
