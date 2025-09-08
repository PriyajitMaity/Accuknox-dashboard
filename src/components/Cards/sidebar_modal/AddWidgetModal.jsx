import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "../../ui/button";

const AddWidgetModal = ({
  open,
  setOpen,
  widgetName,
  setWidgetName,
  widgetContent,
  setWidgetContent,
  handleAddWidget,
}) => {
  return (
    <Sheet open={open} onOpenChange={setOpen} asChild>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Widget</SheetTitle>
          <SheetDescription>
            <div className="p-6">
              <input
                type="text"
                placeholder="enter widget name.."
                className="border p-2 rounded mb-4 w-full"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                required
              />
              <textarea
                name=""
                placeholder="enter widget content.."
                className="border p-2 rounded mb-4 w-full"
                value={widgetContent}
                onChange={(e) => setWidgetContent(e.target.value)}
                required
              ></textarea>
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button
            type="submit"
            onClick={() => {
              handleAddWidget();
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

export default AddWidgetModal;
