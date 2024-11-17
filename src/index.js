import "./style.css";
import foodImage from "./happy.png";

// create img
const yum = document.createElement("img");
yum.src = foodImage;
yum.width = 200;
const content = document.getElementById("content");
content.appendChild(yum);

console.log("hi");