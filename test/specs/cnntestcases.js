import NewcnnPage from '../pageobjects/newcnn.page'
describe('should verify Header themes of section fonts',async()=>{
  it('should verify headertheme is in dark color or in light color',async()=>{
    await NewcnnPage.open();
    await browser.maximizeWindow()
    await NewcnnPage.businessSection.click()
    let mode = await NewcnnPage.businessSection.getAttribute('mode')
    if(mode ='dark')
      console.log('business theme is in black color')
    else console.log('business theme is not in black color')
    await browser.back();

    await NewcnnPage.healthSection.click()
    let mode1 = await NewcnnPage.healthSection.getAttribute('mode')
    if(mode1 ='light')
      console.log('Health theme is in white color')
    else console.log('Health theme is not in white color')
  })
});
describe('should verify Legallinks in Footersection',async()=>{
  it('should verify Legallinks in footersection are working or not',async()=>{
    await NewcnnPage.terms.click()
    let Url1 = browser.getUrl()
    if(Url1='https://www.cnn.com/terms')
      console.log('Terms of use page has loaded successfully');
    else console.log('Terms of use page has not loaded');
  }) 
});
describe('should verify searchbutton and searchpage in CNN',async()=>{  
  it('should  open the Search page and verify all options ', async()=> {
    await NewcnnPage.searchBtn.click()
    await browser.url('https://edition.cnn.com/search?q=sports%20news&size=10')
    await NewcnnPage.clearBtn.click()
    await NewcnnPage.searchBar.setValue('covid news')
    await NewcnnPage.searchButton.click()
    await NewcnnPage.story.click()
    await browser.getUrl();
    await NewcnnPage.video.click()
    await browser.getUrl();
    await NewcnnPage.photo.click()
    let Url2 = browser.getUrl() 
    if (Url2 = 'https://edition.cnn.com/search?size=10&q=covid%20news&type=gallery')
      console.log('photo section of covidnews has loaded successfully');
    else console.log('photo section of covidnews has not loaded successfully')

    await NewcnnPage.sectionBusiness.click()
    await browser.getUrl();
    await NewcnnPage.entertainmentsection.click()
    await browser.getUrl();
    await NewcnnPage.travelsection.click()
    await browser.getUrl();
    await NewcnnPage.stylesection.click()
    await browser.getUrl();

  }) 
});
describe('should verify Edition picker and Subsections in US',async()=>{  
  it('Should verify Edition picker and subsections in US are working or not', async()=> {  
    await NewcnnPage.menuBtnlink.click()
    console.log(await NewcnnPage.Us.isDisplayed());
    console.log(await NewcnnPage.international.isDisplayed());
    await NewcnnPage.arabicEdition.click()
    let Url3 = browser.getUrl()
    if (Url3 = 'https://arabic.cnn.com/?hpt=header_edition-picker')
      console.log('Arabic section page has loaded successfully');
    else console.log('Arabic section page has not loaded successfully')
    await browser.back()

    await NewcnnPage.menuBtnlink.click()    
    await NewcnnPage.Us.click()
    await NewcnnPage.UsSub.scrollIntoView();
    await NewcnnPage.open1()
    await browser.maximizeWindow()
    await NewcnnPage.crimeandJustice.isDisplayed();
    console.log(await NewcnnPage.crimeandJustice.getText());
    await NewcnnPage.energyandEnvironment.isDisplayedInViewport();
    console.log(await NewcnnPage.energyandEnvironment.getText());

    await NewcnnPage.crimeandJustice.click()
    
    await NewcnnPage.energyandEnvironment.click()
    let Url6 = browser.getUrl()
    if (Url6 = 'https://edition.cnn.com/specials/us/energy-and-environment')
     console.log('energy subsection has loaded successfully');
    else console.log('energy subsection has not loaded successfully')
    let fontweight=(await NewcnnPage.energyandEnvironment.getCSSProperty('font-weight'))
    if(fontweight = '700')
      console.log('energy&Environment has highlighted successfully')
    else console.log('energy&Environment was not highlighted')
  })
});   
  
describe('should verify weatherPage ',async()=>{  
  it('should verify Weather page and options are working or not',async()=>{
    await NewcnnPage.menuBtnlink.click()

    await NewcnnPage.Weatherpage.click()
    await NewcnnPage.locationBar.setValue('india')
    await NewcnnPage.forecastBtn.click();
    await NewcnnPage.celsiusBtn.click()
    console.log(await NewcnnPage.celsiusBtn.getText());
   
    await NewcnnPage.farenheitBtn.click()
    console.log(await NewcnnPage.farenheitBtn.getText()); 
    
    await NewcnnPage.defaultoption.click()
    console.log(await NewcnnPage.defaultoption.getText());
    await NewcnnPage.searchText.isDisplayed();
    await NewcnnPage.searchText.getText()
    


  })
    
    
  
});