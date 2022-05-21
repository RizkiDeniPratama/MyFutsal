const { User, VenueFutsal } = require("../models");

class VenueController {
  static async getAll(req, res, next) {
    try {
      let option = {
        include: [
          {
            model: User,
            attributes: ["id", "username", "email", "role"],
          },
        ],
        order: [["id", "DESC"]],
      };
      let venue = await VenueFutsal.findAll(option);
      res.status(200).json(venue);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = VenueController;
