"use client";
import apiClient from "@/libs/api";
import { useEffect, useState } from "react";
import { Space, Table, Button } from "antd";

const { Column } = Table;

export default function Dashboard() {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const apikey = searchParams.get("apikey");
      const pubId = searchParams.get("pubId");

      if (apikey && pubId) {
        console.log("apikey00", apikey);
        console.log("pubId00", pubId);

        const { data } = await apiClient.post("/submit", {
          apiKey: apikey,
          pubId: pubId,
        });

        setTableData(data.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Subscriptions</h1>
      <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
        <Button type="primary">Check Emails</Button>
        <Button type="primary">Update Emails</Button>
      </div>

      {tableData && (
        <Table dataSource={tableData}>
          <Column title="ID" dataIndex="id" key="ID" />
          <Column title="EMAIL" dataIndex="email" key="email" />
          <Column title="STATUS" dataIndex="status" key="status" />
          <Column title="CREATED" dataIndex="created" key="created" />
          <Column
            title="SUBSCRIPTION TIER"
            dataIndex="subscription_tier"
            key="subscription_tier"
          />
          <Column title="UTM SOURCE" dataIndex="utm_source" key="utm_source" />
          <Column
            title="CREATED"
            key="created"
            render={(_, record) => (
              <Space size="middle">
                {new Date(record.created * 1000).toLocaleDateString()}
              </Space>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={() => <Button type="dashed">Check Email</Button>}
          />
        </Table>
      )}
    </div>
  );
}
