import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Manager from '../models/managerModel.js';

export const add_manager = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    const newManager = new Manager({
      username_manager: username,
      passwordHash_manager: hash,
      facilities_available: [],
      checkMovieTickets: false,
      checkBeautySalon: false,
      checkGym: false,
      checkPartyHall: false,
      shipId: null,
    });

    // Save the new manager to the database
    await newManager.save();

    res.status(201).json({ message: "Manager added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const manager = await Manager.findOne({ username_manager: username });
        if (!manager) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }   
        const isEqual = await bcrypt.compare(password, manager.passwordHash_manager);   

        if (!isEqual) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }

        const token = jwt.sign(
            {
                username_manager: manager.username_manager,
                managerId: manager._id.toString(),
            },
        );
        res.status(200).json({ token: token, managerId: manager._id.toString() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const viewAvailibility = async (req, res) => {
    try {
        const manager = await Manager.findById(req.userId);
        const {checkMovieTickets, checkBeautySalon, checkGym, checkPartyHall} = manager;
        if (!manager) {
            return res.status(404).json({ error: "Manager not found" });
        }
        res.status(200).json({checkMovieTickets, checkBeautySalon, checkGym, checkPartyHall});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};