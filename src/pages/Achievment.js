import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from 'react';
import Navbar from '../component/Navbar';
import data from "../data.json";
var Achievment = function () {
    var _a = useState([]), gambar = _a[0], setGambar = _a[1];
    var _b = useState("all"), activeTag = _b[0], setActiveTag = _b[1];
    var allTags = ["javascript", "css", "all", "other", "html"];
    useEffect(function () {
        var _a;
        var dataGambar = ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.Sertifikat) || [];
        setGambar(dataGambar);
    }, []);
    var buttonHtml = function (tag) {
        setActiveTag(tag);
    };
    var filteredData = useMemo(function () {
        if (activeTag === "all")
            return gambar;
        return gambar.filter(function (item) { return item.tags && item.tags === activeTag; });
    }, [gambar, activeTag]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "relative bg-cover bg-center h-auto opacity-black-2 w-full overflow-hidden bg-gradient-to-br from-black to-gray-700", children: [_jsx(Navbar, {}), _jsxs("div", { className: 'mt-20 gap-20 pt-10 rounded-lg bg-gradient-to-br from-black to-gray-600 mx-20 items-center justify-evenly shadow-gray-500 shadow-lg h-auto', children: [_jsx("div", { className: 'w-full flex justify-center mt-10', children: _jsx("h1", { className: 'text-center align-middle text-4xl bg-gray-800 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg hover:text-sky-400', children: "My Certificate" }) }), _jsx("div", { className: 'flex justify-center gap-4 mt-10', children: allTags.map(function (tag) { return (_jsx("button", { className: "px-4 py-2 rounded hover:bg-sky-400 ".concat(activeTag === tag ? "bg-sky-500 text-white" : "bg-sky-300 text-black"), onClick: function () { return buttonHtml(tag); }, children: tag }, tag)); }) }), _jsx("div", { className: 'flex flex-wrap mt-20 gap-20 pt-10 rounded-lg mx-20 items-center justify-evenly mb-12 pb-12', children: filteredData.map(function (item, index) { return (_jsxs("div", { className: 'bg-gradient-to-br from-black to-blue-200 rounded-md text-white font-bold overflow-hidden shadow-4xl', children: [_jsx("img", { src: item.img, alt: "", className: 'h-60 w-60' }), _jsxs("div", { className: 'text-center', children: [_jsx("h2", { children: item.title }), _jsx("small", { className: 'text-xs text-gray-700', children: "from" }), _jsx("p", { children: item.company })] }), _jsx("hr", {}), _jsx("small", { className: 'text-end pl-2 text-gray-100', children: item.date })] }, index)); }) })] })] }) }));
};
export default Achievment;
