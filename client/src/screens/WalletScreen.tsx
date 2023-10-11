import React from "react";
import { Layout, Text, Card } from "@ui-kitten/components";

const WalletScreen = () => {
  return (
    <Layout>
      <Card>
        <Text category="h4">Balance: </Text>
        <Text category="h6">P 10,000 </Text>
        <Text category="p" style={{ alignItems: "flex-end" }}>
          {new Date().toDateString()}
        </Text>
      </Card>
    </Layout>
  );
};

export default WalletScreen;
