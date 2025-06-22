import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
}

interface BlogArticleCardProps {
  post: BlogPost;
  height?: 'small' | 'large';
  showDate?: boolean;
  showReadMore?: boolean;
}

export const BlogArticleCard = ({
  post,
  height = 'large',
  showDate = true,
  showReadMore = true
}: BlogArticleCardProps) => {
  const imageHeight = height === 'small' ? 'min-h-[150px]' : 'min-h-[250px]';
  const titleSize = height === 'small' ? 'text-2xl' : 'text-3xl';
  const dateSize = height === 'small' ? 'textC-xs' : 'textC-sm';
  const padding = height === 'small' ? 'p-4' : 'p-6';

  return (
    <article
      className={`cursor-pointer relative group rounded-2xl border border-black ${padding} flex flex-col gap-3 bg-background-light`}
      onClick={() => window.open(`https://blog.femidev.com/${post.slug}`, '_blank')}
    >
      <div className={`relative w-full overflow-hidden border border-black/20 rounded-lg aspect-[2/1] ${imageHeight}`}>
        <motion.div
          whileHover={{ scale: 1.125 }}
          className="absolute h-full w-full rounded-lg"
          style={{ transformOrigin: 'center' }}
        >
          {post.coverImage ? (
            <img
              src={post.coverImage.url}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No image</span>
            </div>
          )}
        </motion.div>
      </div>

      <div className="flex flex-col w-full">
        <h3 className={`${titleSize} font-bold text-text mb-2 line-clamp-2`}>{post.title}</h3>
        {showDate && (
          <span className={`${dateSize} text-text/60 mb-2`}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        )}

        {showReadMore && (
          <div className="mt-auto flex justify-end">
            <a
              href={`https://blog.femidev.com/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-semibold hover:underline text-xl"
            >
              Read more →
            </a>
          </div>
        )}
      </div>
    </article>
  );
}; 