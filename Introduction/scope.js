// Lexical scope (static scope)
// Global Scope - Defined outside of all code blocks
// Local scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/Ansestor scope

// Global Scope - varOne
    // Local Scope - varTwo
        // Local Scope - varFour
    //local Scope - varThree
let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    if (true) {
        let varFour = 'varFour'
    }
}

if(true) {
    let varThree = 'varThree'
    console.log()
}

console.log(varTwo)