/*****

Codecademy project: build a message generator program

*****/

const generateRandomNumber = num => Math.floor(Math.random() * num);

function mixMessages() {
    const sentences = [{weather: ['cloudy', 'sunny', 'windy', 'rainy']},
                       {do : ['play soccer', 'play basketball', 'stay home', 'watch TV']},
                       {eat: ['pizza', 'cheese burger', 'vegetables salad']}];

    let message = '';

    sentences.forEach(sentence => { 
        const [key, values] = Object.entries(sentence)[0];
        const value = values[generateRandomNumber(values.length)];
        switch (key) {
            case 'weather' :
                message = "It's a " + value + " day. ";
                break;
            case 'do' :
                message += "Let's " + value + " and then ";
                break;
            case 'eat' :
                message += "have a " + value + ".";
                break;
        
        }

    });
    return message;
   
};

console.log(mixMessages());
