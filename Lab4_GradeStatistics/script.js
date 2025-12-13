const mathInput = document.getElementById("math");
const engInput = document.getElementById("english");
const submitBtn = document.getElementById("submitBtn");
const gradeBody = document.getElementById("gradeBody");

const mathAvgCell = document.getElementById("mathAvg");
const engAvgCell = document.getElementById("engAvg");
const overallAvgCell = document.getElementById("overallAvg");

let rowCount = 0;

submitBtn.addEventListener("click", addGradeRow);

function addGradeRow() {
    const mathValue = mathInput.value.trim();
    const engValue = engInput.value.trim();

    if (mathValue === "" || engValue === "") {
        alert("請輸入 Math 和 English 成績！");
        return;
    }

    const mathScore = Number(mathValue);
    const engScore = Number(engValue);

    if (isNaN(mathScore) || isNaN(engScore)) {
        alert("成績必須為數字！");
        return;
    }

    rowCount++;

    const avg = ((mathScore + engScore) / 2).toFixed(2);

    const tr = document.createElement("tr");

    const tdIndex = document.createElement("td");
    const tdMath = document.createElement("td");
    const tdEng = document.createElement("td");
    const tdAvg = document.createElement("td");

    tdIndex.textContent = rowCount;
    tdMath.textContent = mathScore;
    tdEng.textContent = engScore;
    tdAvg.textContent = avg;

    tr.appendChild(tdIndex);
    tr.appendChild(tdMath);
    tr.appendChild(tdEng);
    tr.appendChild(tdAvg);

    gradeBody.appendChild(tr);

    mathInput.value = "";
    engInput.value = "";

    updateFooterAverages();
}

function updateFooterAverages() {
    const rows = gradeBody.querySelectorAll("tr");

    if (rows.length === 0) {
        mathAvgCell.textContent = "";
        engAvgCell.textContent = "";
        overallAvgCell.textContent = "";
        return;
    }

    let mathSum = 0;
    let engSum = 0;

    rows.forEach(row => {
        const cells = row.children;
        mathSum += Number(cells[1].textContent);
        engSum += Number(cells[2].textContent);
    });

    const count = rows.length;
    const mathAvg = (mathSum / count).toFixed(2);
    const engAvg = (engSum / count).toFixed(2);
    const overallAvg = ((mathAvgAsNum(mathAvg) + mathAvgAsNum(engAvg)) / 2).toFixed(2);

    mathAvgCell.textContent = mathAvg;
    engAvgCell.textContent = engAvg;
    overallAvgCell.textContent = overallAvg;
}

function mathAvgAsNum(str) {
    return parseFloat(str);
}
