const express = require("express");
const HttpStatus = require("../constant/HTTPStatus");
const router = express.Router();
const {
  selectMockData,
  insertMockData,
  updateMockData,
  deleteMockData,
} = require("../service/mockServiceInernal");
const { getPinpayCardList } = require("../service/mockServiceExternal");

/**
 * 거래 내역 조회
 *
 * @param {string} req
 * @param {string} res
 * @return {object} 응답 데이터
 *
 */
router.get("/v1/paylist", async (req, res) => {
  try {
    selectMockData(req);
    res
      .status(HttpStatus.OK)
      .json({ message: "Hello Mock Server selectMockData :)" });
  } catch (error) {
    console.log(error);
  }
});

/**
 * 거래 내역 저장
 *
 * @param {string} req
 * @param {string} res
 * @return {object} 응답 데이터
 *
 */
router.post("/v1/paylist", async (req, res) => {
  insertMockData(req);
  res
    .status(HttpStatus.CREATED)
    .json({ message: "Hello Mock Server insertMockData :)" });
});

/**
 * 거래 내역 수정
 *
 * @param {string} req
 * @param {string} res
 * @return {object} 응답 데이터
 *
 */
router.put("/v1/paylist", async (req, res) => {
  updateMockData(req);
  res
    .status(HttpStatus.OK)
    .json({ message: "Hello Mock Server updateMockData :)" });
});

/**
 * 거래 내역 삭제
 *
 * @param {string} req
 * @param {string} res
 * @return {object} 응답 데이터
 *
 */
router.delete("/v1/paylist", async (req, res) => {
  deleteMockData(req);
  res
    .status(HttpStatus.OK)
    .json({ message: "Hello Mock Server deleteMockData :)" });
});

/**
 * (외부통신) API 설명...
 *
 * @param {string} req
 * @param {string} res
 * @return {object} 응답 데이터
 *
 */
router.post("/external", async (req, res) => {
  try {
    getPinpayCardList();
    res.status(HttpStatus.OK).json({
      message: "Hello Node Mock Server",
    });
  } catch (error) {
    console.error("Error creating Redmine issue:", error);
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to create Redmine issue" });
  }
});

module.exports = router;
