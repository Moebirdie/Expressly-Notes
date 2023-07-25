# Expressly Notes  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Expressly Notes is an application for note taking and demonstrates the use of APIs using the Express.js package.  The front-end of this application was designed and coded by https://github.com/coding-boot-camp/miniature-eureka.  The data for this application is stored in a json file rather than a database as the focus is on demonstrating the use of APIs and linking a front-end to a back-end via APIs. A helper.js file was used to create random unique ids. This application also demonstrates a basic understanding of Heroku and is deployed via the Heroku cloud application platform.  

Link to deployed application: [https://moebirdie.github.io/Inquirer-README-Generator/](https://moebirdie.github.io/Inquirer-README-Generator/)


## Table of Contents

1. [Installation](#Installation)
2. [Features](#Features)
3. [Usage](#Usage)
4. [Visual Description](#Visual-Description)
5. [Contributors](#Contributing)
6. [Questions](#Questions)
7. [License](#License)
  

## Installation <a id="Installation"></a>

No installation is required but the github repository may be cloned into another user's repository and deployed via their own cloud application platform.
  

## Features <a id="Features"></a>

The key features of this application are:
  - Ability to create a new note containiing a title and body
  - Ability to save the note to a list
  - Ability to view the list of notes on the left side of the screen
  - Ability to select a note from the left side list and view the contents of the note body
  - Ability to delete a note
  

## Usage <a id="Usage"></a>

This application is intended to be used by an end user to create a list of notes with note details. Once a title and details have been entered, the user can then save the note with the save icon in the upper right.  The data persists when the application is closed, then opened again as it is stored to a json file.  If no notes are saved, or all notes have been deleted, Expressly Notes will display "No saved Notes".
  
The user maintains a list of note titles, which when selected, reveal the note details in the center of the page. When viewing a note, the + can be selected in the upper right, clearing the note being viewed and providing the ability to enter a new note.  The user also has the ability to delete a note from the list by selecting the trash can icon. The note can be deleted while it is displayed, or while another note is displaying or while no note is displaying in the display area - the deletion works regardless of the state of the notes.


## Visual Description <a id="Visual-Description"></a>

A visual representation of the working application may be seen here:  

### No notes saved  

![no notes](https://github.com/Moebirdie/Expressly-Notes/assets/93432701/cec50e85-cc73-42e1-9cd5-9f9e291e0cbb)

### Entering a note    

![entering a note](https://github.com/Moebirdie/Expressly-Notes/assets/93432701/0cc00ddc-d0d5-4a03-a26f-ace861805bc4)

### Note entered, ready for delete  

![new note added ready for delete](https://github.com/Moebirdie/Expressly-Notes/assets/93432701/0a1fca86-ac72-493d-b0b9-29ee6117a9a6)

### Deleted Note  

![deleted](https://github.com/Moebirdie/Expressly-Notes/assets/93432701/6464391d-ac73-44da-bf94-f2b557ce5680)

### Data file with unique ids 

![jsonfile](https://github.com/Moebirdie/Expressly-Notes/assets/93432701/7a0a94ad-bf24-4cca-8c71-5f793f961197)


## Contributors <a id="Contributing"></a>

Front-end development was cloned from: https://github.com/coding-boot-camp/miniature-eureka
  

## Questions  <a id="Questions"></a>

Questions can be directed to maureen.business@gmail.com or submitted via my Github account at [https://github.com/Moebirdie/Expressly-Notes](https://github.com/Moebirdie/Expressly-Notes).
  

## License <a id="License"></a>

[MIT](https://opensource.org/licenses/MIT)
