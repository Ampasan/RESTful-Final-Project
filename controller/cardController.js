import Card from "../model/cardModel.js";

export const createCard = async (req, res) => {
    try {
        const cardData = new Card(req.body);
        const { name } = cardData;
        const cardExist = await Card.findOne({ name });
        if (cardExist) {
            return res.status(400).json({ message: "Card already exists." });
        }
        const savedCard = await cardData.save();
        res.status(200).json(savedCard);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetchCards = async (req, res) => {
    try {
        const cards = await Card.find();
        if (cards.length === 0) {
            return res.status(404).json({ message: "Cards not found." });
        }
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const updateCard = async (req, res) => {
    try {
        const id = req.params.id;
        const cardExist = await Card.findOne({ _id: id });
        if (!cardExist) {
            return res.status(404).json({ message: "Card not found." });
        }
        const updatedCard = await Card.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updatedCard);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const deleteCard = async (req, res) => {
    try {
        const id = req.params.id;
        const cardExist = await Card.findOne({ _id: id });
        if (!cardExist) {
            return res.status(404).json({ message: "Card not found." });
        }
        await Card.findByIdAndDelete(id);
        res.status(201).json({ message: "Card deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const getCardById = async (req, res) => {
    try {
        const id = req.params.id;
        const card = await Card.findById(id);
        if (!card) {
            return res.status(404).json({ message: "Card not found." });
        }
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const searchCardByName = async (req, res) => {
    try {
        const name = req.query.name;
        const cards = await Card.find({ name: new RegExp(name, "i") });
        if (cards.length === 0) {
            return res.status(404).json({ message: "No matching cards found." });
        }
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetchCardsCount = async (req, res) => {
    try {
        const count = await Card.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};
