function AngleChanger(angle, status) {
    if (status === "DEG") {
        if (angle >= 360) {
            angle %= 360;
        }
        angle = (angle * Math.PI) / 180;
    } else if (status === "GRAD") {
        if (angle >= 400) {
            angle %= 400;
        }
        angle = (angle * Math.PI) / 200;
    } else {
        if (angle >= (2 * Math.PI)) {
            angle %= (2 * Math.PI);
        }
    }
    return angle;
}

function ValueChanger(angle, status) {
    if (status === "DEG") {
        angle *= 180 / Math.PI;
    } else if (status === "GRAD") {
        angle *= 200 / Math.PI;
    }
    return angle;
}

// Trigonometric Function
function Sine(angle, Status) {
    angle = AngleChanger(angle, Status);
    return Math.sin(angle);
}

function Cosine(angle, Status) {
    angle = AngleChanger(angle, Status);
    return Math.cos(angle);
}

function Tangent(angle, Status) {
    angle = AngleChanger(angle, Status);
    let tempValue = Math.tan(angle);
    if (tempValue > -58.0 && tempValue < 58.0) {
        return tempValue;
    } else {
        return NaN;
    }
}

function Cot(angle, Status) {
    let tempValue = Tangent(angle, Status);
    if (isNaN(tempValue)) {
        return 0;
    }
    return 1 / tempValue;
}

function Sec(angle, Status) {
    return 1 / Cosine(angle, Status);
}

function Cosec(angle, Status) {
    return 1 / Sine(angle, Status);
}

// Inverse Trigonometric Function
function SineInverse(angle, Status) {
    let temp = Math.asin(angle);
    return ValueChanger(temp, Status);
}

function CosineInverse(angle, Status) {
    let temp = Math.acos(angle);
    return ValueChanger(temp, Status);
}

function TangentInverse(angle, Status) {
    let temp = Math.atan(angle);
    return ValueChanger(temp, Status);
}

function CotInverse(angle, Status) {
    return TangentInverse(1 / angle, Status);
}

function SecInverse(angle, Status) {
    return CosineInverse(1 / angle, Status);
}

function CosecInverse(angle, Status) {
    return SineInverse(1 / angle, Status);
}

// Hyperbolic Function
function SineHyp(angle) {
    return Math.sinh(angle);
}

function CosineHyp(angle) {
    return Math.cosh(angle);
}

function TangentHyp(angle) {
    return Math.tanh(angle);
}

function CotHyp(angle) {
    return 1 / TangentHyp(angle);
}

function SecHyp(angle) {
    return 1 / CosineHyp(angle);
}

function CosecHyp(angle) {
    return 1 / SineHyp(angle);
}

// Inverse Hyperbolic Function
function SineHypInverse(angle) {
    return Math.asinh(angle);
}

function CosineHypInverse(angle) {
    return Math.acosh(angle);
}

function TangentHypInverse(angle) {
    return Math.atanh(angle);
}

function CotHypInverse(angle) {
    return 1 / TangentHypInverse(angle);
}

function SecHypInverse(angle) {
    return CosineHypInverse(1 / angle);
}

function CosecHypInverse(angle) {
    return SineHypInverse(1 / angle);
}
