const defaultUsername = "jjdavis-dev";

/* Load GitHub user info + repos */
function loadGitHubUser(username) {
  // Fetch user info
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("login").textContent = data.login;
      document.getElementById("repoCount").textContent = data.public_repos;
      document.getElementById("avatar").src = data.avatar_url;
    })
    .catch(error => console.error("User fetch error:", error));

  // Fetch repositories
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
      const repoList = document.getElementById("repoList");
      repoList.innerHTML = ""; // clear old results

      repos.forEach(repo => {
        repoList.innerHTML += `<li>${repo.name}</li>`;
      });
    })
    .catch(error => console.error("Repo fetch error:", error));
}

/* Button click event */
document.getElementById("searchBtn").addEventListener("click", () => {
  const username = document.getElementById("usernameInput").value.trim();
  if (username) {
    loadGitHubUser(username);
  }
});

/* Load default user on page load */
loadGitHubUser(defaultUsername);
