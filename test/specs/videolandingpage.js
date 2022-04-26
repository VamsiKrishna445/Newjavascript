import  NewPage from  '../pageobjects/new.page'

describe('verify videolanding page in cnn',async()=>{

    it('should verify videopage in CNN',async()=>{

        await NewPage.open2()
        await browser.maximizeWindow();
    })
    it('should verify video carousel ',async()=>{   
        await NewPage.carousel.isDisplayed();
        console.log('video carousel is displaying')
    })
    it('should verify thumbnailimage is displaying or not',async()=>{    
        await NewPage.thumbNail.isDisplayed();
        console.log('thumnail page is displaying')
    })
})