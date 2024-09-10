import { ref, onMounted } from 'vue'
import { useReCaptcha } from 'vue-recaptcha-v3'

export const RECAPTCHA_SHOW_DELAY = 100

export function useReCaptchaSettings() {
  const recaptcha = useReCaptcha()
  const instance = ref(recaptcha?.instance)

  onMounted(() => {
    setTimeout(() => {
      instance.value?.showBadge()
    }, RECAPTCHA_SHOW_DELAY)
  })

  const executeRecaptcha = async (action: string) => {
    if (recaptcha?.executeRecaptcha) {
      return await recaptcha.executeRecaptcha(action)
    } else {
      throw new Error('Неудалось получить токен reCaptcha')
    }
  }

  return {
    executeRecaptcha,
    recaptchaInstance: instance,
  }
}
