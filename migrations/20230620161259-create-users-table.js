"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await queryInterface.createTable("Users", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: Sequelize.STRING,
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			password: { type: Sequelize.STRING, allowNull: false },
			bio: { type: Sequelize.STRING },
			image: { type: Sequelize.STRING },
			phoneNumber: { type: Sequelize.STRING },
			provider: { type: Sequelize.STRING, allowNull: false },
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		await queryInterface.dropTable("Users");
	},
};
