export const obtainDiferenceByYear = (year) => {
    return new Date().getFullYear() - year;
};

export const calculateBrand = (brand) => {
    let increment;
    switch (brand) {
        case 'europeo':
            increment = 1.30;
            break;
        case 'americano':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        default:
            break;
    }
    return increment;
};

export const calculatePlan = (plan) => {
    return plan === "basico" ? 1.20 : 1.50;
};

export const firstLetterUpper = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};