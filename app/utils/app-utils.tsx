export const upperCase = (value: any) => {
    return value === undefined ? '' : value.toUpperCase()
}
export const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
};