
import  NewPage from  '../pageobjects/new.page'
describe('verifying cnn website',()=> { 

    it('Should  open the menu hamburger of CNN  website', async () => {
      await NewPage.open1();
      await browser.maximizeWindow()
      await NewPage.menuBtnlink.click()
    });
    it('should verify subsections is displaying in edition ',async()=>{ 
        console.log(await NewPage.Ussection.isDisplayed());
        console.log(await NewPage.international.isExisting());
        console.log(await NewPage.entertainment.isDisplayed());
        console.log(await NewPage.arabic.isDisplayedInViewport());
    });
    it('should open  USsection  in edition',async()=>{    
      await NewPage.Ussection.click()
      let Url = browser.getUrl()
    if (Url = 'https://us.cnn.com/?hpt=header_edition-picker')
      console.log('US section page has loaded successfully');
    else console.log('US section page has not loaded successfully')
    await browser.back()
    });
    it('should open international section in edition',async()=>{
      await NewPage.menuBtnlink.click()
      await NewPage.international.click()
      let Url1 = browser.getUrl()
    if (Url1 = 'https://edition.cnn.com/?hpt=header_edition-picker')
      console.log('International section page has loaded successfully');
    else console.log('International section page has not loaded successfully')
    await browser.back()
    });
    it('should open arabic section in edition',async()=>{
      await NewPage.menuBtnlink.click()
      await NewPage.arabic.click();
      let Ur2 = browser.getUrl()
    if (Ur2 = 'https://arabic.cnn.com/?hpt=header_edition-picker')
      console.log('Arabic section page has loaded successfully');
    else console.log('Arabic section page has not loaded successfully')
    await browser.back()
    });
    it('should open espanol section in edition',async()=>{
      await NewPage.menuBtnlink.click()
      await NewPage.Espanol.click()
      let Ur3 = browser.getUrl()
    if (Ur3 = 'https://cnnespanol.cnn.com/?hpt=header_edition-picker')
      console.log('espanol section page has loaded successfully');
    else console.log('espanol section page has not loaded successfully')
      await browser.back()
    });
});      