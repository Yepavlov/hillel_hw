перевірте через Object.isSealed(user)
Виведіть у консоль:
дескриптори всіх полів (Object.getOwnPropertyDescriptors)
результат спроби:
додати нове поле після lockProfile
змінити createdAt
видалити fullName
Критерії приймання

fullName коректно працює в обидва боки (get/set).
Службові поля не потрапляють у Object.keys(user).
createdAt не змінюється.
Після lockProfile нові поля не додаються, існуючі не видаляються.
Бонус

Зробіть версію lockHard(), яка використовує Object.freeze(user), і порівняйте поведінку із seal.