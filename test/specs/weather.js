import sectionPage from '../pageobjects/section.page'
import  SectionPage from  '../pageobjects/section.page'

describe('Verify Legallinks in footer',async () => {
  
  it('should open the Legallinks of cnn',async ()  =>{
    await SectionPage.open()
    await browser.maximizeWindow()
    await SectionPage.location.setValue('india')
    await SectionPage.forecast.click();
    //await SectionPage.dropdownselect.selectByVisibleText('Big Indian,NY');
    await SectionPage.celsius.click();
    console.log(await SectionPage.celsius.getText());
    await SectionPage.farenheit.click();
    console.log(await SectionPage.farenheit.getText());
    
    await SectionPage.default.click();
    console.log(await SectionPage.default.getText());
    await SectionPage.searchlocation.isDisplayed();
    await SectionPage.searchlocation.getText()


  })
})  

        
       