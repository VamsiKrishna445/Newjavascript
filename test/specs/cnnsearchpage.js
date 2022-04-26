import  NewPage from  '../pageobjects/new.page'
describe('verifying cnn website',()=> { 

  it('Should  open the  searchbar in menu hamburger of CNN  website', async () => {
    //open CNN website

    await NewPage.open();
    //await browser.fullscreenWindow()
    await browser.maximizeWindow()
    await NewPage.searchicon.click();
  });
  

  it('Should  search for sportsnews in  CNN  website', async () => {  
    //Open searchbar and search for sports news 
    await NewPage.searchBar.setValue('sports news');
    await NewPage.searchBar.click()
    
    await browser.url('https://edition.cnn.com/search?q=sports%20news&size=10');
    
    let Url = browser.getUrl()
    //match the actual url with expected url
    if (Url = 'https://edition.cnn.com/search?q=sports%20news&size=10')
      console.log('sportsnews page has loaded successfully');
    else console.log('sportsnews page has not loaded successfully')
    


    //open story in sports news
    await NewPage.story.click()
    
    let Url2 = browser.getUrl()
    //match the actual url with expected url
    if (Url2 = 'https://edition.cnn.com/search?q=sports%20news&size=10&type=article')
      console.log('Article page of sportsnews has loaded successfully');
    else console.log('Article page of sportsnews has not loaded successfully')

    //open videos  in sports news
    await NewPage.videos.click()
   
    let Url3 = browser.getUrl()
    //match the actual url with expected url
    if (Url3 = 'https://edition.cnn.com/search?q=sports%20news&size=10&type=video')
      console.log('Video in sportsnews has loaded successfully');
    else console.log(' Video in sportsnews has not loaded successfully')
    
    //open photos in sports news
    await NewPage.photos.click()
    
    let Url4 = browser.getUrl()
    //match the actual url with expected url
    if (Url4 = 'https://edition.cnn.com/search?q=sports%20news&size=10&type=gallery')
      console.log('photos page in sportsnews has loaded successfully');
    else console.log('photos page in sportsnews  has not loaded successfully')

    //clear the search bar
    await NewPage.clearBtn.click()
   

  });

  it('Should  search for covidnews  in CNN  website', async () => {
    // type covid news in searchbar
    await NewPage.searchBar1.setValue('covid news');
    // it should click on searchbutton
    await NewPage.searchButton.click()
    let Url5 = browser.getUrl()
    if (Url5 = 'https://edition.cnn.com/search?size=10&q=covid%20news')
      console.log('everything section of covidnews has loaded successfully');
    else console.log('everything section of covidnews has not loaded successfully')

    //open story of covidnews
    await NewPage.story1.click()
    
    let Url6 = browser.getUrl()
    //match the actual url with expected url
    if (Url6 === 'https://edition.cnn.com/search?size=10&q=covid%20news&type=article')
      console.log('story section of covidnews has loaded successfully');
    else console.log('story section of covidnews has not loaded successfully')

    //open videos of covid news
    await NewPage.videos1.click()
    
    let Url7 = browser.getUrl()
    //match the actual url with expected url
    if (Url7 = 'https://edition.cnn.com/search?size=10&q=covid%20news&type=video')
      console.log('video section of covinews has loaded successfully');
    else console.log('video section of covinews has not loaded successfully')

    //open photos of covidnews
    await NewPage.photos1.click()
    
    let Url8 = browser.getUrl()
    //match the actual url with expected url
    if (Url8 === 'https://edition.cnn.com/search?size=10&q=covid%20news&type=gallery')
      console.log('photo section of covidnews has loaded successfully');
    else console.log('photo section of covidnews has not loaded successfully')
    
  });        
  
  it('should click on different options in section page',async () => {
    await NewPage.sectionBus.click()
    
    await NewPage.story2.click()
    
    let Url9 = browser.getUrl()
    //match the actual url with expected url
    if (Url9 === 'https://edition.cnn.com/search?size=10&q=covid%20news&category=business&type=article')
      console.log('stories section of business of covidnews has loaded successfully');
    else console.log(' stories section of business of covidnews has not loaded successfully')

    await NewPage.sectionSport.click()
    
    await NewPage.story3.click()
    
    let Url10 = browser.getUrl()
    //match the actual url with expected url
    if (Url10 = 'https://edition.cnn.com/search?size=10&q=covid%20news&category=sport&type=article')
      console.log('stories section of sports of covidnews has loaded successfully');
    else console.log(' stories section of sports of covidnews has not loaded successfully')
  });






  
  


        
    

  


        



      
      
     
        

 

   
      

     




});
    
    
       


