import { Tag } from "./app/models/Tag";
import { Question } from "./app/models/question";

export const sampleQuestions:Question[]=[
    {
        id:'1',
        heading:'Laravel sail installation problem (The specified path could not be found)',
    description:"Im trying to install Sail for Laravel by doing composer create-project laravel/laravel myproject cd myproject composer require laravel/sail --dev php artisan sail:install But Im getting as Output : Sail scaffolding installed successfully. The specified path could not be found Is there anything that I'm doing wrong here?",
        tags:['javascript']
    },
    {
        id:'2',
        heading:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, id?',
    description:"Im trying to install Sail for Laravel by doing composer create-project laravel/laravel myproject cd myproject composer require laravel/sail --dev php artisan sail:install But Im getting as Output : Sail scaffolding installed successfully. The specified path could not be found Is there anything that I'm doing wrong here?",
        tags:['html']
    },
    {
        id:'3',
        heading:'Laravel sail installation problem (The specified path could not be found)',
    description:"Im trying to install Sail for Laravel by doing composer create-project laravel/laravel myproject cd myproject composer require laravel/sail --dev php artisan sail:install But Im getting as Output : Sail scaffolding installed successfully. The specified path could not be found Is there anything that I'm doing wrong here?",
        tags:['ios']
    },
    {
        id:'4',
        heading:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, id?',
    description:"Im trying to install Sail for Laravel by doing composer create-project laravel/laravel myproject cd myproject composer require laravel/sail --dev php artisan sail:install But Im getting as Output : Sail scaffolding installed successfully. The specified path could not be found Is there anything that I'm doing wrong here?",
        tags:['android']
    },
    {
        id:'5',
        heading:'Laravel sail installation problem (The specified path could not be found)',
    description:"Im trying to install Sail for Laravel by doing composer create-project laravel/laravel myproject cd myproject composer require laravel/sail --dev php artisan sail:install But Im getting as Output : Sail scaffolding installed successfully. The specified path could not be found Is there anything that I'm doing wrong here?",
        tags:['python']
    },
    {
        id:'6',
        heading:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, id?',
    description:"Im trying to install Sail for Laravel by doing composer create-project laravel/laravel myproject cd myproject composer require laravel/sail --dev php artisan sail:install But Im getting as Output : Sail scaffolding installed successfully. The specified path could not be found Is there anything that I'm doing wrong here?",
        tags:['java']
    },
    {
        id:'7',
        heading:'Laravel sail installation problem (The specified path could not be found)',
    description:"Im trying to install Sail for Laravel by doing composer create-project laravel/laravel myproject cd myproject composer require laravel/sail --dev php artisan sail:install But Im getting as Output : Sail scaffolding installed successfully. The specified path could not be found Is there anything that I'm doing wrong here?",
        tags:['css']
    },
    {
        id:'8',
        heading:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, id?',
    description:"Im trying to install Sail for Laravel by doing composer create-project laravel/laravel myproject cd myproject composer require laravel/sail --dev php artisan sail:install But Im getting as Output : Sail scaffolding installed successfully. The specified path could not be found Is there anything that I'm doing wrong here?",
        tags:['c#']
    },
    {
        id:'9',
        heading:'Laravel sail installation problem (The specified path could not be found)',
    description:"Im trying to install Sail for Laravel by doing composer create-project laravel/laravel myproject cd myproject composer require laravel/sail --dev php artisan sail:install But Im getting as Output : Sail scaffolding installed successfully. The specified path could not be found Is there anything that I'm doing wrong here?",
        tags:['python']
    },
    {
        id:'10',
        heading:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, id?',
    description:"Im trying to install Sail for Laravel by doing composer create-project laravel/laravel myproject cd myproject composer require laravel/sail --dev php artisan sail:install But Im getting as Output : Sail scaffolding installed successfully. The specified path could not be found Is there anything that I'm doing wrong here?",
        tags:['javascript']
    }
]

export const sampleTags:Tag[]=[
          {
            name: "javascript",
            description: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification."
          },
          {
            name: "python",
            description: "Python is a high-level, general-purpose programming language known for its readability and simplicity."
          },
          {
            name: "java",
            description: "Java is a popular general-purpose programming language that is designed to have as few implementation dependencies as possible."
          },
          {
            name: "html",
            description: "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications."
          },
          {
            name: "css",
            description: "CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of a document written in HTML."
          },
          {
            name: "c++",
            description: "C++ is a general-purpose programming language that supports procedural, object-oriented, and generic programming."
          },
          {
            name: "c#",
            description: "C# is a general-purpose, object-oriented programming language developed by Microsoft for the .NET platform."
          },
          {
            name: "android",
            description: "Android is an open-source mobile operating system developed by Google for smartphones, tablets, and other devices."
          },
          {
            name: "ios",
            description: "iOS is a mobile operating system developed by Apple Inc. for its iPhone, iPad, and iPod Touch devices."
          }
]