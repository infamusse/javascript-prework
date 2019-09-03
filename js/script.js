let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
playerMove = getMoveName(playerInput)

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        return 'Ruch nieznany - wpisz liczbę od 1 do 3!';
    }
}

function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else if (argPlayerMove != 'kamień' && argPlayerMove != 'papier' && argPlayerMove != 'nożyce') {
        printMessage('Wybierz poprawną liczbę od 1 do 3!');
    } else {
        printMessage('Przegrałeś! ;(');
    }
}
displayResult(computerMove, playerMove)