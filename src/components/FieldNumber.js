import React from 'react';

const opacity = (rightAnswers) => {
    if (rightAnswers === 0) return 1;

    if (rightAnswers > 1 && rightAnswers < 4) return 0.8;

    if (rightAnswers > 3 && rightAnswers < 6 ) return 0.6;

    if (rightAnswers > 5 && rightAnswers < 7) return 0.4;

    if (rightAnswers === 8) return 0.2;

    if (rightAnswers >= 9) return 0;
}

export const FieldNumber = ({
    number,
    rightAnswers,
    isLastItem,
}) => {
    const style = {opacity: opacity(isLastItem ? 0 : rightAnswers)}
    return <div className="fieldNumber" style={style}>{number}</div>
}