import Archetype from "../model/archetypeModel.js";

export const createArchetype = async (req, res) => {
    try {
        const archetypeData = new Archetype(req.body);
        const { name } = archetypeData;
        const archetypeExist = await Archetype.findOne({ name });
        if (archetypeExist) {
            return res.status(400).json({ message: "Archetype already exists." });
        }
        const savedArchetype = await archetypeData.save();
        res.status(200).json(savedArchetype);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetchArchetypes = async (req, res) => {
    try {
        const archetypes = await Archetype.find();
        if (archetypes.length === 0) {
            return res.status(404).json({ message: "Archetypes not found." });
        }
        res.status(200).json(archetypes);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const updateArchetype = async (req, res) => {
    try {
        const id = req.params.id;
        const archetypeExist = await Archetype.findOne({ _id: id });
        if (!archetypeExist) {
            return res.status(404).json({ message: "Archetype not found." });
        }
        const updatedArchetype = await Archetype.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updatedArchetype);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const deleteArchetype = async (req, res) => {
    try {
        const id = req.params.id;
        const archetypeExist = await Archetype.findOne({ _id: id });
        if (!archetypeExist) {
            return res.status(404).json({ message: "Archetype not found." });
        }
        await Archetype.findByIdAndDelete(id);
        res.status(201).json({ message: "Archetype deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const getArchetypeById = async (req, res) => {
    try {
        const id = req.params.id;
        const archetype = await Archetype.findById(id);
        if (!archetype) {
            return res.status(404).json({ message: "Archetype not found." });
        }
        res.status(200).json(archetype);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const searchArchetypeByName = async (req, res) => {
    try {
        const name = req.query.name;
        const archetypes = await Archetype.find({ name: new RegExp(name, "i") });
        if (archetypes.length === 0) {
            return res.status(404).json({ message: "No matching archetypes found." });
        }
        res.status(200).json(archetypes);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetchArchetypesCount = async (req, res) => {
    try {
        const count = await Archetype.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};
