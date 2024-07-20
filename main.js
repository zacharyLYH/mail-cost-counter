import getDeliveryDetails from "./utils/cli.js";
import calculateMailingCosts from "./utils/calculate.js";

/*
A simple package postage cost calculator, factoring variables such as package type, weight, destination to and from, and delivery speed.

Learning outcome: 
- Functions
- Loops (While & For)
- If
- Variables
- Arithmatic
- Switch case
- Arrays
*/
async function main() {
    try {
        const {
            userName,
            packageType,
            itemWeight,
            deliveryFrom,
            deliveryTo,
            deliveryType,
        } = await getDeliveryDetails();
        // const userName = "lee";
        // const packageType = "package";
        // const itemWeight = 30;
        // const deliveryFrom = "sg";
        // const deliveryTo = "my";
        // const deliveryType = "express";
        const { baseCost, taxAmount, finalAmount } = calculateMailingCosts(
            packageType,
            itemWeight,
            deliveryFrom,
            deliveryTo,
            deliveryType
        );
        printReceipt({
            userName,
            packageType,
            itemWeight,
            deliveryFrom,
            deliveryTo,
            deliveryType,
            baseCost,
            taxAmount,
            finalAmount,
        });
    } catch (error) {
        console.error("Error getting user details:", error);
    }
}

function printReceipt(details) {
    console.log("\n\n");
    console.log("------ Quote ------");
    console.log(
        `Hi ${details.userName}! The following is your generated shipping quote. Please call our helpdesk for more information.`
    );
    console.log("--------------------");
    console.log(`Package Type: ${details.packageType}`);
    console.log(`Item Weight: ${details.itemWeight} grams`);
    console.log(`Delivery From: ${details.deliveryFrom}`);
    console.log(`Delivery To: ${details.deliveryTo}`);
    console.log(`Delivery Type: ${details.deliveryType}`);
    console.log(`--------------------`);
    console.log(`Base Cost: $${details.baseCost.toFixed(2)}`);
    console.log(`Tax Amount: $${details.taxAmount.toFixed(2)}`);
    console.log(`--------------------`);
    console.log(`Final Amount: $${details.finalAmount.toFixed(2)}`);
    console.log("--------------------");
    console.log("Thank you and see you again!");
}

main();
