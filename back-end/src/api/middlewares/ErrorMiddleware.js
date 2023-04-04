module.exports = async (error, _req, res, _next) => {
  const { name, message } = error;
  switch (name) {
    case 'UNAUTHORIZED':
      return res.status(401).json({ message });
    default: 
      console.log(error);
      return res.status(500);
  }
};