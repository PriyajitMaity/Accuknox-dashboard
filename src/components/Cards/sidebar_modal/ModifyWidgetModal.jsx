import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onSave,
  toggleWidgetVisibility,
} from "../../../redux/slices/widgetsSlice";

const ModifyWidgetModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [selectTab, setSelectTab] = useState("cspm_executive_dashboard");

  const categories = useSelector((state) => state.widgets.categories);

  const toggleVisibility = (categoryId, widgetId) => {
    dispatch(toggleWidgetVisibility({ categoryId, widgetId }));
  };

  const currCategory = categories.find((cat) => cat.id === selectTab);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Widget</SheetTitle>

          <p className="mt-2 font-semibold text-gray-600">
            Personalise your dashboard by adding the following widgets
          </p>
        </SheetHeader>
        <SheetDescription>
          <div className="w-full flex justify-around mt-4 font-bold">
            {categories?.map((item, index) => (
              <button
                className={`py-2 px-4 rounded-t-lg font-semibold cursor-pointer ${
                  selectTab === item.id
                    ? "text-indigo-700 border-b-2 border-b-indigo-700"
                    : "text-gray-700"
                }`}
                key={item?.id + index}
                onClick={() => setSelectTab(item.id)}
              >
                {item?.keyName}
              </button>
            ))}
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            {currCategory?.widgets?.map((ele) => (
              <div key={ele.id} className="p-2 border-2 rounded">
                <label
                  htmlFor={ele.id}
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={ele.isVisible}
                    onChange={() => toggleVisibility(currCategory.id, ele.id)}
                  />
                  <span className="">{ele.name}</span>
                </label>
              </div>
            ))}
          </div>
        </SheetDescription>
        <SheetFooter>
          <Button
            type="submit"
            onClick={() => {
              dispatch(onSave(categories));
              setOpen(false);
            }}
          >
            Save changes
          </Button>
          <SheetClose asChild>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ModifyWidgetModal;
