import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // public/locales 폴더에서 번역 파일을 로드하기 위한 backend 설정
  .use(Backend)
  // 사용자 브라우저 언어 감지
  .use(LanguageDetector)
  // react-i18next를 i18next에 바인딩
  .use(initReactI18next)
  .init({
    fallbackLng: 'ko', // 기본 언어 (감지되지 않았을 때)
    debug: false, // 개발 모드에서 콘솔 로그 확인하려면 true로 변경하세요.
    
    interpolation: {
      escapeValue: false, // 리액트에서 xss 처리가 이미 되므로 false 설정
    },
    
    backend: {
      // 번역 파일 경로 설정 (GitHub Pages 하위 경로 대응을 위해 상대 경로 사용)
      loadPath: 'locales/{{lng}}/translation.json',
    },

    detection: {
      // 언어 감지 순서
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'], // 감지된 언어 저장 위치
    }
  });

export default i18n;
