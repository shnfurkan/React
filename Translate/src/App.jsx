import Navbar from "./Navbar"
import React from 'react';
import { useTranslation } from 'react-i18next';

// npm install i18next react-i18next
// npm i i18n

function App() {

  const { t } = useTranslation();

  return (
   <div>
    <Navbar/>
    <button>{t('BUTTON_LABEL')}</button>
    <p>{t("ORDER_LABEL")}</p>
   </div>
  )
}
export default App