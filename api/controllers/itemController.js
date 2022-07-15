import { Item } from '../models/index.js';

const returnError = (msg, res) => {
  return res.status(500).json({
    msg,
  });
};

const getAll = async (req, res) => {
  try {
    const items = await Item.find();
    return res.json({
      msg: 'Items obtenidos',
      items,
    });
  } catch (error) {
    return returnError('Error al obtener items', res);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const items = Item.findById(id);
    return res.json({
      msg: 'Item encontrado',
      items,
    });
  } catch (error) {
    return returnError('Erro al obtener por id', res);
  }
};

const create = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    return res.json({
      msg: 'Item creado',
      item: newItem,
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'test') {
      console.error(error);
    }
    return returnError('Error al crer items', res);
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const items = Item.findByIdAndUpdate(id, req.body);
    return res.json({
      msg: 'Item actualizado',
      items,
    });
  } catch (error) {
    return returnError('Error al actualizar items');
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const items = Item.findByIdAndDelete(id);
    return res.json({
      msg: 'Item eliminado',
      items,
    });
  } catch (error) {
    return returnError('Error al borrar items', res);
  }
};

export { getAll, getById, create, updateById, deleteById };
