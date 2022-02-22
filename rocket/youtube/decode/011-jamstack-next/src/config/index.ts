const { NEXT_PUBLIC_BLOG_URL } = process.env;

const isServerSide = typeof window === "undefined";
const isClientSide = !isServerSide;

const environment = {
  isServerSide,
  isClientSide,
};

const apiEndpoints = {
  blog: NEXT_PUBLIC_BLOG_URL ?? "https://blog-joao-testing.com",
};

export const config = { environment, apiEndpoints };
