import React, { useState } from "react";
import { Task } from "../types";
import { Button } from "@/components/ui/button";
import { PencilIcon, XIcon } from "lucide-react";
import DottedSeparator from "@/components/dotted-separator";
import { useUpdateTask } from "../api/use-update-task";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  task: Task;
};

const TaskDescription = ({ task }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.description);
  const { mutate, isPending } = useUpdateTask();

  const handleSave = () => {
    mutate({
      json: {
        description: value,
      },
      param: {
        taskId: task.$id,
      },
    });
  };
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Overview</p>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          {isEditing ? (
            <XIcon className="size-4 mr-2" />
          ) : (
            <PencilIcon className="size-4 mr-2" />
          )}

          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </div>
      <DottedSeparator className="my-4" />
      {isEditing ? (
        <div className="flex flex-col gap-y-4 ">
          <Textarea
            placeholder="Add a description"
            value={value}
            rows={4}
            onChange={(e) => setValue(e.target.value)}
            disabled={isPending}
          />
          <Button
            className="w-fit ml-auto"
            size="sm"
            onClick={handleSave}
            disabled={isPending}
          >
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      ) : (
        <div>
          {task.description || (
            <span className="text-muted-foreground">No description set</span>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskDescription;
