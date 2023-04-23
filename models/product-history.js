import {DataTypes, Model} from 'sequelize';

/** ProductHistory model */
export class ProductHistory extends Model {}

/**
 * Initialize the ProductHistory model
 * @param {Sequelize} sequelize - a sequelize instance
 */
export default function init(sequelize) {
  ProductHistory.init({
    requestedByID: {
      type: DataTypes.UUID,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    rasterProductID: {
      type: DataTypes.UUID,
      references: {
        model: 'L2RasterProduct',
        key: 'id',
      },
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
  });
}
