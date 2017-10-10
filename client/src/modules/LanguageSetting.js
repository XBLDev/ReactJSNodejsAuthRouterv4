
localStorage.setItem('currentLanguage', 'Eng');
console.log('currentLanguage: ', localStorage.getItem('currentLanguage'));
class LanguageSetting {

//   currentLanguage = 'Eng'; 
  /**
   * Set language as chinese
   *
   * 
   */

//   constructor(){
//     // localStorage.setItem('currentLanguage', 'Eng');
//     // console.log('currentLanguage: ', localStorage.getItem('currentLanguage'));
//   }
  
  
  static setEng() {
    localStorage.setItem('currentLanguage', 'Eng');
  }

  static setChi() {
    localStorage.setItem('currentLanguage', '中文');
  }

  static getLanguage() {
    return localStorage.getItem('currentLanguage');
  }


}