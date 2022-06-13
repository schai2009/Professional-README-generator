//node modules
const fs = require('fs');
const inquirer = require ('inquirer');

//inquirer to generate questions
inquirer.prompt(
    [
        {
            type: 'input',
            message:'What is the project title?',
            name:'title',
            validate: (value)=>{ if(value){return true}else{return 'Please enter a value'}},
        },
        {
            type: 'input',
            message:'How do you install your app?',
            name:'installation',
            validate: (value)=>{ if(value){return true}else{return 'Please enter a value'}},
        },
        {
            type: 'input',
            message:'Instructions to be follow',
            name:'instructions',
            validate: (value)=>{ if(value){return true}else{return 'Please enter a value'}},
        },
        {
            type: 'input',
            message:'Who contributed to the project?',
            name:'credit',
            validate: (value)=>{ if(value){return true}else{return 'Please enter a value'}},
        },
        {
            type: 'input',
            message:'How do you use your app?',
            name:'utility',
            validate: (value)=>{ if(value){return true}else{return 'Please enter a value'}},
        },
        {
            type: 'list',
            message:'what license did you use?',
            name:'license',
            validate: (value)=>{ if(value){return true}else{return 'Please enter a value'}},
        },
        {
            type: 'input',
            message:'How do you use your app?',
            name:'utility',
            validate: (value)=>{ if(value){return true}else{return 'Please enter a value'}},
        },

    ]
)