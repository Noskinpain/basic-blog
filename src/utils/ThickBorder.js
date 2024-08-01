import className from "classnames";

const ThickBorder = ({
  aboutBorder,
  QuickLinkBorder,
  tagsBorder,
  newsletterBorder,
  hotTopicsBorder,
  categoriesBorder,
}) => {
  const classes = className("bg-gray-200", {
    "w-36 h-[1px] ": QuickLinkBorder,
    "w-48 h-[1px]": aboutBorder || tagsBorder,
    "w-56 h-[1px]": newsletterBorder,
    "w-full h-[1px]": hotTopicsBorder,
  });

  return (
    <div className="flex pt-1 items-end">
      <div className="bg-black w-12 h-[3px]"></div>
      <div className={classes}></div>
    </div>
  );
};
export default ThickBorder;
