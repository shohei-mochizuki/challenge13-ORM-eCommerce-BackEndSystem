# Challenge 13 - ORM : E-Commerce Back End System [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## DESCRIPTION 
This application enables you to create and manage a backend system for a e-commerce website! You can do the following actions:
* Create a database which contains data of products, product categories and product tags 
* View list of categories (and associated products), list of tags (and associated products) or list of products (and an associated category and tags)
* View information of specific category, tag or product
* Update information on specific category, tag or product 
* Delete specific category, tag or product from the database

## TABLE OF CONTENTS
[INSTALLATION](#installation)<br>
[USAGE](#usage)<br>
[LICENSE](#license)<br>
[CONTRIBUTION](#contribution)<br>
[TESTS](#tests)<br>
[SCREENSHOTS](#screenshots)<br>
[DEMO](#demo)<br>
[QUESTIONS](#questions)

## INSTALLATION 
This application requires 1.JavaScript, 2.Node.JS (version 16, not the latest), 3.Node package manager and 4.Insomnia to run. In a blank folder, put necessary files (refer to the TESTS section for the details) and open the command line. In the command line, move to this folder and then type "npm install". Make sure that a folder called "node_modules" and a file called package-lock.json are created. Following libraries are used:
* [express](https://www.npmjs.com/package/express)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [sequelize](https://www.npmjs.com/package/sequelize)
* [dotenv](https://www.npmjs.com/package/dotenv)

## USAGE 
### Step 1. Data Preparation 
First you need to load your data onto MySQL server. Go to Command Line and go to the folder of this application which contains db folder and index.js. Once you're in the folder, type "mysql -u root" (if you get a server connection error, type "mysql.server start" first) and then you're ready to use MySQL. In MySQL, type "source db/schema.sql to create a database and you can exit MySQL by typing "quit" and hit Enter button. Then type "npm run seed" in Command Line to seed the data.  

### Step 2. Data Management
In Command Line, type "node server.js" and then you'll see a message "App listening on PORT 3001!". Go to Insomnia and request the following actions:
#### Path
* Categories: http://localhost:3001/api/categories
* Tags: http://localhost:3001/api/tags
* Products: http://localhost:3001/api/products
#### Method
* GET: to view data (you can add an ID number to the path like "/tags/2" if you would like to view specific data)
* POST: to add new data 
* PUT: to update existing data (you need to add an ID number to the path to specify the item)
* DELETE: to delete data (you need to add an ID number to the path to specify the item)
#### INPUTS FOR POST & PUT
* Category: {"category_name": "string"}
* Tag: {"tag_name": "string"}
* Product: {"product_name": "", "price": decimal, "stock": integer, "category_id": integer, "tagIds": [integer, integer, ...]}

## LICENSE 
MIT:<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the “Software”), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so.

## CONTRIBUTION 
Feel free to develop this application by forking the GitHub repository and sending me pull requests. You can also contact me.

## TESTS 
Copy the following files and folder to your computer and test this application:
```md
.
├── db/
|   ├── schema.sql
|   └── seeds.sql
├── index.js          
└── package.json
``` 

## SCREENSHOTS
![image](https://user-images.githubusercontent.com/121307266/219885075-c96eae61-6122-489e-9bc2-903f487dd004.png)
![image](https://user-images.githubusercontent.com/121307266/219885090-e8ccbcd4-892c-4942-b9ee-af84dd14e394.png)

## DEMO
[Demo video](https://drive.google.com/file/d/14S-iRzW-uj3V_bIrqswidJkC7BuBzU6N/view)<br>
[Demo video (another link)](https://watch.screencastify.com/v/u2AAt1kFMxkBHBiQj27U)

## QUESTIONS 
If you have any questions, feel free to reach out to me!<br>
GitHub page: [https://github.com/shohei-mochizuki](https://github.com/shohei-mochizuki)<br>
Email: [shohei.mochizuki.jp@gmail.com](mailto:shohei.mochizuki.jp@gmail.com)
