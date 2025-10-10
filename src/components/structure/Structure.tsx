import { File, Folder, Tree } from "../ui/file-tree";

const Estructure = () => {
  return (
    <div className="bg-background relative flex h-[280px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border">
      <Tree
        className="bg-background overflow-hidden rounded-md p-4"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ]}
        elements={ELEMENTS}
      >
        <Folder element="src" value="1">
          <Folder value="2" element="content">
            <Folder style={{marginBottom:'0px'}} element="frontend" value="3">
              <File value='react.mdx' style={{ margin: "0px" }}>react.mdx</File>
              <File isSelect value='tu-contribucion.mdx' style={{ margin: "0px" }}>tu-contribucion.mdx</File>
            </Folder>
            <Folder style={{marginBottom:'0px'}} element="backend" value="4">
              <File value='nodejs.mdx' style={{ margin: "0px" }}>nodejs.mdx</File>
              <File isSelect value='tu-contribucion.mdx' style={{ margin: "0px" }}>tu-contribucion.mdx</File>
            </Folder>
            <Folder isSelect style={{marginBottom:'0px'}} element="otra categoria" value="5">
              <File isSelect value='tu-contribucion.mdx' style={{ margin: "0px" }}>tu-contribucion.mdx</File>
            </Folder>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
};

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "content",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "frontend",
          },
          {
            id: "4",
            isSelectable: true,
            name: "backend",
          },
        ],
      },
    ],
  },
];

export default Estructure;
