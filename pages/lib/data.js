import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllPosts = () => {
  return fs.readdirSync(postsDirectory).map((file) => {
    const fileContent = fs.readFileSync(path.join(postsDirectory, file), 'utf8');
    const { data, content } = matter(fileContent);
    return {
      data,
      content,
      slug: file.replace('.md', ''),
    };
  });
};
