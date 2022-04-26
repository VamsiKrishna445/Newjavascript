import newPage from '../pageobjects/new.page';
import  NewPage from  '../pageobjects/new.page'

describe('verifying cnn website',()=> { 

  it ('Should  open the  searchbar  of CNN  website', async () => {
    await NewPage.open();
    await browser.maximizeWindow()
    await NewPage.clearBtn.click()
  });
  it('Should  search for covidnews  in CNN  website', async () => {  
    await NewPage.searchBar1.setValue('covid news');
    await NewPage.searchButton.click()
    let Url1 = browser.getUrl()
    if (Url1 = 'https://edition.cnn.com/search?size=10&q=covid%20news')
      console.log('everything section of covidnews has loaded successfully');
    else console.log('everything section of covidnews has not loaded successfully')
  });
  it('should verify story photos videos in gallery ',async()=>{
    await NewPage.story1.click()
    let Url2 = browser.getUrl()
    if (Url2 = 'https://edition.cnn.com/search?size=10&q=covid%20news&type=article')
      console.log('story section of covidnews has loaded successfully');
    else console.log('story section of covidnews has not loaded successfully')

    await NewPage.videos1.click()
    let Url3 = browser.getUrl()
    if (Url3 = 'https://edition.cnn.com/search?size=10&q=covid%20news&type=video')
      console.log('video section of covinews has loaded successfully');
    else console.log('video section of covinews has not loaded successfully')

    await NewPage.photos1.click()
    let Url4 = browser.getUrl() 
    if (Url4 = 'https://edition.cnn.com/search?size=10&q=covid%20news&type=gallery')
      console.log('photo section of covidnews has loaded successfully');
    else console.log('photo section of covidnews has not loaded successfully')
  });  
  it('should verify all options in seciton page',async()=>{
    await NewPage.sectionBus.click()
    await NewPage.story2.click()
    let Url5 = browser.getUrl()
    if (Url5 ='https://edition.cnn.com/search?size=10&q=covid%20news&category=business&type=article')
      console.log(' business of covidnews has loaded successfully');
    else console.log('  business of covidnews has not loaded successfully')

    await newPage.entertainment.click()
    let Url6 = browser.getUrl()
    //match the actual url with expected url
    if (Url6 = 'https://edition.cnn.com/search?size=10&q=covid%20news&category=sport&type=article')
      console.log(' entertainment section of covidnews has loaded successfully');
    else console.log(' entertainment section of covidnews has not loaded successfully')

    await NewPage.story2.click()

    await NewPage.sectionHealth.click()
    let Url7 = browser.getUrl()
    //match the actual url with expected url
    if (Url7 = 'https://www.cnn.com/search?size=10&q=covidnews&sections=health&types=article')
      console.log(' Healthssection  of covidnews has loaded successfully');
    else console.log(' Health section  of covidnews has not loaded successfully')

    await newPage.travel.click()
    let Url8 = browser.getUrl()
    if (Url8 = 'https://edition.cnn.com/search?size=10&q=covid%20news&category=sport&type=article')
      console.log('travel section  of covidnews has loaded successfully');
    else console.log(' travel section of covidnews has not loaded successfully')

    await newPage.style.click();
    let Url9 = browser.getUrl()
    if (Url9 = 'https://edition.cnn.com/search?size=10&q=covid%20news&category=sport&type=article')
      console.log('style section of covidnews has loaded successfully');
    else console.log(' style section of covidnews has not loaded successfully')
  });

  it('should verify left icon right icon and numbers ',async()=>{  
    await newPage.lefticon.isDisplayedInViewport();
    await NewPage.lefticon.scrollIntoView();
    console.log( await NewPage.lefticon.isDisplayed());
    await NewPage.righticon.isDisplayed();
    await NewPage.pageNum.isDisplayed();
  });
  it('should clear the text in search bar',async()=>{
    await NewPage.lefticon.scrollIntoView();
    await NewPage.clearBtn.click()
    await browser.back()
  });

    
    
  

  
});  