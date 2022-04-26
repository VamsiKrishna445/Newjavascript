
import  NewPage from  '../pageobjects/new.page'
describe('verifying cnn website',()=> { 
  before( function(){
    console.log('beforeEachtitle', this);
    console.log('parent testoutput',  this.test.parent.tests);

});
    beforeEach(function(){
      console.log('beforeEachtitle', this);
      console.log('parent testoutput',  this.test.parent.tests)
    })

    it('Should  open the header searchbar of CNN  website', async () => {
      await NewPage.open1();
      await browser.maximizeWindow()
      await NewPage.searchBtn.click()
    });
    it('should verify searchfield is displaying and close the searchbar',async()=>{  
      await NewPage.searchField.isDisplayed();
      await NewPage.searchBtn.click();
      await browser.back();
    })
    afterEach(function(){
      console.log('afterEach', this.currentTest.title, this.currentTest.state);
      console.log('afterEachstate',  this.currentTest.state);

    })
    after( function(){

      console.log('afterEach', this.currentTest.title, this.currentTest.state);
      console.log('afterEachstate',  this.currentTest.state);
  
  });
  
    /*it('should verify searchfield is displaying and close the searchbar',async()=>{  
      await NewPage.searchField.isDisplayed();
      await NewPage.searchBtn.click();
      await browser.back();
    })*/
})      