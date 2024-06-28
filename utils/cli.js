import { createInterface } from "readline";
import { countriesList, deliveryTypeList } from "./config.js";

const cliArt = `
 __  __       _ _       _____            _    _____                     _             
|  \/  |     | (_)     / ____|          | |  / ____|                   | |            
| \  / | __ _| |_ ___ | |     ___  _ __ | |_| |     ___  _ __  ___  ___| |_ ___  _ __ 
| |\/| |/ _\` | | / __|| |    / _ \\| '_ \\| __| |    / _ \\| '_ \\/ __|/ _ \\ __/ _ \\| '__|
| |  | | (_| | | \\__ \\| |___| (_) | | | | |_| |___| (_) | | | \\__ \\  __/ || (_) | |   
|_|  |_|\\__,_|_|_|___/ \\_____\\___/|_| |_|\\__|\\_____\\___/|_| |_|___/\\___|\\__\\___/|_|   
`;

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to ask a single question
function askQuestionHelper(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function askQuestion(query, options, disallowedOptions = []) {
    let result = "";
    while (result == "") {
        result = await askQuestionHelper(query);
        if (verifyUserInput(result, options, disallowedOptions)) {
            return result;
        } else {
            result = "";
        }
    }
    return null;
}

// Variables to store user inputs
let userName = "";
let packageType = "";
let itemWeight = "";
let deliveryFrom = "";
let deliveryTo = "";
let deliveryType = "";

// Function to prompt the user and get inputs
async function getUserInput() {
    console.log(cliArt);
    console.log("\n\n");
    console.log(
        "-----------------------------------------------------------------------------"
    );
    console.log(
        "Welcome to Mail Cost Counter! Please answer the prompts in the next few seconds!"
    );
    userName = await askQuestion("What is your name?\n", []);
    console.log("\nDELIVERY ITEM DETAIL:");
    packageType = await askQuestion(
        'Are you mailing a "letter" or a "parcel"? (Case sensitive)\n',
        ["letter", "parcel"]
    );
    itemWeight = await askQuestion("How heavy (grams) is your parcel?\n", [
        "integer",
    ]);
    console.log("\nDELIVERY ORIGIN DETAIL:");
    deliveryFrom = await askQuestion(
        `Where are you delivering from? ${countriesList.map((coun) => coun)}\n`,
        countriesList
    );
    console.log("\nDELIVERY DESTINATION DETAIL:");
    deliveryTo = await askQuestion(
        `Where are you delivering to? ${countriesList.map((coun) => coun)}\n`,
        countriesList,
        [deliveryFrom]
    );
    console.log("\nDELIVERY TYPE:");
    deliveryType = await askQuestion(
        `Would you like ${deliveryTypeList.map((del) => del)}\n`,
        deliveryTypeList
    );
    rl.close();
    return {
        userName,
        packageType,
        itemWeight,
        deliveryFrom,
        deliveryTo,
        deliveryType,
    };
}

/*
userAnswer : string variable
disallowedOptions: an array of disallowed options. return false if userAnswer is a disallowed option
availableOptions : an array of options the user has. return true if userAnswer is an option AND not a disallowed option

This function should check if the userAnswer is any one of the available options. Return true if there is a match. Return false otherwise.
*/
function verifyUserInput(userAnswer, availableOptions, disallowedOptions) {
    if (availableOptions.length == 0) {
        return true;
    }
    if (availableOptions[0] == "integer" && availableOptions.length == 1) {
        return Number.isInteger(Number(userAnswer));
    }
    for (const disallowed of disallowedOptions) {
        if (disallowed == userAnswer) {
            return false;
        }
    }
    for (const options of availableOptions) {
        if (options == userAnswer) {
            return true;
        }
    }
    return false;
}

export default function getDeliveryDetails() {
    return getUserInput();
}
