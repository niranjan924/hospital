export const dynamic = 'force-static';

type Post = { slug: string; title: string; excerpt: string; date: string; tag: string };

const posts: Post[] = [
  { slug: 'heart-health-tips', title: 'Heart Health: Everyday Tips', excerpt: 'Small lifestyle changes for a stronger heart.', date: '2025-01-10', tag: 'Cardiology' },
  { slug: 'flu-season-guide', title: 'Your Flu Season Guide', excerpt: 'Prevention, symptoms, and when to see a doctor.', date: '2025-02-05', tag: 'Primary Care' },
  { slug: 'understanding-mri', title: 'Understanding MRI Scans', excerpt: 'What to expect before, during, and after your MRI.', date: '2025-03-12', tag: 'Radiology' }
];

export default function BlogPage() {
  return (
    <>
      <h1>Hospital Blog</h1>
      <p className="lead">News, tips, and education from our care teams.</p>

      <div className="card-grid">
        {posts.map(post => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="card" style={{ display: 'block' }}>
            <div className="badge">{post.tag}</div>
            <h3>{post.title}</h3>
            <p className="muted">{post.excerpt}</p>
            <small className="muted">{new Date(post.date).toLocaleDateString()}</small>
          </a>
        ))}
      </div>
    </>
  );
}


