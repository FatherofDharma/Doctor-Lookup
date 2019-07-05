# Doctor Lookup

A website that looks up Doctors in the Portland area, based on specific medical conditions entered by the user.
#### By Daniel Hongel. Created initially on July 5th, 2019.

## Description

This program is the 6th independent project for the coding school, Epicodus. The project uses API calls to return information on doctors in the Portland area that are related to the users medical issue or name requests.

## Specs

|Behavior   |Input      | Output              |
| --------- | :--------| :-------------|
|Takes Doctor First/Last name and returns results for the Portland, OR area.|Daniel| Daniel Somename, MD|
|Takes a medical issue input and returns a list of doctors that specialize in or can treat it, within the Portland, OR area. |headache| Dude Somename, MD|
|Returns the relevant doctors in a list including, title, address of locations, and phone number.|Dude Somename|Dude Somename, MD, Address: 46785 E Nothing St. Portland, OR 97888, Phone: 5038889999|


## Setup/Installation Requirements

* Clone this repo to your desktop.
* Open a terminal window.
* Change directories in terminal to this project's folder.
* Type npm install.
* Type npm run test.
* Go to https://developer.betterdoctor.com/ and sign up to get an API key.
* Open the project directory in a text editor, like atom.
* Create a new file called .env in the root directory (highest level of project).
* Navigate to the .env file and enter your API key at the top, using this format and variable name:
_exports.apiKey=YOUR-UNIQUE-API-KEY_
* In a terminal window, type npm run start.
* Enter Doctor name and/or medical concern and see your results.


## Known Bugs

There are no known bugs at this time.

## Support and contact details

If you encounter any issues using this software, have comments or suggestions, or would like to support further projects please e-mail me at fatherofdharma@gmail.com.


## Technologies Used

* html
* JavaScript
* css
* bootstrap
* jquery
* webpack and plugins
* Karma and Jasmine

### License

This software is license under the MIT license.

Copyright (c) 2019 **by: Daniel Hongel**
