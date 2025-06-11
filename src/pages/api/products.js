export default async function handler(req, res) {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  console.log('Fetched products:', data);
  res.status(200).json(data);
}
