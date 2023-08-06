
let questions = [
    {
        question: "Which film has the longest runtime?",
        options: ["Magnolia", "Pi", "Pulp Fiction", "The Lion King"],
        answer: 0
    },
    {
        question: "Who won the Oscar for best supporting actor in 1995?",
        options: ["Anthony Hopkins", "Val Kilmer", "Kevin Spacey" , "Guy Pearce"],
        answer: 2

    },
    {
        question: "Who was the top-billed actor in the 1990s mob epic Goodfellas?",
        options: ["Ray Liotta", "Robert De Niro", "Joe Pesci" , "Lorraine Bracco"],
        answer: 1

    },
    {
        question: "Who co-wrote Pulp Fiction with Director Quentin Tarantino?",
        options: ["Aaron Sorkin", "Todd Solondz", "David Fincher" , "Roger Avary"],
        answer: 3

    },
    {
        question: "Which 90s romantic comedy featured the song 'Kiss Me' by the band Sixpence None The Richer?",
        options: ["Clueless", "She's All That", "American Pie" , "Sixteen Candles"],
        answer: 1
    },
    {
        question: "Which 90s Indie Film featured an ensemble cast including Phillip Seymour Hoffman, Dylan Baker, Jane Adams, Marla Maples, Jon Lovitz and Lara Flynn Boyle?",
        options: ["Happiness", "Natural Born Killers", "Boogie Nights", "Dazed and Confused",],
        answer: 0
    }
    

];

let currentQuestion = 0;
let score = 0;
let answered = false;  

function showQuestion() {
    //let q = questions[currentQuestion];
    let randomQ = questions[Math.floor(Math.random() * questions.length)]
    console.log(randomQ)
  // console.log(questions[Math.floor(Math.random() * questions.length)])

    document.getElementById('question').textContent = randomQ.question;
    //console.log(randomQ.question)
    let options = document.getElementById('options');
    options.innerHTML = '';
    for(let i=0; i<randomQ.options.length; i++) {
        let div = document.createElement('div');
        
        div.textContent = randomQ.options[i];
       // console.log(randomQ.options[i], "the correct answer")
        div.classList.add('option');
        div.onclick = function() {
            if(answered) { return; }  // new
            answered = true;  // new
            document.getElementById('next').disabled = false;
            let feedback = document.getElementById('feedback');
            if(i === randomQ.answer) {
                score++;
                feedback.textContent = "Correct!"; 
            } else {
                feedback.textContent = "Incorrect. The correct answer was: " + randomQ.options[randomQ.answer]; 
            }
        };
        options.appendChild(div);
    }
}

document.getElementById('next').onclick = function() {
    currentQuestion++;
    answered = false;  
    document.getElementById('feedback').textContent = '';  
    if(currentQuestion >= questions.length) {
        document.getElementById('score').textContent = 'Score: ' + score;
    } else {
        showQuestion();
    }
};

showQuestion();
