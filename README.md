User Story: 
As a seller I want to be able to add an advertisement to sell something.
As a buyer I want to be able to view a list of advertisements as the first thing I see in the app.
As a seller I want to add a title, description, picture (url), price, email address and phone number to my advertisement.
As a buyer I want to view the title and price in the advertisement list.
As a buyer I want to be able to click on an advertisement and be able to see the description, picture (url), price, email address and phone number.

Strategies:
Prototyping: Make the most basic version without worrying about long term code health.
Throw everything away and start again.

Feature completion: Pick 1 feature.
Fully complete that feature with all relevant parts of your application.



The userstory wants to add things to there advertisement. So it is not just a object with text. It has multiple things wich sounds like a database. It is not necessary so make it as an option not a must.

A list of advertisement needs to be the first thing they see. So a list should be made as frontpage. It should only view the title and price

on the click of the advertisement we should go to the detailpage wich shows all the items of the table.

## database table wich is also a form
title: string
description: string
picture: url/string
price: number
email adress: string with email confirmation
phone number: string

## endpoints
/advertisements
/advertisements/:id
/advertisements/form
## components
