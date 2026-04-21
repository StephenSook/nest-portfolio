import { createElement, type ReactNode } from "react";

type HastText = { type: "text"; value: string };
type HastElement = {
  type: "element";
  tagName: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};
type HastRoot = { type: "root"; children?: HastNode[] };
type HastNode = HastText | HastElement | HastRoot;

function parseStyleString(style: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const decl of style.split(";")) {
    const colon = decl.indexOf(":");
    if (colon === -1) continue;
    const key = decl.slice(0, colon).trim();
    const value = decl.slice(colon + 1).trim();
    if (!key || !value) continue;
    const camel = key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[camel] = value;
  }
  return out;
}

function renderNode(node: HastNode, key: string): ReactNode {
  if (node.type === "text") return node.value;
  if (node.type === "root") {
    return (node.children ?? []).map((child, i) =>
      renderNode(child, `${key}-${i}`),
    );
  }

  const props: Record<string, unknown> = { key };
  const rawProps = node.properties ?? {};
  for (const [name, value] of Object.entries(rawProps)) {
    if (value === undefined || value === null || value === false) continue;
    if (name === "className") {
      props.className = Array.isArray(value) ? value.join(" ") : String(value);
    } else if (name === "style" && typeof value === "string") {
      props.style = parseStyleString(value);
    } else {
      props[name] = value;
    }
  }

  const children = (node.children ?? []).map((child, i) =>
    renderNode(child, `${key}-${i}`),
  );

  return createElement(node.tagName, props, ...children);
}

export function hastToReact(ast: unknown): ReactNode {
  return renderNode(ast as HastNode, "r");
}
