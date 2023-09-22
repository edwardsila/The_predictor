// static/app.js

document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    var loadPredictionsBtn = document.getElementById('loadPredictionsBtn');
    var predictionsData = document.getElementById('predictionsData');

    // Mock data (replace with real data fetch logic)
    var mockPredictions = [
        'Team A will win the match with a score of 2-1.',
        'Player X is expected to score a hat-trick.',
        'Over 2.5 goals are likely in this game.'
    ];

    // Event listener for the button click
    loadPredictionsBtn.addEventListener('click', function () {
        // Clear previous data
        predictionsData.innerHTML = '';

        // Display mock predictions
        mockPredictions.forEach(function (prediction) {
            var predictionItem = document.createElement('p');
            predictionItem.textContent = prediction;
            predictionsData.appendChild(predictionItem);
        });
    });
});
