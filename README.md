In progress:  [Next.js](https://nextjs.org/) project using [Typescript](https://www.typescriptlang.org/), [Styled Components](https://styled-components.com/), [Contentful's GraphQL API](https://www.contentful.com/developers/docs/references/graphql/) and [Apollo](https://www.apollographql.com/).

## Static Generation
The portfolio and its contents are statically pre-rendered and revalidated every 24 hours. <br/>
To do so, the following steps are being followed:

Respective files:
1. [Project Page](pages/project/[slug].tsx)
2. [GraphQL](app/lib/api)

### First step

Within `getStaticPaths`, fetch all project identifiers to tell Next.js what params to expect/pre-render:

```typescript
export const getStaticPaths = async () => {
    const slugs = await getProjectSlugs();

    const paths = slugs.map(item => ({
        params: { slug: item.slug },
    }));

    // Pre-render only fetched paths at build time.
    // Server-side render on demand if the path doesn't exist.
    return { paths, fallback: "blocking" };
};
```
```typescript
// query.ts
export const PROJECT_SLUGS = gql`
    query GetProjectSlugs {
        projectCollection {
            items {
                slug
            }
        }
    }
`;

// slugs.ts
export const getProjectSlugs = async (): Promise<Projects.ProjectSlug[]> => {
    const { data } = await client.query<ProjectSlugsCollection>({ query: PROJECT_SLUGS });
    return extractProjectsSlugsCollection(data);
};
```

### Second step

Within `getStaticProps`, use `params` to fetch the respective product on build:
```typescript
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug;

    if (!slug || "string" !== typeof slug) {
        return {
            notFound: true,
        };
    }

    const project = await getProjectBySlug(slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: { project },
        revalidate: 60 * 60 * 24,
    };
};
```

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
