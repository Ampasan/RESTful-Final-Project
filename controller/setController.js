import Set from "../model/setModel.js";

export const createSet = async (req, res) => {
    try {
        const setData = new Set(req.body);
        const { name } = setData;
        const setExist = await Set.findOne({ name });
        if (setExist) {
            return res.status(400).json({ message: "Set already exists." });
        }
        const savedSet = await setData.save();
        res.status(200).json(savedSet);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetchSets = async (req, res) => {
    try {
        const sets = await Set.find();
        if (sets.length === 0) {
            return res.status(404).json({ message: "Sets not found." });
        }
        res.status(200).json(sets);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const updateSet = async (req, res) => {
    try {
        const id = req.params.id;
        const setExist = await Set.findOne({ _id: id });
        if (!setExist) {
            return res.status(404).json({ message: "Set not found." });
        }
        const updatedSet = await Set.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updatedSet);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const deleteSet = async (req, res) => {
    try {
        const id = req.params.id;
        const setExist = await Set.findOne({ _id: id });
        if (!setExist) {
            return res.status(404).json({ message: "Set not found." });
        }
        await Set.findByIdAndDelete(id);
        res.status(201).json({ message: "Set deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const getSetById = async (req, res) => {
    try {
        const id = req.params.id;
        const set = await Set.findById(id);
        if (!set) {
            return res.status(404).json({ message: "Set not found." });
        }
        res.status(200).json(set);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const searchSetByName = async (req, res) => {
    try {
        const name = req.query.name;
        const sets = await Set.find({ name: new RegExp(name, "i") });
        if (sets.length === 0) {
            return res.status(404).json({ message: "No matching sets found." });
        }
        res.status(200).json(sets);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetchSetsCount = async (req, res) => {
    try {
        const count = await Set.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};
