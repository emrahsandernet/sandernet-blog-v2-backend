const ContactModel = require("../models/ContactModel");

// Contact formunu işleyen fonksiyon
exports.submitContactForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    // Veritabanına kaydetme işlemini gerçekleştir
    const contact = new ContactModel({
      name,
      email,
      message,
    });
    await contact.save();

    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    next(error);
  }
};
