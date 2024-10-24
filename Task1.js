const userName = "łukasz";
const userAge = 32;
const likesJavaScript = true;
const userHobby = "czytanie książek";
const userCity = "Łódź";
const correctUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
const userAgeInTenYears = userAge + 10;
const isAdult = userAge >= 18;
const isWarsawCitizen = userCity === "Warszawa";
const likesJSAndIsAdult = isAdult && likesJavaScript;
let message = `Cześć ${correctUserName}. Masz ${userAge} lat. Jesteś ${
  isAdult ? "pełnoletni." : "niepełnoletni."
}`;
if (likesJavaScript) message = `${message} Lubisz JavaScript.`;

if (isWarsawCitizen) message = `${message} Mieszkasz w Warszawie.`;
message = `${message} Twoje hobby to ${userHobby}.`;
