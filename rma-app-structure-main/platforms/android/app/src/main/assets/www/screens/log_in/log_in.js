// const SwitchToSignUp = document.querySelector('#SwitchToSignUp');

class Log_inScreen extends Screen {
    static Name = 'Log_in screen'
    static Id = 'log_in-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        let myElem = document.querySelector('#SwitchToSignUp');
        myElem.addEventListener('click', ()=>{
            Navigator.navigate("sign_up");
        });
    }

}

app.screens['log_in'] = Log_inScreen;

