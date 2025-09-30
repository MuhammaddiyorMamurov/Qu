import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      Welcome: "Welcome to our new project",
      today: "Today I used i18n for the first time in my project. It allows me to make my app multilingual by separating texts into different language files. Now users can easily switch between languages, and the app content updates automatically. This experience showed me how important internationalization is for creating applications that are accessible worldwide.",
      body:"At first, I felt a little confused, because I had never worked with internationalization before. But after reading the documentation and experimenting with small examples, I quickly understood how the configuration works. Now, with just a few lines of setup, my application can display content in English, Uzbek, and Russian, and users can switch between these languages seamlessly.",
      signup:"SIGNUP",
      enter: "Enter"
    }
  },
  uz: {
    translation: {
      Welcome: "Yangi loyihamizga xush kelibsiz",
       today: "Bugun loyihamda birinchi marta i18n kutubxonasidan foydalandim. Bu yordamida dasturimni ko‘p tilli qilish imkoniyati paydo bo‘ldi. Matnlarni alohida fayllarda saqlab, foydalanuvchi tanlagan tilga qarab avtomatik yangilanadigan qilib qo‘ydim. Shu tajriba menga global foydalanuvchilar uchun ochiq dastur yaratishda internationalization qanchalik muhimligini ko‘rsatdi.",
       body:"Avvaliga biroz chalkash tuyuldi, chunki bundan oldin internationalization bilan ishlamagan edim. Lekin hujjatlarni o‘qib, kichik tajribalar qilib ko‘rganimdan keyin hammasi ancha tushunarli bo‘lib ketdi. Endi dasturimni ingliz, o‘zbek va rus tillarida ko‘rsatishim mumkin va foydalanuvchi bemalol tilni almashtirishi mumkin.",
       "signup":"Ro'yhatdan o'tish",
       enter:"Kirish"
    }
  },
  ru: {
    translation: {
      Welcome: "Добро пожаловать в наш новый проект",
      today:"Сегодня я впервые использовал i18n в своём проекте. С его помощью можно легко сделать приложение многоязычным, разделив тексты по отдельным языковым файлам. Теперь пользователь может переключать язык, и содержимое автоматически обновляется. Этот опыт показал мне, насколько важна интернационализация для создания приложений, доступных во всём мире",
      body:"Сначала всё показалось немного сложным, так как я никогда раньше не работал с интернационализацией. Но после того как я изучил документацию и попробовал несколько примеров, стало гораздо понятнее. Теперь моё приложение может отображать контент на английском, узбекском и русском языках, а пользователь может легко переключаться между ними.",
      signup: "регистрация",
      enter:"Войти"

    }
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;