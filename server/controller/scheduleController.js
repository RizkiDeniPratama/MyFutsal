const { User, VenueFutsal, Schedule, FieldList } = require("../models");

class ScheduleController {
  static async getSchedule(req, res, next) {
    try {
      let schedule = await Schedule.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(schedule);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async getOne(req, res, next) {
    try {
      const id = +req.params.scheduleId;

      let oneSchedule = await Schedule.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).json(oneSchedule);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async addSchedule(req, res, next) {
    try {
      const { price, DateTime, hour } = req.body;

      await Schedule.create({ price, DateTime, hour });

      res.status(201).json({ msg: "Success add new schedule" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async editSchedule(req, res, next) {
    try {
      const { price, DateTime, hour } = req.body;
      const id = +req.params.scheduleId;
      let option = {
        where: { id },
        returning: true,
      };

      let editSchedule = await Schedule.update(
        { price, DateTime, hour },
        option
      );

      res.status(200).json({ msg: "Success Edit Schedule id " + id });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async deleteSchedule(req, res, next) {
    try {
      let dropSchedule = await Schedule.destroy({
        where: { id: +req.params.scheduleId },
      });

      if (!dropSchedule) throw { name: "NOT_PRODUCT" };
      res.status(200).json({ message: "Delete Schedule SuccessFuly" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = ScheduleController;
