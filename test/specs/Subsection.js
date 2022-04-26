import  SectionPage from  '../pageobjects/subsection.page'

describe('Verify subsections of us in CNN',async () => {
  
    it ('should open the US Section in  cnn',async ()  =>{

        await SectionPage.open()
        await browser.maximizeWindow()
        let Url = browser.getUrl()
        if (Url = 'https://www.cnn.com/us')
         console.log('US section has loaded successfully');
        else console.log('US section has not loaded successfully')
        
    });
    it('should verify subsections are displaying',async()=>{
        await SectionPage.crimeJustice.isDisplayed();
        console.log(await SectionPage.crimeJustice.getText());
        await SectionPage.energyEnvironment.isDisplayedInViewport();
        console.log(await SectionPage.energyEnvironment.getText());
        await SectionPage.extremeWeather.isDisplayed();
        console.log(await SectionPage.extremeWeather.getText());
        await SectionPage.spaceScience.isDisplayedInViewport();
        console.log(await SectionPage.spaceScience.getText());
    });
    it('should open crime justice subsection of us in cnn',async()=>{        
        await SectionPage.crimeJustice.click()
        let Url1 = browser.getUrl()
        if (Url1 = 'https://edition.cnn.com/specials/us/crime-and-justice')
          console.log('crime justice subsection has loaded successfully');
        else console.log('crime justice subsections has not loaded successfully')
        let fontweight=(await SectionPage.crimeJustice.getCSSProperty('font-weight'))
        if(fontweight = '700')
          console.log('crimejustice has highlighted successfully')
        else console.log('crimejustice was not highlighted')
        
    });

    it('should open energy&Environment subsection of us in CNN',async()=>{
        await SectionPage.energyEnvironment.click()
        let Url2 = browser.getUrl()
        if (Url2 = 'https://edition.cnn.com/specials/us/energy-and-environment')
         console.log('energy subsection has loaded successfully');
        else console.log('energy subsection has not loaded successfully')
        let fontweight=(await SectionPage.energyEnvironment.getCSSProperty('font-weight'))
        if(fontweight = '700')
          console.log('energy&Environment has highlighted successfully')
        else console.log('energy&Environment was not highlighted')
    });

    it('should open extreme&Weather subsection of us in CNN',async()=>{
        await SectionPage.extremeWeather.click();
        let Url3 = browser.getUrl()
        if (Url3 = 'https://edition.cnn.com/weather')
          console.log('weather subsection has loaded successfully');
        else console.log('weather subsection has not loaded successfully')
        let fontweight=(await SectionPage.weather.getCSSProperty('font-weight'))
        if(fontweight = '700')
         console.log('extreme&Weather has highlighted successfully')
        else console.log('extreme&Weather was not highlighted')
        await browser.back()
    });

     it('should open space&science subsection of us in CNN',async()=>{    
        await SectionPage.spaceScience.click();
        let Url4 = browser.getUrl()
      if (Url4 = 'https://edition.cnn.com/specials/space-science')
        console.log('space science subsection has loaded successfully');
      else console.log(' space science subsection has not loaded successfully')
      let fontweight=(await SectionPage.spaceScience.getCSSProperty('font-weight'))
      
      
      
    });
    
});        