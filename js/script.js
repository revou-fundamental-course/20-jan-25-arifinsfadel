// Ini File JavaScript



// Fungsi untuk memvalidasi input berat badan, tinggi badan, usia, dan gender

  function calculateBmi() {
    let resultBmi = document.getElementById('result-bmi');
    let weight = document.getElementById('input-berat-badan').value;
    let height = document.getElementById('input-tinggi-badan').value;
    let age = document.getElementById('input-usia').value;

    // Fungsi untuk menghitung BMI berdasarkan berat badan dan tinggi badan

    if (weight != '' && height != '' && age != '') {
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        resultBmi.textContent = bmi;
    } else {
        alert('Tolong isi all fields!');
    }
}


