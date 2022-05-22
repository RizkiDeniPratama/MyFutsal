const { User, VenueFutsal } = require("../models");

class VenueController {
  static async getAll(req, res, next) {
    const { name } = req.query;
    try {
      let option = {
        include: [
          {
            model: User,
            attributes: ["id", "username", "email", "role"],
          },
        ],
        order: [["id", "DESC"]],
        where: {},
      };
      if (name) {
        option.where.name = {
          [Op.iLike]: `%${name}%`,
        };
      }
      let venue = await VenueFutsal.findAll(option);
      if (!venue) throw { name: "NOT_PRODUCT" };
      res.status(200).json(venue);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = VenueController;
