import {DataTypes, Model} from 'sequelize';
import {v4 as uuidv4} from 'uuid';

/** Status model */
export class Status extends Model {}

/**
 * Initialize the Status model
 * @param {Sequelize} sequelize - a sequelize instance
 */
export default function init(sequelize) {
  Status.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    productID: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'L2RasterProduct',
        key: 'id',
      },
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
  });
}
