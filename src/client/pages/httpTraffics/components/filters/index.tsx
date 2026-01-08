import {
  Button,
  DrawerContainer,
  DrawerHeader,
  Select,
  useDrawer,
  useScopedParams,
} from "@arkyn/components";
import { useLocation, useNavigate } from "react-router";

import { DrawerContent } from "./styles";

function Filters() {
  const { drawerIsOpen, closeDrawer } = useDrawer(
    "http-traffic-filters-drawer"
  );

  const navigate = useNavigate();
  const location = useLocation();
  const scopedParams = useScopedParams(location.search);

  function handleClearFilters() {
    navigate(location.pathname);
    closeDrawer();
  }

  return (
    <DrawerContainer
      isVisible={drawerIsOpen}
      makeInvisible={closeDrawer}
      orientation="right"
    >
      <DrawerHeader>Filter domains:</DrawerHeader>
      <DrawerContent method="get">
        {/* <Input
          label="Log identifier:"
          name="id"
          defaultValue={scopedParams.getParam("id") || ""}
        /> */}

        <Select
          label="Status:"
          name="status"
          isSearchable
          defaultValue={scopedParams.getParam("status") || ""}
          options={[
            { label: "200 - OK", value: "200" },
            { label: "201 - Created", value: "201" },
            { label: "204 - No Content", value: "204" },
            { label: "400 - Bad Request", value: "400" },
            { label: "401 - Unauthorized", value: "401" },
            { label: "403 - Forbidden", value: "403" },
            { label: "404 - Not Found", value: "404" },
            { label: "500 - Internal Server Error", value: "500" },
            { label: "502 - Bad Gateway", value: "502" },
            { label: "503 - Service Unavailable", value: "503" },
            { label: "504 - Gateway Timeout", value: "504" },
          ]}
        />

        <Select
          label="Method:"
          name="method"
          defaultValue={scopedParams.getParam("method") || ""}
          options={[
            { label: "post", value: "post" },
            { label: "get", value: "get" },
            { label: "put", value: "put" },
            { label: "delete", value: "delete" },
            { label: "patch", value: "patch" },
          ]}
        />

        {/* <Select
          label="Level:"
          name="level"
          defaultValue={scopedParams.getParam("level") || ""}
          options={[
            { label: "Info", value: "info" },
            { label: "Warning", value: "warning" },
            { label: "Fatal", value: "fatal" },
          ]}
        /> */}

        <Select
          label="Items per page:"
          name="pageLimit"
          defaultValue={scopedParams.getParam("pageLimit") || "10"}
          options={[
            { label: "1", value: "1" },
            { label: "10", value: "10" },
            { label: "20", value: "20" },
            { label: "50", value: "50" },
            { label: "100", value: "100" },
          ]}
        />

        <Select
          label="Sort:"
          name="sort"
          defaultValue={scopedParams.getParam("sort") || "createdAt"}
          options={[
            { label: "Value", value: "value" },
            { label: "Protocol", value: "protocol" },
            { label: "Created at", value: "createdAt" },
          ]}
        />

        <Select
          label="Sort direction:"
          name="sortDirection"
          defaultValue={scopedParams.getParam("sortDirection") || "desc"}
          options={[
            { label: "Ascendent", value: "asc" },
            { label: "Descendent", value: "desc" },
          ]}
        />

        <div className="buttonsGroup">
          <Button onClick={closeDrawer}>Apply</Button>
          {location.search && (
            <Button
              variant="ghost"
              scheme="danger"
              type="button"
              onClick={handleClearFilters}
            >
              Clear filters
            </Button>
          )}
        </div>
      </DrawerContent>
    </DrawerContainer>
  );
}

export { Filters };
