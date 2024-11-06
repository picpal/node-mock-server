/* 
##################################################
############# Mock 데이터 반환 함수 생성
############# JsDoc 형태에 맞춰서 기재
##################################################
*/

/**
 * 데이터 조회
 * @param {object} req
 */
exports.selectMockData = (req) => {
  console.log(`####### selectMockData`);
  const result = {
    resultMessgae : "select Success :)"
  };
  return result;
};

/**
 * 데이터 저장
 * @param {object} req
 */
exports.insertMockData = (req) => {
  console.log(`####### insertMockData`);
  const result = {
    resultMessgae : "insert Success :)"
  };
  return result;
};

/**
 * 데이터 수정
 * @param {object} req
 */
exports.updateMockData = (req) => {
  console.log(`####### updateMockData`);
  const result = {
    resultMessgae : "update Success :)"
  };
  return result;
};

/**
 * 데이터 삭제
 * @param {object} req
 */
exports.deleteMockData = (req) => {
  console.log(`####### deleteMockData`);
  const result = {
    resultMessgae : "delete Success :)"
  };
  return result;
};
