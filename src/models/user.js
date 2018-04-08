//https://www.youtube.com/watch?v=BpEw1PNdvkg&list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL&index=3
//
//https://github.com/sequelize/express-example/tree/master/models

//http://0.0.0.0:8080/graphiql?query=%7B%0A%20%20hi%0A%7D

//http://0.0.0.0:3080/

export default (sequelize, DataTypes) => {
	const User = sequelize.define(
		'user', {
			username: {
				type: DataTypes.STRING,
				unique: true,
			},
			email: {
				type: DataTypes.STRING,
				unique: true,
			},
			password: DataTypes.STRING,
		}, {
			underscored: true
		},
	);

	User.associate = (models) => {
		User.belongsToMany(models.Team, {
			through: 'member',
			foreignKey: {
				name: 'userId',
				field: 'user_id',
			},
		});

		// many to many relationship
		User.belongsToMany(models.Team, {
			through: 'channel_member',
			foreignKey: {
				name: 'userId',
				field: 'user_id',
			},
		});
	};

	return User;
};
