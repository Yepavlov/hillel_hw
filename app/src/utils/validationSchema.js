import * as Yup from 'yup';

export const productValidationSchema = Yup.object({
  name: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
  description: Yup.string()
    .min(10, 'Minimum 10 characters')
    .required('Required'),
  price: Yup.number().positive('Must be greater than 0').required('Required'),
  discountPrice: Yup.number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .lessThan(Yup.ref('price'), 'Discount cannot exceed regular price')
    .nullable(),
  category: Yup.string().required('Required'),
  brand: Yup.string().required('Required'),
  sku: Yup.string().required('Required'),
  stock: Yup.number().min(0, 'Cannot be negative').required('Required'),
  imageUrl: Yup.string().url('Must be a valid URL').required('Required'),
});
