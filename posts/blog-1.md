---
title: 'Blog One'
date: 2021-08-13T12:11:52.239Z
excerpt: 'This is blog one.'
---
# This is blog one content

A line with an `console.log('inline code example');`.

## Code Sample

```js
export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
```
