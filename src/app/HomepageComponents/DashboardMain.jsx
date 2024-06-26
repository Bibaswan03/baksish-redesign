import React from "react";
import TopBanner from "./TopBanner";
//import WhatWeDo from "./WhatWeDo";
import Layout from "../Components/Layout";
import WhatWeDo from "./WhatWeDo";

function DashboardMain() {
  return (
    <Layout>
      <TopBanner />
      <div id="content-section">
        {/* Your content goes here */}
      </div>
      <WhatWeDo />
    </Layout>
  );
}

export default DashboardMain;
