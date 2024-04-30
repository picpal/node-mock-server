/**
 * 날짜 유틸리티
 */
class DateUtils {
  /**
   * 날짜를 지정된 형식으로 포맷합니다.
   * @param {Date} date - 포맷할 날짜
   * @param {string} format - 날짜 형식 문자열
   * @return {string} 포맷된 날짜 문자열
   */
  static formatDate(date, format) {
    const map = {
      mm: ("0" + (date.getMonth() + 1)).slice(-2),
      dd: ("0" + date.getDate()).slice(-2),
      yyyy: date.getFullYear(),
      hh: ("0" + date.getHours()).slice(-2),
      ii: ("0" + date.getMinutes()).slice(-2),
      ss: ("0" + date.getSeconds()).slice(-2),
    };
    return format.replace(/mm|dd|yyyy|hh|ii|ss/gi, (matched) => map[matched]);
  }

  /**
   * 날짜에 일수를 추가합니다.
   * @param {Date} date - 기준 날짜
   * @param {number} days - 추가할 일수
   * @return {Date} 수정된 날짜
   */
  static addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  /**
   * 날짜에 월을 추가합니다.
   * @param {Date} date - 기준 날짜
   * @param {number} months - 추가할 월 수
   * @return {Date} 수정된 날짜
   */
  static addMonths(date, months) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  }

  /**
   * 날짜에 년을 추가합니다.
   * @param {Date} date - 기준 날짜
   * @param {number} years - 추가할 년 수
   * @return {Date} 수정된 날짜
   */
  static addYears(date, years) {
    const result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
  }

  /**
   * 주어진 날짜가 주말인지 확인합니다.
   * @param {Date} date - 검사할 날짜
   * @return {boolean} 주말 여부
   */
  static isWeekend(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  /**
   * 두 날짜 사이의 일수 차이를 계산합니다.
   * @param {Date} date1 - 첫 번째 날짜
   * @param {Date} date2 - 두 번째 날짜
   * @return {number} 일수 차이
   */
  static getDaysDifference(date1, date2) {
    const timeDiff = date2.getTime() - date1.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  /**
   * 주어진 날짜의 해당 월의 첫 번째 날짜를 반환합니다.
   * @param {Date} date - 기준 날짜
   * @return {Date} 해당 월의 첫 날짜
   */
  static getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  /**
   * 주어진 날짜의 해당 월의 마지막 날짜를 반환합니다.
   * @param {Date} date - 기준 날짜
   * @return {Date} 해당 월의 마지막 날짜
   */
  static getLastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  /**
   * 주어진 년도가 윤년인지 확인합니다.
   * @param {number} year - 검사할 년도
   * @return {boolean} 윤년 여부
   */
  static isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * 주어진 생년월일로부터 현재까지의 나이를 계산합니다.
   * @param {Date} birthdate - 생년월일
   * @return {number} 계산된 나이
   */
  static getAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  }
}

module.exports = DateUtils;
