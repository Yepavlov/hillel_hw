import * as Yup from 'yup';

export const userSchema = Yup.object({
  name: Yup.string().min(2, 'Min 2 characters long').required('Required field'),
  username: Yup.string().required('Required field'),
  email: Yup.string().email('Invalid email').required('Required field'),
  phone: Yup.string().required('Required field'),
  website: Yup.string().required('Required field'),
  city: Yup.string().required('Required field'),
  street: Yup.string().required('Required field'),
  companyName: Yup.string().required('Required field'),
});
