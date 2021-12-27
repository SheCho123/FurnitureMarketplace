var selectedOption;

class MainPage extends Screen {
    static Name = 'MainPage screen'
    static Id = 'MainPage-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        var menu = document.getElementsByClassName('menuIcon');
        menu[0].addEventListener('change', () => {
            selectedOption = menu[0].options[menu[0].selectedIndex].text;
            Navigator.navigate("RoomPage");
        })
    }

}

app.screens['MainPage'] = MainPage;
