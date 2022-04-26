import cnnpage from './cnnpage';
class NewPage extends cnnpage {

  open(){

    super.open('https://www.cnn.com/search');
    
  }
  open1(){
    super.open('https://www.cnn.com/');
  }
  open2(){
    super.open('https://www.cnn.com/videos')
  }
  get searchicon (){
    return $('#searchIconTitle');
  }
  get lefticon(){
    return $(`//i[@class='icon icon--arrow-left']`)
  }
  get righticon (){
    return $(`//i[@class='icon icon--arrow-right']`)
  }
  get pageNum() {
    return $(`//span[@class='cnnSearchPageLink cnnAlt']`)
  }
  get entertainment (){
    return $(`#left_entertainment`)
  }
  get travel (){
    return $(`#left_travel`)
  }
  get style (){
    return $(`#left_style`)
  }
  
  get searchBar (){
    return $('#footer-search-bar');
  }

  get story (){
    return $("//label[@for='collection_article']");
  }

  get videos (){
    return $("//label[@for='collection_video']");
  }

  get photos (){
    return $("//label[@for='collection_gallery']");
  }

  get clearBtn (){
    return $("//button[@class='cnn-search__clear']");
  }

  get searchBar1 (){
    return $("//input[@class='cnn-search__input']");
  }

  get searchButton (){
    return $("//button[@class='cnn-search__button icon icon--search']");
  }

  get story1 (){
    return $("//label[@for='collection_article']");
  }

  get videos1 (){
    return $("//label[@for='collection_video']");
  }

  get photos1 (){
    return $("//label[@for='collection_gallery']");
  }
  get ArticlePage () {

    return $("//li[@class='cn__listitem']");
  }
  get menuBtnlink () {
     
    return $("#menuButton")
  }

  get userAccount () {

    return $("#account-icon-button")
  }

  get inputEmail (){

    return $("#//input[@id='login-email-input']")
  }

  get inputPassword (){

    return $("//input[@id='login-password-input']")
  }

  get btnLogin (){

    return $("//button[@class='user-account-login-form__button user-account-shared__button']")
  }

  get moreCnn (){

    return $("//div[@class='ob_strip_container AR_38']")
  }

  get relatedArt (){

    return $("//div[@class='el__storyelement--standard el__article--embed']")
  }
  get sectionBus (){
    return $(`#left_business`)
  }
  get story2 (){
    return $("//label[@for='collection_article']");
  }
  get sectionHealth (){
    return $(`#left_health`)
  }
  get story3 (){
    return $("//label[@for='collection_article']");
  }
  get Ussection (){
    return $(`//*[@id="header-nav-container"]/div/div[2]/div/div[3]/div/div/ul/li[2]/a`)
  }
  get international (){
    return $(`//*[@id="header-nav-container"]/div/div[2]/div/div[3]/div/div/ul/li[3]/a`)
  }
  get arabic (){
    return $(`//*[@id="header-nav-container"]/div/div[2]/div/div[3]/div/div/ul/li[4]/a`)
  }
  get Espanol (){
    return $(`//*[@id="header-nav-container"]/div/div[2]/div/div[3]/div/div/ul/li[5]/a`)
  }
  get searchBtn (){
    return $(`//button[@class='sc-bdVaJa sc-eqIVtm dsgQNJ']`)
  }
  get searchField (){
    return $(`header-search-bar`)
  }
  get carousel (){
    return $(`#root`)
  }
  get thumbNail (){
    return $(`//img[@class='carousel_thumbnail']`)
  }

  


}

export default new NewPage();