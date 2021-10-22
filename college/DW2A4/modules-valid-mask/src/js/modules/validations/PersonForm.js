import { isAccordingRegex } from "../../utils/regex.js";

class PersonForm {
  static validateCpf(value) {
    return isAccordingRegex(value, /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)
  }

  static validateBirthday(value) {
    return isAccordingRegex(value, /(\d{2})[-.\/](\d{2})[-.\/](\d{4})/);
  }

  static validatePhoneNumber(value) {
    return isAccordingRegex(value, /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/);
  }

  static validateCep(value) {
    return isAccordingRegex(value, /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/);
  }

  static validateEmail(value) {
    return isAccordingRegex(value, /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i);
  }
}

export { PersonForm };
