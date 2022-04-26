import cnnpage from './cnnpage';
class ThemePage extends cnnpage {
    
    open(){
        super.open('https://www.cnn.com/');
    }
    get headerColor (){
        return $(`#header-nav-container`)
    }
    get usSection (){
        return $(`//a[@title='visit the US section']`)
    }
    get worldSection (){
        return $(`//a[@name='world']`)
    }
    get opinionSection (){
        return $(`//a[@name='opinions']`)
    }
    get businessSection (){
        return $(`//a[@name='business']`)
    }
    get mode1(){
        return $(`//div[@mode='light']`)
    }
    get politicSection (){
        return $(`//a[@title='visit the Politics section']`)
    }
    get healthSection (){
        return $(`//a[@name='health']`)
    }
    get entertainment (){
        return $(`//a[@name='entertainment']`)
    }
    get modesection (){
        return $(`//a[@mode='dark']`)
    }

        
       

}
export default new ThemePage();