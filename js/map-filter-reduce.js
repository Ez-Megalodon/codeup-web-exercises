const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let bilingualUsers = users.filter(n => n.languages.length >= 3);
console.log(bilingualUsers)

let userEmails = users.map(n => n.email);
console.log(userEmails);

let totalYearsExp = users.reduce((total, user)=>{
        return total + user.yearsOfExperience / users.length;
},0);
console.log(totalYearsExp);

let longestEmail = users.reduce((acc,current)=>{
    if (current.email.length > acc.email.length) {
        return current;
    } else {
        return acc;
    }
})
console.log(longestEmail.email);

let usersNames = users.reduce((acc, curr) => {
   return acc === '' ? curr.name : `${acc}, ${curr.name}`
},'');
console.log(usersNames);

//bonus
let uniqueLang = users.reduce((acc, curr)=>{
    return acc === ''? curr.languages : `${acc}, ${curr.languages}`
},'')
console.log(uniqueLang);
