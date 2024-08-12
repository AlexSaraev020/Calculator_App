interface CalculatorProps {
    value: string;
    symbol: string | undefined;
    setValue: (value: string | ((prevValue: string) => string)) => void;
}

const operations: string[] = ['%', '÷', '**', 'X', '-', '+', '.', '/']

export const calculatorFunctionalities = ({ setValue, symbol, value }: CalculatorProps) => {
    if (!symbol) return;
    if (symbol === 'AC') {
        setValue('0');
    } else if (symbol === 'DC') {
        setValue(value.length < 2 ? '0' : value.slice(0, -1));
    } else if (operations.includes(symbol)) {
        setValue((prevValue: string) => {
            const lastChar = prevValue.slice(-1);
            const lastTwoChars = prevValue.slice(-2)
            if (prevValue === '0' && symbol === '-') {

                return '-';
            }
            if (symbol === '**') {
                if (lastTwoChars === '**') {
                    return prevValue;
                }
                if (operations.includes(lastChar) && lastChar !== '**') {
                    return prevValue.slice(0, -1) + symbol;
                }
                return prevValue + symbol;
            }

            if (operations.includes(lastChar)) {
                return prevValue.slice(0, -1) + symbol;
            }
            return prevValue + symbol;
        });
    } else if (symbol === '√') {
        setValue((prevValue) => {
            try {
                const result = eval(prevValue.replace('X', '*').replace('÷', '/'));
                if (result < 0) {
                    return 'Error';
                }
                return String(Math.sqrt(result));
            } catch (error) {
                console.error('Error calculating square root:', error);
                return 'Error';
            }
        })
    } else if (symbol === '(' || symbol === ')') {
        setValue((prevValue: string) => {
            const lastChar = prevValue.slice(-1)
            if (symbol === '(') {
                const indexOfPrev = prevValue.indexOf('(') - 1
                const valueOfIndexOfPrev = prevValue.charAt(indexOfPrev)

                if (!operations.includes(valueOfIndexOfPrev)) {
                    return prevValue + 'X' + '(';
                }
                console.log(prevValue)
                return prevValue + symbol;
            }

            if (symbol === ')') {
                if (lastChar === '(' && symbol === ')') {
                    return prevValue
                } else if (lastChar === '(' && symbol !== ')') {
                    return prevValue.slice(0, -1) + symbol
                }
                if (prevValue === '0') {
                    return '0'
                }
                if (!prevValue.includes('(') && symbol === ')') {
                    return prevValue
                }
            }

            return prevValue + symbol;
        })
    } else if (symbol === '=') {
        try {
            const result = eval(value.replace('X', '*').replace('÷', '/'));
            setValue(String(result));
        } catch (error) {
            console.error(error);
            setValue('Error')
        }
    } else {
        setValue((prevValue: string) =>
            prevValue === '0' && symbol !== '.' ? symbol : prevValue + symbol
        );
    }
}