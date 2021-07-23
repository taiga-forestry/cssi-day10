const search = () => {
    const restaurantsRef = firebase.database().ref();
    restaurantsRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);

    const restaurants = data.restaurants;
    findRestaurants(restaurants);
    });
}

const findRestaurants = (restaurants) => {
    const input = document.querySelector("#search").value;
    var searchResults = [];
    console.log(input);

    for (restaurant in restaurants) {
        const restaurantData = restaurants[restaurant];
        
        // if (fitSearchTerms(restaurantData))
        if (true)
        {
            console.log(restaurantData.name + " is a good fit!")
            searchResults.push(restaurantData);
        }
    }

    console.log(searchResults);
    displayResults(searchResults);

}

const fitSearchTerms = (restaurantData) => {
    if (filterPrice() && filterRating() && filterCuisine())
        return true;
    return false;
}

const filterPrice = () => {
    // take input from dropdown menu and return it
}


const filterRating = () => {
    
}

const filterCuisine = () => {

}

const displayResults = (searchResults) => {
    
}