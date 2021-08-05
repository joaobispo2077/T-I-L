import Head from 'next/head';
import { NotFound } from '../templates/NotFound';

export default function NotFound404() {
  return (
    <>
      <Head>
        <title>This page could not be found</title>
      </Head>
      <NotFound />
    </>
  );
}
