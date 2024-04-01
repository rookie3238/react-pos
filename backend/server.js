/**
 * Express server for the React POS backend.
 * @module server
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

//로깅 미들웨어 추가
const morgan = require("combined");

//공통 에러 처리 미을 웨어 구현
const errorHandler = require("./middleware/errorHandler");

//라우터 추가
const authRouter = require("./routes/authRouter");
const memberRouter = require("./routes/memberRouter");
const productRouter = require("./routes/productRouter");
const orderRouter = require("./routes/orderRouter");
const groupRouter = require("./routes/groupRouter");

app.use(cors());
app.use(helmet());
app.use(express.json());

/**
 * Route handler for the root endpoint.
 * @name GET /
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response with a message.
 */
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
