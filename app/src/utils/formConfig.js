export const productFormFields = [
  {
    name: 'name',
    label: 'Product Name',
    type: 'text',
    placeholder: 'Enter product name',
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    as: 'textarea',
  },
  { name: 'price', label: 'Price', type: 'number' },
  { name: 'discountPrice', label: 'Discount Price', type: 'number' },
  {
    name: 'category',
    label: 'Category',
    type: 'select',
    options: ['Electronics', 'Clothing', 'Home'],
  },
  { name: 'brand', label: 'Brand', type: 'text' },
  { name: 'sku', label: 'SKU', type: 'text' },
  { name: 'stock', label: 'Stock Quantity', type: 'number' },
  { name: 'imageUrl', label: 'Main Image URL', type: 'text' },
  { name: 'isActive', label: 'Active Product', type: 'checkbox' },
  { name: 'inStock', label: 'In Stock', type: 'checkbox' },
  { name: 'showOnHome', label: 'Show on Home Page', type: 'checkbox' },
];

export const initialValues = {
  name: '',
  description: '',
  price: '',
  discountPrice: '',
  category: '',
  brand: '',
  sku: '',
  stock: 0,
  imageUrl: '',
  isActive: true,
  inStock: true,
  showOnHome: false,
};
