export class AppConfiguracion {
    //public static URL_SERVIDOR : string = "https://api-maquinaria.herokuapp.com";
    public static URL_SERVIDOR : string = "http://localhost";
    public static URL_PUERTO : string = "8080";
    
    
    public static getURL():string{
        return this.URL_SERVIDOR+":"+this.URL_PUERTO;
    }
}