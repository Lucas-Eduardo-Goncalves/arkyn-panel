import {
  Divider,
  DrawerContainer,
  DrawerHeader,
  TabButton,
  TabContainer,
  useScopedParams,
} from "@arkyn/components";
import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";

import type { HttpTrafficLoader } from "~/client/types/httpTrafficLoader";
import { DetailsView } from "../detailsTable";
import { HeadersView } from "../headersView";
import { JsonView } from "../jsonView";
import { DrawerContent } from "./styles";

function Request() {
  const { httpTrafficRecord } = useLoaderData<HttpTrafficLoader>();
  if (!httpTrafficRecord?.request) return null;

  const { bodyPreview, headers, queryParams } = httpTrafficRecord.request;

  return (
    <>
      <HeadersView title="Request headers" data={headers} />
      <Divider />
      <JsonView title="Request params" data={queryParams} />
      <Divider />
      <JsonView title="Request body" data={bodyPreview} />
    </>
  );
}

function Response() {
  const { httpTrafficRecord } = useLoaderData<HttpTrafficLoader>();
  if (!httpTrafficRecord?.response) return null;

  const { bodyPreview, headers } = httpTrafficRecord.response;
  return (
    <>
      <HeadersView title="Response headers" data={headers} />
      <Divider />
      <JsonView title="Response body" data={bodyPreview} />
    </>
  );
}

function HttpTrafficRecord() {
  const { httpTrafficRecord } = useLoaderData<HttpTrafficLoader>();
  const [tab, setTab] = useState("request");

  const location = useLocation();
  const navigate = useNavigate();
  const scopedParams = useScopedParams(location.search);

  function handleClose() {
    navigate(scopedParams.getScopedSearch({ httpTrafficId: undefined }));
  }

  return (
    <DrawerContainer
      orientation="right"
      isVisible={!!httpTrafficRecord}
      makeInvisible={handleClose}
    >
      <DrawerHeader>Http traffic record</DrawerHeader>
      <DrawerContent>
        <DetailsView />
        <Divider />
        <Request />
        <Divider />
        <Response />
      </DrawerContent>
    </DrawerContainer>
  );
}

export { HttpTrafficRecord };
