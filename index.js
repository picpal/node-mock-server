const express = require("express");
const fs = require("fs");
const https = require("https");
const bodyParser = require("body-parser");
const router = require("./src/router/router");

const app = express();
const PORT = 3001;
app.use(express.json());

/**
 * 요청에 대한 응답 시간 지연
 * Header 옵션에 x-delay 값이 있다면 2초 지연
 */
app.use((req, res, next) => {
  const delay = req.headers["x-delay"];
  if (delay) {
    setTimeout(next, delay);
  } else {
    next();
  }
});

// 모든 요청 정보를 출력 ( 불필요하면 주석 처리 )
// `express.json()` 미들웨어 이후에 위치해야 바디 정보가 출력됩니다.
app.use((req, res, next) => {
  console.log("############# HTTP Request Info #############");
  console.log("HTTP Method:", req.method);
  console.log("Path:", req.path);
  // console.log("Headers:", JSON.stringify(req.headers, null, 2));

  console.log("Body:", JSON.stringify(req.body, null, 2));
  console.log("#############################################");
  next();
});

app.use(router);

// HTTP 서버 생성 및 실행
app.listen(PORT, () => {
  console.log(`Server is running :) [PORT:${PORT}]`);
});

// SSL 인증서 경로 설정
// const options = {
//   key: fs.readFileSync("server.key"), // 개인키
//   cert: fs.readFileSync("server.cert"), // 서버 인증키
//   minVersion: "TLSv1.2",
// };

// // HTTPS 서버 생성 및 실행
// https.createServer(options, app).listen(PORT, () => {
//   console.log(`HTTPS Server is running on https://localhost:${PORT}`);
// });
