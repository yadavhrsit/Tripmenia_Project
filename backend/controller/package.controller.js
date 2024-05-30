const packageModel = require("../models/packageModel");

const AddPackage = async (req, res) => {
  try {
    // if (err instanceof multer.MulterError) {
    //     return res.status(400).json({ message: 'Error uploading files' });
    // } else if (err) {
    //     return res.status(500).json({ message: 'Internal server error' });
    // }

    const {
      categoryId,
      packageName,
      price,
      specialPrice,
      packageUSP,
      description,
      enabled,
      timeSlots,
    } = req.body;
    console.log(req.files);
    console.log(req.files.length);
    const images = req.files.map((file) => file.filename); // Get the paths of the uploaded images

    const package = new packageModel({
      categoryId,
      packageName,
      images,
      price,
      specialPrice,
      packageUSP,
      description,
      enabled,
      timeSlots,
    });

    await package.save();
    res.status(201).json({ message: "Package created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const GetAllPackages = async (req, res) => {
  try {
    let { page, size, sort, search, filter } = req.query;
    page = parseInt(page) || 1;
    size = parseInt(size) || 10;
    const skip = (page - 1) * size;

    const query = { enabled: true };
    if (search) query.packageName = { $regex: search, $options: "i" };
    if (filter) query.categoryId = filter;

    const packages = await packageModel
      .find(query)
      .sort(sort)
      .skip(skip)
      .limit(size)
      .populate("categoryId");

    res.json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const GetAllPackagesforAdmin = async (req, res) => {
  try {
    const packages = await packageModel.find().populate("categoryId");
    res.json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPackagesByCategoryId = async (req, res) => {
  try {
    let { page, size, sort, search } = req.query;
    page = parseInt(page) || 1;
    size = parseInt(size) || 50;
    const skip = (page - 1) * size;

    const query = { categoryId: req.params.id,enabled:true };
    if (search) query.name = { $regex: search, $options: "i" };

    const packages = await packageModel
      .find(query)
      .sort(sort)
      .skip(skip)
      .limit(size)
      .populate("categoryId");

    res.json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getFilteredPackages = async (req, res) => {
  try {
    const { categories, minPrice, maxPrice, page, size, sort, search } =
      req.query;
    const pageInt = parseInt(page) || 1;
    const sizeInt = parseInt(size) || 10;
    const skip = (pageInt - 1) * sizeInt;

    // Construct query object
    const query = {enabled:true};
    if (categories) {
      query.categoryId = { $in: categories.split(",") };
    }
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }
    if (minPrice && maxPrice) {
      query.specialPrice = {
        $gte: parseInt(minPrice),
        $lte: parseInt(maxPrice),
      };
    } else if (minPrice) {
      query.specialPrice = { $gte: parseInt(minPrice) };
    } else if (maxPrice) {
      query.specialPrice = { $lte: parseInt(maxPrice) };
    }

    // Execute query
    const packages = await packageModel
      .find(query)
      .sort(sort)
      .skip(skip)
      .limit(sizeInt)
      .populate("categoryId");

    const total = await packageModel.countDocuments({enabled:true});
    const queryTotal = await packageModel.countDocuments(query);

    res.json({ packages, total, queryTotal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const UpdatePackage = async (req, res) => {
  try {
    const updatedPackage = await packageModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPackage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const DeletePackage = async (req, res) => {
  try {
    await packageModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Package deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const ViewPackageById = async (req, res) => {
  try {
    const package = await packageModel
      .findById(req.params.id)
      .populate("categoryId");
    console.log(package);
    res.json(package);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  AddPackage,
  GetAllPackages,
  getFilteredPackages,
  GetAllPackagesforAdmin,
  getPackagesByCategoryId,
  UpdatePackage,
  DeletePackage,
  ViewPackageById,
};
