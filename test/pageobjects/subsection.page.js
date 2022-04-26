import cnnpage from './cnnpage';
class SectionPage extends cnnpage{

    open (){
        super.open('https://www.cnn.com/us')
            
    }
    open1 (){
        super.open('https://www.cnn.com/videos/world/2022/03/17/former-partner-tolstoy-oligarch-russia-ebof-intv-vpx.cnn/video/playlists/around-the-world/')
    }
    open2 (){
        super.open(`https://www.cnn.com/2019/08/23/politics/stephanie-grisham-white-house-press-trump/index.html`)
    }
    get crimeJustice(){
        return $(`//a[@name='crime-and-justice']`)
    }
    get energyEnvironment (){
        return $(`//a[@name='energy-and-environment']`)
    }
    get extremeWeather (){
        return $(`//a[@name='extreme-weather']`)
    }
    get spaceScience (){
        return $(`//a[@name='space-science']`)
    }
    get fullScreen(){
        return $(`//button[@class='sc-bbmXgH pui_control-bar_fullscreen-toggle sc-tilXH kBGqE']`)
    }
    get settingBtn (){
        return $(`//button[@class='sc-bbmXgH pui_control-bar_settings-toggle sc-fYxtnH gPtjFw']`)
    }
    get volumeBtn (){
        return $(`//*[@class='sound-full-icon']`)
    }
    get liveBtn (){
        return $(`//*[@id="pageHeader"]/div/div/div[1]/div[1]/nav/a[1]`)
    }
    get menuIcon (){
        return $(`#playIconTitle`)
    }
    get play(){
        return $(`//div[@title='Play']`)
    }
    get setting(){
        return $(`//button[@class='sc-bbmXgH pui_control-bar_settings-toggle sc-fYxtnH dgxfTn']`)
    }
    get scroll (){
        return $(`//a[@class='ob-dynamic-rec-link ']`)
    }
    get weather (){
        return $(`//*[@id="header-nav-container"]/div/div[1]/div/div[1]/a[2]`)
    }
    get Footer(){
        return $(`//div[@class='footer__subnav']`)
    }
    get rightrail(){
        return $(`#fave-ad-player-1`)
    }

    
    

    



}

export default new SectionPage();