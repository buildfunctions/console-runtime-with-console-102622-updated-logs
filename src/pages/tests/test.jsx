// import Layout from "../layout/Layout";
import { useRef } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import TokenBlock from '../../components/Blocks/MDX.TokenBlock'
import CopyApiTokenButton from '../../components/Buttons/CopyApiTokenButton'

function Index({ data })  {
    const activeToken = String(data.buildfunction_api_token)
    return (
        <Layout title={"Home"}>
            Here is your api token: 
            <br />
            {/* {JSON.stringify(data, null, 2)} */}
            <TokenBlock>
              <span className="ml-20 mr-20">{activeToken}</span>
            </TokenBlock>
            <span className="ml-20 mr-20">
            </span>
              <CopyApiTokenButton value={activeToken} ariaLabel="Copy API Token" />
            <input type="hidden" value={activeToken} />
            {/* {JSON.stringify(data.buildfunction_api_token)} */}
        </Layout>
    )
};


const projectName = 'functionss';
const projectUrl = "http://localhost:3000/api/tokens/" + projectName;
Index.getInitialProps = async () => {
  const resp = await fetch(projectUrl, {
    method: "POST",
  });
  const data = await resp.json();
  return { data };
};

export default Index;

function Layout ({children}) {
  return (
    <div>
      {children}
    </div>
  );
}