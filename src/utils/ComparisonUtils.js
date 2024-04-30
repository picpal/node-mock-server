class ComparisonUtils {
  /**
   * 두 값이 동등한지 깊은 비교를 수행합니다.
   * @param {*} a - 비교할 첫 번째 값
   * @param {*} b - 비교할 두 번째 값
   * @return {boolean} 동등 여부
   */
  static isEqual(a, b) {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date)
      return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
      return a === b;
    if (a.prototype !== b.prototype) return false;
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every((k) => ComparisonUtils.isEqual(a[k], b[k]));
  }

  /**
   * 첫 번째 인자가 두 번째 인자보다 큰지 비교합니다.
   * @param {number} a - 비교할 첫 번째 숫자
   * @param {number} b - 비교할 두 번째 숫자
   * @return {boolean} a가 b보다 큰 경우 true
   */
  static isGreaterThan(a, b) {
    return a > b;
  }

  /**
   * 첫 번째 인자가 두 번째 인자보다 작은지 비교합니다.
   * @param {number} a - 비교할 첫 번째 숫자
   * @param {number} b - 비교할 두 번째 숫자
   * @return {boolean} a가 b보다 작은 경우 true
   */
  static isLessThan(a, b) {
    return a < b;
  }

  /**
   * 첫 번째 인자가 두 번째 인자보다 크거나 같은지 비교합니다.
   * @param {number} a - 비교할 첫 번째 숫자
   * @param {number} b - 비교할 두 번째 숫자
   * @return {boolean} a가 b보다 크거나 같은 경우 true
   */
  static isGreaterOrEqual(a, b) {
    return a >= b;
  }

  /**
   * 첫 번째 인자가 두 번째 인자보다 작거나 같은지 비교합니다.
   * @param {number} a - 비교할 첫 번째 숫자
   * @param {number} b - 비교할 두 번째 숫자
   * @return {boolean} a가 b보다 작거나 같은 경우 true
   */
  static isLessOrEqual(a, b) {
    return a <= b;
  }

  /**
   * 두 배열이 동등한지 비교합니다.
   * @param {Array} a - 비교할 첫 번째 배열
   * @param {Array} b - 비교할 두 번째 배열
   * @return {boolean} 배열의 요소가 동일한 경우 true
   */
  static areArraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!ComparisonUtils.isEqual(a[i], b[i])) return false;
    }
    return true;
  }

  /**
   * 두 객체를 비교하여 동등한지 검사합니다.
   * @param {Object} obj1 - 비교할 첫 번째 객체
   * @param {Object} obj2 - 비교할 두 번째 객체
   * @return {boolean} 모든 속성이 동등한 경우 true
   */
  static compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
      if (
        !obj2.hasOwnProperty(key) ||
        !ComparisonUtils.isEqual(obj1[key], obj2[key])
      )
        return false;
    }
    return true;
  }

  /**
   * 객체 배열을 특정 키에 따라 정렬합니다.
   * @param {Array<Object>} array - 정렬할 배열
   * @param {string} key - 정렬 기준 키
   * @return {Array<Object>} 정렬된 배열
   */
  static sortByKey(array, key) {
    return array.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  }

  /**
   * 숫자 배열에서 최소값을 반환합니다.
   * @param {Array<number>} numbers - 숫자 배열
   * @return {number} 최소값
   */
  static minValue(numbers) {
    return Math.min(...numbers);
  }

  /**
   * 숫자 배열에서 최대값을 반환합니다.
   * @param {Array<number>} numbers - 숫자 배열
   * @return {number} 최대값
   */
  static maxValue(numbers) {
    return Math.max(...numbers);
  }
}

module.exports = ComparisonUtils;
