const axios = require("axios");

/**
 * 내부의 실제 테스트 서버의 정보가 필요한 경우 사용
 */

const SERVICE_URL = "";
const ACCESS_TOKEN = "";

exports.getPinpayCardList = async (req) => {
  const params = { ...req };

  return axios.get(`${SERVICE_URL}/api/v1/paylist`, params, {
    headers: {
      basic: ACCESS_TOKEN,
      "Content-Type": "application/json",
    },
  });
};
