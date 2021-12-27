class RoomPage extends Screen {
    static Name = 'RoomPage screen'
    static Id = 'RoomPage-screen';
    static Template = '';

    constructor(){    
        super();
    }
    
    SwitchTo(){
        this.generateArticles(articles);
        this.sliderFunction();
        var menu = document.getElementsByClassName('menuIcon');
        var sortBy = document.getElementsByClassName('sortBy');
        var types = document.querySelectorAll('.categories');

        document.getElementById('nameOfRoom').innerHTML = `${selectedOption}`;
        menu[0].addEventListener('change', () => {
            selectedOption = menu[0].options[menu[0].selectedIndex].text;
            Navigator.navigate('RoomPage');
        })
        sortBy[0].addEventListener('change', () => {
            this.sortByOption(sortBy[0].options[sortBy[0].selectedIndex].text)
        })
        types.forEach(ele => {
            ele.addEventListener(('click'), ()=>{
                types.forEach(element => {
                    element.classList.remove('categoriesActive');
                });
                ele.classList.add('categoriesActive');
            })
        });
    
    }

 
    sortByOption(optionChosen){
        var newOrder = articles;
        var buffer;
        for(let i=0;i<newOrder.furniture.length;i++){
            if(newOrder.furniture[i].Price[0]=='$')
            newOrder.furniture[i].Price=newOrder.furniture[i].Price.slice(1);
            newOrder.furniture[i].Price=newOrder.furniture[i].Price.replace(',', '.');
        }
        if(optionChosen=="Price:High-Low"){
            for(let j=0; j<=newOrder.furniture.length;j++){
                for(let i=0; i<=newOrder.furniture.length;i++){
                    if(i+1==newOrder.furniture.length)
                        break; 
                    if(Number(newOrder.furniture[i+1].Price)>Number(newOrder.furniture[i].Price)){
                        buffer = newOrder.furniture[i];
                        newOrder.furniture[i]=newOrder.furniture[i+1];
                        newOrder.furniture[i+1]=buffer;
                    }
            }
        }
        this.generateArticles(newOrder);
        }

        if(optionChosen=="Price:Low-High"){
            for(let j=0; j<=newOrder.furniture.length;j++){
                for(let i=0; i<=newOrder.furniture.length;i++){
                    if(i+1==newOrder.furniture.length)
                        break; 
                    if(Number(newOrder.furniture[i+1].Price)<Number(newOrder.furniture[i].Price)){
                        buffer = newOrder.furniture[i];
                        newOrder.furniture[i]=newOrder.furniture[i+1];
                        newOrder.furniture[i+1]=buffer;
                    }
            }
        }
        this.generateArticles(newOrder);
        }

        if(optionChosen=="Name"){
            for(let j=0; j<=newOrder.furniture.length;j++){
                for(let i=0; i<=newOrder.furniture.length;i++){
                    if(i+1==newOrder.furniture.length)
                        break;
                    if(newOrder.furniture[i+1].Name<newOrder.furniture[i].Name){
                        buffer = newOrder.furniture[i];
                        newOrder.furniture[i]=newOrder.furniture[i+1];
                        newOrder.furniture[i+1]=buffer;
                    }
            }
        }
        this.generateArticles(newOrder);
        }
    
    }

    generateArticles(optionPassed){
        outerOrder = optionPassed;
        for(let i=0;i<optionPassed.furniture.length;i++){
            if(optionPassed.furniture[i].Price[0]!='$')
            optionPassed.furniture[i].Price=`$${optionPassed.furniture[i].Price}`;
            optionPassed.furniture[i].Price=optionPassed.furniture[i].Price.replace('.', ',');
        }
        const mainDiv = document.getElementById('velikiVELIKIdiv');
        mainDiv.innerHTML = "";
        for(let i=1, k=0; i<=optionPassed.furniture.length/2; i++){
        var rowDiv = document.createElement('div');
        rowDiv.classList.add('divZaOveDole');
        rowDiv.id = "oviDrugiDole"
        mainDiv.appendChild(rowDiv);

        for(let j=0; j<2; j++, k++){
            var windowDiv = document.createElement('div');
            var image = document.createElement('img');
            var infoContainer = document.createElement('div')
            var nameOf = document.createElement('div');
            var priceOf = document.createElement('div');
 
            windowDiv.classList.add('furnitureWindow')
            image.classList.add('Images');
            image.src = optionPassed.furniture[k].Slika;
            image.alt = "No Picture Found!"
            infoContainer.classList.add('ponestaloMiJeImena');
            nameOf.classList.add('imeFurnitura');
            nameOf.innerHTML = optionPassed.furniture[k].Name;
            priceOf.classList.add('cijenaFurnitura');
            priceOf.innerHTML = optionPassed.furniture[k].Price;

            rowDiv.append(windowDiv);
            windowDiv.append(image);
            windowDiv.append(infoContainer);
            infoContainer.append(nameOf);
            infoContainer.append(priceOf);  
        }
    }
    var windowsInner = document.querySelectorAll('.furnitureWindow')
    for(let i=0;i<windowsInner.length;i++){
        windowsInner[i].addEventListener('click', () => {
            selectedChild = outerOrder.furniture[i].Id
            Navigator.navigate('ArticleDetails')
        })} 
    }

    sliderFunction() {
        const slider = document.querySelector('.containerZaKategorije');
        let isDown = false;
        let startX;
        let scrollLeft;
        
        slider.addEventListener('mousedown', (e) => {
          isDown = true;
          slider.classList.add('active');
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
          if(!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 3; //scroll-fast
          slider.scrollLeft = scrollLeft - walk;
        });
    }
}

app.screens['RoomPage'] = RoomPage;
var selectedChild;
var outerOrder = articles
var windows = [];
var articles = {
    "furniture":[
      {
        "Id": "1",
        "Name": "White Wood Dining Set",
        "Price": "$899,99",
        "Slika": "/www/assets/images/Screenshot_225.png",
        "Type": "Sofa"
      },
      {
        "Id": "2",
        "Name": "Coaster Home Entertainment TV",
        "Price": "$159,99",
        "Slika": "/www/assets/images/Screenshot_226.png",
        "Type": "Electronics"
    },
    {
        "Id": "3",
        "Name": "Dolante King Upholstered Bed",
        "Price": "$899,99",
        "Slika": "/www/assets/images/Screenshot_227.png",
        "Type": "Sets"
    },
    {
        "Id": "4",
        "Name": "Grey Massage Chair",
        "Price": "$159,99",
        "Slika": "/www/assets/images/Screenshot_224.png",
        "Type": "Chair"
    },
    {
        "Id": "5",
        "Name": "Abstract Black Wood Decor",
        "Price": "$699,99",
        "Slika": "/www/assets/images/Screenshot_228.png",
        "Type": "Sets"
    },
    {
        "Id": "6",
        "Name": "Elongated Brown Relaxation Chair",
        "Price": "$159,99",
        "Slika": "/www/assets/images/Screenshot_229.png",
        "Type": "Chair"
    },
    {
        "Id": "7",
        "Name": "Elongated Black Relaxation Chair",
        "Price": "$159,99",
        "Slika": "/www/assets/images/Screenshot_230.png",
        "Type": "Chair"
    },
    {
        "Id": "8",
        "Name": "La Caste White Wood Board",
        "Price": "$449,99",
        "Slika": "/www/assets/images/Screenshot_231.png",
        "Type": "Desk"
    },
    {
        "Id": "9",
        "Name": "Spruce Living Room Decor",
        "Price": "$599,99",
        "Slika": "/www/assets/images/Screenshot_232.png",
        "Type": "Sets"
    },
    {
        "Id": "10",
        "Name": "Blackwood Cupboard",
        "Price": "$259,99",
        "Slika": "/www/assets/images/Screenshot_233.png",
        "Type": "Electronics"
    },
    {
        "Id": "11",
        "Name": "White Lion Mane Chair",
        "Price": "$199,99",
        "Slika": "/www/assets/images/Screenshot_234.png",
        "Type": "Fireplaces"
    },
    {
        "Id": "12",
        "Name": "Beach Life Chair",
        "Price": "$49,99",
        "Slika": "/www/assets/images/Screenshot_235.png",
        "Type": "Chair"
    },
    {
        "Id": "13",
        "Name": "Black Futon Chair",
        "Price": "$229,99",
        "Slika": "/www/assets/images/Screenshot_236.png",
        "Type": "Desk"
    },
    {
        "Id": "14",
        "Name": "Brown Living Room Couch Set",
        "Price": "$1299,99",
        "Slika": "/www/assets/images/Screenshot_237.png",
        "Type": "Sets"
    },
    {
        "Id": "15",
        "Name": "White Futon Chair",
        "Price": "$229,99",
        "Slika": "/www/assets/images/Screenshot_238.png",
        "Type": "Sets"
    },
    {
        "Id": "16",
        "Name": "Dark Coral Extended Chair",
        "Price": "$159,99",
        "Slika": "/www/assets/images/Screenshot_239.png",
        "Type": "Sofa"
    }]
}