import  SectionPage from  '../pageobjects/subsection.page'

describe('Verify pinnedvideo   in CNN',async () => {
   it('should open video in cnn page',async()=>{

       await SectionPage.open2();
       await browser.maximizeWindow()
       await SectionPage.play.click()
       await browser.pause(20000);
       await SectionPage.scroll.scrollIntoView()
       await browser.pause(30000)
       await SectionPage.setting.click()
       await SectionPage.setting.isDisplayed()
       await SectionPage.Footer.scrollIntoView()

        await SectionPage.rightrail.isDisplayed();
   })
})