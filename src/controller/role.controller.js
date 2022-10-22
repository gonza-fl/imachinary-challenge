const roleService = require('../services/role.service');

const createRole = async (req, res) => {
  try {
    const roleCreated = await roleService.createRole(req.body);
    return res.status(201).json(roleCreated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getRoles = async (_req, res) => {
  try {
    const people = await roleService.findAllRoles();
    if (!people.length) return res.status(404).json({ messge: 'Roles not found' });
    return res.json(people);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getRoleById = async (req, res) => {
  const { roleFound } = req;
  try {
    return res.json(roleFound);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateRole = async (req, res) => {
  const {
    roleFound,
    body: payload,
  } = req;
  try {
    await roleService.updateRole(roleFound, payload);
    return res
      .status(200)
      .json({ message: 'Role updated successfully', roleId: roleFound.id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteRole = async (req, res) => {
  const { roleFound: { id } } = req;
  try {
    await roleService.deleteRole(id);
    return res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRole,
  getRoles,
  // getRoleById,
  // updateRole,
  // deleteRole,
};
