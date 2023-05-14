export interface SNSListType {
  id: number;
  to: string;
  iconUrl: string;
  alt: string;
}

export const SNSList: SNSListType[] = [
  {
    id: 1,
    to: "https://twitter.com/yuu_a_prog",
    iconUrl: "/_nuxt/assets/images/twitter-icon.svg",
    alt: "Twitterアイコン",
  },
  {
    id: 2,
    to: "https://github.com/mrs-y-arai",
    iconUrl: "/_nuxt/assets/images/github-mark.svg",
    alt: "Githubアイコン",
  },
];
