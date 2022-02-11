const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const objectRouter = require("./api/objects/objects.router");
const sectionRouter = require("./api/section/section.router");
const documentRouter = require("./api/document/document.router");
const subSectionRouter = require("./api/subsection/subsection.router");
const reportRouter = require("./api/report/report.router");
const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use("/api/object", objectRouter);
app.use("/api/section", sectionRouter);
app.use("/api/document", documentRouter);
app.use("/api/subsection", subSectionRouter);
app.use("/api/report", reportRouter);
app.use("/api/user", userRouter);
app.use('/uploads',express.static('uploads'));

app.listen(7000);
console.log("Сервер на порту 7000: Запущен");