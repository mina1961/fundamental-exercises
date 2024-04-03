function solve(input) {
    let username = input[0];
    let pass = '';
    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    };
    let counter = 1;
    for (let i = 1; i < input.length; i++) {
        if (input[i] === pass) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (counter === 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');
                counter++;
            }
        }
    }
}