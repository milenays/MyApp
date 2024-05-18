import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products() {
  const { data, error } = useSWR('/api/products', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
