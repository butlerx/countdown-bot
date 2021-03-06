#Countdown IRC bot

IRC bot that let's you play countdown in IRC. The game is running in irc.redbrick.dcu.ie on #countdown, but you can just as easily run your own instance on your own channel for more private games.

#development Stage
Development on this bot has stopped as it has been made part of github.com/creadak/creabot

##Commands
* **!start #** - Start a new game. Optional parameter can be used to set the number playing (e.g. `!start 10` to wait for the people to join.)
* **!stop** - Stop the currently running game.
* **!pause** - Pause the currently running game.
* **!resume** - Resume a paused game.
* **!join** - Join to the currently running game.
* **!j** - Alias for join command
* **!quit** - Quit from the game.
* **!q** - Alias for quit command
* **!play** - Play your answer for the round.
* **!points** - Show players' *awesome points* in the current game.
* **!list** - List players in the current game.
* **!players** - Alias for !list command
* **!status** - Show current status of the game. Output depends on the state of the game (e.g. when waiting for players to play, you can check who hasn't played yet)
* **!p** - Alias for !play command
* **!consonant** - choose a consonant
* **!c** - alias of !consonant
* **!vowel** - choose a vowel
* **!v** - alias of vowel

All of these commands are case insensitive and are trimmed for whitespace so "!start" and "    !StaRt" will work the same

Some of these commands reply as notice, others as a private message. If you use [Irssi](http://www.irssi.org), you can use [active_notice.pl](http://scripts.irssi.org/scripts/active_notice.pl) to get notices on the active window instead of status window.

##Install
1. Clone the repository.
2. Edit configuration files with your channel & server settings.
3. Install dependencies using `npm install`.

###Requirements
* Node.js 0.10.*

##Run
Run the bot by running `node app.js`, or if you want to run it with development settings instead of production, run `NODE_ENV=development node app.js`.

##Configuration
Main configuration files are located in `config/env`. There are two files by default for two different environments, development and production (e.g. if you want to test the bot on a separate channel). For the `clientOptions` directive, refer to the [Node-IRC documentation](https://node-irc.readthedocs.org/en/latest/API.html#client).

It is possible to configure the bot to send a message to a user or channel after connecting to server or joining a specific channel using `connectCommands` and `joinCommands`. This can be used, for example, to identify with NickServ on networks that require it. See examples below.


###Notify Users
Users currently in the channel with the bot can be notified when a game begins by setting the `notifyUsers` directive to true. Users with ~ and & modes are not notified.

###Set Topic
The bot can be configured to set the channel topic indicating whether a game is running or not by setting the `setTopic` directive to true. The `topicBase` directive will be appended to the end of the status information. The bot must have permission in the channel for this to work. The bot will also set the topic automatically set the topic on the channel upon joining if this option is set

###Point Limit
You can set a default point limit in the configuration file by settings the `pointLimit` to any positive number. The game stops when a player reaches this point limit. 0 or a negative number means no point limit and games are played until `!stop` command is entered.

Additionally point limit can be set on a per game basis as a parameter for the `!start` command (see *Commands*).

###Connect and join command examples

####NickServer
To identify with NickServ after connecting, you can use the following ´connectCommands´:

```JavaScript
"connectCommands": [
    {
        "target": "nickserv",
        "message": "identify <password>"
    }
]
```

####Notify after connecting and joining #awesomechannel

This example will send you a private message when the bot has connected to server and another private message when it has joined #awesomechannel. The bot will also send a message to #awesomechannel saying that it's back and ready to play.

```JavaScript
"connectCommands": [
    {
        "target": "yournick",
        "message": "Connected to server."
    }
],
"joinCommands": {
	"#awesomechannel": [
		{
			"target": "#awesomechannel",
			"message" "I'm back, let's play!"
		},
		{
			"target": "yournick",
			"message": "I just joined #awesomechannel."
		}
	]
}
```

##Contribute
All contributions are welcome in any form, be it pull requests for new features and bug fixes or issue reports or anything else.

It is recommended to use the **develop** branch as a starting point for new features.

##Thanks
Special thanks to everyone on the ***super awesome secret IRC channel*** that have helped me test this and given feedback during development.

##License
Cards Against Humanity IRC bot and its source code is licensed under a [Creative Commons BY-NC-SA 2.0 license](http://creativecommons.org/licenses/by-nc-sa/2.0/).
