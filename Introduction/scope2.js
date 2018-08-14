//Global (name)
    //Local (name) - This is variable shadowing, where the local variable will shawdows the glocal scope
        //Local - So this code only take parent and not global
    //Local

    let name = 'Tauqueer'
if (true) {
    let name = 'Rebecca'
    if (true) {
        name = 'Jen'
        console.log(name)
    }
    console.log(name)
}

if (true) {
    console.log(name)
}

//Global 
    //Local  - This is variable shadowing, where the local variable will shawdows the glocal scope
        //Local - So this code only take parent and not global
    //Local
    // let name = 'Tauqueer'
if (true) {
    // let name = 'Rebecca'
    if (true) {
        name = 'Jen'
        console.log(name)
    }
    console.log(name)
}

if (true) {
    console.log(name)
}