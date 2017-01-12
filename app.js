const app = require('./config/express.js')();
require('./config/database')('mongodb://davi:davi@ds161028.mlab.com:61028/nodejsteste');

const porta = process.env.PORT || 3000;

app.listen(porta, () => console.log('Server running on port ' + porta));
