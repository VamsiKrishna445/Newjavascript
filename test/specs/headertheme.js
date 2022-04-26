
import ThemePage from  '../pageobjects/theme.page'
describe('Verify subsections theme color in CNN',async () => {
  
    it ('should open the us and world section and verify color in cnn',async ()  =>{
        await ThemePage.open();
        await browser.maximizeWindow()
        await ThemePage.usSection.click();
        let mode = await ThemePage.usSection.getAttribute('mode')
        if(mode ='dark')
          console.log('us theme is in black color')
        else console.log('us theme is not in black color')
        await browser.back();

        await ThemePage.worldSection.click();
        let mode1 = await ThemePage.worldSection.getAttribute('mode')
        if(mode1 ='dark')
          console.log('World theme is in black color')
        else console.log('World theme is not in black color')
        await browser.back();
        await ThemePage.opinionSection.click();
        console.log('opinion theme is in black color')
        await browser.back();
    });    
    it ('should open  business section and verify color in cnn',async ()  =>{

        await ThemePage.businessSection.click();
        let mode2 = await ThemePage.businessSection.getAttribute('mode')
        if(mode2 ='dark')
          console.log('business theme is in black color')
        else console.log('business theme is not in black color')
        await browser.back();

    })
    it ('should open politics  health and Entertainment section and verify color in cnn',async ()  =>{
        await ThemePage.politicSection.click();
        let mode4 = await ThemePage.politicSection.getAttribute('mode')
        if(mode4 ='light')
          console.log('Politics theme is in white color')
        else console.log('Politics theme is not in white color')
        await browser.back();

        await ThemePage.healthSection.click();
        let mode5 = await ThemePage.healthSection.getAttribute('mode')
        if(mode5 ='light')
          console.log('Health theme is in white color')
        else console.log('Health theme is not in white color')
        await browser.back();

        await ThemePage.entertainment.click();
        let mode6 = await ThemePage.entertainment.getAttribute('mode')
        if(mode6 ='light')
          console.log('Entertainment theme is in white color')
        else console.log('Entertainment theme is not in white color')
        await browser.back();
    });    
})    
