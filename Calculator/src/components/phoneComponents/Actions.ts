interface CalculatorProps {
    value: string;
    symbol: string;
    setValue: (value: string | ((prevValue: string) => string)) => void;
}

const operations: string[] = ['%', '÷', '**', 'X', '-', '+', '.']

export const calculatorFunctionalities = ({ setValue, symbol, value }: CalculatorProps) => {
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
            if(symbol === '**'){
                if (lastTwoChars === '**') {
                    return prevValue;
                }
                if (operations.includes(lastChar) && lastChar !== '**') {
                    return prevValue.slice(0, -1) + symbol;
                }
                return prevValue + symbol;
            }
            if (operations.includes(lastChar)) {
                console.log('a fost apelat')
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
    } else if (symbol === '=') {
        const result = eval(value.replace('X', '*').replace('÷', '/'));
        setValue(String(result));
    } else {
        setValue((prevValue: string) =>
            prevValue === '0' && symbol !== '.' ? symbol : prevValue + symbol
        );
    }
}