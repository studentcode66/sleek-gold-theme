
import { ContentLayout } from '@/components/layouts/ContentLayout';
import { Calendar } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Art of Premium T-Shirt Design',
    excerpt: 'Discover the craftsmanship behind our premium collections.',
    date: '2024-02-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Sustainable Fashion: Our Commitment',
    excerpt: 'How we're making a difference in sustainable fashion.',
    date: '2024-02-10',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Style Guide: Elevating Basic Wear',
    excerpt: 'Tips and tricks to style your essential pieces.',
    date: '2024-02-05',
    readTime: '6 min read',
  },
];

const Blog = () => {
  return (
    <ContentLayout>
      <div className="text-center mb-16 animate-fade-up">
        <h1 className="font-lora text-4xl md:text-5xl mb-6">Our Journal</h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          Stories, style tips, and behind-the-scenes glimpses.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden group hover:bg-white/10 transition-colors"
          >
            <div className="aspect-[16/10] relative">
              <img
                src="/placeholder.svg"
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-white/60 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-lora text-xl mb-3 group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-white/60 mb-4">{post.excerpt}</p>
              <a href="#" className="text-gold hover:underline">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </ContentLayout>
  );
};

export default Blog;
