/**
 * 유효성 검증 유틸리티
 */
class ValidationUtils {
  /**
   * 주어진 문자열이 유효한 이메일 주소 형식인지 검사합니다.
   * @param {string} email - 검사할 이메일 주소
   * @return {boolean} 유효성 결과
   */
  static isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  /**
   * 주어진 문자열이 유효한 전화번호 형식인지 검사합니다.
   * @param {string} phone - 검사할 전화번호
   * @return {boolean} 유효성 결과
   */
  static isValidPhoneNumber(phone) {
    const re = /^\+?(\d{1,3})?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return re.test(phone);
  }

  /**
   * 주어진 값이 숫자인지 검사합니다.
   * @param {*} value - 검사할 값
   * @return {boolean} 숫자 여부
   */
  static isNumber(value) {
    return typeof value === "number" && !isNaN(value);
  }

  /**
   * 주어진 값이 정수인지 검사합니다.
   * @param {*} value - 검사할 값
   * @return {boolean} 정수 여부
   */
  static isInteger(value) {
    return Number.isInteger(value);
  }

  /**
   * 주어진 값이 배열인지 검사합니다.
   * @param {*} value - 검사할 값
   * @return {boolean} 배열 여부
   */
  static isArray(value) {
    return Array.isArray(value);
  }

  /**
   * 주어진 값이 유효한 날짜 객체인지 검사합니다.
   * @param {Date} date - 검사할 날짜
   * @return {boolean} 날짜 유효성 여부
   */
  static isDateValid(date) {
    return date instanceof Date && !isNaN(date);
  }

  /**
   * 주어진 값이 비어 있지 않은지 검사합니다.
   * @param {*} value - 검사할 값
   * @return {boolean} 필수 여부
   */
  static isRequired(value) {
    return value !== undefined && value !== null && value !== "";
  }

  /**
   * 문자열의 길이가 지정된 최소 길이 이상인지 검사합니다.
   * @param {string} str - 검사할 문자열
   * @param {number} length - 최소 길이
   * @return {boolean} 최소 길이 충족 여부
   */
  static hasMinLength(str, length) {
    return typeof str === "string" && str.length >= length;
  }

  /**
   * 문자열의 길이가 지정된 최대 길이 이하인지 검사합니다.
   * @param {string} str - 검사할 문자열
   * @param {number} length - 최대 길이
   * @return {boolean} 최대 길이 준수 여부
   */
  static hasMaxLength(str, length) {
    return typeof str === "string" && str.length <= length;
  }

  /**
   * 주어진 문자열이 정규 표현식과 일치하는지 검사합니다.
   * @param {string} str - 검사할 문자열
   * @param {RegExp} regex - 검사할 정규 표현식
   * @return {boolean} 정규 표현식 일치 여부
   */
  static matchesRegex(str, regex) {
    return regex.test(str);
  }
}

module.exports = ValidationUtils;
