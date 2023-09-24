class formValidate{
    //Construction values
    minLength:number = 3
    maxLength:number = 100
    format:RegExp
    type:string
    statement:string
    private value: string | number | RegExp

    private required:boolean
    constructor(requirements:{
        minLength?:number,
        maxLength?:number,
        format?:RegExp,
        type:string,
        statements?:string,
        value: string | number| RegExp
    }){
        this.minLength = requirements.minLength
        this.maxLength = requirements.maxLength
        this.format = requirements.format
        this.type = requirements.type
        this.statement = requirements.statements
        this.value = requirements.value
    }

    private emailFormat:RegExp = new RegExp('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
    private zipCodeFormat:RegExp = new RegExp('^\d{5}(?:[-\s]\d{4})?$')
    
    
    private creditCardsCollection:{
        americanExpress:RegExp
        discover:RegExp,
        JCB:RegExp,
        masterCard:RegExp,
        visa:RegExp,
    } = {
        americanExpress:new RegExp('/^3[47][0-9]{13}$/'),
        discover: new RegExp('/^6(?:011|5[0-9]{2})[0-9]{12}$/'),
        JCB: new RegExp('/^(?:2131|1800|35\d{3})\d{11}$/'),
        masterCard: new RegExp('/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/'),
        visa: new RegExp('/^4[0-9]{12}(?:[0-9]{3})?$/')
    }

    public setMinLength = (value:number):void=>{
        this.minLength = value
    }

    public setMaxLength = (value:number):void=>{
        this.maxLength = value
    }

    public validateMinLength = (value:string):boolean=>{
        if(value.length < 3){
            return true
        }else{
            return false
        }
    }

    public validateMaxLength = (value:string):boolean=>{
        if(value.length > 100){
            return true
        }else{
            return false
        }
    }

    public validateEmail = (tag:HTMLInputElement):boolean=>{
        if(this.emailFormat.test(tag.value)){
            return true
        }else{
            return true
        }
    }

}

export default formValidate