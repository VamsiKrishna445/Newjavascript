import allureReporter from '@wdio/allure-reporter'
import  SectionPage from  '../pageobjects/section.page'

describe('Verify Legallinks in footer',async () => {
 /* before( function(){
    console.log('beforeEachtitle', this);
    console.log('parent testoutput',  this.test.parent.tests);

});
    beforeEach(function(){
      console.log('beforeEachtitle', this);
      console.log('parent testoutput',  this.test.parent.tests)
    })*/
  
  it ('should open the Legallinks of cnn',async ()  =>{

        await SectionPage.open1()
        await browser.maximizeWindow()
        await SectionPage.terms.scrollIntoView();
        await SectionPage.terms.click()
        let Url1 = browser.getUrl()
        if(Url1='https://www.cnn.com/terms')
          console.log('Terms of use page has loaded successfully');
        else console.log('Terms of use page has not loaded');
        await browser.back();
  });
  /*afterEach(function(){
    console.log('afterEach', this.currentTest.title, this.currentTest.state);
    console.log('afterEachstate',  this.currentTest.state);

  })
  after( function(){

    console.log('afterEach', this.currentTest.title, this.currentTest.state);
    console.log('afterEachstate',  this.currentTest.state);

});*/

 
 /* it('should open the privacypage in CNN',async()=>{       
        await SectionPage.privacy.click()
        let Url2 = browser.getUrl()
        if(Url2='https://www.cnn.com/privacy')
          console.log('Privacy policy page has loaded successfully');
        else console.log('Privacy policy page has not loaded');
        await browser.back()
  });
  afterEach(function(){
    console.log('afterEach', this.currentTest.title, this.currentTest.state);
    console.log('afterEachstate',  this.currentTest.state);
  });*/
  /*it('should open the accessability  in CNN',async()=>{ 
    await SectionPage.access.click()

  })
        await SectionPage.access.click()
        let Url = browser.getUrl()
        if(Url='https://edition.cnn.com/accessibility')
          console.log('Accessibility page has loaded successfully');
        else console.log('Accessibility  page has not loaded');
        await browser.back()
  
  it('should open the aboutUs in CNN',async()=>{   
        await SectionPage.about.click()
        let Url3 = browser.getUrl()
        if(Url3='https://www.cnn.com/about')
          console.log('About us page has loaded successfully');
        else console.log('About us  has not loaded');
        await browser.back()
  });
  it('should open the store in CNN',async()=>{   
        await SectionPage.store.click()
        let Url4 = browser.getUrl()
        if(Url4 ='https://store.cnn.com/')
          console.log('CNNstore page has loaded successfully');
        else console.log('CNNstore of use page has not loaded');
        await browser.back()
  });
  it('should open the newletters in CNN',async()=>{
        await SectionPage.newLetter.click()
        let Url5 = browser.getUrl()
        if(Url5 ='https://www.cnn.com/newsletters')
          console.log('newsletters page has loaded successfully');
        else console.log('newsletters page has not loaded');
        await browser.back()
  })
  it('should open the transcript in CNN',async()=>{   
        await SectionPage.tranScript.click()
        let Url6 = browser.getUrl()
        if(Url6 ='https://transcripts.cnn.com/')
          console.log('Transcripts page has loaded successfully');
        else console.log('Transcripts page has not loaded');
        await browser.back()
  });
  it('should open the License in CNN',async()=>{    
        await SectionPage.License.click()
        let Url7 = browser.getUrl()
        if(Url7 ='https://collection.cnn.com/')
          console.log('License page has loaded successfully');
        else console.log('License page has not loaded');
        await browser.back()
  });
  it('should open the newsource in CNN',async()=>{   
        await SectionPage.newSource.click()
        let Url8 = browser.getUrl()
        if(Url8 ='https://www.cnnnewsource.com/')
          console.log('Newsource page has loaded successfully');
        else console.log('Newsource  page has not loaded');
        await browser.back()
  });
  it('should open the sitemap in CNN',async()=>{  
        await SectionPage.siteMap.click()
        let Url9 = browser.getUrl()
        if(Url9 ='https://edition.cnn.com/sitemap.html')
          console.log('Sitemap page has loaded successfully');
        else console.log('Sitemap  page has not loaded');
        

        
  });*/

    



});