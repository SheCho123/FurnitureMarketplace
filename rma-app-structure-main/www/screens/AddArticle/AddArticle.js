class AddArticle extends Screen {
    static Name = 'AddArticle screen'
    static Id = 'AddArticle-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        var nameInputId = document.getElementById('nameInput');
        var priceInputId = document.getElementById('priceInput');
        var imageInputId = document.getElementById('imageInput');
        var typeInputId = document.getElementById('typeInput');
        var magicnoDugme = document.getElementById('addArticleButton');
        var numberOfFurniture = articles.furniture.length;
    
        magicnoDugme.addEventListener('click', ()=>{
            priprema.furniture[0].Id=`${numberOfFurniture}`
            priprema.furniture[0].Name=`${nameInputId.value}`
            priprema.furniture[0].Price=`${priceInputId.value}`
            priprema.furniture[0].Slika=`${imageInputId.value}`
            priprema.furniture[0].Type=`${typeInputId.value}`
            articles.furniture[numberOfFurniture] = priprema.furniture[0];
            Navigator.navigate('RoomPage');
        })
    }
}
var priprema = {
    "furniture": [
        {
        "Id": "1",
        "Name": "White Wood Dining Set",
        "Price": "$899,99",
        "Slika": "/www/assets/images/Screenshot_225.png",
        "Type": "Chair"
        }
    ]
}
app.screens['AddArticle'] = AddArticle;