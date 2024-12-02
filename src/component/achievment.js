import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import data from "../data.json";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Showcase from "./showCase";
var Achievment = function () {
    var _a = useState([]), gambar = _a[0], setGambar = _a[1];
    var navigate = useNavigate();
    // useEffect untuk section Sertifikat
    useEffect(function () {
        var _a;
        var dataGambar = ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.Sertifikat) || [];
        setGambar(dataGambar);
    }, []);
    var handleAchievment = function () {
        navigate("/achievment");
    };
    return (_jsx(_Fragment, { children: _jsx("section", { children: _jsxs("div", { className: "relative bg-cover bg-center h-auto opacity-black-2 w-full overflow-hidden bg-gradient-to-br from-black  to-gray-700", children: [_jsxs("div", { className: 'card-container mt-16 gap-20 pt-10 h-auto', children: [_jsx("div", { className: 'w-full flex justify-center mt-10', children: _jsx("h1", { className: 'text-center align-middle text-4xl bg-gray-900 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg hover:text-sky-400  transition duration-1000 hover:scale-105', children: "My Certificate" }) }), _jsx("div", { className: 'flex flex-wrap mt-20 gap-20 pt-10 rounded-lg mx-20 items-center justify-evenly mb-12 pb-12', children: gambar.map(function (item, index) { return (_jsxs("div", { className: 'bg-gradient-to-br from-black  to-gray-400 rounded-md text-white font-bold overflow-hidden transition duration-1000 cursor-pointer hover:scale-105 shadow-gray-800 shadow-md', children: [_jsx("img", { src: item.img, alt: "", className: 'h-72 w-96' }), _jsx("div", { className: 'text-center h-20 flex items-center justify-center', children: _jsxs("div", { children: [_jsx("h2", { children: item.title }), _jsx("small", { className: 'text-xs  text-gray-300', children: "from" }), _jsx("p", { children: item.company })] }) }), _jsx("hr", {}), _jsx("div", { className: 'bg-gray-700 py-2', children: _jsx("small", { className: 'text-end pl-2 text-gray-100 ', children: item.date }) })] }, index)); }) })] }), _jsx("div", { className: 'justify-center mt-12 flex', children: _jsxs("button", { onClick: handleAchievment, className: 'z-20 text-center flex items-center text-xl bg-black gap-3 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-8 pb-2 pt-1 w-100 rounded-lg  transition duration-1000 hover:scale-105', children: [" See More", _jsx(ArrowRight, { className: 'mt-2' }), " "] }) }), _jsx("hr", { className: 'mt-10' }), _jsx("div", { className: 'mt-20 ' }), _jsx(Showcase, {})] }) }) }));
};
export default Achievment;
