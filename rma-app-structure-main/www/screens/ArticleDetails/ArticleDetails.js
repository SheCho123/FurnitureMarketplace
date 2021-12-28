class ArticleDetails extends Screen {
    static Name = 'ArticleDetails screen'
    static Id = 'ArticleDetails-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        var picture = document.getElementsByClassName('shownPicture');
        var nameOfArticle = document.getElementsByClassName('articleName');
        var firstDot = document.getElementById('firstPageDot');
        var secondDot = document.getElementById('secondPageDot');
        var priceS = document.getElementById('smol');
        var desc = document.getElementById('des');
        var priceBig = document.getElementById('pri');
        var minus = document.getElementById('Minus')
        var plus = document.getElementById('Plus')
        var br = document.getElementById('brojArtikala')

        minus.addEventListener('click', ()=>{
            let ww = br.textContent = Number(br.textContent)
            if(ww!=0)
            ww--;
            br.textContent=`${ww}`
        })

        plus.addEventListener('click', ()=>{
            let ww = br.textContent = Number(br.textContent)
            ww++;
            br.textContent=`${ww}`
        })

        firstDot.addEventListener('click',() => {
            if(secondDot.classList.contains('differentColor'))
            return;
            else{
                priceS.style = "visibility: visible;";
                firstDot.classList.remove('differentColor')
                secondDot.classList.add('differentColor')
                desc.classList.remove('pomjeriDescriptionUDesno');
                desc.innerHTML=`<br>
                Brown clever velvet features low arms 
                with scatter cushions and smooth wooden brown legs.`;
                priceBig.innerHTML=`${articles.furniture[whichOneClicked].Price}`;
            }
        })

        secondDot.addEventListener('click',() => {
            if(firstDot.classList.contains('differentColor'))
            return;
            else{
                priceS.style = "visibility: hidden;";
                secondDot.classList.remove('differentColor')
                firstDot.classList.add('differentColor')
                desc.innerHTML=`Article ID: ${articles.furniture[whichOneClicked].Id} <br>
                Name: Yellow Velvet Sofa <br>
                Price: $ 𝟷,𝟸𝟿𝟺 <br>
                Condition: Factory New <br>
                Manufacturer: SheCho Inc. <br>`;
                desc.classList.add('pomjeriDescriptionUDesno');
                priceBig.innerHTML="";
            }
        })


        picture[0].src = ""
        nameOfArticle[0].innerHTML = ""
        priceBig.innerHTML = ""
        if(areTheySalesAndPopulars == true)
        for(let i=0;i<salesAndPopulars.furniture.length;i++){
            if(selectedChild.Id==salesAndPopulars.furniture[i].Id){
                picture[0].src = `${salesAndPopulars.furniture[i].Slika}`
                nameOfArticle[0].innerHTML = `${salesAndPopulars.furniture[i].Name}` 
                priceBig.innerHTML = `${salesAndPopulars.furniture[i].Price}`
                areTheySalesAndPopulars = false;
            }
        }
        else
        for(let i=0;i<outerOrder.furniture.length;i++){
            if(selectedChild.Id==outerOrder.furniture[i].Id){
                picture[0].src = `${outerOrder.furniture[i].Slika}`
                nameOfArticle[0].innerHTML = `${outerOrder.furniture[i].Name}` 
                priceBig.innerHTML = `${outerOrder.furniture[i].Price}`
            }}
    }

}
app.screens['ArticleDetails'] = ArticleDetails;
