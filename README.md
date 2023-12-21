<h1 align="center">
  <br>
  <img src="https://storage.googleapis.com/itinergo-storage/src/myimg/Itinergo%20Logo%20with%20Company%20Name.png" alt="Heroku" style="width:45vw" >
  <br>
  Cloud Computing Documentation <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35">
  <br>
</h1>

# Overview
Welcome to the backend repository for our Itinerary Planning Application built with Express.js. This backend serves as the backbone for the application, providing essential functionalities and seamlessly integrating with a machine learning API. The API is designed to enhance the overall user experience by offering additional features that elevate the itinerary planning process.

##  Members
| Bangkit ID | Name | University |
|-----|-------|------|
| C182BSY3165   | Izaz Rizqullah |  Universitas Amikom Purwokerto |
| C182BSY3250   |  Setya Rizky Pradana  | Universitas Amikom Purwokerto | 

# Infrastructure Cloud

<img src="https://storage.googleapis.com/itinergo-storage/src/myimg/ItinergoApp.drawio_4.png" alt="infrastructure" style="width:70vw" >


# Features
## 1. Itinerary Support
Our backend facilitates users' needs to authenticate, save their itinerary details, find friends to vacation with, and estimate the budget for the trip they will take. This API also has an experience level gamification feature for users.

## 2. User Authentication
Secure user authentication is implemented to ensure that only authorized users can access and modify their itineraries. JSON Web Tokens (JWT) are used for secure and efficient authentication.

## 3. Machine Learning Integration
One of the key highlights of our backend is its integration with a machine learning API. This integration enhances the itinerary planning process by leveraging advanced algorithms and data analysis. The machine learning API assists in generating personalized recommendations for travel planning base on city, budget, and stay duration

## 4. Asynchronous Communication
The backend supports asynchronous communication to handle time-consuming tasks efficiently. This ensures a smooth user experience, especially when dealing with complex operations such as data processing or machine learning predictions.

# Getting Started

### Prerequisites

We recommend using the tools below to make it easier for you to carry out this project!

-   [Git](https://git-scm.com/downloads)
-   [NodeJS](https://nodejs.org/en/download/)
-   [xampp](https://www.apachefriends.org/download.html)
    <br>
    For documentation on the use of these tools, please visit https://git-scm.com/doc and https://nodejs.org/en/docs/.

### Usage

> -   Clone the repository
>
> ```bash
> git clone https://github.com/Bangkit-Capstone-Project-CH2-PS025/cloud-computing
> ```
>
> -   Install dependencies
>
> ```bash
> npm install
> ```
> 
> -   ENV
>
> ```bash
> contents of the env file. You can see on the (.env.example)
> ```
>
> -   Create database
>
> ```bash
> npx sequelize db:create
> ```
>
> -   Migrate database
>
> ```bash
> npx sequelize db:migrate
> ```
>
> -   Running seeds
>
> ```bash
> npx sequelize db:seed:all
> ```
>
> -   Run project
>
> ```bash
> npm run dev
> ```

# Technology

### Tools
<p>
<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg" title="Git" alt="Git" width="40" height="40" />&nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" title="npm" alt="npm" width="40" height="40"/>&nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original.svg" title="Visual Studio Code" alt="Visual Studio Code" width="40" height="40"/>&nbsp;
</p>

### Stack
<p>
<img src="https://storage.googleapis.com/itinergo-storage/src/myimg/expressjs.png" title="express" alt="express" width="40" height="40"/>&nbsp;
<img src="https://storage.googleapis.com/itinergo-storage/src/myimg/mysql.svg" title="mysql" alt="mysql" width="40" height="40"/>&nbsp;
<img src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" title="swagger" alt="swagger" width="50" height="50"/>&nbsp;
<img src="https://repository-images.githubusercontent.com/1272424/d1995000-0ab7-11ea-8ed3-04a082c36b0d" title="nodemailer" alt="nodemailer" width="40" height="40"/>&nbsp;
<img src="https://storage.googleapis.com/itinergo-storage/src/myimg/icons8-json-web-token.svg" title="jsonwebtoken" alt="jsonwebtoken" width="40" height="40"/>&nbsp;
<img src="https://storage.googleapis.com/itinergo-storage/src/myimg/sequelize_original_logo_icon_146348.svg" title="sequelize" alt="sequelize" width="40" height="40"/>&nbsp;

</p>

# API Documentation
For detailed information on available endpoints and request/response formats, refer to the QRCODE below, or click this [API Docs](http://35.184.3.42:3000/api-docs/)
<p align="center">
<img src="https://storage.googleapis.com/itinergo-storage/src/myimg/API_Docs.png" title="api docs" alt="api docs" width="200" height="230"/>&nbsp;
</p>
