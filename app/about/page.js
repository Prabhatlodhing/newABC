"use client";

import useFetch from "../hook/query/useFetch";

export default function AboutPage() {
  const { data: posts, isLoading, error } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
    queryKey: ["posts"],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <p className="text-gray-600">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <p className="text-red-600">Error: {error.message || "Failed to load posts"}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <p className="text-gray-600 mb-8">Displaying {posts?.length || 0} posts from JSONPlaceholder API</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <div key={post.id} className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">ID: {post.id}</span>
              <span className="text-xs text-gray-500">User {post.userId}</span>
            </div>
            <h2 className="text-lg font-semibold mb-3 text-gray-800 capitalize line-clamp-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
