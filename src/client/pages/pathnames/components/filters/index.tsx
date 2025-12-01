import {
  Button,
  DrawerContainer,
  DrawerHeader,
  Input,
  Select,
  useDrawer,
  useScopedParams,
} from "@arkyn/components";
import { Search } from "lucide-react";
import { useLocation } from "react-router";

import { DrawerContent } from "./styles";

function Filters() {
  const { drawerIsOpen, closeDrawer } = useDrawer("pathname-filters-drawer");

  const location = useLocation();
  const scopedParams = useScopedParams(location.search);

  return (
    <DrawerContainer
      isVisible={drawerIsOpen}
      makeInvisible={closeDrawer}
      orientation="right"
    >
      <DrawerHeader>Filter domains:</DrawerHeader>
      <DrawerContent method="get">
        <Input
          label="Value:"
          name="value"
          leftIcon={Search}
          placeholder="Write here..."
          defaultValue={scopedParams.getParam("value")}
        />

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

        <Button onClick={closeDrawer}>Apply</Button>
      </DrawerContent>
    </DrawerContainer>
  );
}

export { Filters };
