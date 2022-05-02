const { createClient } = supabase;

const mySupabase = createClient(
  "https://kvgxsrvdnemtooecqvnu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2Z3hzcnZkbmVtdG9vZWNxdm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE0ODI4MjUsImV4cCI6MTk2NzA1ODgyNX0.JGEWmvd8q5InCfWgT-lfyUlDo0hSbHMnqBDsTHhYs7c"
);

let currentP = 2; //posicion actual del array

async function loadData() {
  const { data, error } = await mySupabase.from("questions").select();
  //console.log(data);
  //console.log(error);

  document.getElementById("h1").innerText = data[currentP].title;

  let answers = data[currentP].answers;
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

loadData();
