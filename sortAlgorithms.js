
 // Generate random numbers
function createArray(size, min, max) {
    const numbers = [];

    for (let i = 0; i < size; i++) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(num);
    }

    return numbers;
}

// Show array elements and their positions
function showArray(numbers) {
    let text = "{";

    for (let i = 0; i < numbers.length; i++) {
        text += `[cell - ${i},value - ${numbers[i]}]`;

        if (i !== numbers.length - 1) {
            text += ",";
        }
    }

    text += "}";
    console.log(text);
}

// Bubble sort
function bubbleSort(numbers, ascending) {
    let result = numbers.slice();
    let n = result.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            let needSwap = ascending
                ? result[j] > result[j + 1]
                : result[j] < result[j + 1];

            if (needSwap) {
                // Change places of two numbers
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
                swapped = true;
            }
        }

        // Stop if everything is already sorted
        if (!swapped) break;
    }

    return result;
}

// Insertion sort
function insertionSort(numbers, ascending) {
    let result = numbers.slice();

    for (let i = 1; i < result.length; i++) {
        let current = result[i];
        let position = i - 1;

        // Shift elements until we find the right position
        while (position >= 0) {
            let move = ascending
                ? result[position] > current
                : result[position] < current;

            if (!move) break;

            result[position + 1] = result[position];
            position--;
        }

        result[position + 1] = current;
    }

    return result;
}

// Selection sort
function selectionSort(numbers, ascending) {
    let result = numbers.slice();

    for (let i = 0; i < result.length - 1; i++) {
        let selected = i;

        // Look for the next number to place
        for (let j = i + 1; j < result.length; j++) {
            let better = ascending
                ? result[j] < result[selected]
                : result[j] > result[selected];

            if (better) {
                selected = j;
            }
        }

        if (selected !== i) {
            let temp = result[i];
            result[i] = result[selected];
            result[selected] = temp;
        }
    }

    return result;
}

// Test all sorting methods
const numbers = createArray(8, 1, 50);

console.log("Початковий масив:");
showArray(numbers);

console.log("\nСортування бульбашкою:");
console.log("За зростанням:");
showArray(bubbleSort(numbers, true));
console.log("За спаданням:");
showArray(bubbleSort(numbers, false));

console.log("\nСортування вставками:");
console.log("За зростанням:");
showArray(insertionSort(numbers, true));
console.log("За спаданням:");
showArray(insertionSort(numbers, false));

console.log("\nСортування вибором:");
console.log("За зростанням:");
showArray(selectionSort(numbers, true));
console.log("За спаданням:");
showArray(selectionSort(numbers, false));
