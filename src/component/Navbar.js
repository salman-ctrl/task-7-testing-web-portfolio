import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import logo from "../../public/assets/logo.png";
var Navbar = function () {
    var navigate = useNavigate();
    var handleHire = function () {
        navigate('/hire');
    };
    var handleHome = function () {
        navigate("/");
    };
    var handleAchievment = function () {
        navigate("/achievment");
    };
    return (_jsx(_Fragment, { children: _jsxs("nav", { className: "w-full h-20 flex flex-row pt-20 px-16 justify-between items-center text-white text-2xl z-50", children: [_jsxs("div", { className: "flex items-center space-x-12 justify-evenly w-[70vh] h-20", children: [_jsx("div", { children: _jsx("img", { src: logo, alt: "logo", onClick: handleHome, className: "logo h-20 w-20 cursor-pointer " }) }), _jsx("div", { className: 'border-2 border-white px-16 py-3 rounded-[50px]', children: _jsxs("ul", { className: "flex space-x-16 font-medium", children: [_jsx("li", { children: _jsx("a", { onClick: handleAchievment, className: "hover:text-blue-500 transition duration-200 cursor-pointer", children: "Achievment" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "hover:text-blue-500 transition duration-200", children: "Showcase" }) })] }) })] }), _jsx("button", { onClick: handleHire, className: "h-14 px-8 bg-white shadow-md shadow-sky-200 text-black transition duration-500 rounded-lg hover:bg-gray-700 hover:text-sky-200 shadow-gray-500 shadow-md hover:scale-105 ", children: "Hire Me!" })] }) }));
};
export default Navbar;
