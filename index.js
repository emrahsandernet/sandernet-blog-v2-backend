const express = require("express");
const app = express();
const port = 3005;
const cors = require("cors");
const fs = require("fs");
const https = require("https");
// Middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // İsteklerin nereden gelmesine izin vermek istediğinizi belirtin. '*' tüm kaynaklara izin verir. Daha spesifik bir değer belirleyebilirsiniz.
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // İzin verilen HTTP metodları
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // İzin verilen başlıklar
  next();
});
app.use(express.json());
app.use(cors());
// Routers
const contactRouter = require("./routes/contactRouter");
app.use("/api", contactRouter);

// SSL/TLS sertifikasını yükleyin
const privateKey = fs.readFileSync("./private.key", "utf8");
const certificate = fs.readFileSync("./certificate.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };

// Express.js sunucusunu HTTPS üzerinde başlatın
const httpsServer = https.createServer(credentials, app);

// HTTPS üzerinden gelen istekleri dinleyin
httpsServer.listen(3005, function () {
  console.log("HTTPS sunucusu çalışıyor...");
});
