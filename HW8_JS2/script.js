// 取得元素（一定要用 getElementById）
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorSelect = document.getElementById("operator");
const calcBtn = document.getElementById("calcBtn");
const resultP = document.getElementById("result");

// 依照選擇的運算改按鈕文字（Add / Subtract / Multiply / Divide）
operatorSelect.addEventListener("change", function () {
    switch (operatorSelect.value) {
        case "+":
            calcBtn.textContent = "Add";
            break;
        case "-":
            calcBtn.textContent = "Subtract";
            break;
        case "*":
            calcBtn.textContent = "Multiply";
            break;
        case "/":
            calcBtn.textContent = "Divide";
            break;
    }
});

// 四則運算分開寫成函式
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Division by zero is not allowed!");
        return null;
    }
    return a / b;
}

// 按下按鈕計算
calcBtn.addEventListener("click", function () {
    const n1 = parseFloat(num1Input.value);
    const n2 = parseFloat(num2Input.value);

    // 檢查輸入是否合法
    if (isNaN(n1) || isNaN(n2)) {
        alert("Please enter valid numbers in both fields!");
        return;
    }

    let result;

    switch (operatorSelect.value) {
        case "+":
            result = add(n1, n2);
            break;
        case "-":
            result = subtract(n1, n2);
            break;
        case "*":
            result = multiply(n1, n2);
            break;
        case "/":
            result = divide(n1, n2);
            break;
    }

    // 如果 divide 回傳 null（除以 0）就不要顯示結果
    if (result === null) {
        resultP.textContent = "Result = ";
        return;
    }

    // 顯示到小數點後兩位
    resultP.textContent = "Result = " + result.toFixed(2);
});
