import {GetStaticProps} from 'next';

export default function Post () {
  return (
    <h1>Post</h1>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

}
