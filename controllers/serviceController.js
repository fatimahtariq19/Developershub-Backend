const Service = require("../models/Service");

const getServices = async (req, res) => {
  res.json(await Service.find());
};

const getServiceById = async (req, res) => {
  res.json(await Service.findById(req.params.id));
};

const createService = async (req, res) => {
  res.json(await Service.create(req.body));
};

const updateService = async (req, res) => {
  res.json(
    await Service.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

const deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};

module.exports = {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
