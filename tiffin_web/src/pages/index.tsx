import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout/Layout";

export const Home: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Home</h1>
          <button
            className="primaryButton"
            onClick={() => {
              router.push("/");
            }}
          >
            Register
          </button>
          <button
            className="primaryButton"
            onClick={() => {
              router.push("/Login");
            }}
          >
            Login
          </button>
          <button
            className="primaryButton"
            onClick={() => {
              router.push("/");
            }}
          >
            Tiffin
          </button>
        </main>
      </Layout>
    </>
  );
};

export default Home;
