import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux";
import { BrowserRouter } from "react-router-dom";
import { SuspenseContainer } from "./utils";
import { ConfigProvider } from "antd";
import { ToastContainer, toast } from "react-toastify";

const App = lazy(() => import("./App"));

const themeConfig = {
  token: {
    colorPrimary: "#f00",
    borderRadius: 4,
    colorBgContainer: "#fff",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={themeConfig}>
    <Provider store={store}>
      <BrowserRouter>
        <SuspenseContainer>
          <App />
          <ToastContainer position="top-left" autoClose={1000} />
        </SuspenseContainer>
      </BrowserRouter>
    </Provider>
  </ConfigProvider>,
);
