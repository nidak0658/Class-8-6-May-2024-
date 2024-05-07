// basic syntax of for in Loop
// for (variable in array) {
//      statement    
// }
                                // 0        // 1       // 2       // 3       // 4
const groceryItems: string[] = ['bread', 'milk', 'butter', 'apples', 'rice', 'flour'];

for(const item in groceryItems) {

    // console.log('i have bought ' + groceryItem[item]);
    console.log(`i have bought ${groceryItems[item]}`);
}
