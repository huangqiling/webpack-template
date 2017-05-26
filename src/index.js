//入口文件
import "./asset/style/base.scss";
import sub from "./container/sub";

const app = document.createElement("div");
app.innerHTML = "<h1>Hello Worldsa</h1>";
app.appendChild(sub());
document.body.appendChild(app);
