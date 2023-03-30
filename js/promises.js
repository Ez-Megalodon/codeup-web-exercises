import {getGithubUser, renderGithubUser} from "./github.js";

(async ()=>{
    //Get Users
    let user = await getGithubUser();

    //Render users
    const usersGrid = document.querySelector('#userGrid');
    renderGithubUser(user, usersGrid);

})();