document.getElementById("joke-btn").addEventListener("click", getJoke);

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke-box").innerHTML = `
        <strong>${data.setup}</strong><br><br>
        ${data.punchline}
      `;
    })
    .catch(() => {
      document.getElementById("joke-box").textContent = "Something wrong";
    });
}
