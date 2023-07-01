export interface SNSListType {
  id: number;
  to: string;
  iconName: string;
}

export const SNSList: SNSListType[] = [
  {
    id: 1,
    to: "https://twitter.com/yuu_a_prog",
    iconName: "IconTwitter",
  },
  {
    id: 2,
    to: "https://github.com/mrs-y-arai",
    iconName: "/_nuxt/assets/images/github-mark.svg",
  },
];
