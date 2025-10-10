import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarProvider,
} from "../ui/sidebar";
import { useEffect, useState } from "react";

interface Props {
  groupedArticles: Record<
    string,
    Array<{ titleSideBar: string; slug: string }>
  >;
  children: React.ReactNode;
}

const SideBar = ({ groupedArticles, children }: Props) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const basePath = ["articles", "contributing"].includes(
    currentPath.split("/")[1]
  )
    ? currentPath.split("/")[1]
    : "articles";

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <SidebarProvider className="flex">
      <Sidebar>
        <SidebarContent className="p-6">
          <SidebarGroup className="p-0">
            <a
              href="/"
              className="text-gray font-medium text-sm px-0 no-underline"
            >
              unaLineaMas
            </a>
            <SidebarGroupContent>
              <SidebarGroupContent className="px-3">
                {Object.entries(groupedArticles).map(([category, articles]) => (
                  <SidebarGroupContent key={category}>
                    <SidebarGroupLabel className="text-gray font-medium text-sm px-0">
                      {category}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                      {articles.map((article) => (
                        <SidebarGroupContent key={article.slug}>
                          <a
                            href={`/${basePath}/${article.slug}`}
                            className={
                              currentPath === `/${basePath}${article.slug}`
                                ? "text-gray text-sm px-0 underline font-normal"
                                : "text-gray text-sm px-0 no-underline hover:underline font-normal"
                            }
                          >
                            {article.titleSideBar}
                          </a>
                        </SidebarGroupContent>
                      ))}
                    </SidebarGroupContent>
                  </SidebarGroupContent>
                ))}
              </SidebarGroupContent>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="mt-10 hide-scrollbar lg:px-5 pb-10">{children}</main>
    </SidebarProvider>
  );
};

export default SideBar;
