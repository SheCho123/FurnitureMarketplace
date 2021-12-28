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
        var account = document.getElementsByClassName('userIcon');
        var s1 = document.getElementById('saleOne');
        var s2 = document.getElementById('saleTwo');
        var s3 = document.getElementById('saleThree');
        var p1 = document.getElementById('popularOne');
        var p2 = document.getElementById('popularTwo');
        var p3 = document.getElementById('popularThree');

        menu[0].addEventListener('change', () => {
            selectedOption = menu[0].options[menu[0].selectedIndex].text;
            Navigator.navigate("RoomPage");
        })
        
        account[0].addEventListener('change', () => {
            if(account[0].options[account[0].selectedIndex].text == "Add Article")
            Navigator.navigate("AddArticle")
        })

        s1.addEventListener('click', () => {
            selectedChild = salesAndPopulars.furniture[0];
            whichOneClicked = 0;
            areTheySalesAndPopulars = true;
            Navigator.navigate('ArticleDetails');
        })
        s2.addEventListener('click', () => {
            selectedChild = salesAndPopulars.furniture[1];
            whichOneClicked = 1;
            areTheySalesAndPopulars = true;
            Navigator.navigate('ArticleDetails');
        })
        s3.addEventListener('click', () => {
            selectedChild = salesAndPopulars.furniture[2];
            whichOneClicked = 2;
            areTheySalesAndPopulars = true;
            Navigator.navigate('ArticleDetails');
        })
        p1.addEventListener('click', () => {
            selectedChild = salesAndPopulars.furniture[3];
            whichOneClicked = 3;
            areTheySalesAndPopulars = true;
            Navigator.navigate('ArticleDetails');
        })
        p2.addEventListener('click', () => {
            selectedChild = salesAndPopulars.furniture[4];
            whichOneClicked = 4;
            areTheySalesAndPopulars = true;
            Navigator.navigate('ArticleDetails');
        })
        p3.addEventListener('click', () => {
            selectedChild = salesAndPopulars.furniture[5];
            whichOneClicked = 5;
            areTheySalesAndPopulars = true;
            Navigator.navigate('ArticleDetails');
        })
    }

}

app.screens['MainPage'] = MainPage;

var areTheySalesAndPopulars = false;
var salesAndPopulars = {
    furniture: [
        {
            "Id": "1",
            "Name": "Yandel Lift Recliner Set",
            "Price": "$399,99",
            "Slika": "/www/assets/images/Placeholder_1.png"
        },
        {
            "Id": "2",
            "Name": "Home Office Vanity Lamps",
            "Price": "$69,99",
            "Slika": "/www/assets/images/Placeholder_2.png"
        },
        {
            "Id": "3",
            "Name": "Wander Rev Recliner Set",
            "Price": "$399,99",
            "Slika": "/www/assets/images/Screenshot_319.png"
        },
        {
            "Id": "4",
            "Name": "Dolante King Upholstered Bed",
            "Price": "$899,99",
            "Slika": "/www/assets/images/Placeholder_3.png",
        },
        {
            "Id": "5",
            "Name": "Coaster Home Entertainment TV",
            "Price": "$159,99",
            "Slika": "/www/assets/images/Placeholder_4.png",
        },
        {
            "Id": "6",
            "Name": "Dolante King Upholstered Decor",
            "Price": "$259,99",
            "Slika": "/www/assets/images/Screenshot_227.png",
        },
    ]
}