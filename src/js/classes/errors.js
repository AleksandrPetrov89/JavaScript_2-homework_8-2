export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(code) {
    let answer = 'Unknown error';
    if (this.errors.has(code)) {
      answer = this.errors.get(code);
    }
    return answer;
  }
}
