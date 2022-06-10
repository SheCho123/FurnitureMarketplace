
class Sign_upScreen extends Screen {
    static Name = 'Sign_up screen'
    static Id = 'sign_up-screen';
    static Template = '';

    constructor(){
        super();
    }

    SwitchTo(){
        let myElem = document.querySelector('#SwitchToLogIn');
        console.log(myElem);
        myElem.addEventListener('click', ()=>{
            Navigator.navigate("log_in");
        });
    }
}

app.screens['sign_up'] = Sign_upScreen;
