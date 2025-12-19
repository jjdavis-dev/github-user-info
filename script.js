const defaultUsername = "jjdavis-dev";
const messageDiv = document.getElementById("message");

/* Load GitHub user info + repos */
function loadGitHubUser(username) {
  messageDiv.innerHTML = "";

  // Fetch user info
  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("login").textContent = data.login;
      document.getElementById("repoCount").textContent = data.public_repos;
      document.getElementById("avatar").src = data.avatar_url;
    })
    .catch(error => {
      messageDiv.innerHTML = `
        <div class="alert alert-danger">
          GitHub user not found. Please try another username.
        </div>
      `;
      document.getElementById("repoList").innerHTML = "";
      return;
    });

  // Fetch repositories
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
      const repoList = document.getElementById("repoList");
      repoList.innerHTML = "";

      repos.forEach(repo => {
        repoList.innerHTML += `
          <li>
            <a href="${repo.html_url}" target="_blank">
              ${repo.name}
            </a>
          </li>
        `;
      });
    })
    .catch(error => console.error("Repo fetch error:", error));
}

/* Button click */
document.getElementById("searchBtn").addEventListener("click", () => {
  const username = document.getElementById("usernameInput").value.trim();
  if (username) {
    loadGitHubUser(username);
  }
});

/* Enter-key support */
document.getElementById("usernameInput").addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.getElementById("searchBtn").click();
  }
});

/* Load default user */
loadGitHubUser(defaultUsername);
