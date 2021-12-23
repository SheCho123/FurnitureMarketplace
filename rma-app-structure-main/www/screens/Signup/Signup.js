
class Signup extends Screen {
    static Name = 'Signup screen'
    static Id = 'Signup-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        let myElem = document.querySelector('#signInButtonId');
        let yourElem = document.querySelector('#registerInSignUp');
        let hisElem = document.querySelector('#forgotPassId');

        hisElem.addEventListener('click', () => {
            Navigator.navigate("ForgotPassword");
        })

        yourElem.addEventListener('click', () => {
            Navigator.navigate("Register");
        })

        myElem.addEventListener('click', () => {
            var userName = document.getElementById('userNameInputFieldId');
            var passWord = document.getElementById('passwordInputFieldId');
            var wrapper1 = document.getElementById('usernameWrapper');
            var wrapper2 = document.getElementById('passwordWrapper');
            var hashedPass = "";

            userName.addEventListener('input', () => {
                wrapper1.classList.remove('redBorder')
            })

            passWord.addEventListener('input', () => {
                wrapper2.classList.remove('redBorder')
            })

            for(let i = 0; i < passWord.value.length; i++)
                hashedPass+=passWord.value[i]+i;

            for(let i = 0; i < dataOfJason.usernames.length;i++){
                if(userName.value == dataOfJason.usernames[i] && hashedPass == dataOfJason.hashedPasses[i])
                Navigator.navigate("MainPage");
                if(userName.value != dataOfJason.usernames[i] && i == dataOfJason.usernames.length-1)
                    wrapper1.classList.add('redBorder');
                if(hashedPass != dataOfJason.hashedPasses[i] && i == dataOfJason.hashedPasses.length-1)
                wrapper2.classList.add('redBorder');
            }
        });
    }

}

app.screens['Signup'] = Signup;

