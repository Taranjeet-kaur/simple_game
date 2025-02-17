# ROCK PAPER OR SCISSORS GAME

## Function Explained 

### 1.  `getComputerChoice()`
- **Purpose**: Randomly selects a choice for the computer.
- **Returns**: `"rock"`, `"paper`, `scissors`.

### 2. ` getHumanChoice( )` 
- **Purpose**: Prompts the player to enter their choice ("rock","paper","scissors")


### 3. `playRound(humanChoice, computerChoice)`
- **Purpose**:  Determines the outcome of a single round by comparing the player's choice (`humanChoice`) and the computer's choice (`computerChoice`).
- **Conditionals**: 
    >First `if`: Checks for a tie.
    >Second `if`: Checks if the player wins.
    >`else`: Determines if the player loses.
- **Return**: Returns a string indicating whether it's a "Tie!","Win!" or "Lose!" 

### 4. `playGame()`
- **Purpose**: Runs the game for 5 rounds, calling `playRound()` in each round, and accumulates the results.
- **Initializations**:
    > `humanScore` and `computerScore` track the score for each player.
    > `resultMessages` that stores result of each round.
- **Loops**:
    >The game runs for 3 rounds in a for loop, collecting results after each round.
-`push()` method is used to push the results in `result`.
- **Conditionals**: `if` the string stored in `result` includes "Win!" increment the `humanScore`. `if` it includes "Lose!" then increment computerScore.
- finally, push the final scores and results in `resultMessages`.
- Another set of **Conditionals** to check if `humanScore` is greater, smaller or equal to `computerScore` and push the result message accordingly in `resultMessages`. 
- `return` all the result message.

## 5. UI and Interaction:

- **Three `button`** elements created dynamically using JavaScript with the label "Play Game".
- **Event Listeners**: Each button has an event listener that triggers `playGame()` when clicked. The results of the game are displayed in a newly created `div` element.
- `div` element stores the results, and the content is inserted using `textContent`.





