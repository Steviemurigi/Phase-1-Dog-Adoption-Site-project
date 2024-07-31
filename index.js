// Sample dog data
const dogs = [
    { name: 'Buddy', breed: 'Labrador', age: 3 },
    { name: 'Max', breed: 'Bulldog', age: 5 },
    { name: 'Bella', breed: 'Poodle', age: 2 },
    { name: 'Charlie', breed: 'Labrador', age: 4 },
    { name: 'Lucy', breed: 'Bulldog', age: 1 },
];

// Get references to HTML elements
const breedFilter = document.getElementById('breed-filter');
const clearFilterButton = document.getElementById('clear-filter');
const dogList = document.getElementById('dog-list');

// Function to display dogs
function displayDogs(dogsToDisplay) {
    dogList.innerHTML = ''; // Clear current list
    dogsToDisplay.forEach(dog => {
        const dogDiv = document.createElement('div');
        dogDiv.textContent = `${dog.name} (${dog.breed}, ${dog.age} years old)`;
        
        const adoptButton = document.createElement('button');
        adoptButton.textContent = 'Adopt';
        adoptButton.addEventListener('click', () => {
            alert(`${dog.name} has been adopted!`);
        });
        
        dogDiv.appendChild(adoptButton);
        dogList.appendChild(dogDiv);
    });
}

// Initial display of all dogs
displayDogs(dogs);

// Filter event listener
breedFilter.addEventListener('change', () => {
    const selectedBreed = breedFilter.value;
    const filteredDogs = selectedBreed === 'all' 
        ? dogs 
        : dogs.filter(dog => dog.breed.toLowerCase() === selectedBreed.toLowerCase());
    displayDogs(filteredDogs);
});

// Clear filter button event listener
clearFilterButton.addEventListener('click', () => {
    breedFilter.value = 'all'; // Reset the dropdown
    displayDogs(dogs); // Show all dogs
});