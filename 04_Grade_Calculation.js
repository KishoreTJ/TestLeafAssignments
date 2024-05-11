function Gradecalculation(Grade){
    switch (Grade) {
        case "A":
           console.log("Score more than 90% percentage and  A Grade"); 
            break;
        case "B":
            console.log("Score more than 80% percentage and  B Grade"); 
            break;
        case "C":
            console.log("Score more than 60% percentage and  C Grade"); 
            break;  
        default:
            console.log("Pass Grade"); 
            break;
    }

}
Gradecalculation("A");