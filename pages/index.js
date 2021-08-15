import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import { getAllPosts } from './lib/data';
// import { data } from 'autoprefixer';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>mckeeh3 Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='space-y-4'>
        {posts.map((post) => (
          <ListBlogItem key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}

function ListBlogItem({ slug, title, date, excerpt }) {
  return (
    <div className='border border-gray-100 shadow hover:shadow-md rounded-lg hover:border-gray-200 p-4 transition duration-200 ease-in'>
      <div>
        <Link href={`/blog/${slug}`}>
          <a className='text-lg font-bold'>{title}</a>
        </Link>
      </div>
      <div className='text-gray-600 text-xs'>{format(new Date(date), 'MMM d, yyyy')}</div>
      <div className='pt-2'>{excerpt}</div>
    </div>
  );
}

export async function getStaticProps(context) {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}
