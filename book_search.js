/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    for (let i = 0; i < scannedTextObj.length; i++) {
        let currentBook = scannedTextObj[i]
        let currentISBN = currentBook["ISBN"];
        let currentContent = currentBook["Content"]
        for (let j = 0; j < currentContent.length; j++) {
            currentContentEntry = currentContent[j];
            if (currentContentEntry["Text"].includes(` ${searchTerm} `)) {
                let hasItDict = { "ISBN": currentISBN, "Page": currentContentEntry["Page"], "Line": currentContentEntry["Line"] }
                console.log(hasItDict);
                result["Results"].push(hasItDict);
            }
        }
    }
    return result;
}

// FOR TESTING .PUSH()
// var result = {
//     "SearchTerm": "the",
//     "Results": []
// };

// let hasItDict = { "ISBN": "8484848484", "Page": 5, "Line": 3 }
// console.log(hasItDict);
// result["Results"].push(hasItDict);
// console.log(result);

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    }
]


const greatGatsbyIn =
    // the overarching object is an array because of the [] brackets. omg it is a list for multiple book objects!
    [
        // inside the array is a dictionary {} with key values pairs. the first two pairs are string to string
        {
            "Title": "The Great Gatsby",
            "ISBN": "9780333791035",
            // the value for the key content is an array. I didn't know you could do string:string and string:array in the same object! you learn something new everyday
            "Content": [
                // inside of the content array is another {} dictionary with string:string key value pairs
                {
                    "Page": 1,
                    "Line": 1,
                    "Text": "In my younger and more vulnerable years"
                },
                {
                    "Page": 1,
                    "Line": 2,
                    "Text": "my father gave me some advice that"
                },
                {
                    "Page": 1,
                    "Line": 3,
                    "Text": "I've been turning over in my mind ever since."
                }
                // end of all of the content objects 
            ]
            // end of content array
        }
        // end of book object
    ]
// end of whole thing 



const multipleBooks =
    [
        {
            "Title": "Slaughterhouse-Five",
            "ISBN": "9780224618014",
            "Content": [
                {
                    "Page": 30,
                    "Line": 50,
                    "Text": "God grant me that serenity to accept"
                },
                {
                    "Page": 30,
                    "Line": 51,
                    "Text": "that things I cannot change"
                },
            ]
        },
        {
            "Title": "The Great Gatsby",
            "ISBN": "9780333791035",
            "Content": [
                {
                    "Page": 1,
                    "Line": 1,
                    "Text": "In my younger and more vulnerable years"
                },
                {
                    "Page": 1,
                    "Line": 2,
                    "Text": "my father gave me some advice that"
                },
                {
                    "Page": 1,
                    "Line": 3,
                    "Text": "I've been turning over in my mind ever since."
                }
            ]
        },
        {
            "Title": "Beloved",
            "ISBN": "9780330305372",
            "Content": [
                {
                    "Page": 5,
                    "Line": 40,
                    "Text": "Counting that on stillness of me own soul"
                },
            ]
        }
    ]


const multipleBooksOut =
{
    "SearchTerm": "me",
    "Results": [
        {
            "ISBN": "9780224618014",
            "Page": 30,
            "Line": 50
        },
        {
            "ISBN": "9780333791035",
            "Page": 1,
            "Line": 2
        },
        {
            "ISBN": "9780330305372",
            "Page": 5,
            "Line": 40
        }

    ]
}
// end of whole thing 
const greatGatsbyOutNegative =
//output is an object not an array
{
    "SearchTerm": "the",
    // results is an array with an object inside
    "Results": [
    ]
}


const greatGatsbyOutPositive =
{
    "SearchTerm": "younger",
    "Results": [
        {
            "ISBN": "9780333791035",
            "Page": 1,
            "Line": 1
        }
    ]
}

const greatGatsbyOutCaseSensitive =
{
    "SearchTerm": "Younger",
    "Results": [
    ]
}


/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

const gatsbyPositiveTest = findSearchTermInBooks("younger", greatGatsbyIn);
if (JSON.stringify(greatGatsbyOutPositive) == JSON.stringify(gatsbyPositiveTest)) {
    console.log("PASS: Test 3, Positive match");
} else {
    console.log("FAIL: Test 3, Positive match");
    console.log("Expected:", greatGatsbyOutPositive);
    console.log("Received:", gatsbyPositiveTest);
}

const gatsbyNegativeTest = findSearchTermInBooks("the", greatGatsbyIn);
if (JSON.stringify(greatGatsbyOutNegative) == JSON.stringify(gatsbyNegativeTest)) {
    console.log("PASS: Test 4, Negative match");
} else {
    console.log("FAIL: Test 4, Negative match");
    console.log("Expected:", greatGatsbyOutNegative);
    console.log("Received:", gatsbyNegativeTest);
}

const gatsbyCaseSensitiveTest = findSearchTermInBooks("Younger", greatGatsbyIn);
if (JSON.stringify(greatGatsbyOutCaseSensitive) == JSON.stringify(gatsbyCaseSensitiveTest)) {
    console.log("PASS: Test 5, Case Sensitive");
} else {
    console.log("FAIL: Test 5, Case Sensitive");
    console.log("Expected:", greatGatsbyOutCaseSensitive);
    console.log("Received:", gatsbyCaseSensitiveTest);
}


const multipleBooksTest = findSearchTermInBooks("me", multipleBooks);
if (JSON.stringify(multipleBooksOut) == JSON.stringify(multipleBooksTest)) {
    console.log("PASS: Test 6, Multiple Books");
} else {
    console.log("FAIL: Test 5, Multiple Books");
    console.log("Expected:", multipleBooksOut);
    console.log("Received:", multipleBooksTest);
}
