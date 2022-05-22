const { VenueFutsal, Schedule, FieldList } = require("../models");

class FieldController {
  static async getField(req, res, next) {
    try {
      let option = {
        include: [
          {
            model: VenueFutsal,
            attributes: {
              exclude: ["createdAt", "updatedAt", "UserId"],
            },
          },
          {
            model: Schedule,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      };

      let field = await FieldList.findAll(option);

      res.status(200).json(field);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async addField(req, res, next) {
    try {
      let { nameField, VenueId, ScheduleId } = req.body;
      let newField = await FieldList.create({ nameField, VenueId, ScheduleId });
      res
        .status(201)
        .json({ msg: `Success Add New Field ${newField.nameField}` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async deleteField(req, res, next) {
    try {
      let dropField = await FieldList.destroy({
        where: { id: +req.params.fieldId },
      });

      if (!dropField) throw { name: "NOT_FIELD" };
      res.status(200).json({ message: "Delete Field SuccessFuly" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = FieldController;
