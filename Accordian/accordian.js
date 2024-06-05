let Main=document.getElementById("Main");


const frequentAskQuestion=[{
    id:1,
    ques:"Will react recent topics will be coverd?",
    Ans:"Yes! whenever React-19 releases we will be updating the course with the required topics, that will be released with React-191."
},{
    id:2,
    ques:"Will react recent topics will be coverd2?",
    Ans:"Yes! whenever React-19 releases we will be updating the course with the required topics, that will be released with React-192."

},{
    id:3,
    ques:"Will react recent topics will be coverd3?",
    Ans:"Yes! whenever React-19 releases we will be updating the course with the required topics, that will be released with React-193."
}]

let allQuestion=()=>{
    return Main.innerHTML= frequentAskQuestion.map((x)=>{
        return `<div class="child-container" id="childDiv">
        <p>${x.ques}</p>
        <i class="bi bi-arrow-up-circle" id="ArrowUp-${x.id}" onclick="showAnswer(${x.id})"></i>
        <i class="bi bi-arrow-down-circle" id="ArrowDown-${x.id}"onclick="showAnswer(${x.id})"></i>
        <div class="hor-line" id="hr-${x.id}"></div>
        <p class="answer" id="answer-${x.id}" onclick="showAnswer(${x.id})">${x.Ans}</p>
        
        
    </div>`
    }).join("");
};
allQuestion();
let showAnswer=(id)=>{
    let arrowUp=document.getElementById(`ArrowUp-${id}`);
    let arrowDown=document.getElementById(`ArrowDown-${id}`);
    let answer=document.getElementById(`answer-${id}`);
    let hr = document.getElementById(`hr-${id}`);
    if (answer.style.display === 'none'|| answer.style.display === '') {
        answer.style.display = 'block';
        hr.style.display = 'block';
        arrowDown.style.display = 'inline';
        arrowUp.style.display = 'none';
       
    } else {
        answer.style.display = 'none';
        hr.style.display = 'none';
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'inline';
    }

}