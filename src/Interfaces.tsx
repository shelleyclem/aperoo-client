

export interface UserInfo {
    id: number | undefined,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    role: string,
}

export interface DrinkInfo {
    id: number,
    drinkName: string,
    containsAlcohol: boolean,
    mainSpirit: string,
    ingredients: string,
    servingGlassType: string,
    garnish: string,
    notes: string,
    username: string,
    date: string,
}

export interface BarReviewInfo {
    id: number,
    barName: string,
    wineListRating: number,
    cocktailRating: number,
    foodRating: number,
    atmosphereRating: number,
    outdoorSeating: boolean,
    zipcode: number,
    notes:string,
    username: string,
    date: string
}
