export const MIN_PASSWORD_LENGTH: number = 8

/**
 * Максимальная длинна пароля
 */
export const MAX_PASSWORD_LENGTH: number = 255

/**
 * Минимальная длинна имени
 */
export const MIN_NAME_LENGTH: number = 3

/**
 * Максимальная длинна имени
 */
export const MAX_NAME_LENGTH: number = 32

/**
 * Регцлярное выражение которому должен соответствовать
 * формат email-адреса
 */
export const EMAIL_REGEX: RegExp = /.+@.+\..+/

/**
 * Регулярное выражение которому должен соответствовать формат пароля:
 * - Пароль должен содержать хотя бы одну букву любого алфавита
 * - Пароль должен содержать хотя бы одну цифру
 * - Пароль может содержать специальные символы
 */
export const PASSWORD_REGEX: RegExp = /^(?=.*\p{L})(?=.*\d).+$/u

/**
 * Регулярное выражение которому должен соответствовать формат имени:
 * - Имя может содержать буквы любого алфавита в любом регистре
 * - Имя может содержать цифры
 * - Имя может содержать пробелы
 * - Имя может содержать символы "-", "—" и "_"
 */
export const NAME_REGEX: RegExp = /^[\p{L}\p{N}\s\-—_]+$/u

/**
 * Проверка совпадения пароля и его подтверждения
 * @param password Пароль
 * @param passwordConfirmation Подтверждение пароля
 * @returns {boolean}
 */
export const PASSWORD_CONFIRMATION_MATCH = (password: string, passwordConfirmation: string): boolean => {
  return password === passwordConfirmation
}

export const FORM_RULES = {
  required: [(v: string) => !!v || 'Поле обязательно для заполнения'],
  name: [
    (v: string) => !!v || 'Имя обязательно для заполнения',
    (v: string) =>
      NAME_REGEX.test(v) || 'Может состоять из букв (в любом алфавите), цифр, пробелов, а также символов “-”, “—”, “_”',
  ],
  email: [
    (v: string) => !!v || 'Email обязателен',
    (v: string) => EMAIL_REGEX.test(v) || 'Требуется указать корректный Email',
  ],
  password: [
    (v: string) => !!v || 'Пароль обязателен для заполнения',
    (v: string) =>
      PASSWORD_REGEX.test(v) ||
      'Должен обязательно содержать буквы (любого алфавита) и цифры. Ограничений на вводимые символы нет.',
  ],
  passwordConfirmation: [
    (v: string) => !!v || 'Пароль обязателен для заполнения',
    (v: string) =>
      PASSWORD_REGEX.test(v) ||
      'Должен обязательно содержать буквы (любого алфавита) и цифры. Ограничений на вводимые символы нет.',
  ],
  isAgreementAccepted: [(v: boolean) => v || 'Требуется принять пользовательское соглашение'],
}
