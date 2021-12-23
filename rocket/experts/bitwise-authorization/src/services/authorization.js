const validatePermissions = (userPermission, requiredPermissions) => userPermission & requiredPermissions

module.exports = { validatePermissions }
