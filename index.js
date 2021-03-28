let arr = {
    "displayedName": {
        "value": [
            "Профиль маячковый ПВХ 10 мм L3м"
        ],
            "description": "Полное наименование товара для клиента"
    },
    "stock": {
    "stocks": {
        "34": {
            "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
        }
    }
}
}
/*Получаем название товара*/
let productName = arr.displayedName.value;

/*Получаем массив номеров магазинов, в которых есть товары в наличии*/
let stocksArray = arr.stock.stocks["34"];
let arrQuantity = [];

for (let key in stocksArray) {
    let quantity = stocksArray[key];

    if (quantity != 0) {
        arrQuantity.push(key);
    }
}

/*Находим максимальное кол-во товара в регионе и возвращаем кол-во и номер магазина*/
let result;

let checkMax = () => {
    let quantity = [];
    let intervalMax = 0;
    let keysStocks = [];
    let magazine;
    for (let key in stocksArray) {
        quantity.push(stocksArray[key]);
        keysStocks.push(key);
    }

    for (let i = 0; i < quantity.length; i++) {
        if (intervalMax < +quantity[i]) {
            intervalMax = quantity[i];
            magazine = keysStocks[i];
        }
    }
    result = `Максимальное кол-во товара составляет ${intervalMax}шт и находится в магазине номер ${magazine}`;
}
checkMax()


