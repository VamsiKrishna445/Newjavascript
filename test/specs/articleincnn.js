import  NewPage from  '../pageobjects/new.page'

describe('Verifying Article in CNN website',()=> { 
   
  it('Should  open the article  in CNN  website', async () => {
   //open CNN website
   await NewPage.open();
   await browser.maximizeWindow()
  
   await browser.url('https://edition.cnn.com/2022/02/22/china/china-ukraine-russia-reaction-united-nations-intl-hnk/index.html');
   
   let Url = browser.getUrl()
   //match the actual url with expected url
   if (Url = 'https://edition.cnn.com/2022/02/22/china/china-ukraine-russia-reaction-united-nations-intl-hnk/index.html')
     console.log('Article page has loaded successfully');
   else console.log('Article page has not loaded successfully')
  });

   it('Should  verify morefromCNN is displayed', async () => {
    //it should verify morefromcnn is displaying or not
    console.log(await NewPage.moreCnn.isDisplayed());
  });

  it('Should  open the Relatedarticle page', async () => {  
   //it should open the relatedarticle
    await NewPage.relatedArt.click()
    await NewPage.relatedArt.scrollIntoView();
    
    let Url2 = browser.getUrl()
    //match the actual url with expected url
    if (Url2 = 'https://edition.cnn.com/2022/02/21/politics/un-russia-ukraine-meeting/index.html')
      console.log('Related Article page has loaded successfully');
    else console.log('Related Article page has not loaded successfully')

  });

    



});    


        

        

        

        
      
   

        


      
        






    






    