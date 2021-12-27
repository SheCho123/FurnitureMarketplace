// const SwitchToSignUp = document.querySelector('#SwitchToSignUp');

class Register extends Screen {
    static Name = 'Register screen'
    static Id = 'Register-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        let myElem = document.getElementById('registerButton')
        let yourElem = document.querySelector('#signInInRegister')
        let hisElem = document.querySelector('#forgotPassId')

        hisElem.addEventListener('click', () => {
            Navigator.navigate("ForgotPassword");
        })

        yourElem.addEventListener('click', () => {
            Navigator.navigate("Signup");
        })

        myElem.addEventListener('click', ()=>{
            startHashing();
        });
    }

}

app.screens['Register'] = Register;

