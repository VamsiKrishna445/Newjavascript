import cnnpage from './cnnpage';
class SectionPage extends cnnpage{

    open (){
        super.open(`https://www.cnn.com/weather`)
     
    }
    open1 (){
        super.open('https://edition.cnn.com/');
    }
    open2 (){
        super.open('https://edition.cnn.com/2019/08/23/politics/stephanie-grisham-white-house-press-trump/index.html')
    }
    get terms () {
        return $(`//a[@name='terms-of-use']`)
    }
    get privacy () {
        return $(`//a[@name='privacy-policy']`)
    }
    get access () {
        return $(`//a[@name='accessibility']`)
    }
    get about () {
        return $(`//a[@name='about-us']`)
    }
    get store () {
        return $(`//*[@id="footer-nav-container"]/div[5]/div/div[2]/nav/ul/li[6]/a`)
    }
    get newLetter (){
        return $(`//a[@title='visit the Newsletters section']`)
    }
    get adchoice(){
        return $(`//a[@name='adchoices']`)
    }
    get tranScript () {
        return $(`//a[@name='transcripts']`)
    }
    get License () {
        return $(`//a[@name='license-footage']`)
    }
    get newSource() {
        return $(`//a[@name='cnn-newsource']`)
    }
    get siteMap() {
        return $(`//a[@name='sitemap']`)
    }
    get location (){
        return $(`//input[@name='weather-local-search']`)
    }
    get dropdown (){
        return $$(`//span[@class='tt-dropdown-menu']`)
    }
    get dropdownselect (){
        return $(`//div[@class='tt-dataset-user-location']`)
    }
    get forecast () {
        return $(`//input[@type='submit']`)
    }
    get celsius (){
        return $(`//button[@data-temp='celsius']`)
    }
    get farenheit (){
        return $(`//button[@data-temp='fahrenheit']`)
    }
    get default(){
        return $(`//div[@class='weather__stored-default']`)
    }
    get searchlocation (){
        //return $(`//div[@class='zn-header']`)
        return $(`//h2[@class='zn-header__text']`)
    }
    get settingBtn(){
        return $(`//button[@class='sc-bbmXgH pui_control-bar_settings-toggle sc-fYxtnH gPtjFw']`)
    }
    get fullScreen(){
        return $(`//button[@class='sc-bbmXgH pui_control-bar_fullscreen-toggle sc-tilXH kBGqE']`)
    }    
    get captions(){
        return $(`//button[@class='sc-bbmXgH pui_control-bar_captions-toggle sc-jnlKLf jRWvWM']`)
    }
    get playBtn (){
        return $(`//button[@class='pui_center-controls_big-play-toggle sc-iAyFgw cnBpEa']`)
    }
    get VolumeBtn(){
        return $(`//button[@class='sc-hmzhuo pui_volume-controls_mute-toggle sc-hqyNC eEJmIo']`)
    }
    get duration (){
        return $(`//div[@class='pui_progress-bar--content sc-fMiknA fDWbUI']`)
    }
    get carousel(){
        return $(`//div[@class='img__preloader']`)
    }




}
export default new SectionPage();