class Navigator{
    static CURRENT_SCREEN = null;
    static CURRENT_SCREEN_INSTANCE = null;
    static HISTORY = [];
    static TRACK_HISTORY = [];

    static async navigate(screen_name){
        let name = screen_name.split('/')[screen_name.split('/').length-1];
        console.log(name);
        StyleLoader.load_style([`./screens/${screen_name}/${name}.css`]);
        
        Navigator.CURRENT_SCREEN = screen_name;
        Navigator.CURRENT_SCREEN_INSTANCE = app.screens[name].create_dom();
        
        if(Navigator.CURRENT_SCREEN_INSTANCE != null){
            Navigator.HISTORY.push(Navigator.CURRENT_SCREEN_INSTANCE);
        }

        document.querySelector('.app').innerHTML="";

        await document.querySelector('.app').append(Navigator.CURRENT_SCREEN_INSTANCE.dom);
        Navigator.CURRENT_SCREEN_INSTANCE.init();
    }
}
