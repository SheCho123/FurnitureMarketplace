class ArticleDetails extends Screen {
    static Name = 'ArticleDetails screen'
    static Id = 'ArticleDetails-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        var picture = document.getElementsByClassName('shownPicture');
        var firstDot = document.getElementById('firstPageDot');
        var secondDot = document.getElementById('secondPageDot');
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
                firstDot.classList.remove('differentColor')
                secondDot.classList.add('differentColor')
                desc.innerHTML=` <br>
                <br>
                Yellow clever velvet features low arms 
                with scatter cushions and smooth wooden white legs.`;
            }
        })

        secondDot.addEventListener('click',() => {
            if(firstDot.classList.contains('differentColor'))
            return;
            else{
                secondDot.classList.remove('differentColor')
                firstDot.classList.add('differentColor')
                //down[0].classList.add('hiddenVery')
                desc.innerHTML=`Article ID: ${outerOrder.furniture[selectedChild-1].Id} <br>
                Name: Yellow Velvet Sofa <br>
                Price: $ 𝟷,𝟸𝟿𝟺 <br>
                Condition: Factory New <br>
                Manufacturer: SheCho Inc. <br>`;
                priceBig.innerHTML="";
            }
        })
        picture[0].src = ""
        picture[0].src = `${outerOrder.furniture[selectedChild-1].Slika}`
    }

}
app.screens['ArticleDetails'] = ArticleDetails;
