//GET TO DOM ELEMENTS
const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    pcResult = document.querySelector(".pc_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

console.log(gameContainer, userResult, pcResult, result, optionImages);

//LOOP THROUGH EACH OPTION IMAGE ELEMENT
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = pcResult.src = "img/rock.png";
        result.textContent = "Ready..";

        //LOOP THROUGH EACH OPTION IMAGE AGAIN
        optionImages.forEach((image2, index2) => {
            //IF THE CURRENT INDEX DOESN'T MATCH THE CLICKED INDEX
            //REMOVE THE "active" CLASS FROM THE OTHER OPTION IMAGES
            console.log(index, index2);
            index !== index2 && image.classList.remove("active");
        });

        gameContainer.classList.add("start");

        //SET A TIMEOUT TO DELAY THE RESULT CALCULATION
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            //GET THE SOURCE OF THE CLICKED OPTION IMAGE
            let imageSrc = e.target.querySelector("img").src;
            console.log(imageSrc);

            //SET USER IMG TO THE CLICKED OPTION IMG
            userResult.src = imageSrc;

            //GENERATE A RANDOM NUMBER BETWEEN 0 AND 2
            let randomNumber = Math.floor(Math.random() * 3);

            //CREATE AN ARRAY OF PC IMG OPTIONS
            let pcImages = [
                "img/rock.png",
                "img/paper.png",
                "img/scissors.png",
            ];
            pcResult.src = pcImages[randomNumber];

            //ASSIGN A LETTER VALUE TO THE PC OPTION
            let pcValue = ["R", "P", "S"][randomNumber];
            //ASSIGN A LETTER VALUE TO THE CLICKED OPTIONr
            let userValue = ["R", "P", "S"][index];

            //CREATE AN OBJECT WITH ALL POSSIBLE OUTCOMES
            let outcomes = {
                RR: "DRAW",
                RP: "PC",
                RS: "YOU",
                PP: "DRAW",
                PR: "YOU",
                PS: "PC",
                SS: "DRAW",
                SR: "PC",
                SP: "YOU",
            };

            //LOOK UP THE OUTCOME VALUE BASED ON USER AND PC OPTIONS
            let outComeValue = outcomes[userValue + pcValue];
            console.log(outComeValue);

            //DISPLAY THE RESULT
            result.textContent =
                userValue === pcValue ? "Match Draw" : `${outComeValue} Won!`;
        }, 2500);
    });
});
