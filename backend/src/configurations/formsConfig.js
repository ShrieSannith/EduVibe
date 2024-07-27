const mongoose = require('mongoose');

const forms = mongoose.createConnection('mongodb+srv://user123:user123@cluster0.i0zyrqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

forms.on('connected', () => {
  console.log('Connected to forms');
});

forms.on('error', (err) => {
  console.log(`forms connection error: ${err}`);
});

module.exports = mongoose;
