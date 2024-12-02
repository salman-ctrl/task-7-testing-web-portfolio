import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import background from '../../public/assets/background.jpg';
import data from "../data.json";
import { useNavigate } from 'react-router-dom';
import Skill from '../component/Skill';
import About from '../component/about';
import Hero from '../component/Hero';
import Achievment from '../component/achievment';
import Showcase from '../component/showCase';
var LandingPage = function () {
    var navigate = useNavigate();
    var _a = useState([]), gambar = _a[0], setGambar = _a[1];
    // useEffect untuk section Sertifikat
    useEffect(function () {
        var _a;
        var dataGambar = ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.Sertifikat) || [];
        setGambar(dataGambar);
    }, []);
    var handleAchievment = function () {
        navigate("/achievment");
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'overflow-hidden', children: [_jsx("section", { className: 'h-auto', children: _jsxs("div", { className: "relative bg-cover bg-center h-screen opacity-black-2 w-full overflow-hidden", style: { backgroundImage: "url(".concat(background, ")") }, children: [_jsx(Navbar, {}), _jsx(Hero, {})] }) }), _jsx(About, {}), _jsx(Skill, {}), _jsx(Achievment, {}), _jsx(Showcase, {})] }) }));
};
export default LandingPage;
