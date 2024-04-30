/**
 * 문자열 Parse 유틸리티
 */
class ParsingUtils {
  /**
   * 안전하게 JSON 문자열을 파싱합니다. 오류 시 null을 반환합니다.
   * @param {string} jsonString - 파싱할 JSON 문자열
   * @return {Object|null} 파싱된 객체 또는 오류 시 null
   */
  static parseJSON(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return null;
    }
  }

  /**
   * 문자열을 숫자로 변환합니다. 변환할 수 없는 경우 NaN을 반환합니다.
   * @param {string} str - 변환할 문자열
   * @return {number} 변환된 숫자
   */
  static toNumber(str) {
    const num = parseFloat(str);
    return isNaN(num) ? NaN : num;
  }

  /**
   * URL 쿼리 문자열을 객체 형태로 파싱합니다.
   * @param {string} query - 쿼리 문자열
   * @return {Object} 파싱된 키-값 쌍 객체
   */
  static parseQueryString(query) {
    return query
      .replace(/^\?/, "")
      .split("&")
      .reduce((acc, pair) => {
        const [key, value] = pair.split("=");
        acc[decodeURIComponent(key)] = decodeURIComponent(value || "");
        return acc;
      }, {});
  }

  /**
   * 문자열을 Boolean 값으로 변환합니다.
   * @param {string} str - 변환할 문자열
   * @return {boolean} 변환된 Boolean 값
   */
  static stringToBoolean(str) {
    return str === "true" || str === "1";
  }

  /**
   * 문자열에서 모든 숫자를 추출하여 배열로 반환합니다.
   * @param {string} str - 입력 문자열
   * @return {Array<number>} 추출된 숫자 배열
   */
  static extractNumbers(str) {
    const matches = str.match(/\d+/g);
    return matches ? matches.map(Number) : [];
  }

  /**
   * HTTP 헤더 문자열을 객체로 파싱합니다.
   * @param {string} headerStr - HTTP 헤더 문자열
   * @return {Object} 파싱된 헤더 객체
   */
  static parseHeaders(headerStr) {
    return headerStr.split("\r\n").reduce((acc, line) => {
      const parts = line.split(": ");
      const header = parts.shift();
      const value = parts.join(": ");
      if (header) acc[header] = value;
      return acc;
    }, {});
  }

  /**
   * CSV 문자열을 2차원 배열로 변환합니다.
   * @param {string} csv - CSV 형식의 문자열
   * @return {Array<Array<string>>} 변환된 2차원 문자열 배열
   */
  static csvToArray(csv) {
    return csv.split("\n").map((row) => row.split(","));
  }

  /**
   * 쿠키 문자열을 객체로 파싱합니다.
   * @param {string} cookie - 쿠키 문자열
   * @return {Object} 파싱된 쿠키 객체
   */
  static parseCookie(cookie) {
    return cookie.split(";").reduce((acc, part) => {
      const [key, value] = part.split("=");
      acc[key.trim()] = decodeURIComponent(value);
      return acc;
    }, {});
  }

  /**
   * HEX 색상 코드를 RGB 값으로 변환합니다.
   * @param {string} hex - HEX 색상 코드
   * @return {Object} RGB 값으로 변환된 객체
   */
  static hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }

  /**
   * 문자열 내의 특수 문자를 HTML 엔티티로 변환합니다.
   * @param {string} str - 변환할 문자열
   * @return {string} HTML 엔티티로 변환된 문자열
   */
  static htmlEntities(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
}

module.exports = ParsingUtils;
