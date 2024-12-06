import Effect from "../model/effectModel.js";

export const createEffect = async (req, res) => {
    try {
        const effectData = new Effect(req.body);
        const { name } = effectData;
        const effectExist = await Effect.findOne({ name });
        if (effectExist) {
            return res.status(400).json({ message: "Effect already exists." });
        }
        const savedEffect = await effectData.save();
        res.status(200).json(savedEffect);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetchEffects = async (req, res) => {
    try {
        const effects = await Effect.find();
        if (effects.length === 0) {
            return res.status(404).json({ message: "Effects not found." });
        }
        res.status(200).json(effects);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const updateEffect = async (req, res) => {
    try {
        const id = req.params.id;
        const effectExist = await Effect.findOne({ _id: id });
        if (!effectExist) {
            return res.status(404).json({ message: "Effect not found." });
        }
        const updatedEffect = await Effect.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updatedEffect);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const deleteEffect = async (req, res) => {
    try {
        const id = req.params.id;
        const effectExist = await Effect.findOne({ _id: id });
        if (!effectExist) {
            return res.status(404).json({ message: "Effect not found." });
        }
        await Effect.findByIdAndDelete(id);
        res.status(201).json({ message: "Effect deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const getEffectById = async (req, res) => {
    try {
        const id = req.params.id;
        const effect = await Effect.findById(id);
        if (!effect) {
            return res.status(404).json({ message: "Effect not found." });
        }
        res.status(200).json(effect);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const searchEffectByName = async (req, res) => {
    try {
        const name = req.query.name;
        const effects = await Effect.find({ name: new RegExp(name, "i") });
        if (effects.length === 0) {
            return res.status(404).json({ message: "No matching effects found." });
        }
        res.status(200).json(effects);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetchEffectsCount = async (req, res) => {
    try {
        const count = await Effect.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};
