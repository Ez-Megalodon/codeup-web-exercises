const getGithubUser = async (username) => {
    try{
        let response = await fetch(`https://api.github.com/repos/${username}/codeup-web-exercises/commits`);
        let data = await response.json();
        return data[0];
    } catch (error) {
        console.log(error);
    }
}

const renderGithubUser = (user, parent) => {
    const element = document.createElement('div');
    element.classList.add('user-card');
    element.innerHTML = `
        <div class="img-wrapper">
            <img src="${user.author.avatar_url}" class="avatar" alt="user image">
          </div>
          <h2>${user.author.login}</h2>
          <a href="${user.author.html_url}" target="_blank">Go to Profile</a>
          <p>Last Commit: ${user.commit.author.date}</p>
          <button>Remove</button>
    `;
    element.querySelector('button').addEventListener('click', function () {
        element.remove();
    });
    parent.appendChild(element);
}



(async ()=> {
    let username = 'ez-megalodon';
    let user = await getGithubUser(username);
    console.log('logging user')
    console.log(user);
    // Render user
    const usersGrid = document.querySelector('#userGrid');
    renderGithubUser(user, usersGrid);


})();