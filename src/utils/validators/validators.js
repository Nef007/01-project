export const required = value => {

    if(value) return undefined;

    return "field is required"
}



export const maxLengthCreator =(maxLength) => value => {

    if(value && value.length > maxLength) return "Максимальная длина 30 символов";

    return undefined;
}