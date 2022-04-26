import cnnpage from './cnnpage';
class NewcnnPage extends cnnpage {

    open(){
        super.open('https://edition.cnn.com/')
    }
    open1 (){
        super.open('https://edition.cnn.com/us')
            
    }
    get locationBar (){
        return $(`//input[@name='weather-local-search']`)
    }
    get forecastBtn () {
        return $(`//input[@type='submit']`)
    }
    get celsiusBtn (){
        return $(`//button[@data-temp='celsius']`)
    }
    get farenheitBtn (){
        return $(`//button[@data-temp='fahrenheit']`)
    }
    get defaultoption (){
        return $(`//div[@class='weather__stored-default']`)
    }
    get searchText (){
        //return $(`//div[@class='zn-header']`)
        return $(`//h2[@class='zn-header__text']`)
    }    
    get worldSection (){
        return $(`//a[@name='world']`)
    }
    get businessSection (){
        return $(`//a[@name='business']`)
    }
    get healthSection (){
        return $(`(//a[@name='health'])[1]`)
    }
    get terms () {
        return $(`//a[@name='terms-of-use']`)
    }
    get international (){
        return $(`//*[@id="header-nav-container"]/div/div[2]/div/div[3]/div/div/ul/li[3]/a`)
    }
    get Us (){
        return $(`//*[@id="header-nav-container"]/div/div[2]/div/div[3]/div/div/ul/li[2]/a`)
    }
    get menuBtnlink () {
     
        return $("#menuButton")
    }
    get UsSub(){
        return $(`(//a[@name='us'])[3]`)
    }
    get crimeandJustice(){
        return $(`//a[@name='crime-and-justice']`)
    }
    get energyandEnvironment (){
        return $(`//a[@name='energy-and-environment']`)
    }
    get Weatherpage (){
        return $(`(//a[@name='weather'])[1]`)
    }
    get spaceandScience (){
        return $(`//a[@name='space-science']`)
    }
    get Location (){
        return $(`//input[@name='weather-local-search']`)
    }
    get Forecast () {
        return $(`//input[@type='submit']`)
    }
    get searchBtn (){
        return $(`//button[@class='sc-bdVaJa sc-iBEsjs jlTkWL']`)
    }
    get searchBar (){
        return $(`(//input[@type='text'])[1]`);
    }
    get searchButton (){
        return $("//button[@class='cnn-search__button icon icon--search']");
    }
    get clearBtn (){
        return $("//button[@class='cnn-search__clear']");
    }
    get story (){
        return $("//label[@for='collection_article']");
    }
    get video (){
        return $("//label[@for='collection_video']");
    }  
    get photo (){
        return $("//label[@for='collection_gallery']");
    }  
    get lefticonSym(){
        return $(`//i[@class='icon icon--arrow-left']`)
    }
    get righticonSym (){
        return $(`//i[@class='icon icon--arrow-right']`)
    }
    get pageNumber() {
        return $(`//span[@class='cnnSearchPageLink cnnAlt']`)
    }
    get entertainmentsection (){
        return $(`#left_entertainment`)
    }
    get travelsection (){
        return $(`#left_travel`)
    }
    get stylesection (){
        return $(`#left_style`)
    }
    get health (){
        return $(`#left_health`)
    }
    get sectionBusiness (){
        return $(`#left_business`)
    }
    get arabicEdition (){
        return $(`//*[@id="header-nav-container"]/div/div[2]/div/div[3]/div/div/ul/li[4]/a`)
    }

}
export default new NewcnnPage();