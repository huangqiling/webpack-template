//入口文件
import "./asset/style/base.scss";
import sub from "./container/sub";

const myHost = process.env.myHost;
console.log(myHost);

function ajaxPost() {
  fetch(`${myHost}/getkylin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: "kylin", age: "31" })
  }).then(data => data.json())
    .then(((data) => {
      setTimeout(closeLoading, 0);
      if (data.code == 1) {
        this.setState({ 'entityCard': data.result })
      }
    }))
}
function ajaxGet() {
  fetch(`${myHost}/b_kry?cardKindId=123`).then(data => data.json())
    .then(((data) => {
      console.log(data);
      if (data.code == 1) {
        this.setState({ 'entityCard': data.result })
      }
    }))
}
// ajaxGet();
ajaxPost();

const app = document.createElement("div");
app.innerHTML = "<h1>Hello Worldsa</h1>";
app.appendChild(sub());
document.body.appendChild(app);
