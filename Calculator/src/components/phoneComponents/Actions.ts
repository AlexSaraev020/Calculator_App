interface CalculatorProps {
    value: string;
    symbol: string | undefined;
    setValue: (value: string | ((prevValue: string) => string)) => void;
}

const operations: string[] = ['%', '÷', '**', '*', '-', '+', '.', '/']

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
            if (lastChar === '(' && symbol !== '-') {
                return prevValue
            }

            if (operations.includes(lastChar)) {
                return prevValue.slice(0, -1) + symbol;
            }
            return prevValue + symbol;
        });
    } else if (symbol === '√') {
        setValue((prevValue:string) => {
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
            const lastTwoChars = prevValue.slice(-2)
            if (symbol === '(') {
                const indexOfPrev = prevValue.lastIndexOf('(');
                const valueOfIndexOfPrev = prevValue.charAt(indexOfPrev)
                if (prevValue.includes('(')) {
                    return prevValue
                }
                if (lastChar === 'X') {
                    return prevValue + symbol
                }
                if (lastChar === '.') {
                    return prevValue
                }

                if (operations.includes(lastChar) || lastTwoChars === '**') {
                    return prevValue + symbol;
                }

                if (!operations.includes(valueOfIndexOfPrev)) {
                    if (lastTwoChars === '*(') {
                        return prevValue;
                    }
                    return prevValue + '*' + '(';
                }


            }

            if (symbol === ')') {
                const indexOfPrev = prevValue.lastIndexOf(')');
                const valueOfIndexOfPrev = prevValue.charAt(indexOfPrev)

                if (prevValue.includes(')')) {
                    return prevValue
                }
                if (lastChar === '(' && symbol === ')') {
                    return prevValue
                }
                if (prevValue === '0') {
                    return '0'
                }
                if (!prevValue.includes('(') && symbol === ')') {
                    return prevValue
                }
                if (!operations.includes(valueOfIndexOfPrev)) {
                    console.log('sdafsa')
                    if (lastTwoChars === '*(') {
                        return prevValue;
                    }
                    return prevValue + symbol
                }
            }

            return prevValue + symbol;
        })
    }else if (symbol === '=') {
        const result = eval(value);
        setValue(String(result));
    } else {
        setValue((prevValue: string) =>
            prevValue === '0' && symbol !== '.' ? symbol : prevValue + symbol
        );
    }
}