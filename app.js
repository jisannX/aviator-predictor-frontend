async function fetchPrediction() {
    const data = {
        multiplier_lag: 2.5,
        rolling_avg: 3.1
    };

    const response = await fetch('https://aviator-predictor.onrender.com/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById("prediction-result").innerText = 
        result.prediction ? "High Win Chance!" : "Low Probability!";
}
