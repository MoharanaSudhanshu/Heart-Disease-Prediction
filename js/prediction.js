document
  .getElementById("predictionForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const patientData = {
      age: Number(age.value),
      sex: Number(sex.value),
      cp: Number(cp.value),
      trestbps: Number(trestbps.value),
      chol: Number(chol.value),
      fbs: Number(fbs.value),
      restecg: Number(restecg.value),
      thalach: Number(thalach.value),
      exang: Number(exang.value),
      oldpeak: Number(oldpeak.value),
      slope: Number(slope.value),
      ca: Number(ca.value),
      thal: Number(thal.value),
    };

    const response = await https://heart-disease-prediction-wixh.onrender.com, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patientData),
    });

    const result = await response.json();

    localStorage.setItem("predictionResult", JSON.stringify(result));

    localStorage.setItem("patientData", JSON.stringify(patientData));

    window.location.href = "result.html";
  });
