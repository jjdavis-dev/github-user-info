const username = "jjdavis-dev";

/* Fetch my GitHub user info */
fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("login").textContent = data.login;
    document.getElementById("repoCount").textContent = data.public_repos;
    document.getElementById("avatar").src = data.avatar_url;
  })
  .catch(error => console.error("User fetch error:", error));

/* Fetch my repositories */
fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    const repoList = document.getElementById("repoList");

    repos.forEach(repo => {
      repoList.innerHTML += `<li>${repo.name}</li>`;
    });
  })
  .catch(error => console.error("Repo fetch error:", error));
