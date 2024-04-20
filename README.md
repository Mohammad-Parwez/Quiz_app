# Node.js Quiz Application

 This is a Node.js quiz application built using Express.js. It allows users to take a quiz about Node.js concepts and provides feedback on their answers.

## Getting Started
To run this application locally, follow these steps:
## Prerequisites
Node.js installed on your machine 
##  Installation

1. Clone this repository to your local machine:

```bash
  git clone <repository-url>(https://github.com/Mohammad-Parwez/Quiz_app.git)

```
2. Navigate to the project directory:
```bash
  cd node-quiz-app
```
3. Install dependencies:
```bash
  npm install
```
 
 
##  Running the Application

1. Start the server:
```bash
  npm start
```
2. Open your web browser and navigate to `http://localhost:3000` to access the quiz.

## Usage
1. Answer the quiz questions by selecting one of the provided  options for each question.
2. Click the "Submit" button to submit your answers.
View your score and feedback, which indicates whether each answer was correct or incorrect.
## Project Structure
```bash
  node-quiz-app/
  |- app.js             # Main application file
  |- questions.json     # JSON file containing quiz questions and answers    
  |- views/             # EJS views for rendering the quiz and result
  |   |- quiz.ejs       # Quiz view
  |   |- result.ejs     # Result view
  |- package.json       # Project manifest
  |- README.md          # Project documentation

```
## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to contribute to this project.
## License
This project is licensed under the MIT License.