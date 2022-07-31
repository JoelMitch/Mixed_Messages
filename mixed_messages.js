/* Idea: A random meal generator that will randomly select three components that make up a meal.
The different components will consist of a type of protein, a side, and a type of vegetable. 
These will then be logged in a format so the user can see the meal that has been chosen for them.*/

const mealComponents = {
    protein: ['sausages', 'burgers', 'steak', 'bacon', 'cod', 'roast chicken', 'chicken wings', 
    'chicken kievs', 'bbq ribs', 'salmon', 'quorn burgers', 'eggs'],
    vegetable: ['carrots', 'peas', 'brocolli', 'sweetcorn', 'brussel sprouts', 'peppers', 'roasted pumpkin', 
    'asparagus', 'cauliflower', 'onion'],
    side: ['garlic bread', 'fries', 'salad', 'sweet potato fries', 'pasta', 'spinach', 'coleslaw', 
    'jacket potato', 'baked beans'],
}

function randomIndex(num) {
    return Math.floor(Math.random() * num);
};

let createdMeal = ['Your meal today is:',];

function selectMealComponents() {
    for (const component in mealComponents) {
        let index = randomIndex(mealComponents[component].length);
        switch(component) {
            case 'protein':
                createdMeal.push(`Delicous ${mealComponents[component][index]}`);
                break;
            case 'vegetable':
                createdMeal.push(`with ${mealComponents[component][index]}`);
                break;
            case 'side':
                createdMeal.push(`and a side of ${mealComponents[component][index]}`);
                break;
            default:
                return 'ERROR';
        }
        }
    };

    let completedMeal = '';

function joinMealComponents(arr) {
    completedMeal = arr.join(' ')
    console.log(completedMeal);
}

selectMealComponents();
joinMealComponents(createdMeal);
