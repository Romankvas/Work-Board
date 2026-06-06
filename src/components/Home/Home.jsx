import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await fetch("https://kndx3cr6-3000.euw.devtunnels.ms/api/products");
  if (!response.ok) throw new Error("Помилка завантаження!");
  return response.json();
};

function Posts() {
   const { data, error, isLoading } = useQuery(
        {
            queryKey: ['posts'],
            queryFn: fetchPosts
        }
    )

  if (isLoading) return <p>⏳ Завантаження...</p>;
  if (error) return <p>❌ Помилка: {error.message}</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.name} - {post.price}</li>
      ))}
    </ul>
  );
}


export default Posts;
