import { useSelector } from "react-redux";
import WidgetCard from "../widgetCard/WidgetCard";

const AllWidgets = ({ setOpen, setSelectCategoryId, searchText }) => {
  const categories = useSelector((state) => state.widgets.categories);

  return (
    <div>
      {categories?.map((category) => (
        <div key={category?.id} className="space-y-4">
          <h1 className="text-1xl font-semibold m-2">{category?.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category?.widgets
              ?.filter(
                (ele) =>
                  ele.isVisible &&
                  ele.name.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((ele) => (
                <WidgetCard
                  key={ele?.id + ele?.name}
                  widget={ele}
                  category={category}
                />
              ))}

            <div
              className="flex flex-row  p-10 justify-center gap-2 cursor-pointer  border-gray-200  items-center rounded-xl border bg-card text-card-foreground shadow"
              onClick={() => {
                setOpen(true);
                setSelectCategoryId(category?.id);
              }}
            >
              <div className="font-semibold border border-dashed p-2">
                {" "}
                + Add Widget
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllWidgets;
