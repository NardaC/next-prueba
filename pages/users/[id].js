import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";

import Layout from "../../Components/Layout";
import Head from "next/head";

const User = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Head>
        <title>
          {user.first_name} {user.last_name}
        </title>
        <meta name="description" content={user.first_name}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={user.first_name} />
        <meta property="og:description" content={user.first_name} />
        <meta property="og:image" content={user.avatar} />
        <meta property="og:site_name" content="La Ganga" />
        <meta property="og:url" content={`${user.id}`} /> 
        <meta name="twitter:card" content="summary" /> 
        <meta name="twitter:title" content={user.first_name} />
        <meta name="twitter:description" content={user.first_name} />
        <meta name="twitter:image" content={user.avatar} />
        <meta name="twitter:site" content="@JudithCristinaQ" />
        <meta name="twitter:creator" content="@JudithCristinaQ" />
      </Head>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={user.avatar}
                alt={user.first_name + " " + user.last_name}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {user.id}. {user.first_name} {user.last_name}
              </h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

User.getInitialProps = async (ctx) => {
  // console.log(ctx.query.id)
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  // console.log(resJSON);
  return { user: resJSON.data };
};

export default User;
