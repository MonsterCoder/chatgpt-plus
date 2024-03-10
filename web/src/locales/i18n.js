import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    locale: 'en',
    messages: {
        'zh-cn': require('./zh-cn.json'),
        'en': require('./en.json')
    }
})

export default i18n;