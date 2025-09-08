import React, { useState } from "react";
import Header from "../header/Header";
import AllWidgets from "../Cards/allWidgets/AllWidgets";
import AddWidgetModal from "../Cards/sidebar_modal/AddWidgetModal";
import ModifyWidgetModal from "../Cards/sidebar_modal/ModifyWidgetModal";
import { useDispatch } from "react-redux";
import { addWidget } from "../../redux/slices/widgetsSlice";
import { v4 as uuidv4 } from "uuid";

const Dashboard = ({ searchText }) => {
  const [addSheet, setAddSheet] = useState(false);
  const [modifySheet, setModifySheet] = useState(false);
  const [widgetName, setWidgetName] = useState("");
  const [widgetContent, setWidgetContent] = useState("");
  const [selectCategoryId, setSelectCategoryId] = useState("");

  const dispatch = useDispatch();

  const handleAddWidget = () => {
    if (!selectCategoryId) {
      alert("Please select a category before adding a widget.");
      return;
    }
    if (!widgetName.trim() || !widgetContent.trim()) {
      alert("Please add name and content");
      return;
    }
    const newWidget = {
      id: uuidv4(),
      name: widgetName,
      content: widgetContent,
      isVisible: true,
    };
    dispatch(addWidget({ categoryId: selectCategoryId, widget: newWidget }));
    setWidgetName("");
    setWidgetContent("");
  };

  return (
    <div className="bg-blue-50 min-h-screen px-4">
      <Header open={modifySheet} setOpen={setModifySheet} />
      <section className="px-8 space-y-8 min-h-screen">
        <AllWidgets
          open={addSheet}
          setOpen={setAddSheet}
          setSelectCategoryId={setSelectCategoryId}
          searchText={searchText}
        />
      </section>

      <AddWidgetModal
        open={addSheet}
        setOpen={setAddSheet}
        widgetName={widgetName}
        widgetContent={widgetContent}
        setWidgetName={setWidgetName}
        setWidgetContent={setWidgetContent}
        handleAddWidget={handleAddWidget}
      />
      <ModifyWidgetModal open={modifySheet} setOpen={setModifySheet} />
    </div>
  );
};

export default Dashboard;
