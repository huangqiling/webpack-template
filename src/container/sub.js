//我们这里使用CommonJS的风格
export default () => {
  const element = document.createElement("h2");
  element.innerHTML = "Hello h2 world";
  return element;
};
