import {
  DrawerContainer,
  DrawerHeader,
  TabButton,
  TabContainer,
  useScopedParams,
} from "@arkyn/components";
import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";

import type { HttpTrafficLoader } from "~/client/types/httpTrafficLoader";
import { DrawerContent, HeadersContainer } from "./styles";

function RequestContent() {
  const { httpTrafficRecord } = useLoaderData<HttpTrafficLoader>();
  if (!httpTrafficRecord) return <></>;

  const headers = Object.entries(JSON.parse(httpTrafficRecord.request.headers));

  return (
    <>
      <HeadersContainer>
        <strong>Headers</strong>
        {headers.map(([key, value]) => (
          <div key={key}>
            <p>{key}</p>
            <p>{String(value)}</p>
          </div>
        ))}
      </HeadersContainer>
    </>
  );
}

function ResponseContent() {
  const { httpTrafficRecord } = useLoaderData<HttpTrafficLoader>();
  if (!httpTrafficRecord) return <></>;

  const headers = Object.entries(
    JSON.parse(httpTrafficRecord.response.headers)
  );

  return (
    <>
      <HeadersContainer>
        <strong>Headers</strong>
        {headers.map(([key, value]) => (
          <div key={key}>
            <p>{key}</p>
            <p>{String(value)}</p>
          </div>
        ))}
      </HeadersContainer>
    </>
  );
}

function HttpTrafficRecord() {
  const { httpTrafficRecord } = useLoaderData<HttpTrafficLoader>();

  const location = useLocation();
  const navigate = useNavigate();
  const scopedParams = useScopedParams(location.search);

  function handleClose() {
    navigate(scopedParams.getScopedSearch({ httpTrafficId: undefined }));
  }

  const [tab, setTab] = useState("request");

  return (
    <DrawerContainer
      orientation="right"
      isVisible={!!httpTrafficRecord}
      makeInvisible={handleClose}
    >
      <DrawerHeader>Http traffic record</DrawerHeader>
      <DrawerContent>
        <TabContainer defaultValue={tab} onChange={setTab}>
          <TabButton value="request">Request</TabButton>
          <TabButton value="response">Response</TabButton>
        </TabContainer>

        {tab === "request" && <RequestContent />}
        {tab === "response" && <ResponseContent />}
      </DrawerContent>
    </DrawerContainer>
  );
}

export { HttpTrafficRecord };
