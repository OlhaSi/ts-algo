function greet(person, date) {
    console.log("Hello 222 " + person + ", today is " + (date === null || date === void 0 ? void 0 : date.toDateString()) + "!");
}
greet("Maddison", new Date());
