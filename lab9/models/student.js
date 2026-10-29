'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.hasMany(models.Attendance, {'studentId': 'student' });
      Student.belongsToMany(models.Course, { through: models.Attendance, foreignKey: 'studentId', otherKey: 'courseId' });
      // define association here
    }
  }
  Student.init({
    rollNumber: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    department: DataTypes.STRING,
    semester: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};