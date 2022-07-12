/**
 * register
 * y
 * login
 */
import { User } from '../models/index.js';
import bcrypt from 'bcrypt';

const register = async (req, res) => {
  try {
    /**
     * email
     * password
     */

    const encryptedPass = await bcrypt.hash(req.body.password, 3);
    req.body.password = encryptedPass;
    const newUser = await User.create(req.body);
    newUser.password = undefined;
    return res.json({
      msg: 'Usuario registrado satisfactoriamente',
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al registrar usuario',
    });
  }
};

const login = () => {};

export { register, login };
