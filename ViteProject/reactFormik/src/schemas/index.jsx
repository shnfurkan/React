import * as yup from 'yup'
const passwordControl = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup
    .string()
    .email(' Lütfen geçerli bir email giriniz.')
    .required('Email girmek zorunludur.'),
    age: yup
    .number()
    .positive('Lütfen pozitif bir yaş giriniz.')
    .integer('Lütfen yaşinizi tam sayi olarak giriniz.')
    .required('Yaş girmek zorunludur.'),
    password: yup
    .string()
    .min(5,'Lütfen minumum 5 karekter giriniz.')
    .matches(passwordControl,{message:'Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayi giriniz.'})
    .required('Şifre girmek zorunludur.'),
    againPassword: yup
    .string()
    .oneOf([yup.ref('password')],'Şifreler uyuşmuyor lütfen kontrol ediniz.')
    .required('Şifre girmek zorunludur.')
})

export const advancedSchema = yup.object().shape({
    username: yup
    .string()
    .required('Kullanici adi girmek zorunludur.')
    .min(5,'Lütfen minumum 5 karekter giriniz'),
    university: yup
    .string()
    .oneOf(['boğaziçi', 'odtü', 'itü'], 'Lütfen üniversitenizi seçin.')
    .required('Lütfen üniversitenizi seçin.'),
    access: yup
    .boolean()
    .oneOf([true],'Kullanim koşullarini kabul ediniz.'),
})


