import Task from "../models/taskModel.js";

// CREATE NEW TASK
export async function createTask(req, res) {
  try {
    const { title, description, priority, dueDate, completed } = req.body;

    const task = new Task({
      title,
      description,
      priority,
      dueDate,
      completed: completed === "Yes" || completed === true,
      owner: req.user.id,
    });

    const saved = await task.save();
    res.status(201).json({ success: true, task: saved });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// GET LOGGED IN USER TASKS
export async function getTasks(req, res) {
  try {
    const tasks = await Task.find({ owner: req.user.id }).sort({
      createdAt: -1,
    });
    res.json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// GET SINGLE TASK BY ID
export async function getTaskById(req, res) {
  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user.id });
    if (!task) {
      res.status(404).json({ success: false, message: "Task not found" });
    }
    res.json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// UPDATE TASK
export async function updateTask(req, res) {
  try {
    const data = { ...req.body };

    if (data.completed !== undefined) {
      data.completed = data.completed === "Yes" || data.completed === true;
    }

    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      data,
      { new: true, runValidators: true }
    );

    if (!updated)
      return res
        .status(400)
        .json({ success: false, message: "Task not found or not yours" });
    res.json({ success: true, task: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// DELETE TASK
export async function deleteTask(req, res) {
  try {
    const deleted = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!deleted)
      return res
        .status(404)
        .json({ success: false, message: "Task not found or not yours" });

    res.json({ success: true, message: "Task Deleted" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
