import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import foto from '../../public/assets/foto ku.png';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
var Hero = function () {
    var headlineText = "Wwho Am I..?";
    var paragraphText = "Ii’m Salman, as a Frontend Web developer, passionate about turning ideas into stunning, functional, and user-friendly digital experiences.";
    var _a = useState(" "), headline = _a[0], setHeadline = _a[1];
    var _b = useState(" "), paragraph = _b[0], setParagraph = _b[1];
    var typeText = function (text, setDisplayedText, speed) {
        var i = 0;
        var interval = setInterval(function () {
            setDisplayedText(function (prev) { return prev + text.charAt(i); });
            i++;
            if (i === text.length) {
                clearInterval(interval);
            }
        }, speed);
        return function () { return clearInterval(interval); };
    };
    // useEffect untuk animasi head dan paragraf di hero
    useEffect(function () {
        typeText(headlineText, setHeadline, 50);
        typeText(paragraphText, setParagraph, 100);
    }, []);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex h-full z-20", children: [_jsxs("div", { className: "w-1/2 ml-10 flex flex-col justify-center px-12", children: [_jsx("h1", { className: "text-5xl text-white font-bold mb-2", children: headline }), _jsx("p", { className: "text-4xl text-gray-300 mt-4", children: paragraph }), _jsxs("button", { className: "px-8 mt-16 py-4 text-black text-2xl bg-white rounded-xl hover:text-white hover:bg-black  hover:bg-black transition duration-500 w-max z-20 flex items-center gap-2 transition duration-300 hover:scale-110", children: [_jsx("a", { href: "#about", children: "Learn More!" }), " ", _jsx(ArrowRight, {})] })] }), _jsx("div", { className: "relative w-1/2 flex justify-center items-end", children: _jsx("img", { src: foto, alt: "fotosaya", className: "fotoku absolute bottom-0 max-h-full h-[850px]  w-[700px] object-cover  rounded-xl hover:scale-105  transition duration-1000" }) })] }) }));
};
export default Hero;
