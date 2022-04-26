import SecurePage from '../pageobjects/secure.page';
describe("interaction with web element", function(){

    it("enter value in a filed", function(){
  
      browser.url('https://www.cricbuzz.com/cricket-match/live-scores');
       //const search = $('#twotabsearchtextbox');
      //search.setValue('cricket score');
      browser.setWindowSize(1384, 784);
       browser.pause(50000);
      

    });
});  
it('should change timeout duration for session with long code duration', async () => {
  await browser.setTimeout({
  'pageLoad': 60000,
  'script': 60000,
  });
  // Execute code which takes a long time
  await browser.executeAsync((done) => {
  console.log('Wake me up before you go!');
  setTimeout(done, 59000);
  });
  });