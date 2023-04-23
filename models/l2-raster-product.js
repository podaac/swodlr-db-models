import {DataTypes, Model} from 'sequelize';
import {v4 as uuidv4} from 'uuid';

/** L2RasterProduct model */
export class L2RasterProduct extends Model {}

/**
 * Initialize the L2RasterProduct model
 * @param {Sequelize} sequelize - a sequelize instance
 */
export default function init(sequelize) {
  RasterDefinition.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    definitionID: {
      type: DataTypes.UUID,
      references: {
        model: 'RasterDefinition',
        key: 'id',
      },
    },
    cycle: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pass: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    scene: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
  });
}
