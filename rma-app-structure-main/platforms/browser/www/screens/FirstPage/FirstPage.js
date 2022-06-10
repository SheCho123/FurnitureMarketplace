class FirstPage extends Screen {
    static Name = 'FirstPage screen'
    static Id = 'FirstPage-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        let prviEleme = document.querySelector('#logInButtonId');
        let drugiEleme = document.querySelector('#registerButtonId');
        let treciEleme = document.querySelector('#browseAsGuestId');

        treciEleme.addEventListener('click', ()=>{
            Navigator.navigate("MainPage");
        });

        prviEleme.addEventListener('click', ()=>{
            Navigator.navigate("Signup");
        });
        drugiEleme.addEventListener('click', ()=>{
            Navigator.navigate("Register");
        })
    }
}

app.screens['FirstPage'] = FirstPage;

