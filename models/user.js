import {DataTypes, Model} from 'sequelize';
import {v4 as uuidv4} from 'uuid';

/** User model */
export class User extends Model {}

/**
 * Initialize the User model
 * @param {Sequelize} sequelize - a sequelize instance
 */
export default function init(sequelize) {
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    timestamps: false,
  });
}
