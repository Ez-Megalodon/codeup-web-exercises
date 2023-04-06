export const getPlanets = async (planetNumber) => {
    try {
        let response = await fetch(`https://swapi.dev/api/planets/${planetNumber}`);
        let data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export const getPerson = async (personNumber) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${personNumber}`);
        let data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export const getFilm = async (filmNumber) => {
    try {
        let response = await fetch(`https://swapi.dev/api/films/${filmNumber}`);
        let data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export const getEyeColor = async (person) => {
    console.log(`${person.name}'s eye color is: ${person.eye_color}`);
}

export const renderInfo = (person, planet, film, parent) => {
    const element = document.createElement('div');
    element.classList.add('user-card','column');
    element.innerHTML = `
    <div class="img-wrapper">
            <img src="https://picsum.photos/300" class="avatar" alt="user image">
          </div>
          <h2>${person.name}</h2>
          <p>Planet: ${planet.name}</p>
          <p>Eye Color: ${person.eye_color}</p>
          <p>Film: ${film.title}</p>
          <button>Remove</button>
    `;
    element.querySelector('button').addEventListener( 'click', function () {
        element.remove();
    });
    parent.appendChild(element);
}