import  SectionPage from  '../pageobjects/section.page'

describe('should verify videos are autoplaying or not',async()=>{
    it ('should open video page in CNN',async()=>{
        await SectionPage.open2()
        await browser.maximizeWindow();
        await SectionPage.playBtn.isDisplayed();
        await SectionPage.playBtn.click();
        await browser.pause(40000);//video containing ad's so it takes time to load controls.
    });
     
    it('should open fullScrenBtn',async()=>{    
        await SectionPage.fullScreen.isDisplayed();
        await SectionPage.fullScreen.click();
    });
    it('should open captionsBtn',async()=>{    
        await SectionPage.playBtn.isDisplayed();
        await SectionPage.playBtn.click();
    });
    it('should open volumeBtn',async()=>{
        await SectionPage.playBtn.isDisplayed();
        await SectionPage.VolumeBtn.click();
    })    
    it('should open settingBtn ',async()=>{
        await SectionPage.settingBtn.isDisplayed();
        await SectionPage.settingBtn.click();
    });
    it('should verify duration',async()=>{
        await SectionPage.duration.isDisplayed();   
    });
    it('should verify video carousle',async()=>{
        await SectionPage.carousel.isDisplayed();
                
    })
})
    
    
  