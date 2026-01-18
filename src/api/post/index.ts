export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function fetchPostList(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await res.json();

  return data;
}

export async function fetchPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data: Post = await res.json();

  // return data;

  return new Promise<Post>((resolve, _reject) => {
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
}
