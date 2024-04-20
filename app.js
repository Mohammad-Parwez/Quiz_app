const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sample questions data
const questions = require('./questions.json');

// Endpoint to render the quiz
app.get('/', (req, res) => {
    res.render('quiz', { questions });
});

// Endpoint to handle answer submissions
 // Endpoint to handle answer submissions
app.post('/submit', (req, res) => {
    const answers = req.body.answers;
    let score = 0;
    const feedback = [];

    questions.forEach((question, index) => {
        if (answers[index] === question.correctAnswer) {
            score++;
            feedback.push({ question: question.question, correct: true });
        } else {
            feedback.push({ question: question.question, correct: false, correctAnswer: question.correctAnswer });
        }
    });

    // Pass questions along with score and feedback to the result view
    res.render('result', { score, feedback, questions });
});


// Handle 404 error
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Handle other errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
