module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'meetapp',
  port: '5435',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
