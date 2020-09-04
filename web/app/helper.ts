
export function getTotalCookTime(prepTime : number, cookTime : number) : string {
    let totalTime : number = prepTime + cookTime;
    
    return getTime(totalTime);
}

/**
 * Transform a given time in minutes to somethings like "1h50min"
 * @param time time in minutes
 */
export function getTime(time : number) : string {

    if(time < 60) return `${time}min`;

    let hours : number = Math.round(time / 60); // force number without decimal 
    let minutes : number = time % 60;

    if(minutes === 0) return `${hours}h`;

    return `${hours}h${minutes}min`;

 }

/**
 * Define the number of ustensil first display on the page, depending of the size screen
 */
 export function getUstensilLimit(isMediumScreen: boolean, isSmallScreen: boolean) : number
 {
    if(isSmallScreen === true) return 1;

    if(isMediumScreen === true) return 3;

    return 5;
 }