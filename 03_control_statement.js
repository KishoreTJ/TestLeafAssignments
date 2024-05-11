function launchBrowser(browser){
    if (browser==="chrome") {
        console.log("124");
    }
    else if(browser==="edge")
    {
        console.log("10");
    }
    else if(browser==="safari")
    {
      
        console.log("11.0");
    }
    else{
        return "Unsupported browser"
    }
}
launchBrowser("safari")

function runTests(testtype)
{
    switch(testtype)
    {
        case "smoke":
            return "Smoke testing"
        case "sanity":
            return "Sanity testing"
        case "regression":
            return "Regression testing"
        default:
        return "Smoke tesing"
    }
}
console.log(runTests("regression"));





