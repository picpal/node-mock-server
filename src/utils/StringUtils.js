/**
 * 문자열 유틸리티
 */
class StringUtils {
  /**
   * 문자열의 첫 글자를 대문자로 변환합니다.
   * @param {string} str - 입력 문자열
   * @return {string} 첫 글자가 대문자로 변환된 문자열
   */
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * 주어진 문자열을 camelCase로 변환합니다.
   * @param {string} str - 입력 문자열
   * @return {string} camelCase로 변환된 문자열
   */
  static camelCase(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }

  /**
   * 문자열을 snake_case로 변환합니다.
   * @param {string} str - 입력 문자열
   * @return {string} snake_case로 변환된 문자열
   */
  static snakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, "_");
  }

  /**
   * 문자열을 지정된 길이로 자르고 말줄임표를 추가합니다.
   * @param {string} str - 입력 문자열
   * @param {number} length - 최대 길이
   * @return {string} 잘린 문자열
   */
  static truncate(str, length) {
    return str.length > length ? str.substring(0, length - 3) + "..." : str;
  }

  /**
   * 문자열 내에서 모든 인스턴스를 다른 문자열로 교체합니다.
   * @param {string} str - 원본 문자열
   * @param {string} find - 찾을 문자열
   * @param {string} replace - 교체할 문자열
   * @return {string} 교체된 문자열
   */
  static replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

  /**
   * 문자열을 뒤집습니다.
   * @param {string} str - 입력 문자열
   * @return {string} 뒤집힌 문자열
   */
  static reverseString(str) {
    return str.split("").reverse().join("");
  }

  /**
   * 문자열이 특정 부분 문자열을 포함하고 있는지 검사합니다.
   * @param {string} str - 대상 문자열
   * @param {string} substring - 검사할 부분 문자열
   * @return {boolean} 포함 여부
   */
  static contains(str, substring) {
    return str.indexOf(substring) !== -1;
  }

  /**
   * 주어진 문자열이 팰린드롬인지 확인합니다.
   * @param {string} str - 입력 문자열
   * @return {boolean} 팰린드롬 여부
   */
  static isPalindrome(str) {
    const cleaned = str.replace(/\W/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
  }

  /**
   * 지정된 길이의 랜덤 문자열을 생성합니다.
   * @param {number} length - 문자열 길이
   * @return {string} 랜덤 문자열
   */
  static randomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  /**
   * 문자열을 특정 길이에 맞게 패딩합니다.
   * @param {string} str - 입력 문자열
   * @param {number} length - 최종 길이
   * @param {string} [char=' '] - 패딩 문자
   * @return {string} 패딩된 문자열
   */
  static pad(str, length, char = " ") {
    return str.padStart((str.length + length) / 2, char).padEnd(length, char);
  }
}

module.exports = StringUtils;
