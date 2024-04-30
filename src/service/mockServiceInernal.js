/**
 * 데이터 조회
 * @param {object} req
 */
exports.selectMockData = (req) => {
  console.log(`####### selectMockData`);
  console.log(req.params.id);
};

/**
 * 데이터 저장
 * @param {object} req
 */
exports.insertMockData = (req) => {
  console.log(`####### insertMockData`);
  console.log(req.body);
};

/**
 * 데이터 수정
 * @param {object} req
 */
exports.updateMockData = (req) => {
  console.log(`####### updateMockData`);
  console.log(req);
};

/**
 * 데이터 삭제
 * @param {object} req
 */
exports.deleteMockData = (req) => {
  console.log(`####### deleteMockData`);
  console.log(req);
};
