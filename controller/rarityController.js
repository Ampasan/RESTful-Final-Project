import Rarity from "../model/rarityModel.js";

export const createRarity = async (req, res) => {
    try {
        const rarityData = new Rarity(req.body);
        const { name } = rarityData;
        const rarityExist = await Rarity.findOne({ name });
        if (rarityExist) {
            return res.status(400).json({ message: "Rarity already exists." });
        }
        const savedRarity = await rarityData.save();
        res.status(200).json(savedRarity);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetchRarities = async (req, res) => {
    try {
        const rarities = await Rarity.find();
        if (rarities.length === 0) {
            return res.status(404).json({ message: "Rarities not found." });
        }
        res.status(200).json(rarities);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const updateRarity = async (req, res) => {
    try {
        const id = req.params.id;
        const rarityExist = await Rarity.findOne({ _id: id });
        if (!rarityExist) {
            return res.status(404).json({ message: "Rarity not found." });
        }
        const updatedRarity = await Rarity.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updatedRarity);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const deleteRarity = async (req, res) => {
    try {
        const id = req.params.id;
        const rarityExist = await Rarity.findOne({ _id: id });
        if (!rarityExist) {
            return res.status(404).json({ message: "Rarity not found." });
        }
        await Rarity.findByIdAndDelete(id);
        res.status(201).json({ message: "Rarity deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const getRarityById = async (req, res) => {
    try {
        const id = req.params.id;
        const rarity = await Rarity.findById(id);
        if (!rarity) {
            return res.status(404).json({ message: "Rarity not found." });
        }
        res.status(200).json(rarity);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const searchRarityByName = async (req, res) => {
    try {
        const name = req.query.name;
        const rarities = await Rarity.find({ name: new RegExp(name, "i") });
        if (rarities.length === 0) {
            return res.status(404).json({ message: "No matching rarities found." });
        }
        res.status(200).json(rarities);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetchRaritiesCount = async (req, res) => {
    try {
        const count = await Rarity.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};
