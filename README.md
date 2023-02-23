# Sample Web Store Application using React JS

This is a simple web application written in ReactJS framework featuring the following:

***display images in a grid***

***select images by type***

***select images by free text search***

***overlay label on some of the images***

***testing correctness of display DOM***

## Sample Screenshot 

![UI screenshot][def]

## How to Setup ?

Install [NodeJS](https://nodejs.org/en/)

Install [git](https://git-scm.com/download/win)

Get source from GitHub

`git clone  https://github.com/nandhini-skumar1/ProductApp`

`cd ProductApp`

`npm install`       <-- first time only 

## How to Run ?

`npm start`

 This will open the application in the default browser and you will see the final version. ( See below how to review older versions)

## How to Test ? 

`npm test`

This will load the DOM into react test framework and probe for items.

Currently there are test to verify a screen text and verify image count

# How to review 

***Assuming you have already started the npm application and currently viewing it in the browser*** 

Open another command window and move to the ProductApp folder

`cd ProductApp`

`git checkout V1`

***The browser will refresh to early version that has a badly formatted list of products AND type selection box***

`git checkout V2`

***You will now see some images rather too big ones***

`git checkout V3`

***You will now see images in a grid***

`git checkout V4`

***You will ON SALE tags on some***

`git checkout V5`

***You will see free text selection box***

`git checkout V6`

***Final version. More items. Pretty layout. Nice?***

# How to Use ? 

When the application starts, it will display all the prodcuts.

### Dropdown box on the top right

selects type { Beer, Wine , Sprits, Cider }

### Free text search box at top center

Type any text. Items matching the typed text will be displayed. For example, type just the letter a and all the names haveing letter a will be displayed

### Bonus

selection by type and selection by partial text match are simultaniousy active. 

Type = beer and text = ml will select all beers that has ml in its name.

To reset all selections, select type=All and clear text selection box


[def]: ./public/ui.jpg?raw=true "Sample User Interface"