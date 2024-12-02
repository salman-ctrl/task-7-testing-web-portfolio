import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/RootLayout";
var App = function () {
    return (_jsx("div", { children: _jsx(RouterProvider, { router: router }) }));
};
export default App;
