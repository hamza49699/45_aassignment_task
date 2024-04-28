"use strict";
//task 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`this is ${city}, which is located in country ${country} `);
}
describe_city("Texas", "USA");
describe_city("Islamabad");
describe_city("Toronto", "Canada");
