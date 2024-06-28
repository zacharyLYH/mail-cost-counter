import { countriesList } from "./config.js";
/*
This file contains all shipping cost calculation logic
*/

/*
To calculate deliveryTypeFactor, we simply get the number of characters in the deliveryType. 
For instance, if deliveryType = "express", then the deliveryTypeFactor = 7, since the word "express" has 7 characters. Include spaces.
Hint: Use the `.length()` method to get the length of the string.
*/
function deliveryTypeFactor(deliveryType) {
    //WIP
    return 0;
}

/*
These are the only places we ship to and from: ["my", "sg", "aus", "uk", "usa", "cn", "phi"]
To calculate the distanceFactor, we get the difference of the index positions. Return that difference.

For example: 
- From = "my"
- To = "usa"
distanceFactor = 4-0 = 4 
This is because USA is in the 4th position while MY is in the 0th position in the array

- From = "phi"
- To = "sg"
distanceFactor = 6-1 = 5
This is because PHI is in the 6th position while SG is in the 1st position of the array
*/
function distanceFactor(from, to) {
    //WIP
    const countries = countriesList;
    return 0;
}

/*
If the package type is a letter, then the resulting packageTypeAndWeightFactor is just the weight/10 of the letter.
If the package type is a parcel, then the resulting packageTypeAndWeightFactor is 1.5*(weight/10) of the parcel.

For example,
Letter, 100grams, packageTypeAndWeightFactor = 100/10 = 10
Parcel, 1000grams, packageTypeAndWeightFactor = 1.5*(1000/10) = 1.1*100 = 110
*/
function packageTypeAndWeightFactor(packageType, weight) {
    //WIP
    return 0;
}

/*
Tax cost only depends on the country delivering from. Return the baseCost*taxPercentage (the tax amount only)
Tax percentages:
"my": 5%
"sg", "aus": 6%
"usa": 1%
"uk", "cn", "phi": 2%
*/
function calculateTax(baseCost, deliveryFrom) {
    //WIP
    return 0;
}

/*
The calculation consists of taking into account :
-  packageType
-  itemWeight
-  deliveryFrom
-  deliveryTo
-  deliveryType

Every possible value(s) for the variables listed above has a "Factor Number". A "Factor Number" is a number used to denote how "hard" it is to ship this package. Incidentally, this factor number will also be used to calculate the total cost of shipping.

The total base cost of shipping shall be the simple multiplication of these values.

The total tax cost of shipping shall be separately computed, and the final cost shall be the sum of the base cost and tax amount.

For example, let the "Factor Number" be as such:
-  packageType: 1
-  itemWeight: 4
-  deliveryFrom, To: 3
-  deliveryType: 5
The base cost shall be 1*4*3*5 = 60
Lets provide an arbitrary tax amount of 10, then the final cost shall be 60+10, which is what this function should return.

This function should return the base cost, tax cost, and final amount.
*/
function calculateCosts(
    packageType,
    itemWeight,
    deliveryFrom,
    deliveryTo,
    deliveryType
) {
    //WIP
    const baseCost = 0;
    const taxAmount = calculateTax(baseCost, deliveryFrom);
    const finalAmount = 0;
    return {
        baseCost,
        taxAmount,
        finalAmount,
    };
}

export default function calculateMailingCosts(
    packageType,
    itemWeight,
    deliveryFrom,
    deliveryTo,
    deliveryType
) {
    return calculateCosts(
        packageType,
        itemWeight,
        deliveryFrom,
        deliveryTo,
        deliveryType
    );
}
