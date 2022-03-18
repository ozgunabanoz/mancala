# INSTRUCTIONS

## Before Execution

Fill the variables in .env file according to your system.

## Routes

- POST /game/start: Starts the game and returns a game object.

- POST /game/:id/play: For playing the next turn. If the request is valid, returns the game object's latest state. Needs a correct game id.

Request body:

    {
        "player": 0 // It must be 0 for player 1 and 1 for player 2. Other values are invalid,
        "pit": 0 // Pit number to start sowing from. It must be between 0 and 5. Other values are invalid.
    }
