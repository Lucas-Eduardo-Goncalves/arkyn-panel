import type { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
  plain: {
    backgroundColor: "var(--card-foreground-primary)",
    color: "#475569",
    fontWeight: "500",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#94a3b8",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#475569",
      },
    },
    {
      types: ["namespace"],
      style: { opacity: 0.7 },
    },
    {
      types: ["tag", "operator"],
      style: {
        color: "#116ddc",
      },
    },
    {
      types: ["number"],
      style: {
        color: "#f97316",
      },
    },
    {
      types: ["property"],
      style: {
        color: "#0ea5e9",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#10b981",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#f43f5e",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#0ea5e9",
      },
    },
    {
      types: ["boolean", "string", "entity", "url", "attr-value"],
      style: {
        color: "#10b981",
      },
    },
    {
      types: [
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
      ],
      style: {
        color: "rgb(var(--spotlight-primary))",
      },
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "rgb(var(--spotlight-primary))",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
        color: "rgb(var(--spotlight-danger))",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
        color: "rgb(var(--spotlight-success))",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "rgb(var(--spotlight-warning))",
        fontWeight: "bold",
      },
    },
  ],
};
export { theme };
