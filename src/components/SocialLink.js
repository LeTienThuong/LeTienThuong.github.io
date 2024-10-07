import React from "react";
import {
  FacebookOutlined,
  GithubOutlined,
  GitlabOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const socialItems = [
  {
    title: "GitHub",
    url: "https://github.com/ltthuong",
    icon: <GithubOutlined />,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/letienthuong",
    icon: <LinkedinOutlined />,
  },
  {
    title: "GitLab",
    url: "https://gitlab.com/letienthuong",
    icon: <GitlabOutlined />,
  },
];

function SocialLink() {
  return socialItems.map((item) => (
    <a
      href={item.url}
      title={item.title}
      target="_blank"
      className="mx-1 text-lg"
    >
      {item.icon}
    </a>
  ));
}

export default SocialLink;
