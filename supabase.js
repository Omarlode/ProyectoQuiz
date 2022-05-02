const { createClient } = supabase;

const mySupabase = createClient(
  "https://kvgxsrvdnemtooecqvnu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2Z3hzcnZkbmVtdG9vZWNxdm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE0ODI4MjUsImV4cCI6MTk2NzA1ODgyNX0.JGEWmvd8q5InCfWgT-lfyUlDo0hSbHMnqBDsTHhYs7c"
);

let currentP = 0; //posicion actual del array
let allQuestions;
async function loadData() {
  const { data, error } = await mySupabase.from("questions").select();
  //console.log(data);
  //console.log(error);
  allQuestions = data;
  setQuestion();
}

function setQuestion() {
  document.getElementById("h1").innerText = allQuestions[currentP].title;

  let answers = allQuestions[currentP].answers;
  let result = "";

  answers.forEach((element, index) => {
    let button =
      `<button type="button" class="btn btn-outline-primary">` +
      element +
      `</button>`;
    result += button;
    //console.log(element);
    //console.log(index);
  });
  document.getElementById("myAnswers").innerHTML = result;
}
function nextQuestion() {
  console.log("dale!!");
  currentP += 1;
  setQuestion();
}

loadData();
