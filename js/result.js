const result = JSON.parse(localStorage.getItem("predictionResult"));

const container = document.getElementById("resultContent");

if (result.prediction === 1) {
  container.innerHTML = `

<div class="result-icon">
⚠️
</div>

<h2 class="result-title">
Heart Disease Detected
</h2>

<div class="meter high-risk">
<div class="meter-inner">
${result.probability}%
</div>
</div>

<p class="result-description">

Our machine learning model predicts
a high likelihood of heart disease.

Please consult a healthcare professional.

</p>

<div class="btn-group">
<a href="review.html" class="btn">
Health Suggestions
</a>
</div>

`;
} else {
  container.innerHTML = `

<div class="result-icon">
💚
</div>

<h2 class="result-title">
Healthy Heart
</h2>

<div class="meter low-risk">
<div class="meter-inner">
${result.probability}%
</div>
</div>

<p class="result-description">

No significant signs of heart disease
were detected by the model.

</p>

<div class="btn-group">
<a href="review.html" class="btn">
Health Suggestions
</a>
</div>

`;
}
