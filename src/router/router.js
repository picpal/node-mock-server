const express = require("express");
const HttpStatus = require("../constant/HTTPStatus");
const router = express.Router();

/* 
##################################################
############# 1. 호출할 mock data 함수명 기재 ( mock 함수는 mockServiceIntner.js에 생성 ) 
##################################################
*/
const {
  selectMockData,
  insertMockData,
  updateMockData,
  deleteMockData,
} = require("../service/mockServiceInternal");
const { getPinpayCardList } = require("../service/mockServiceExternal");

const handleRoute = async (action, req, res) => {
  try {
    const result = await action(req);
    res.status(HttpStatus.OK).json(result);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });
  }
};


/* 
##################################################
############# 2. 호출할 mock data 함수 호출
##################################################
*/

/**
 * 거래 내역 조회
 *
 * @param {string} req
 * @param {string} res
 * @return {object} 응답 데이터
 *
 */
router.get("/v1/paylist", (req, res) => handleRoute(selectMockData, req, res));

/**
 * 거래 내역 저장
 *
 * @param {string} req
 * @param {string} res
 * @return {object} 응답 데이터
 *
 */
router.post("/v1/paylist", (req, res) => handleRoute(insertMockData, req, res));

/**
 * 거래 내역 수정
 *
 * @param {string} req
 * @param {string} res
 * @return {object} 응답 데이터
 *
 */
router.put("/v1/paylist", (req, res) => handleRoute(updateMockData, req, res));

/**
 * 거래 내역 삭제
 *
 * @param {string} req
 * @param {string} res
 * @return {object} 응답 데이터
 *
 */
router.delete("/v1/paylist", (req, res) => handleRoute(deleteMockData, req, res));

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
