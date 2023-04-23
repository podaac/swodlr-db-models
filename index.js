import l2RasterProductInit, {L2RasterProduct} from './models/l2-raster-product.js';
import productHistoryInit, {ProductHistory} from './models/product-history.js';
import rasterDefinitionInit, {RasterDefinition} from './models/raster-definition.js';
import statusInit, {Status} from './models/status.js';
import userInit, {User} from './models/user.js';

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
