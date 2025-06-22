import { useEffect, useState } from 'react';
import { BlogArticleCard } from './BlogArticleCard';

interface BlogPost {
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
}

export const BlogArticles = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `
          query {
            publication(host: "blog.femidev.com") {
              posts(first: 10) {
                edges {
                  node {
                    title
                    brief
                    slug
                    publishedAt
                    coverImage {
                      url
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ query })
        });

        const data = await response.json();
        const posts = data.data.publication.posts.edges.map((edge: any) => edge.node);
        setPosts(posts);
      } catch (err) {
        setError('Failed to fetch blog posts');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="text-text">Loading articles...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const latestPosts = posts.slice(0, 2);
  const remainingPosts = posts.slice(2, 5);

  return (
    <div className="space-y-20">
      {/* First row - Latest blog posts */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-text">Latest blog posts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
            <BlogArticleCard key={post.slug} post={post} height="large" />
          ))}
        </div>
      </div>

      {/* Second row - More posts */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-4xl font-bold text-text">More posts</h2>
          <a
            href="https://blog.femidev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-semibold hover:underline text-2xl flex items-center gap-2"
          >
            Discover more content →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:gap-6">
          {remainingPosts.map((post) => (
            <BlogArticleCard
              key={post.slug}
              post={post}
              height="small"
              showDate={false}
              showReadMore={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 