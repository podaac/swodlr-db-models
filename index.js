import l2RasterProductInit, {L2RasterProduct} from './l2-raster-product';
import productHistoryInit, {ProductHistory} from './product-history';
import rasterDefinitionInit, {RasterDefinition} from './raster-definition';
import statusInit, {Status} from './status';
import userInit, {User} from './user';

/**
 * Initialize all models
 * @param {Sequelize} sequelize - instance of Sequelize
 */
export default function init(sequelize) {
  l2RasterProductInit(sequelize);
  productHistoryInit(sequelize);
  rasterDefinitionInit(sequelize);
  statusInit(sequelize);
  userInit(sequelize);
}

export {
  L2RasterProduct,
  ProductHistory,
  RasterDefinition,
  Status,
  User,
};
