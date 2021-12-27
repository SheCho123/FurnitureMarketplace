class ForgotPassword_Screen extends Screen {
    static Name = 'ForgotPassword screen'
    static Id = 'ForgotPassword-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        //VERIFICATION CODE SENDING HERE!!!
    }

}

app.screens['ForgotPassword'] = ForgotPassword_Screen;