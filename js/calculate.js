let currentInput = '';
        let operator = '';
        let firstOperand = '';
        let secondOperand = '';

        function appendNumber(number) {
            if (operator === '') {
                firstOperand += number;
                currentInput = firstOperand;
            } else {
                secondOperand += number;
                currentInput = secondOperand;
            }
            document.getElementById('display').value = currentInput;
        }

        function appendOperator(op) {
            if (firstOperand !== '') {
                operator = op;
                currentInput = '';
            }
        }

        function calculate() {
            let result;
            const first = parseFloat(firstOperand);
            const second = parseFloat(secondOperand);

            if (isNaN(first) || isNaN(second)) return;

            switch (operator) {
                case '+':
                    result = first + second;
                    break;
                case '-':
                    result = first - second;
                    break;
                case '*':
                    result = first * second;
                    break;
                case '/':
                    result = first / second;
                    break;
                default:
                    return;
            }

            document.getElementById('display').value = result;
            firstOperand = result.toString();
            operator = '';
            secondOperand = '';
        }

        function backspace() {
            if (operator === '') {
                firstOperand = firstOperand.slice(0, -1);
                currentInput = firstOperand;
            } else {
                secondOperand = secondOperand.slice(0, -1);
                currentInput = secondOperand;
            }
            document.getElementById('display').value = currentInput;
        }