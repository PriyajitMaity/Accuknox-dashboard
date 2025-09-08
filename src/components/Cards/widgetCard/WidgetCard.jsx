import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card.tsx";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteWidget } from "../../../redux/slices/widgetsSlice.js";

const WidgetCard = ({ widget, category }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteWidget({ categoryId: category.id, widgetId: widget.id }));
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <span>{widget.name}</span>
            <span
              className="cursor-pointer"
              onClick={() => handleDelete(category.id, widget.id)}
            >
              <MdCancel />
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{widget.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WidgetCard;
