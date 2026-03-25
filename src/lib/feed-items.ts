export type FeedItemType = "announcement" | "blog" | "deal";

export interface FeedItem {
  type: FeedItemType;
  label: string;
  href: string;
}

export const feedItems: FeedItem[] = [
  {
    type: "announcement",
    label: "Announcing our acquisition of Cliffs Towing.",
    href: "/blog/guardium-acquires-cliffs-towing",
  },
  {
    type: "blog",
    label: "10 Essential Winter Towing Tips Every Canadian Driver Should Know.",
    href: "/blog/winter-towing-tips",
  },
  {
    type: "blog",
    label: "What to Do After a Car Accident: A Step-by-Step Guide.",
    href: "/blog/what-to-do-after-accident",
  },
  {
    type: "deal",
    label: "Get a free quote for towing — no obligation.",
    href: "/book",
  },
  {
    type: "blog",
    label: "Building the Ultimate Roadside Emergency Kit.",
    href: "/blog",
  },
  {
    type: "deal",
    label: "24/7 roadside assistance — call +1 780-809-7860 anytime.",
    href: "tel:+17808097860",
  },
];
