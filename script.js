let currentIndex = 0;
let peopleData = [];

// Function to fetch all the data
function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            peopleData = data.data;
            displayPerson(peopleData[currentIndex]);
        })
        .catch(error => console.error(error));
}

// Function to fetch the next person's data
function fetchNextPerson() {
    if (currentIndex < peopleData.length - 1) {
        currentIndex++;
        return peopleData[currentIndex];
    } else {
        return null;
    }
}

// Function to display person details on the page
function displayPerson(person) {
    if (person) {
        const personDetails = document.getElementById('person-details');
        const personInfo = document.createElement('div');
        personInfo.innerHTML = `
        <div class="container_flex">
            <div class="counter">
                <P>${currentIndex+1}</p>
            </div>
            <div class="content">
                <p class="name">Name: ${person.name}</p>
                <p class="location">Location: ${person.location}</p>
            </div>
        </div>
        `;
        personDetails.appendChild(personInfo);
    } else {
        alert('No more people!');
    }
}

// Function to handle button click event
function onNextPersonButtonClick() {
    const nextPerson = fetchNextPerson();
    displayPerson(nextPerson);
}

document.getElementById('next-person-btn').addEventListener('click', onNextPersonButtonClick);

// Load all the data on page load
fetchData();
