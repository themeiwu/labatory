import { SITE_CONFIG } from "data/config";

type Lang = "zh" | "en";

export const locale: {
  [key: string]: {
    [key in Lang]: string;
  };
} = {
  siteTitle: {
    ...SITE_CONFIG.title,
  },
  homepage: {
    zh: "主页",
    en: "Homepage",
  },
  language: {
    zh: "切换语言",
    en: "Change Language",
  },
  life: {
    zh: "生活",
    en: "Life",
  },
  techArchives: {
    zh: "日志",
    en: "Tech Posts",
  },
  postTitle: {
    zh: "文章标题",
    en: "Post Title",
  },
  whatsnew: {
    zh: "What's UP?",
    en: "What's Up?",
  },
  button2: {
    zh: "按钮2",
    en: "Link 2",
  },
  button3: {
    zh: "按钮3",
    en: "Link 3",
  },
  about: {
    zh: "关于",
    en: "About",
  },
  postCategory: {
    zh: "文章分类",
    en: "Category",
  },
  postDate: {
    zh: "发布日期",
    en: "Create Date",
  },
  tags: {
    zh: "标签",
    en: "Tags",
  },
  postTags: {
    zh: "相关标签",
    en: "Tags",
  },
  posts: {
    zh: "文章",
    en: "Posts",
  },
  categories: {
    zh: "分类",
    en: "Categories",
  },
  github: {
    zh: "LEGACY",
    en: "LEGACY",
  },
  documents: {
    zh: "原站",
    en: "legacy",
  },
  demo: {
    zh: "GITHUB",
    en: "GITHUB",
  },
  loading: {
    zh: "正在加载",
    en: "Loading",
  },
  recentPosts: {
    zh: "最近文章",
    en: "Recent Posts",
  },
  aboutThisArticle: {
    zh: "关于本文",
    en: "About this article",
  },
  messager: {
    zh: "留言板",
    en: "Messager",
  },
  contentList: {
    zh: "目录",
    en: "TOC",
  },
  noDataFound: {
    zh: "没有数据可以显示",
    en: "No Data Found",
  },
};
