import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import data from "../data.json";
var Skill = function () {
    var _a = useState([]), skills = _a[0], setSkills = _a[1];
    useEffect(function () {
        var _a;
        var skillData = ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.Skill) || [];
        setSkills(skillData);
    }, []);
    return (_jsx(_Fragment, { children: _jsx("section", { className: 'h-auto w-screen -mt-10 pt-10 overflow-hidden', children: _jsxs("div", { className: 'bg-gradient-to-br from-black to-gray-400 pb-20 shadow-lg', children: [_jsx("div", { className: 'w-full flex justify-center pt-20', children: _jsx("h1", { className: 'text-center align-middle text-4xl bg-gray-900 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg  transition duration-1000 hover:scale-105', children: "My Skill" }) }), _jsxs("div", { className: 'flex gap-12 py-5 z-20 animate-marquee overflow-hidden mt-20 pb-20', children: [skills.map(function (item, index) { return (_jsx("div", { className: 'flex-shrink-0 ', children: _jsx("img", { src: item.img, alt: "Skill ".concat(index), className: 'w-20 h-20 skill' }) }, index)); }), skills.map(function (item, index) { return (_jsx("div", { className: 'flex-shrink-0', children: _jsx("img", { src: item.img, alt: "Skill ".concat(index), className: 'w-20 h-20 skill' }) }, index)); })] })] }) }) }));
};
export default Skill;
