"use strict";

class Collection {
  constructor(model) {
    this.model = model;
  }

  async getRecords(id) {
    try {
      if (id) {
        return await this.model.findOne({ where: { id } });
      } else {
        return await this.model.findAll();
      }
    } catch (error) {
      console.error(`Can't get the data from: ${this.model.name}`);
    }
  }

  async createRecord(obj) {
    try {
      return await this.model.create(obj);
    } catch (error) {
      console.error(`Can't create Record in model ${this.model.name}`);
    }
  }

  async updateRecord(obj, id) {
    try {
      return await this.model.update(obj, { where: { id }, returning: true });
    } catch (error) {
      console.error(`Unable to update the record from: ${this.model.name}`);
    }
  }

  async deleteRecord(id) {
    try {
      return await this.model.destroy({ where: { id } });
    } catch (error) {
      console.error(
        `Unable to delete the selected record from: ${this.model.name}`
      );
    }
  }
}

module.exports = Collection;
