export const REG_EXPS = {
    fullName: /^(?=.{2,80}$)[\p{L}]+(?:[ '\-][\p{L}]+){0,3}$/u,
    phone: /^\+[1-9]\d{7,14}$/,
    address: /^(?=.{2,120}$)[\p{L}\d][\p{L}\d\s.,'’\-\/#]+$/u,
};

export const ERROR_MESSAGES = {
    fullName: "Full Name is required (2-80 chars)",
    phone: "Phone number is required (e.g. +380...)",
    address: "Address is required (2-120 chars)",
};