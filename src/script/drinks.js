import heinikenImg from "@/assets/heiniken.png"

const drinks = {
    vinhos: [
        { nome: "Chardonnay", ml: "750ml", src: heinikenImg, price : "14,00" },
        { nome: "Cabernet Sauvignon", ml: "750ml", src: heinikenImg, price : "14,00" },
        { nome: "Merlot", ml: "750ml", src: heinikenImg, price : "14,00" },
        { nome: "Pinot Noir", ml: "750ml", src: heinikenImg, price : "14,00" },
        { nome: "Sauvignon Blanc", ml: "750ml", src: heinikenImg, price : "14,00" },
        { nome: "Syrah", ml: "750ml", src: heinikenImg, price : "14,00" },
        { nome: "Zinfandel", ml: "750ml", src: heinikenImg, price : "14,00" },
        { nome: "Riesling", ml: "750ml", src: heinikenImg, price : "14,00" }
    ],
    cervejas: [
        { nome: "Heineken", ml: "600ml", src: heinikenImg, price : "14,00" },
        { nome: "Budweiser", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Corona", ml: "330ml", src: heinikenImg, price : "14,00" },
        { nome: "Stella Artois", ml: "330ml", src: heinikenImg, price : "14,00" },
        { nome: "Beck's", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Kronenbourg", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Carlsberg", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Bud Light", ml: "355ml", src: heinikenImg, price : "14,00" }
    ],
    chopes: [
        { nome: "Chopp Brahma", ml: "300ml", src: heinikenImg, price : "14,00" },
        { nome: "Chopp Skol", ml: "300ml", src: "/assets/cheiniken.png", price : "14,00" },
        { nome: "Chopp Antarctica", ml: "300ml", src: heinikenImg, price : "14,00" },
        { nome: "Chopp Eisenbahn", ml: "300ml", src: heinikenImg, price : "14,00" },
        { nome: "Chopp Devassa", ml: "300ml", src: heinikenImg, price : "14,00" },
        { nome: "Chopp Original", ml: "300ml", src: heinikenImg, price : "14,00" },
        { nome: "Chopp Amstel", ml: "300ml", src: heinikenImg, price : "14,00" },
        { nome: "Chopp Bohemia", ml: "300ml", src: heinikenImg, price : "14,00" }
    ],
    refrigerantes: [
        { nome: "Coca-Cola", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Pepsi", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Fanta", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Sprite", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Guaraná Antarctica", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Schweppes", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Tonic Water", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "7 Up", ml: "500ml", src: heinikenImg, price : "14,00" }
    ],
    destilados: [
        { nome: "Whisky Johnnie Walker", ml: "700ml", src: heinikenImg, price : "14,00" },
        { nome: "Vodka Absolut", ml: "700ml", src: heinikenImg, price : "14,00" },
        { nome: "Rum Bacardi", ml: "700ml", src: heinikenImg, price : "14,00" },
        { nome: "Gin Beefeater", ml: "700ml", src: heinikenImg, price : "14,00" },
        { nome: "Tequila Jose Cuervo", ml: "700ml", src: heinikenImg, price : "14,00" },
        { nome: "Cachaça 51", ml: "700ml", src: heinikenImg, price : "14,00" },
        { nome: "Brandy Hennessy", ml: "700ml", src: heinikenImg, price : "14,00" },
        { nome: "Absinto", ml: "700ml", src: heinikenImg, price : "14,00" }
    ],
    licores: [
        { nome: "Amaretto Disaronno", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Baileys", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Cointreau", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Kahlúa", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Licor 43", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Grand Marnier", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Sambuca", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Chartreuse", ml: "500ml", src: heinikenImg, price : "14,00" }
    ],
    coqueteis: [
        { nome: "Margarita", ml: "200ml", src: heinikenImg, price : "14,00" },
        { nome: "Mojito", ml: "200ml", src: heinikenImg, price : "14,00" },
        { nome: "Caipirinha", ml: "200ml", src: heinikenImg, price : "14,00" },
        { nome: "Cosmopolitan", ml: "200ml", src: heinikenImg, price : "14,00" },
        { nome: "Martini", ml: "200ml", src: heinikenImg, price : "14,00" },
        { nome: "Old Fashioned", ml: "200ml", src: heinikenImg, price : "14,00" },
        { nome: "Negroni", ml: "200ml", src: heinikenImg, price : "14,00" },
        { nome: "Daiquiri", ml: "200ml", src: heinikenImg, price : "14,00" }
    ],
    sidras: [
        { nome: "Sidra de Maçã", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Sidra de Pêra", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Sidra de Cereja", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Sidra de Laranja", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Sidra de Framboesa", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Sidra de Mirtilo", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Sidra de Ameixa", ml: "500ml", src: heinikenImg, price : "14,00" },
        { nome: "Sidra de Uva", ml: "500ml", src: "/assets/heiniken.png.jpg", price : "14,00" }
    ]
};

export default drinks;
